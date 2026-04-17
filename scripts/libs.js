// 1. 统一使用ESModule语法(Vite单包项目默认ESM)
import { execSync } from 'child_process';
import chalk from 'chalk';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

// 2. 依赖库导入
import semver from 'semver';
import enquirer from 'enquirer';
import args from 'minimist';

// 3. 读取单包核心配置
const appDir = '/zmz-vue3-web'
const libDir = '/vue3-web'
const docsDir = '/docs'
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const packagePath = path.resolve(rootDir, 'package.json');
const readmePath = path.resolve(rootDir, 'README.md');
const LICENSEPath = path.resolve(rootDir, 'LICENSE');

// 🌟 备份文件路径
const backupPackagePath = path.resolve(rootDir, 'package.json.backup');
const backupVersionPath = path.resolve(rootDir, '.version.backup');  // 🌟 新增：单独备份版本号

// 🌟 读取当前文件内容
let originalPkgContent = await fs.readFile(packagePath, 'utf-8');
const pkg = JSON.parse(originalPkgContent);
const currentVersion = pkg.version;

// 🌟 状态变量
let targetVersion = null;
let hasVersionUpdated = false;
let hasBackupCreated = false;
let stashCreated = false;
let originalBranch = '';
let tagCreated = false;

// 4. 配置项
const config = {
  versionIncrements: ['patch', 'minor', 'major'],
  viteBuildCmdApp: 'pnpm build --mode app',
  viteBuildCmdLib: 'pnpm build --mode lib',
  registry: 'https://registry.npmmirror.com/',
  publishExtraArgs: '--access public',
  repo: {
    name: 'gitee',
    remote: 'gitee',
    url: 'https://gitee.com/zmz-design/zmz-vue3-web.git'
  },
  packageJsonConfig: {
    keepFields: [
      'name', 'version', 'private', 'type', 'license', 'author', 'description',
      'main', 'style', 'module', 'unpkg', 'peerDependencies', 'types', 'keywords',
      'files', 'repository', 'bugs', 'homepage', 'exports', 'sideEffects'
    ],
    extraFields: {
      "dependencies": {
        "async-validator": "^4.2.5",
        "@popperjs/core": "^2.11.8",
        "resize-observer-polyfill": "^1.5.1"
      }
    },
    overrideFields: {
      "main": "cjs/zmz-vue3-web.cjs.js",
      "module": "es/zmz-vue3-web.esm.js",
      "unpkg": "dist/zmz-vue3-web.umd.min.js",
      "style": "dist/zmz-vue3-web.min.css",
    },
    targetPath: 'vue3-web/package.json'
  },
  copyFiles: [
    { type: 'file', source: packagePath, target: path.resolve(rootDir + libDir, 'package.json') },
    { type: 'file', source: readmePath, target: path.resolve(rootDir + libDir, 'README.md') },
    { type: 'file', source: LICENSEPath, target: path.resolve(rootDir + libDir, 'LICENSE') }
  ],
  copyExcludePatterns: []
};

// 日志工具
const log = {
  step: (msg) => console.log(chalk.cyan(`\n▶ 步骤：${msg}`)),
  success: (msg) => console.log(chalk.green(`✅ 成功：${msg}`)),
  error: (msg) => console.log(chalk.red(`❌ 失败：${msg}`)),
  info: (msg) => console.log(chalk.gray(`ℹ️ 信息：${msg}`)),
  warn: (msg) => console.log(chalk.yellow(`⚠️ 警告：${msg}`)),
  copy: (source, target) => console.log(chalk.blue(`📋 复制：${path.basename(source)} → ${path.relative(rootDir, target)}`)),
  rollback: (msg) => console.log(chalk.magenta(`↩️ 回退：${msg}`)),
  progress: (msg) => console.log(chalk.blue(`⏳ 进度：${msg}`)),
  git: (msg) => console.log(chalk.hex('#F05032')(`🔀 Git：${msg}`))
};

const getTargetVersion = (type) => semver.inc(currentVersion, type);

// 🌟 创建备份（只备份版本号相关）
async function createBackup() {
  log.rollback('创建版本号备份...');
  try {
    // 备份原始版本号
    await fs.writeFile(backupVersionPath, currentVersion, 'utf-8');
    
    // 备份完整的 package.json
    const currentContent = await fs.readFile(packagePath, 'utf-8');
    await fs.writeFile(backupPackagePath, currentContent, 'utf-8');
    hasBackupCreated = true;

    log.success(`备份已创建：版本 v${currentVersion}`);
    return true;
  } catch (err) {
    log.error(`创建备份失败：${err.message}`);
    throw err;
  }
}

// 🌟 修复版：只恢复版本号，保留其他文件
async function restoreVersionOnly() {
  log.rollback('只恢复版本号，保留构建产物...');
  
  try {
    // 方法1：从备份恢复版本号
    if (hasBackupCreated) {
      const backupContent = await fs.readFile(backupPackagePath, 'utf-8');
      const backupPkg = JSON.parse(backupContent);
      const targetVersionNumber = backupPkg.version;
      
      // 读取当前 package.json
      const currentContent = await fs.readFile(packagePath, 'utf-8');
      const currentPkg = JSON.parse(currentContent);
      
      // 只修改版本号，保留其他所有字段
      currentPkg.version = targetVersionNumber;
      
      // 写回文件
      await fs.writeFile(packagePath, JSON.stringify(currentPkg, null, 2) + '\n', 'utf-8');
      
      log.success(`✅ 版本号已恢复为 v${targetVersionNumber}`);
      Object.assign(pkg, currentPkg);
      return true;
    }
    
    // 方法2：从版本备份文件恢复
    try {
      const savedVersion = await fs.readFile(backupVersionPath, 'utf-8');
      if (savedVersion && savedVersion.trim()) {
        const currentContent = await fs.readFile(packagePath, 'utf-8');
        const currentPkg = JSON.parse(currentContent);
        currentPkg.version = savedVersion.trim();
        await fs.writeFile(packagePath, JSON.stringify(currentPkg, null, 2) + '\n', 'utf-8');
        log.success(`✅ 从版本备份恢复为 v${savedVersion.trim()}`);
        return true;
      }
    } catch (err) {
      log.warn(`版本备份文件读取失败: ${err.message}`);
    }
    
    return false;
  } catch (err) {
    log.error(`版本恢复失败：${err.message}`);
    return false;
  }
}

// 🌟 修复版回退函数 - 只恢复版本号，不删除构建产物
async function rollbackVersion() {
  log.rollback('='.repeat(40));
  log.rollback('开始执行失败回退流程（保留构建产物）');
  log.rollback('='.repeat(40));

  // 🌟 步骤1：先清理 Git 标签（如果已创建）
  if (tagCreated && targetVersion) {
    log.rollback('清理已创建的 Git 标签...');
    const tagName = `v${targetVersion}`;

    // 删除本地标签
    const deleteLocal = runCommand(`git tag -d ${tagName}`, { ignoreError: true });
    if (deleteLocal.success) {
      log.info(`  已删除本地标签 ${tagName}`);
    }

    // 尝试删除远程标签
    const deleteRemote = runCommand(`git push ${config.repo.remote} :refs/tags/${tagName}`, { ignoreError: true });
    if (deleteRemote.success) {
      log.info(`  已删除远程标签 ${tagName}`);
    }

    tagCreated = false;
  }

  // 🌟 步骤2：只恢复暂存区（不删除文件）
  log.rollback('清理 Git 暂存区...');
  try {
    // 只取消暂存，不恢复文件内容
    runCommand('git reset HEAD .', { ignoreError: true });
    log.info('  已取消暂存（文件内容保持不变）');
  } catch (err) {
    log.warn(`Git 清理失败：${err.message}`);
  }

  // 🌟 步骤3：恢复版本号（核心：只改版本号，不改其他）
  const versionRestored = await restoreVersionOnly();

  // 🌟 步骤4：如果版本恢复失败，尝试从 Git 历史中提取原始版本号
  if (!versionRestored) {
    log.rollback('尝试从 Git 历史获取原始版本号...');
    try {
      const gitShow = runCommand('git show HEAD:package.json', { ignoreError: true });
      if (gitShow.success && gitShow.output) {
        const originalPkgFromGit = JSON.parse(gitShow.output);
        const originalVersion = originalPkgFromGit.version;
        
        const currentContent = await fs.readFile(packagePath, 'utf-8');
        const currentPkg = JSON.parse(currentContent);
        currentPkg.version = originalVersion;
        await fs.writeFile(packagePath, JSON.stringify(currentPkg, null, 2) + '\n', 'utf-8');
        
        log.success(`✅ 从 Git 历史恢复版本号为 v${originalVersion}`);
        versionRestored = true;
      }
    } catch (err) {
      log.warn(`从 Git 历史恢复失败：${err.message}`);
    }
  }

  // 🌟 步骤5：切回原分支（保留所有文件）
  if (originalBranch && originalBranch !== 'master') {
    log.rollback('切回原分支...');
    try {
      // 使用 --keep-changes 保留未提交的修改
      const checkout = runCommand(`git checkout ${originalBranch} --keep-changes`, { ignoreError: true });
      if (!checkout.success) {
        // 如果 --keep-changes 失败，使用普通 checkout
        runCommand(`git checkout ${originalBranch}`, { ignoreError: true });
      }
      log.info(`  已切回 ${originalBranch}`);
    } catch (err) {
      log.warn(`切回分支失败：${err.message}`);
    }
  }

  // 🌟 步骤6：恢复 stash（如果有）
  if (stashCreated) {
    log.rollback('恢复 stash...');
    try {
      const pop = runCommand('git stash pop', { ignoreError: true });
      if (pop.success) {
        stashCreated = false;
        log.info('  已恢复 stash');
      }
    } catch (err) {
      log.warn(`恢复 stash 失败：${err.message}`);
    }
  }

  // 🌟 步骤7：最终验证版本号
  log.rollback('最终验证版本号...');
  try {
    const finalContent = await fs.readFile(packagePath, 'utf-8');
    const finalPkg = JSON.parse(finalContent);
    
    log.info(`当前版本号：v${finalPkg.version}`);
    log.info(`原始版本号：v${currentVersion}`);
    
    if (finalPkg.version === currentVersion) {
      log.success(`✅ 版本号验证通过：v${finalPkg.version}`);
    } else {
      log.warn(`⚠️ 版本号不一致：当前 v${finalPkg.version}，期望 v${currentVersion}`);
      log.info('构建产物和其他文件已保留，请手动修改版本号');
    }
  } catch (err) {
    log.error(`验证失败：${err.message}`);
  }

  // 🌟 步骤8：清理备份文件
  if (hasBackupCreated) {
    try {
      await fs.unlink(backupPackagePath).catch(() => {});
      await fs.unlink(backupVersionPath).catch(() => {});
      hasBackupCreated = false;
      log.info('已清理备份文件');
    } catch (err) {
      // 忽略
    }
  }

  log.rollback('='.repeat(40));
  log.rollback('回退流程完成（构建产物已保留）');
  log.rollback('='.repeat(40));
}

// 🌟 执行命令
function runCommand(cmd, options = {}) {
  const { cwd = rootDir, timeout = 60000, ignoreError = false } = options;

  try {
    const result = execSync(cmd, {
      stdio: 'pipe',
      cwd,
      timeout,
      encoding: 'utf-8',
      shell: true
    });
    return { success: true, output: result, error: null };
  } catch (err) {
    if (ignoreError) return { success: false, output: '', error: err.message };
    return {
      success: false,
      output: err.stdout?.toString() || '',
      error: err.stderr?.toString() || err.message
    };
  }
}

// 🌟 执行命令带重试
async function runCommandWithRetry(cmd, options = {}) {
  const { maxRetries = 3, retryDelay = 3000, description = '' } = options;
  let lastError = null;

  if (description) {
    log.progress(`${description}...`);
  }

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    log.git(`  尝试 ${attempt}/${maxRetries}`);

    const result = runCommand(cmd);

    if (result.success) {
      return result;
    }

    lastError = result.error;
    log.warn(`  失败: ${lastError.slice(0, 100)}`);

    const isNetworkError = ['timeout', 'ECONNREFUSED', 'ETIMEDOUT', 'ENOTFOUND', 'Connection reset', 'unable to access'].some(e => lastError.includes(e));

    if (isNetworkError && attempt < maxRetries) {
      log.progress(`  等待 ${retryDelay / 1000} 秒后重试...`);
      await new Promise(r => setTimeout(r, retryDelay));
    } else {
      break;
    }
  }

  return { success: false, output: '', error: lastError };
}

// 5. 主流程
async function main() {
  if (pkg.private) {
    log.error('当前包是私有包，无法发布到npm！');
    process.exit(1);
  }

  await checkRequiredFiles();
  log.info(`当前发布包：${pkg.name}，当前版本：v${currentVersion}`);

  // 🌟 关键：在修改任何文件之前创建备份
  await createBackup();

  try {
    let inputVersion = args(process.argv.slice(2))._[0];
    targetVersion = await confirmTargetVersion(inputVersion);

    if (!await confirmPublish(targetVersion)) {
      log.info('发布操作已取消');
      if (hasBackupCreated) {
        await fs.unlink(backupPackagePath).catch(() => {});
        await fs.unlink(backupVersionPath).catch(() => {});
      }
      return;
    }

    await prepareGitBranch();
    await updatePackageVersion(targetVersion);
    hasVersionUpdated = true;

    await runViteBuildApp();
    await runViteBuildLib();
    await copyAppToDocs();
    await copyFilesToDist(targetVersion);

    await commitAndPush(targetVersion);
    tagCreated = true;

    await restoreWorkingTree();

    // 🌟 成功后删除备份
    if (hasBackupCreated) {
      await fs.unlink(backupPackagePath).catch(() => {});
      await fs.unlink(backupVersionPath).catch(() => {});
      hasBackupCreated = false;
      log.success('已清理备份文件');
    }

    log.success(`\n🎉 发布成功！${pkg.name}@v${targetVersion}`);

  } catch (err) {
    log.error(`\n💥 发布流程失败：${err.message}`);
    if (err.stack) {
      log.error(`错误堆栈：${err.stack.split('\n').slice(0, 3).join('\n')}`);
    }

    // 🌟 执行回退（保留构建产物）
    await rollbackVersion();

    process.exit(1);
  }
}

// 准备Git分支
async function prepareGitBranch() {
  log.step('准备Git分支');

  log.git('获取当前分支...');
  const result = runCommand('git rev-parse --abbrev-ref HEAD');
  if (!result.success) throw new Error('无法获取当前分支');
  originalBranch = result.output.trim();
  log.info(`当前分支：${originalBranch}`);

  if (originalBranch !== 'master') {
    log.git('检查工作区状态...');
    const status = runCommand('git status --porcelain');
    if (status.success && status.output.trim()) {
      log.warn('检测到未提交的修改，执行 stash...');
      const stash = runCommand('git stash push -u -m "release-script-auto-stash"');
      if (!stash.success) {
        const stashOld = runCommand('git stash save "release-script-auto-stash"');
        if (!stashOld.success) throw new Error('stash 失败');
      }
      stashCreated = true;
      log.success('已暂存当前修改');
    }
  }

  await initRemoteRepo();

  log.git('切换到 master 分支...');
  const checkout = runCommand('git checkout master');
  if (!checkout.success) {
    log.git('master 分支不存在，创建新分支...');
    const create = runCommand('git checkout -b master');
    if (!create.success) throw new Error('创建 master 分支失败');
  }

  log.git('拉取 master 最新代码...');
  const pull = await runCommandWithRetry('git pull gitee master --no-rebase', {
    description: '拉取远程 master',
    maxRetries: 3
  });
  if (!pull.success) {
    log.warn(`拉取失败：${pull.error}`);
  } else {
    log.success('已拉取最新代码');
  }
}

// 恢复工作区
async function restoreWorkingTree() {
  if (!stashCreated) return;

  log.step('恢复工作区');
  if (originalBranch && originalBranch !== 'master') {
    log.git(`切回原分支：${originalBranch}...`);
    runCommand(`git checkout ${originalBranch}`, { ignoreError: true });
  }

  log.git('恢复 stash...');
  const pop = runCommand('git stash pop');
  if (pop.success) {
    stashCreated = false;
    log.success('已恢复 stash');
  }
}

// 校验必需文件
async function checkRequiredFiles() {
  log.step('校验必需文件');
  const requiredFiles = [packagePath, readmePath];
  for (const file of requiredFiles) {
    try {
      await fs.access(file);
      log.info(`文件存在：${path.basename(file)}`);
    } catch (err) {
      if (file === readmePath) {
        log.error(`必需文件缺失：${path.basename(file)}`);
        process.exit(1);
      } else {
        throw new Error(`核心文件缺失：${path.basename(file)}`);
      }
    }
  }
}

// 确认目标版本
async function confirmTargetVersion(initialVersion) {
  if (initialVersion && semver.valid(initialVersion)) {
    log.info(`命令行指定版本：v${initialVersion}`);
    return initialVersion;
  }

  const { releaseType } = await enquirer.prompt({
    type: 'select',
    name: 'releaseType',
    message: `当前版本 v${currentVersion}，请选择发布类型`,
    choices: [
      ...config.versionIncrements.map(type => `${type}(自动升级为 v${getTargetVersion(type)})`),
      'custom(自定义版本号)',
    ],
  });

  if (releaseType === 'custom(自定义版本号)') {
    const { customVersion } = await enquirer.prompt({
      type: 'input',
      name: 'customVersion',
      message: '请输入自定义版本号',
      initial: currentVersion,
      validate: (val) => semver.valid(val) ? true : '版本号不符合SemVer规范！',
    });
    return customVersion;
  }
  return releaseType.match(/v([\d.]+)/)[1];
}

// 二次确认发布
async function confirmPublish(targetVersion) {
  const { isConfirm } = await enquirer.prompt({
    type: 'confirm',
    name: 'isConfirm',
    message: `即将发布 ${pkg.name}@v${targetVersion} 到 ${config.registry}，是否继续？`,
    initial: false,
  });
  return isConfirm;
}

// 更新版本号
async function updatePackageVersion(newVersion) {
  log.step(`更新版本号(v${currentVersion} → v${newVersion})`);
  try {
    const currentContent = await fs.readFile(packagePath, 'utf-8');
    const currentPkg = JSON.parse(currentContent);

    currentPkg.version = newVersion;

    await fs.writeFile(packagePath, JSON.stringify(currentPkg, null, 2) + '\n', 'utf-8');

    Object.assign(pkg, currentPkg);

    log.success(`package.json版本已更新为 v${newVersion}`);
  } catch (err) {
    throw new Error(`版本更新失败：${err.message}`);
  }
}

// Vite构建App
async function runViteBuildApp() {
  log.step('执行Vite构建(App模式)');
  try {
    await fs.rm(rootDir + appDir, { recursive: true, force: true });
    execSync(config.viteBuildCmdApp, { stdio: 'inherit', cwd: rootDir });
    log.success('App模式构建完成');
  } catch (err) {
    throw new Error(`App构建失败：${err.message}`);
  }
}

// Vite构建Lib
async function runViteBuildLib() {
  log.step('执行Vite构建(Lib模式)');
  try {
    await fs.rm(rootDir + libDir, { recursive: true, force: true });
    execSync(config.viteBuildCmdLib, { stdio: 'inherit', cwd: rootDir });
    log.success('Lib模式构建完成');
  } catch (err) {
    throw new Error(`Lib构建失败：${err.message}`);
  }
}

// 复制App到Docs
async function copyAppToDocs() {
  log.step('复制zmz-vue3-web到docs目录');
  try {
    const sourceDir = path.resolve(rootDir + appDir);
    const targetDir = path.resolve(rootDir + docsDir);

    try {
      await fs.access(sourceDir);
    } catch (err) {
      log.warn(`源目录不存在，跳过复制`);
      return;
    }

    await fs.rm(targetDir, { recursive: true, force: true });
    await copyDirRecursively(sourceDir, targetDir, []);
    log.success('已复制到docs目录');
  } catch (err) {
    throw new Error(`复制到docs失败：${err.message}`);
  }
}

// 判断路径是否需要排除
function isPathExcluded(targetPath, excludePatterns = [], baseDir = rootDir) {
  if (!excludePatterns.length) return false;
  const absoluteTargetPath = path.resolve(targetPath);
  const resolvedExcludes = excludePatterns.map(pattern => {
    if (path.isAbsolute(pattern)) return path.resolve(pattern);
    return path.resolve(baseDir, pattern);
  });
  return resolvedExcludes.some(excludePath => {
    if (absoluteTargetPath === excludePath) return true;
    return absoluteTargetPath.startsWith(`${excludePath}${path.sep}`);
  });
}

// 生成目标package.json
async function generateTargetPackageJson(targetPkgPath, targetVersion) {
  log.step('生成目标package.json');
  try {
    const keptFields = {};
    config.packageJsonConfig.keepFields.forEach(field => {
      if (pkg[field] !== undefined) keptFields[field] = pkg[field];
    });
    const withOverride = { ...keptFields, ...config.packageJsonConfig.overrideFields };
    const targetPkg = { ...withOverride, ...config.packageJsonConfig.extraFields };
    targetPkg.version = targetVersion;
    await fs.writeFile(targetPkgPath, JSON.stringify(targetPkg, null, 2) + '\n', 'utf-8');
    log.success(`已生成目标package.json`);
  } catch (err) {
    throw new Error(`生成package.json失败：${err.message}`);
  }
}

// 递归复制目录
async function copyDirRecursively(sourceDir, targetDir, excludePatterns) {
  try {
    await fs.access(sourceDir);
  } catch (err) {
    throw new Error(`源文件夹不存在：${sourceDir}`);
  }

  if (isPathExcluded(sourceDir, excludePatterns)) {
    log.info(`跳过排除的文件夹：${sourceDir}`);
    return;
  }

  await fs.mkdir(targetDir, { recursive: true });
  const files = await fs.readdir(sourceDir, { withFileTypes: true });

  for (const file of files) {
    const sourcePath = path.join(sourceDir, file.name);
    const targetPath = path.join(targetDir, file.name);

    if (file.isDirectory()) {
      await copyDirRecursively(sourcePath, targetPath, excludePatterns);
    } else if (file.isFile()) {
      if (isPathExcluded(sourcePath, excludePatterns)) {
        log.info(`跳过排除的文件：${sourcePath}`);
        continue;
      }
      await fs.copyFile(sourcePath, targetPath, fs.constants.COPYFILE_FICLONE);
      log.copy(sourcePath, targetPath);
    }
  }
}

// 复制文件到dist
async function copyFilesToDist(targetVersion) {
  log.step('复制文件到vue3-web目录');
  try {
    for (const item of config.copyFiles) {
      const { type, source, target } = item;
      const absoluteSource = path.resolve(rootDir, source);
      const absoluteTarget = path.resolve(rootDir, target);

      try {
        await fs.access(absoluteSource);
      } catch (err) {
        throw new Error(`源路径不存在：${absoluteSource}`);
      }

      await fs.mkdir(path.dirname(absoluteTarget), { recursive: true });

      if (type === 'file') {
        if (isPathExcluded(absoluteSource, config.copyExcludePatterns)) continue;
        await fs.copyFile(absoluteSource, absoluteTarget, fs.constants.COPYFILE_FICLONE);
        log.copy(absoluteSource, absoluteTarget);
      } else if (type === 'dir') {
        await copyDirRecursively(absoluteSource, absoluteTarget, config.copyExcludePatterns);
      }
    }

    const targetPkgPath = path.resolve(rootDir, config.packageJsonConfig.targetPath);
    await generateTargetPackageJson(targetPkgPath, targetVersion);
    log.success('文件复制完成');
  } catch (err) {
    throw err;
  }
}

// Git 提交和推送
async function commitAndPush(targetVersion) {
  const tagName = `v${targetVersion}`;
  const commitMsg = `release: ${pkg.name} v${targetVersion}`;
  const repo = config.repo;

  log.step(`🚀 开始Git提交和推送：${tagName}`);
  log.info(`提交信息: ${commitMsg}`);

  // 步骤1：添加文件
  log.git('[1/6] 添加文件到暂存区...');
  const add = runCommand('git add .');
  if (!add.success) throw new Error('git add 失败');
  log.success('文件已添加');

  // 步骤2：提交
  log.git('[2/6] 提交到本地...');
  const commit = runCommand(`git commit -m "${commitMsg}" --allow-empty`);
  if (commit.success) {
    log.success('已提交到本地');
  } else {
    log.info('没有新的变更需要提交');
  }

  // 获取当前提交的哈希
  const headResult = runCommand('git rev-parse HEAD');
  const commitHash = headResult.success ? headResult.output.trim().slice(0, 7) : 'unknown';
  log.info(`当前提交: ${commitHash}`);

  // 步骤3：推送 master
  log.git('[3/6] 推送 master 到 Gitee...');
  const pushMaster = await runCommandWithRetry(`git push ${repo.remote} master`, {
    description: '推送 master 分支',
    maxRetries: 3
  });
  if (!pushMaster.success) {
    throw new Error(`推送 master 失败：${pushMaster.error}`);
  }
  log.success('master 已推送到 Gitee');

  // 步骤4：检查并删除已存在的标签
  log.git('[4/6] 检查已有标签...');

  const localTagCheck = runCommand(`git tag -l ${tagName}`);
  if (localTagCheck.success && localTagCheck.output.trim() === tagName) {
    log.warn(`本地已存在标签 ${tagName}，删除中...`);
    runCommand(`git tag -d ${tagName}`);
    log.success('已删除本地标签');
  }

  const remoteTagCheck = runCommand(`git ls-remote --tags ${repo.remote} refs/tags/${tagName}`);
  if (remoteTagCheck.success && remoteTagCheck.output.trim()) {
    log.warn(`远程已存在标签 ${tagName}，删除中...`);
    const deleteRemote = await runCommandWithRetry(`git push ${repo.remote} :refs/tags/${tagName}`, {
      description: '删除远程标签'
    });
    if (deleteRemote.success) {
      log.success('已删除远程标签');
    }
    await new Promise(r => setTimeout(r, 1000));
  }

  // 步骤5：创建带注释的标签
  log.git('[5/6] 创建带注释的标签...');
  const tagResult = runCommand(`git tag -a ${tagName} -m "${commitMsg}"`);
  if (!tagResult.success) {
    throw new Error(`创建标签失败：${tagResult.error}`);
  }

  log.success(`标签 ${tagName} 创建成功`);

  // 步骤6：推送标签
  log.git('[6/6] 推送标签到 Gitee...');
  const pushTag = await runCommandWithRetry(`git push ${repo.remote} ${tagName} --follow-tags`, {
    description: '推送标签',
    maxRetries: 3
  });

  if (!pushTag.success) {
    const normalPush = await runCommandWithRetry(`git push ${repo.remote} ${tagName}`, {
      description: '普通推送标签'
    });
    if (!normalPush.success) {
      throw new Error(`推送标签失败：${normalPush.error}`);
    }
  }

  log.success('标签已推送到 Gitee');

  log.success(`🎉 Git 提交完成！master 和标签 ${tagName} 都已推送到 ${repo.name}`);
}

// 初始化远程仓库
async function initRemoteRepo() {
  log.step('初始化远程仓库');
  const repo = config.repo;
  log.git(`检查远程仓库 ${repo.remote}...`);
  const check = runCommand(`git remote get-url ${repo.remote}`);
  if (check.success) {
    log.info(`远程仓库 ${repo.remote} 已存在`);
  } else {
    log.git(`添加远程仓库 ${repo.remote}...`);
    const add = runCommand(`git remote add ${repo.remote} ${repo.url}`);
    if (!add.success) throw new Error(`添加远程仓库失败`);
    log.success(`已添加远程仓库`);
  }
}

// 启动
main();
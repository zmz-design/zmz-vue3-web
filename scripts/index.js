// 1. 统一使用ESModule语法(Vite单包项目默认ESM)
import { execSync } from 'child_process';
import chalk from 'chalk';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

// 2. 依赖库导入(单包场景核心依赖，npm install semver enquirer minimist 安装)
import semver from 'semver';
import enquirer from 'enquirer';
import args from 'minimist';

// 3. 读取单包核心配置(根项目文件+构建目录路径)
const appDir = '/vue3-web'
const libDir = '/vue3-web'
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..'); // 单包项目根目录(发布包目录)
const packagePath = path.resolve(rootDir, 'package.json'); // 根项目package.json
const readmePath = path.resolve(rootDir, 'README.md'); // 根项目README.md
const LICENSEPath = path.resolve(rootDir, 'LICENSE'); // 根项目LICENSE
const packagesPath = path.resolve(rootDir, 'packages'); // 根项目LICENSE
const pkg = await fs.readFile(packagePath, 'utf-8').then(JSON.parse);
const currentVersion = pkg.version;

// 4. 单包场景配置项(新增“复制文件目标路径”)
const config = {
  versionIncrements: ['patch', 'minor', 'major'], // SemVer版本类型
  viteBuildCmdApp: 'yarn build --mode app', // Vite构建命令(npm用"npm run build")
  viteBuildCmdLib: 'yarn build --mode lib', // Vite构建命令(npm用"npm run build")
  registry: 'https://registry.npmmirror.com/', // 发布仓库(国内镜像)
  publishExtraArgs: '--access public', // scope包发布必需参数
  // 🌟 新增：目标package.json的自定义配置
  packageJsonConfig: {
    // 1. 从根目录package.json中保留的字段（按需调整）
    keepFields: [
      'name',          // 包名（必须）
      'version',       // 版本号（必须，与根目录同步）
      'private',       // 包私有还是公共
      'type',       // 类型
      'license',       // 开源协议
      'author',        // 作者
      'description',   // 包描述
      'main',          //  CommonJS入口（如dist/index.cjs）
      'module',        // ESM模块入口（兼容旧工具）
      'unpkg',        // ESM模块入口（兼容旧工具）
      'peerDependencies',        // peer依赖（如vue@^3.2.0）
      'types',         // TypeScript类型入口（如dist/index.d.ts）
      'keywords',      // 关键词（便于npm搜索）
      'files', //  允许文件
      'repository', //  git
      'bugs', //  bug提交
      'homepage' //  首页
    ],
    // 2. 额外新增的字段（根目录没有，需要手动添加）
    extraFields: {
      "dependencies": {
        "async-validator": "^4.2.5",
        "@popperjs/core": "^2.11.8",
        "resize-observer-polyfill": "^1.5.1"
      }
    },
    // 3. 需要覆盖根目录的字段（如有冲突，以此为准）
    overrideFields: {
      'main': 'dist/zmz-vue3-web.min.js',    // 强制指定入口（确保与Vite构建输出一致）
      'module': 'es/index.js',
      'unpkg': 'dist/zmz-vue3-web.min.js'
    }
  },
  // 🌟 新增：复制文件配置(原文件路径 → vue3-web目录目标路径)
  copyFiles: [
    { type: 'file', source: packagePath, target: path.resolve(rootDir + libDir, 'package.json') }, // 原封不动复制package.json到vue3-web
    { type: 'file', source: readmePath, target: path.resolve(rootDir + libDir, 'README.md') }, // 原封不动复制README.md到vue3-web
    // { type: 'dir', source: packagesPath, target: path.resolve(rootDir + libDir, 'packages') }, // 原封不动复制README.md到vue3-web
    { type: 'file', source: LICENSEPath, target: path.resolve(rootDir + libDir, 'LICENSE') } // 原封不动复制LICENSE到vue3-web
  ],
  copyExcludePatterns: [
    // 'packages/theme-default/node_modules',
    // 'packages/theme-default/.gitignore',
    // 'packages/theme-default/gulpfile.js',
    // 'packages/theme-default/package-lock.json',
    // 'packages/theme-default/package.json',
    // 'packages/theme-default/salad.config.json',
    // 'packages/.htaccess',
  ]
};

// 日志工具(新增“复制文件”相关日志类型)
const log = {
  step: (msg) => console.log(chalk.cyan(`\n▶ 步骤：${msg}`)),
  success: (msg) => console.log(chalk.green(`✅ 成功：${msg}`)),
  error: (msg) => console.log(chalk.red(`❌ 失败：${msg}`)),
  info: (msg) => console.log(chalk.gray(`ℹ️ 信息：${msg}`)),
  warn: (msg) => console.log(chalk.yellow(`⚠️ 警告：${msg}`)),
  copy: (source, target) => console.log(chalk.blue(`📋 复制：${path.basename(source)} → ${path.relative(rootDir, target)}`))
};

// 版本计算工具
const getTargetVersion = (type) => {
  return semver.inc(currentVersion, type);
};

// 5. 单包发布主流程(新增“复制配置文件到vue3-web”步骤)
async function main() {
  // 前置校验：包类型+文件存在性
  if (pkg.private) {
    log.error('当前包是私有包(package.json private: true)，无法发布到npm！');
    process.exit(1);
  }
  await checkRequiredFiles(); // 校验README.md和package.json是否存在
  log.info(`当前发布包：${pkg.name}，当前版本：v${currentVersion}`);

  try {
    // 步骤1：确认目标版本
    let targetVersion = args(process.argv.slice(2))._[0];
    targetVersion = await confirmTargetVersion(targetVersion);

    // 步骤2：二次确认发布
    if (!await confirmPublish(targetVersion)) {
      log.info('发布操作已取消');
      return;
    }

    // 步骤3：Vite构建(生成vue3-web目录文档)
    await runViteBuildApp();

    // 步骤3：Vite构建(生成vue3-web目录库)
    await runViteBuildLib();

    // 步骤4：更新根项目版本号(确保复制到vue3-web的package.json是最新版本)
    await updatePackageVersion(targetVersion);

    // 🌟 新增：步骤5：原封不动复制README.md和package.json到vue3-web目录
    await copyFilesToDist(targetVersion);

    // 步骤6：Git提交变更(含vue3-web目录的复制文件)
    await commitGitChanges(targetVersion);

    log.success(`\n🎉 单包 ${pkg.name}@v${targetVersion} 已成功提交到Git`);
  } catch (err) {
    log.error(`发布全流程失败：${err.message}`);
    process.exit(1);
  }
}

// 🌟 6. 新增子函数：校验必需文件是否存在(避免复制不存在的文件)
async function checkRequiredFiles() {
  log.step('校验README.md和package.json是否存在');
  const requiredFiles = [packagePath, readmePath];
  for (const file of requiredFiles) {
    try {
      await fs.access(file); // 检查文件是否存在
      log.info(`文件存在：${path.basename(file)}`);
    } catch (err) {
      if (file === readmePath) {
        log.error(`必需文件缺失：${path.basename(file)}(README.md是npm包的重要说明文档，建议补充后再发布)`);
        process.exit(1);
      } else {
        throw new Error(`核心文件缺失：${path.basename(file)}(package.json是发布必需文件)`);
      }
    }
  }
}

// 7. 子函数：确认目标版本(原有逻辑不变)
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
      ...config.versionIncrements.map(type =>
        `${type}(自动升级为 v${getTargetVersion(type)})`
      ),
      'custom(自定义版本号)',
    ],
  });

  if (releaseType === 'custom(自定义版本号)') {
    const { customVersion } = await enquirer.prompt({
      type: 'input',
      name: 'customVersion',
      message: '请输入自定义版本号(需符合SemVer：如1.0.0、2.1.3)',
      initial: currentVersion,
      validate: (val) => semver.valid(val) ? true : '版本号不符合SemVer规范！示例：1.0.0',
    });
    return customVersion;
  }
  return releaseType.match(/v([\d.]+)/)[1];
}

// 8. 子函数：二次确认发布(原有逻辑不变)
async function confirmPublish(targetVersion) {
  const { isConfirm } = await enquirer.prompt({
    type: 'confirm',
    name: 'isConfirm',
    message: `即将发布单包 ${pkg.name}@v${targetVersion} 到 ${config.registry}，是否继续？`,
    initial: false,
  });
  return isConfirm;
}

// 9. 子函数：执行Vite构建(原有逻辑不变)
async function runViteBuildApp() {
  log.step(`执行Vite构建(发布包：${pkg.name})`);
  try {
    // 先删除旧vue3-web目录(避免残留旧文件)
    await fs.rm(rootDir + appDir, { recursive: true, force: true });
    log.info('已删除旧vue3-web目录，准备重新构建');

    execSync(config.viteBuildCmdApp, { stdio: 'inherit', cwd: rootDir });
    log.success('Vite构建完成，已生成新vue3-web目录(应用包目录)');
  } catch (err) {
    throw new Error(`Vite构建失败：${err.stderr?.toString() || err.message}`);
  }
}
// 9. 子函数：执行Vite构建(原有逻辑不变)
async function runViteBuildLib() {
  log.step(`执行Vite构建(发布包：${pkg.name})`);
  try {
    // 先删除旧vue3-web目录(避免残留旧文件)
    await fs.rm(rootDir + libDir, { recursive: true, force: true });
    log.info('已删除旧vue3-web目录，准备重新构建');

    execSync(config.viteBuildCmdLib, { stdio: 'inherit', cwd: rootDir });
    log.success('Vite构建完成，已生成新vue3-web目录(库包目录)');
  } catch (err) {
    throw new Error(`Vite构建失败：${err.stderr?.toString() || err.message}`);
  }
}

// 10. 子函数：更新单包版本号(原有逻辑不变，确保复制前版本已更新)
async function updatePackageVersion(targetVersion) {
  log.step(`更新版本号(v${currentVersion} → v${targetVersion})`);
  try {
    pkg.version = targetVersion;
    await fs.writeFile(packagePath, JSON.stringify(pkg, null, 2) + '\n', 'utf-8');
    log.success(`根项目package.json版本已更新为 v${targetVersion}`);
  } catch (err) {
    throw new Error(`版本更新失败：${err.message}`);
  }
}

/**
 * 🌟 核心工具函数：判断路径是否需要被排除
 * @param {string} targetPath 待判断的文件/文件夹路径
 * @param {string[]} excludePatterns 排除规则（支持绝对路径、相对路径、glob简化格式）
 * @param {string} baseDir 基准目录（用于解析相对路径）
 * @returns {boolean} 是否需要排除
 */
function isPathExcluded(targetPath, excludePatterns = [], baseDir = rootDir) {
  if (!excludePatterns.length) return false;

  // 将目标路径转为绝对路径，统一格式
  const absoluteTargetPath = path.resolve(targetPath);
  // 解析所有排除规则为绝对路径或匹配模式
  const resolvedExcludes = excludePatterns.map(pattern => {
    // 处理绝对路径排除规则
    if (path.isAbsolute(pattern)) return path.resolve(pattern);
    // 处理相对路径排除规则（基于基准目录）
    return path.resolve(baseDir, pattern);
  });

  // 匹配排除规则（支持精确匹配和目录前缀匹配）
  return resolvedExcludes.some(excludePath => {
    // 情况1：精确匹配（文件/文件夹路径完全一致）
    if (absoluteTargetPath === excludePath) return true;
    // 情况2：目录前缀匹配（目标路径在排除目录内，如排除"src/test"则"src/test/a.js"也会被排除）
    return absoluteTargetPath.startsWith(`${excludePath}${path.sep}`);
  });
}

/**
 * 🌟 生成自定义package.json（基于根目录配置，复用原逻辑）
 * @param {string} targetPkgPath 目标package.json路径
 * @param {string} targetVersion 当前发布版本
 */
async function generateTargetPackageJson(targetPkgPath, targetVersion) {
  log.step('生成自定义package.json（基于根目录配置）');
  try {
    // 1. 读取根目录package.json
    const rootPkg = await fs.readFile(packagePath, 'utf-8').then(JSON.parse);

    // 2. 筛选需要保留的字段（从根目录提取）
    const keptFields = {};
    config.packageJsonConfig.keepFields.forEach(field => {
      if (rootPkg[field] !== undefined) {
        keptFields[field] = rootPkg[field];
      }
    });

    // 3. 合并覆盖字段（优先级：override > 根目录保留字段）
    const withOverride = { ...keptFields, ...config.packageJsonConfig.overrideFields };

    // 4. 合并额外新增字段（补充根目录没有的配置）
    const targetPkg = { ...withOverride, ...config.packageJsonConfig.extraFields };

    // 5. 强制同步版本号
    targetPkg.version = targetVersion;

    // 6. 写入目标路径（格式化JSON，末尾加换行符符合规范）
    await fs.writeFile(
      targetPkgPath,
      JSON.stringify(targetPkg, null, 2) + '\n',
      'utf-8'
    );

    log.success(`已生成自定义package.json：${path.relative(rootDir, targetPkgPath)}`);
    log.info(`核心配置：name=${targetPkg.name}, version=${targetPkg.version}, main=${targetPkg.main}`);
  } catch (err) {
    throw new Error(`生成package.json失败：${err.message}`);
  }
}


/**
 * 🌟 递归复制文件夹（支持排除指定内容）
 * @param {string} sourceDir 源文件夹路径
 * @param {string} targetDir 目标文件夹路径
 * @param {string[]} excludePatterns 排除规则
 */
async function copyDirRecursively(sourceDir, targetDir, excludePatterns) {
  // 1. 检查源文件夹是否存在
  try {
    await fs.access(sourceDir);
  } catch (err) {
    throw new Error(`源文件夹不存在：${sourceDir}`);
  }

  // 2. 判断当前文件夹是否需要排除
  if (isPathExcluded(sourceDir, excludePatterns)) {
    log.info(`跳过排除的文件夹：${sourceDir}`);
    return;
  }

  // 3. 创建目标文件夹（若不存在）
  await fs.mkdir(targetDir, { recursive: true });

  // 4. 读取源文件夹内所有内容
  const files = await fs.readdir(sourceDir, { withFileTypes: true });

  for (const file of files) {
    const sourcePath = path.join(sourceDir, file.name);
    const targetPath = path.join(targetDir, file.name);

    // 子项是文件夹：递归复制
    if (file.isDirectory()) {
      await copyDirRecursively(sourcePath, targetPath, excludePatterns);
    }
    // 子项是文件：判断是否排除，再复制
    else if (file.isFile()) {
      if (isPathExcluded(sourcePath, excludePatterns)) {
        log.info(`跳过排除的文件：${sourcePath}`);
        continue;
      }
      // 原封不动复制文件（保留内容、权限，使用高效的FICLONE模式）
      await fs.copyFile(sourcePath, targetPath, fs.constants.COPYFILE_FICLONE);
      log.copy(sourcePath, targetPath);
    }
  }

  log.success(`已完成文件夹复制：${path.relative(rootDir, sourceDir)} → ${path.relative(rootDir, targetDir)}`);
}


/**
 * 🌟 主函数：复制指定文件/文件夹 + 排除指定内容 + 生成自定义package.json
 * @param {string} targetVersion 当前发布版本
 * @param {Array<{type: 'file'|'dir', source: string, target: string}>} options.copyItems 需复制的文件/文件夹列表
 * @param {string[]} options.excludePatterns 需排除的路径列表（绝对/相对路径均可）
 */
async function copyFilesToDist(targetVersion) {
  log.step('开始执行「复制指定内容 + 排除指定项」任务');

  try {
    // 1. 遍历复制所有指定的文件/文件夹
    for (const item of config.copyFiles) {
      const { type, source, target } = item;
      const absoluteSource = path.resolve(rootDir, source);
      const absoluteTarget = path.resolve(rootDir, target);

      // 校验源路径是否存在
      try {
        await fs.access(absoluteSource);
      } catch (err) {
        throw new Error(`源路径不存在：${absoluteSource}`);
      }

      // 复制文件
      if (type === 'file') {
        if (isPathExcluded(absoluteSource, config.copyExcludePatterns)) {
          log.info(`跳过排除的文件：${absoluteSource}`);
          continue;
        }
        await fs.copyFile(absoluteSource, absoluteTarget, fs.constants.COPYFILE_FICLONE);
        log.copy(absoluteSource, absoluteTarget);
        log.success(`已复制文件：${path.basename(absoluteSource)}`);
      }

      // 复制文件夹（递归，支持排除子内容）
      else if (type === 'dir') {
        await copyDirRecursively(absoluteSource, absoluteTarget, config.copyExcludePatterns);
      }

      // 非法类型提示
      else {
        throw new Error(`不支持的复制类型：${type}（仅支持file/dir）`);
      }
    }

    // 2. 生成自定义package.json（复用原逻辑，目标路径可配置）
    const targetPkgPath = path.resolve(rootDir, config.packageJsonConfig.targetPath || 'vue3-web/package.json');
    await generateTargetPackageJson(targetPkgPath, targetVersion);

    log.step('「复制+排除+生成package.json」任务全部完成 ✅');
  } catch (err) {
    log.error(`任务执行失败：${err.message}`);
    throw err; // 抛出错误，便于上层捕获处理
  }
}

// 12. 子函数：Git提交+打Tag(更新提交范围，包含vue3-web目录的复制文件)// 12. 子函数：Git提交+打Tag(按流程：拉取→提交→切分支→提master→切Tag→推Tag→切回master)
// 12. 子函数：Git提交+打Tag(按流程：拉取→提交→切分支→提master→切Tag→推Tag→切回master)
async function commitGitChanges(targetVersion) {
  // 1. 基础参数校验（提前拦截无效输入）
  if (!rootDir) {
    log.error('❌ 根目录rootDir未定义，无法执行Git操作');
    throw new Error('Git工作目录路径缺失');
  }
  if (!targetVersion || !/^\d+\.\d+\.\d+$/.test(targetVersion)) {
    log.error(`❌ 无效的版本号：${targetVersion}（需符合语义化版本，如 0.0.10）`);
    throw new Error('Invalid semantic version');
  }
  if (!pkg?.name) {
    log.error('❌ 未获取到package.json的name字段，无法生成提交信息');
    throw new Error('Package name not found');
  }

  const date = new Date();
  // 2. 统一配置（便于后续维护）
  const configGit = {
    targetBranch: 'master', // 目标提交分支（固定为master）
    tagName: `v${targetVersion}`, // 版本Tag（格式：v0.0.10）
    localCommitMsg: `版本修复（时间：${date.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}）`, // 本地修改提交信息
    masterCommitMsg: `最新提交: ${pkg.name} v${targetVersion}`, // master分支提交信息
    tagMsg: `release: ${pkg.name} v${targetVersion}`, // Tag注释
    remoteRepo: 'origin', // 远程仓库别名（默认origin）
    stashMsg: `auto-stash: ${new Date().toLocaleString()} (before version ops)` // stash备注
  };

  log.step(`🚀 开始执行Git标准化流程：拉取代码→提交本地修改→处理master分支→打Tag→切回master`);

  // 状态标记：用于流程控制和异常恢复
  let needPopStash = false;
  let originalBranch = ''; // 记录初始分支
  let hasLocalChanges = false; // 标记是否有本地修改需要提交

  try {
    // -------------------------- 步骤1：记录初始分支（用于后续追溯） --------------------------
    log.info(`🔍 检测当前所在分支...`);
    originalBranch = execSync('git rev-parse --abbrev-ref HEAD', {
      stdio: 'pipe',
      cwd: rootDir
    }).toString().trim();
    log.info(`ℹ️ 当前初始分支：${originalBranch}`);


    // -------------------------- 步骤2：拉取远程最新代码（修复命令语法：--all无需加仓库名） --------------------------
    log.info(`🔄 拉取远程所有分支最新代码（确保本地与远程同步）...`);
    try {
      // 修复点：git fetch --all 本身拉取所有远程仓库，若仅需拉取origin的所有分支，用 git fetch origin --prune
      // 推荐用 git fetch origin --prune（清理无效远程分支引用，同时拉取origin所有分支最新代码）
      execSync(`git fetch ${configGit.remoteRepo} --prune`, {
        stdio: 'inherit',
        cwd: rootDir,
        timeout: 30000
      });
      log.success(`✅ 已拉取${configGit.remoteRepo}远程所有分支最新代码`);
    } catch (fetchErr) {
      if (fetchErr.message.includes('Permission denied')) {
        log.error(`❌ 拉取代码失败：权限不足，检查Gitee仓库访问权限`);
      } else if (fetchErr.message.includes('Could not resolve host')) {
        log.error(`❌ 拉取代码失败：网络错误，无法连接Gitee`);
      } else {
        log.error(`❌ 拉取远程代码失败：${fetchErr.message.slice(0, 200)}`);
      }
      throw new Error(`Git fetch failed: ${fetchErr.message.slice(0, 200)}`);
    }


    // -------------------------- 步骤3：提交本地修改（无论当前在哪个分支，先提交本地变更） --------------------------
    log.info(`🔍 检查本地是否存在未提交变更（工作区+暂存区）...`);
    try {
      // 检查是否有未提交变更（quiet模式：无变更则无输出）
      execSync('git diff --quiet && git diff --cached --quiet', {
        stdio: 'pipe',
        cwd: rootDir
      });
      log.info(`ℹ️  本地无未提交变更，跳过本地提交步骤`);
    } catch (diffErr) {
      hasLocalChanges = true;
      // 有本地变更：执行暂存+提交
      log.info(`📝 发现本地未提交变更，开始提交到当前分支（${originalBranch}）...`);
      // 暂存所有变更
      execSync('git add .', { stdio: 'inherit', cwd: rootDir });
      // 提交本地变更（备注当前分支，便于追溯）
      execSync(`git commit -m "${configGit.localCommitMsg}"`, {
        stdio: 'inherit',
        cwd: rootDir
      });
      // 可选：推送当前分支变更到远程（若需同步初始分支，保留此句；若为临时分支，可注释）
      execSync(`git push ${configGit.remoteRepo} ${originalBranch}`, {
        stdio: 'inherit',
        cwd: rootDir,
        timeout: 60000
      });
      log.success(`✅ 本地变更已提交并推送到${originalBranch}分支（提交信息：${configGit.localCommitMsg}）`);
    }


    // -------------------------- 步骤4：判断并切换到master分支（确保在目标分支提交） --------------------------
    log.info(`🔍 检查当前是否在${configGit.targetBranch}分支...`);
    if (originalBranch === configGit.targetBranch) {
      log.info(`ℹ️ 当前已在${configGit.targetBranch}分支，无需切换`);
      // 即使已在master，也拉取最新代码（防止步骤2后远程又有更新）
      execSync(`git pull ${configGit.remoteRepo} ${configGit.targetBranch} --rebase`, {
        stdio: 'inherit',
        cwd: rootDir
      });
      log.success(`✅ ${configGit.targetBranch}分支已同步远程最新代码`);
    } else {
      log.info(`🔀 当前在${originalBranch}分支，开始切换到${configGit.targetBranch}分支...`);
      try {
        // 检查本地是否存在master分支
        const localMasterExists = execSync(`git branch --list ${configGit.targetBranch}`, {
          stdio: 'pipe',
          cwd: rootDir
        }).toString().trim() !== '';

        if (!localMasterExists) {
          // 本地无master分支：从远程拉取并创建
          log.warn(`⚠️  本地不存在${configGit.targetBranch}分支，从远程拉取并创建...`);
          execSync(`git checkout -b ${configGit.targetBranch} ${configGit.remoteRepo}/${configGit.targetBranch}`, {
            stdio: 'inherit',
            cwd: rootDir
          });
        } else {
          // 本地有master分支：直接切换（确保无未暂存变更，步骤3已处理）
          execSync(`git checkout ${configGit.targetBranch}`, {
            stdio: 'inherit',
            cwd: rootDir
          });
        }

        // 切换后拉取master最新代码（二次确保同步）
        execSync(`git pull ${configGit.remoteRepo} ${configGit.targetBranch} --rebase`, {
          stdio: 'inherit',
          cwd: rootDir
        });
        log.success(`✅ 已成功切换并同步到${configGit.targetBranch}分支`);
      } catch (checkoutErr) {
        if (checkoutErr.message.includes('pathspec')) {
          log.error(`❌ 切换失败：远程无${configGit.targetBranch}分支，请先在Gitee创建该分支`);
        } else if (checkoutErr.message.includes('Your local changes would be overwritten')) {
          log.error(`❌ 切换失败：存在未暂存变更（步骤3未处理完全，建议手动执行 git add . && git commit 后重试）`);
        } else {
          log.error(`❌ 切换到${configGit.targetBranch}分支失败：${checkoutErr.message.slice(0, 200)}`);
        }
        throw new Error(`Git checkout ${configGit.targetBranch} failed: ${checkoutErr.message.slice(0, 200)}`);
      }
    }


    // -------------------------- 步骤5：提交master分支的版本相关变更（如配置文件） --------------------------
    log.info(`🔍 检查${configGit.targetBranch}分支是否有版本相关变更...`);
    try {
      // 检查版本相关变更（如vue3-web配置、版本号文件等）
      execSync('git diff --quiet && git diff --cached --quiet', {
        stdio: 'pipe',
        cwd: rootDir
      });
      log.info(`ℹ️  ${configGit.targetBranch}分支无版本相关变更，跳过master提交步骤`);
    } catch (masterDiffErr) {
      // 提交版本相关变更到master
      log.info(`📝 发现版本相关变更，提交到${configGit.targetBranch}分支...`);
      execSync('git add .', { stdio: 'inherit', cwd: rootDir });
      execSync(`git commit -m "${configGit.masterCommitMsg}"`, {
        stdio: 'inherit',
        cwd: rootDir
      });
      // 推送master变更到远程
      execSync(`git push ${configGit.remoteRepo} ${configGit.targetBranch}`, {
        stdio: 'inherit',
        cwd: rootDir,
        timeout: 60000
      });
      log.success(`✅ 版本相关变更已提交并推送到${configGit.targetBranch}分支`);
    }


    // -------------------------- 步骤6：创建Tag（基于master最新提交） --------------------------
    log.info(`🏷️  处理版本Tag：${configGit.tagName}...`);
    try {
      // 检查本地Tag是否存在
      const localTagOutput = execSync(`git tag -l ${configGit.tagName}`, {
        stdio: 'pipe',
        cwd: rootDir
      }).toString().trim();
      const localTagExists = localTagOutput === configGit.tagName;

      if (localTagExists) {
        log.info(`ℹ️  本地已存在Tag：${configGit.tagName}（基于${configGit.targetBranch}分支）`);
      } else {
        // 基于master最新提交创建带注释的Tag
        log.info(`📌 基于${configGit.targetBranch}分支最新提交创建Tag：${configGit.tagName}...`);
        execSync(`git tag -a ${configGit.tagName} -m "${configGit.tagMsg}"`, {
          stdio: 'inherit',
          cwd: rootDir
        });
        log.success(`✅ 本地Tag ${configGit.tagName} 创建成功`);
      }
    } catch (tagCreateErr) {
      log.error(`❌ 创建Tag ${configGit.tagName} 失败：${tagCreateErr.message.slice(0, 200)}`);
      throw new Error(`Git tag create failed: ${tagCreateErr.message.slice(0, 200)}`);
    }


    // -------------------------- 步骤7：切换到目标Tag（确保在Tag对应的提交上推送） --------------------------
    log.info(`🔀 切换到Tag：${configGit.tagName}（HEAD detached状态）...`);
    try {
      // 切换到Tag对应的提交（--detach明确进入游离状态，避免误创建分支）
      execSync(`git checkout ${configGit.tagName} --detach`, {
        stdio: 'inherit',
        cwd: rootDir
      });
      log.success(`✅ 已成功切换到Tag：${configGit.tagName}`);
    } catch (tagCheckoutErr) {
      if (tagCheckoutErr.message.includes('pathspec')) {
        log.error(`❌ 切换Tag失败：本地不存在Tag ${configGit.tagName}，请先创建Tag`);
      } else {
        log.error(`❌ 切换到Tag ${configGit.tagName} 失败：${tagCheckoutErr.message.slice(0, 200)}`);
      }
      throw new Error(`Git checkout ${configGit.tagName} failed: ${tagCheckoutErr.message.slice(0, 200)}`);
    }


    // -------------------------- 步骤8：推送Tag到远程 --------------------------
    log.info(`🚀 推送Tag ${configGit.tagName} 到远程${configGit.remoteRepo}...`);
    try {
      // 先检查远程是否已存在该Tag
      let remoteTagExists = false;
      try {
        execSync(
          `git ls-remote --tags ${configGit.remoteRepo} ${configGit.tagName} | grep -q ${configGit.tagName}`,
          { stdio: 'pipe', cwd: rootDir }
        );
        remoteTagExists = true;
      } catch (remoteErr) {
        remoteTagExists = false;
      }

      if (remoteTagExists) {
        log.info(`ℹ️  远程已存在Tag ${configGit.tagName}，跳过推送`);
      } else {
        execSync(`git push ${configGit.remoteRepo} ${configGit.tagName}`, {
          stdio: 'inherit',
          cwd: rootDir,
          timeout: 60000
        });
        log.success(`✅ Tag ${configGit.tagName} 已成功推送到远程`);
      }
    } catch (tagPushErr) {
      if (tagPushErr.message.includes('src refspec does not match any')) {
        log.error(`❌ 推送Tag失败：Tag ${configGit.tagName} 未关联有效提交`);
      } else if (tagPushErr.message.includes('Permission denied')) {
        log.error(`❌ 推送Tag失败：权限不足，检查Gitee Tag推送权限`);
      } else {
        log.error(`❌ 推送Tag ${configGit.tagName} 失败：${tagPushErr.message.slice(0, 200)}`);
      }
      throw new Error(`Git push ${configGit.tagName} failed: ${tagPushErr.message.slice(0, 200)}`);
    }


    // -------------------------- 步骤9：切换回master分支（最终停留于目标分支） --------------------------
    log.info(`🔀 切换回${configGit.targetBranch}分支（避免停留于Tag游离状态）...`);
    try {
      execSync(`git checkout ${configGit.targetBranch}`, {
        stdio: 'inherit',
        cwd: rootDir
      });
      log.success(`✅ 已成功切换回${configGit.targetBranch}分支`);
    } catch (restoreErr) {
      log.error(`❌ 切换回${configGit.targetBranch}分支失败：${restoreErr.message.slice(0, 200)}`);
      throw new Error(`Git checkout ${configGit.targetBranch} failed: ${restoreErr.message.slice(0, 200)}`);
    }


    // -------------------------- 步骤10：流程结束（输出最终状态） --------------------------
    log.success(`🎉 Git全流程执行完成！
- 最终停留分支：${configGit.targetBranch}
- 已推送资源：${configGit.targetBranch}分支 + ${configGit.tagName} Tag
- 本地修改处理：${hasLocalChanges ? '已提交到初始分支' : '无本地修改'}`);

  } catch (globalErr) {
    log.error(`💥 Git全流程执行失败：${globalErr.message}`);
    // 异常兜底：提示恢复初始状态
    if (originalBranch) {
      log.warn(`⚠️  异常恢复建议：执行 git checkout ${originalBranch} 回到初始分支`);
    }
    throw new Error(`Git workflow failed: ${globalErr.message}`);
  }
}

// 启动单包发布流程
main();
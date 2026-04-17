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
const libDir = '/vue3-web'
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..'); // 单包项目根目录(发布包目录)
const packagePath = path.resolve(rootDir, 'package.json'); // 根项目package.json
const pkg = await fs.readFile(packagePath, 'utf-8').then(JSON.parse);
const currentVersion = pkg.version;
console.log(currentVersion)
// 4. 单包场景配置项(新增“复制文件目标路径”)
const config = {
    viteBuildCmdLib: `cd vue3-web && yarn pack -f ../zmz-vue3-web-v${currentVersion}.tgz`, // Vite构建命令(npm用"npm run build")
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

// 5. 单包发布主流程(新增“复制配置文件到zmz-vue3-web”步骤)
async function main() {
    // 前置校验：包类型+文件存在性
    if (pkg.private) {
        log.error('当前本地包是私有包(package.json private: true)，无法发布到npm！');
        process.exit(1);
    }
    await checkRequiredFiles(); // 校验README.md和package.json是否存在
    log.info(`当前本地发布包：${pkg.name}，当前版本：v${currentVersion}`);

    try {
        // 步骤3：Vite构建(生成zmz-vue3-web本地库)
        await runViteBuildLib();

        log.success(`\n🎉 本地发布包 ${pkg.name}-v${currentVersion}.tgz 打包成功发布`);
    } catch (err) {
        log.error(`本地构建发布包全流程失败：${err.message}`);
        process.exit(1);
    }
}

// 🌟 6. 新增子函数：校验必需文件是否存在(避免复制不存在的文件)
async function checkRequiredFiles() {
    log.step('校验必需文件：cjs/index.js、es/index.js、package.json、README.md、favicon.umd/zmz-vue3-web.umd/zmz-vue3-web.js');

    // 1. 定义所有需要校验的文件路径（基于项目根目录拼接完整路径）
    const requiredFiles = [
        path.join(rootDir + libDir, 'cjs', 'index.js'), // cjs/index.js
        path.join(rootDir + libDir, 'es', 'index.js'),  // es/index.js
        path.join(rootDir + libDir, 'package.json'),    // package.json
        path.join(rootDir + libDir, 'README.md'),       // README.md
        path.join(rootDir + libDir, 'favicon.ico'),     // favicon.ico
        path.join(rootDir + libDir, 'umd', 'zmz-vue3-web.css'), // umd/zmz-vue3-web.css
        path.join(rootDir + libDir, 'umd', 'zmz-vue3-web.js')   // umd/zmz-vue3-web.js
    ];

    // 2. 循环检查每个文件
    for (const filePath of requiredFiles) {
        try {
            // fs.access 校验文件是否存在（若不存在会抛出错误）
            await fs.access(filePath);
            // 校验通过：打印“文件存在”日志（显示文件名，隐藏路径）
            log.info(`文件存在：${path.basename(filePath)}`);
        } catch (err) {
            // 校验失败：根据文件类型定制错误提示
            const fileName = path.basename(filePath);
            // 核心文件：缺失直接中断流程（发布必需，无法跳过）
            const coreFiles = ['package.json', 'cjs/index.js', 'es/index.js', 'umd/zmz-vue3-web.js'];
            if (coreFiles.includes(fileName)) {
                throw new Error(`❌ 核心文件缺失：${fileName}\n   说明：该文件是包构建/发布的必需文件，请先执行构建命令（如 yarn build）生成`);
            }
            // 非核心文件：提示补充，但可根据需求决定是否中断（此处默认中断，可调整）
            else if (fileName === 'README.md') {
                log.error(`❌ 必需文件缺失：${fileName}\n   说明：README.md是npm包的重要说明文档（含使用方法、API等），建议补充后再发布`);
                process.exit(1); // 中断流程（若允许跳过，可改为 log.warn 并不 exit）
            }
            else if (fileName === 'umd/zmz-vue3-web.css') {
                log.error(`❌ 样式文件缺失：${fileName}\n   说明：该文件是包的样式入口，若项目需样式支持，请检查构建配置是否正确`);
                process.exit(1);
            }
            else if (fileName === 'favicon.ico') {
                log.warn(`⚠️  图标文件缺失：${fileName}\n   说明：favicon.ico用于浏览器标签图标，若无需该功能，可忽略此提示；若需要，请放入项目根目录`);
                // 此处不中断流程（可根据需求改为 process.exit(1)）
            }
        }
    }

    log.info('✅ 所有必需文件校验通过');
}

// 9. 子函数：执行Vite构建(原有逻辑不变)
async function runViteBuildLib() {
    log.step(`执行Vite构建(本地发布包：${pkg.name})`);
    try {
        execSync(config.viteBuildCmdLib, { stdio: 'inherit', cwd: rootDir });
        log.success('Vite构建完成，已生成新vue3-web本地发布包(库包目录)');
    } catch (err) {
        throw new Error(`Vite构建失败：${err.stderr?.toString() || err.message}`);
    }
}

// 启动单包发布流程
main();
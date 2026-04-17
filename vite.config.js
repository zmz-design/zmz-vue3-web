import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import fs from 'fs-extra'
import path from 'path'
import VueMarkdown from './unplugin-vue-markdown/vite.js'
import MarkdownItContainer from 'markdown-it-container'
import MarkdownItAnchor from 'markdown-it-anchor'
// 确保正确导入parse函数
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import { createHighlighter } from 'shiki'; // 代码高亮工具
import githubDark from 'shiki/themes/github-dark.mjs';
const highlighter = await createHighlighter({
  themes: [githubDark],
  langs: ['html', 'vue', 'javascript'], // 支持的语言（需包含 html/vue）
});
// 2. 辅助函数：定位 Markdown 中所有 ::: demo ::: 块的范围（起始索引、结束索引）
function getDemoBlockRanges(markdownContent) {
  const demoRanges = [];
  // 关键参数：
  // - /g：全局匹配所有 Demo 块
  // - s：让 . 匹配换行符（Demo 块内包含换行）
  // - m：多行匹配（避免开头/结尾受行位置影响）
  const demoRegex = /::: demo(?:\s+.+)?[\s\S]*?:::/gms;

  let matchResult = null;
  // 循环匹配所有 Demo 块，记录每个块的起始和结束索引
  while ((matchResult = demoRegex.exec(markdownContent)) !== null) {
    const { index } = matchResult; // 块的起始索引（::: demo 的第一个字符位置）
    const length = matchResult[0].length; // 块的总长度
    const endIndex = index + length; // 块的结束索引（::: 的最后一个字符位置）
    demoRanges.push({ start: index, end: endIndex });
  }

  return demoRanges;
}
// 3. 辅助函数：判断某个位置是否在任何 Demo 块范围内
function isInDemoBlock(pos, demoRanges) {
  // 检查 pos 是否在某个 Demo 块的 [start, end) 范围内
  return demoRanges.some(range => pos >= range.start && pos < range.end);
}

// 4. 辅助函数：给块外的 <script> 标签添加 setup（核心替换逻辑）
function addSetupToOuterScripts(markdownContent, demoRanges) {
  // 正则匹配所有 <script> 开头标签（支持带属性，如 <script lang="ts">，不匹配闭合标签 </script>）
  // 分组说明：
  // $1: <script → 固定前缀
  // $2: (?:\s+[^>]+)? → 可选的属性（如 lang="ts"、async 等）
  // $3: > → 标签结尾
  const scriptRegex = /(<script)(\s+[^>]+)?(>)/gms;

  // 替换逻辑：遍历每个匹配的 <script> 标签，判断是否在 Demo 外，再决定是否添加 setup
  return markdownContent.replace(scriptRegex, (match, $1, $2 = '', $3, offset) => {
    // offset：当前 <script> 标签在 Markdown 内容中的起始索引（关键：用于判断是否在 Demo 内）
    const isOuterScript = !isInDemoBlock(offset, demoRanges);

    // 若已包含 setup（如 <script setup>），不重复添加
    if ($2.includes('setup')) {
      return match;
    }

    // 块外脚本：添加 setup 属性；块内脚本：保持原样
    if (isOuterScript) {
      // 拼接 <script setup + 原有属性 + >
      return `${$1} setup${$2 ? ' ' + $2.trim() : ''}${$3}`;
    } else {
      return match;
    }
  });
}

const appConfig = {
  base: '/zmz-vue3-web/',
  build: {
    outDir: 'zmz-vue3-web',
  },
  plugins: [
    vueJsx(),
    vue({
      include: [/\.vue$/, /\.md$/],
      // 关键配置：禁用对 script/style 标签的副作用检查
      reactivityTransform: true
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    VueMarkdown({
      theme: [],
      // 1. 基础配置：匹配 Vue 版本 + 保留 HTML（MD 转 SFC 的前提）
      vueVersion: '2.x', // 显式指定 Vue 版本，避免自动检测偏差
      markdownItOptions: {
        html: true, // 第一步：完成 MD 转 HTML（保留 <script>/<style> 标签）
        breaks: true,
        linkify: true,
      },
      wrapperClasses: 'zmz-markdown-article',
      // 2. 核心：注册自定义容器（解析 ::: demo 块）
      markdownItSetup(md) {
        // 注册 demo 容器：匹配 ::: demo 开头，::: 结尾
        md.use(MarkdownItContainer, 'demo', {
          validate: params => params.trim().match(/^demo\s*(.*)$/),
          render: function (tokens, idx) {
            if (tokens[idx].nesting === 1) {
              const html = tokens[idx + 1].content
              const htmlCode = highlighter.codeToHtml(html, {
                lang: 'vue',
                theme: 'github-dark',
                meta: { class: 'shiki-demo' }
              })

              // 关键步骤：1. 记录当前容器的层级（level）
              const level = tokens[idx].level;
              // 2. 找到 demo 容器结束 Token 的索引（避免遍历后续 Token）
              let nextIdx = idx;
              while (nextIdx < tokens.length && !(tokens[nextIdx].type === 'container_demo_close' && tokens[nextIdx].level === level)) {
                nextIdx++;
              }
              // 3. 标记从 idx+1 到 nextIdx-1 的 Token 为“已处理”（跳过默认渲染）
              for (let i = idx + 1; i < nextIdx; i++) {
                tokens[i].skipRender = true; // 自定义标记，后续可配合插件识别
              }

              return `<demo-block>
              <template v-slot:desc>
              </template>
              <template v-slot:highlight>
              ${htmlCode}
              </template>
                `;
            }
            return '<template v-slot:code></template></demo-block>\n';
          }
        });

        md.use(MarkdownItContainer, 'warning', {
          validate: params => params.trim().match(/^warning\s*(.*)$/),
          render: function (tokens, idx) {
            if (tokens[idx].nesting === 1) {
              const html = tokens[idx + 1].content
              const htmlCode = highlighter.codeToHtml(html, {
                lang: 'vue',
                theme: 'github-dark',
                meta: { class: 'shiki-demo' }
              })

              // 关键步骤：1. 记录当前容器的层级（level）
              const level = tokens[idx].level;
              // 2. 找到 demo 容器结束 Token 的索引（避免遍历后续 Token）
              let nextIdx = idx;
              while (nextIdx < tokens.length && !(tokens[nextIdx].type === 'container_demo_close' && tokens[nextIdx].level === level)) {
                nextIdx++;
              }
              // 3. 标记从 idx+1 到 nextIdx-1 的 Token 为“已处理”（跳过默认渲染）
              for (let i = idx + 1; i < nextIdx; i++) {
                tokens[i].skipRender = true; // 自定义标记，后续可配合插件识别
              }

              return `<warning-block>
              <template v-slot:desc>
              </template>
              <template v-slot:highlight>
              ${htmlCode}
              </template>
                `;
            }
            return '<template v-slot:code></template></warning-block>\n';
          }
        });

        md.use(MarkdownItContainer, 'preview', {
          validate: params => params.trim().match(/^preview\s*(.*)$/),
          render: function (tokens, idx) {
            if (tokens[idx].nesting === 1) {
              const html = tokens[idx + 1].content
              const htmlCode = highlighter.codeToHtml(html, {
                lang: 'vue',
                theme: 'github-dark',
                meta: { class: 'shiki-demo' }
              })

              // 关键步骤：1. 记录当前容器的层级（level）
              const level = tokens[idx].level;
              // 2. 找到 demo 容器结束 Token 的索引（避免遍历后续 Token）
              let nextIdx = idx;
              while (nextIdx < tokens.length && !(tokens[nextIdx].type === 'container_demo_close' && tokens[nextIdx].level === level)) {
                nextIdx++;
              }
              // 3. 标记从 idx+1 到 nextIdx-1 的 Token 为“已处理”（跳过默认渲染）
              for (let i = idx + 1; i < nextIdx; i++) {
                tokens[i].skipRender = true; // 自定义标记，后续可配合插件识别
              }

              return `<preview-block>
              <template v-slot:desc>
              </template>
              <template v-slot:highlight>
              ${htmlCode}
              </template>
                `;
            }
            return '<template v-slot:code></template></preview-block>\n';
          }
        });

        // 锚点
        md.use(MarkdownItAnchor, {
          permalink: true,          // 启用锚点链接
          permalinkSymbol: '#',     // 设置符号为#
          permalinkBefore: true,    // 将符号放在标题前
          permalinkClass: 'zmz-markdown-article-anchor'  // 自定义class
        });

        // table 添加className
        md.renderer.rules.table_open = () => {
          // 注入自定义 class：这里添加 "custom-table"
          return '<div class="zmz-markdown-article-table"><table>\n';
        };

        md.renderer.rules.table_close = () => {
          // 注入自定义 class：这里添加 "custom-table"
          return '</table></div>';
        };

      },
      // 关键2：第二步：将 HTML 文本重组为 SFC 结构
      transforms: {
        before(code, id) {
          if (!id.endsWith('.md')) {
            return code;
          }
          // 步骤1：定位所有 ::: demo ::: 块的范围
          const demoRanges = getDemoBlockRanges(code);
          // 步骤2：给块外的 <script> 标签添加 setup
          const processedCode = addSetupToOuterScripts(code, demoRanges);
          // 返回处理后的 Markdown 内容，供后续插件解析
          return processedCode;
        }
      },
      scriptSetup: false,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@docs': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.md']
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*', // 允许主应用跨域
    },
  },
}

const libConfig = {
  base: '/zmz-vue3-web/',
  build: {
    outDir: 'vue3-web',
    lib: {
      entry: path.resolve('packages/index.js'),
      formats: ["es", "cjs", "umd"],
      name: 'ZmzVue3Web',
      fileName: (format) => {
        // 按产物格式分目录输出（es、cjs、umd）
        let pkgName = 'zmz-vue3-web';
        switch (format) {
          case 'es':
            return `es/${pkgName}.esm.js`;  // ESModule产物
          case 'cjs':
            return `cjs/${pkgName}.cjs.js`;  // CommonJS产物
          case 'umd':
            return `dist/${pkgName}.umd.min.js`;  // UMD产物（压缩版）
          default:
            return `dist/${pkgName}.${format}.js`;
        }
      },
      cssFileName: 'dist/zmz-vue3-web.min'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        exports: 'named',
      }
    },
  },
  plugins: [
    vueJsx(),
    vue({
      include: [/\.vue$/, /\.md$/],
      // 关键配置：禁用对 script/style 标签的副作用检查
      reactivityTransform: true
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    {
      name: 'copy-sources',
      async writeBundle() {
        console.log('📦 开始复制源码到 vue3-web/packages...')

        const srcDir = path.resolve('packages')
        const destDir = path.resolve('vue3-web/packages')

        // 清空目标目录
        await fs.remove(destDir)

        // 需要复制的文件扩展名
        const includeExt = ['.vue', '.js', '.jsx', '.css', '.less', '.ttf', '.woff', '.woff2']

        // 需要排除的目录
        const excludeDirs = ['node_modules', 'dist', '.git', '__tests__', 'test', 'examples']

        // 需要排除的文件模式
        const excludePatterns = [
          '**/*.spec.js',
          '**/*.test.js',
          '**/*.spec.ts',
          '**/*.test.ts',
          '**/*.min.js',
          '**/gulpfile.js',
          '**/salad.config.json',
          'gulpfile.js'
        ]

        /**
         * 递归复制文件，保留目录结构
         */
        async function copyFilesRecursively(source, destination) {
          try {
            const items = await fs.readdir(source, { withFileTypes: true })

            for (const item of items) {
              const sourcePath = path.join(source, item.name)
              const destPath = path.join(destination, item.name)

              // 检查是否需要排除
              const relativePath = path.relative(srcDir, sourcePath)
              const shouldExclude = excludeDirs.some(dir =>
                sourcePath.includes(`${path.sep}${dir}${path.sep}`) ||
                sourcePath.endsWith(`${path.sep}${dir}`)
              )

              if (shouldExclude) {
                console.log(`  ⏭️ 跳过排除目录: ${relativePath}`)
                continue
              }

              if (item.isDirectory()) {
                // 创建目录并递归处理
                await fs.ensureDir(destPath)
                await copyFilesRecursively(sourcePath, destPath)
              } else {
                const ext = path.extname(item.name)
                const shouldCopyByExt = includeExt.includes(ext)

                // 检查是否匹配排除模式
                const matchedExclude = excludePatterns.some(pattern => {
                  const regex = new RegExp(pattern.replace(/\*/g, '.*'))
                  return regex.test(relativePath)
                })

                if (shouldCopyByExt && !matchedExclude) {
                  await fs.copyFile(sourcePath, destPath)
                  console.log(`  ✅ 复制: ${relativePath}`)
                } else if (matchedExclude) {
                  console.log(`  ⏭️ 跳过排除文件: ${relativePath}`)
                }
              }
            }
          } catch (err) {
            console.error(`  ❌ 复制失败: ${err.message}`)
          }
        }

        // 开始复制
        await copyFilesRecursively(srcDir, destDir)

        // 复制 package.json（如果需要）
        const pkgPath = path.resolve('packages/package.json')
        if (await fs.pathExists(pkgPath)) {
          await fs.copy(pkgPath, path.join(destDir, 'package.json'))
          console.log('  ✅ 复制: packages/package.json')
        }

        console.log('🎉 源码复制完成！')
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@docs': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.md']
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*', // 允许主应用跨域
    },
  },
}

// 4. 导出多配置（根据命令行参数选择执行哪个配置）
export default defineConfig(({ command, mode }) => {
  // 命令行参数说明：
  // - 执行 `vite build --mode app` → 用项目模式打包
  // - 执行 `vite build --mode lib` → 用库模式打包
  // - 开发环境默认用项目模式（`vite dev` → 启动项目开发服务器）
  if (mode === 'lib') {
    return libConfig;
  }
  // 默认返回项目配置（开发/项目打包）
  return appConfig;
});

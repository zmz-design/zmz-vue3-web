import{_ as a,c as n,d as r,o}from"./index-Bfn7SEZ2.js";const s={metaInfo(){return{title:this.title,meta:[{name:"keywords",content:this.keywords},{name:"description",content:this.description}]}},data(){return{title:"快速上手"+this.currentConfig("tails"),keywords:this.currentConfig("keywords"),description:this.currentConfig("description")}},methods:{currentConfig(e){return this.$setting.currentConfig[e]}}},c={class:"zmz-markdown-article"};function i(e,t,E,d,l,p){return o(),n("div",c,[...t[0]||(t[0]=[r(`<h1 id="%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B">#</a> 快速上手</h1><hr><h2 id="%E4%BD%BF%E7%94%A8%E5%89%8D%E5%87%86%E5%A4%87" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E4%BD%BF%E7%94%A8%E5%89%8D%E5%87%86%E5%A4%87">#</a> 使用前准备</h2><blockquote><p>在使用之前，推荐学习 <code>Vue</code> 和 <code>Vite</code> ，并正确配置 <code>Node</code> v18.x 或 更高版本。</p></blockquote><ul><li><a href="https://v3.cn.vuejs.org" target="_blank">Vue.js</a></li><li><a href="https://cn.vitejs.dev" target="_blank">Vite</a></li><li><a href="https://nodejs.org" target="_blank">Node</a></li></ul><h2 id="%E5%AE%89%E8%A3%85" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E5%AE%89%E8%A3%85">#</a> 安装</h2><ul><li>使用 npm 安装</li></ul><pre><code class="language-bash">npm install zmz-vue3-web --save
</code></pre><ul><li>使用 yarn 安装</li></ul><pre><code class="language-bash">yarn add zmz-vue3-web
</code></pre><h2 id="%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6%E4%BD%BF%E7%94%A8" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6%E4%BD%BF%E7%94%A8">#</a> 全局组件使用</h2><p>可以在项目的入口文件中引入所有组件或所需组件</p><pre><code class="language-js">import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;;
import ZMZVUE3WEB from &#39;@zmz/vue3-web&#39; // 引入组件库
import &#39;@zmz/vue3-web/dist/zmz-vue3-web.css&#39;; // 引入样式库
const app = createApp(App);
app.use(ZMZVUE3WEB)
app.mount(&#39;#app&#39;);
</code></pre><h2 id="%E5%8D%95%E4%B8%AA%E7%BB%84%E4%BB%B6%E6%8C%89%E9%9C%80%E4%BD%BF%E7%94%A8" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E5%8D%95%E4%B8%AA%E7%BB%84%E4%BB%B6%E6%8C%89%E9%9C%80%E4%BD%BF%E7%94%A8">#</a> 单个组件按需使用</h2><p>可以局部注册所需的组件，适用于与其他框架组合使用的场景</p><pre><code class="language-javascript">import { ZmzButton } from &#39;@zmz/vue3-web&#39;

export default {
    components: {
        ZmzButton
    }
}
</code></pre><p>在模板中，用 <code>&lt;zmz-button&gt;&lt;/zmz-button&gt;</code> 自定义标签的方式使用组件</p><pre><code class="language-html">&lt;template&gt;
    &lt;div&gt;
        &lt;zmz-button&gt;这是一个按钮&lt;/zmz-button&gt;
    &lt;/div&gt;
&lt;/template&gt;
</code></pre><h2 id="%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98">#</a> 自定义主题</h2><p><code>zmz-vue3-web</code> 各个组件的样式采用css3变量。用户可根据实际需要，覆盖变量。</p><h2 id="seo%E4%BC%98%E5%8C%96" tabindex="-1"><a class="zmz-markdown-article-anchor" href="#seo%E4%BC%98%E5%8C%96">#</a> SEO优化</h2><p>已经内置vue-meta-info插件。</p>`,22)])])}const m=a(s,[["render",i]]);export{m as default};

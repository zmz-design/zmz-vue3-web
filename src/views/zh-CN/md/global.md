<script>
export default {
    metaInfo() {
        return {
            title: this.title,
            meta: [
                {
                    name: 'keywords',
                    content: this.keywords
                },
                {
                    name: 'describe',
                    content: this.describe
                }
            ]
        };
    },
    mounted() {
    },
    data() {
        return {
            title: 'Global 工具' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe'),
            u: navigator.userAgent.toLowerCase()
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        }
    }
};
</script>
# Global 工具
----
常用工具集合

### 环境判断工具
全局使用判断苹果微信，qq，百度app,uc浏览器等等

```javascript
this.$zmzGlobal.browser()
```
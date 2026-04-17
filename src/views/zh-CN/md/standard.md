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
                    name: 'description',
                    content: this.description
                }
            ]
        };
    },
    data() {
        return {
            title: '开发规范' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
        }
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
}
</script>
# 开发规范
## 全局公共字段
|名称| 标识 | 说明 | 默认值 |
|---|---|---|---|
| 类型 |``type``|``default`` , ``success``, ``warning``, ``error``, ``primary``, ``info``| default|
| 主题 |``theme``|—|—|
| 大小 |``size``|``large``, ``medium``, ``default``, ``small``, ``mini``|default|

## 自定义别名 
|名称| 标识 | 说明 |
|---|---|---|
| 自定义别名 |fieldAlias|用于用户自定义字段|

## class命名规范 
|名称| 标识 | 说明 |
|---|---|---|
| class命名 |``主名-标识``| zmz-doc |
| class下级命名 |``主名-标识__下级``| zmz-doc__next |
| class同级命名 |``主名-标识--同级``| zmz-doc--doc |
| 前缀 |``prefix``| zmz-doc__prefix |
| 后缀 |``suffix``| zmz-doc__suffix |
| 包 / 容器 |``wrap/container``| zmz-doc__wrap / zmz-doc__container |
| 组 |``group``| zmz-doc__group |
| 悬停 |``hover``| zmz-doc--hover |
| 激活 |``active``| zmz-doc--active |
| 禁止 |``disabled``| zmz-doc--disabled |
| 聚焦 |``focus``| zmz-doc--focus |
| 失焦 |``blur``| zmz-doc--blur |

## 尺寸
|名称| 标识 | 说明 |
|---|---|---|
| 大尺寸 |``large``| height(40px)/size(14px)/padding(12px) |
| 中等尺寸 |``medium``| height(36px)/size(14px)/padding(12px) |
| 默认尺寸 |``default``| height(32px)/size(12px)/padding(12px) |
| 小尺寸 |``small``| height(28px)/size(12px)/padding(6px) |
| 迷你尺寸 |``mini``| height(24px)/size(12px)/padding(4px) |

## 属性字段
|名称| 标识 | 说明 |
|---|---|---|
| 触发方式 |``trigger``|点击菜单可以选择hover或click等方式触发|
| 字段别名 |``field-alias``|自定义使用字段|
| 展示位置 |``placement``|目标显示位置|
| 间隔 |``gutter``|间隔距离|
| 滚动目标 |``scroll-target``|自定义滚动目标盒子|
| 形状 |``shape``|物体形状字段|
| 模式 |``mode``|模式字段可以选择vertical或horizontal等|




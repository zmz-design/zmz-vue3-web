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
            title: 'Tool 工具' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            dataList: [{
                type: 'Array',
                name: '数组类函数',
                data: [],
            },{
                type: 'File',
                name: '文件类函数',
                data: []
            },{
                type: 'Date',
                name: '时间类函数',
                data: []
            },{
                type: 'Find',
                name: '查找类函数',
                data: []
            },{
                type: 'Color',
                name: '颜色类函数',
                data: []
            },{
                type: 'Image',
                name: '图片类函数',
                data: []
            },{
                type: 'Media',
                name: '媒体类函数',
                data: []
            },{
                type: 'Unit',
                name: '单位类函数',
                data: []
            },{
                type: 'Utils',
                name: '公共类函数',
                data: []
            }]
        }
    },
    mounted() {
        this.dataList.forEach(item => {
            for (let i in this.$zmzTools) {
                if (item.type.toLowerCase() == i) {
                    for(let j in this.$zmzTools[i]) {
                        item.data.push(j)
                    }
                }
            }
        })
    },
    methods: {
        currentConfig(data){
            return this.$setting.currentConfig[data];
        }
    }
}
</script>
# Tool 工具

## 工具函数 
<div class="zmz-markdown-article-table">
    <table class="table">
        <thead>
        <tr>
            <th  width="10%">名称</th>
            <th  width="10%">类型</th>
            <th  width="80%">说明</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in dataList">
            <td>{{item.name}}</td>
            <td>{{item.type}}</td>
            <td>{{item.data}}</td>
            </tr>
        </tbody>
    </table>
</div>
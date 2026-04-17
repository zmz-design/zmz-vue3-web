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
    data () {
        return {
            title: 'Table 表格' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            table: [
                {
                  name: '追梦猪1',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪2',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪3',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪4',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪5',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }
            ],
            table2: [
                {
                  name: '1追梦猪',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室',
                  occupation: '前端',
                  province: '河北省',
                  city: '石家庄',
                  like: '打游戏'
                }, {
                  name: '2追梦猪',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室',
                  occupation: '前端',
                  province: '河北省',
                  city: '石家庄',
                  like: '打游戏'
                }, {
                  name: '4追梦猪',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室',
                  occupation: '前端',
                  province: '河北省',
                  city: '石家庄',
                  like: '打游戏'
                }, {
                  name: '3追梦猪',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室',
                  occupation: '前端',
                  province: '河北省',
                  city: '石家庄',
                  like: '打游戏'
                }, {
                  name: '5追梦猪',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室',
                  occupation: '前端',
                  province: '河北省',
                  city: '石家庄',
                  like: '打游戏'
                }, {
                  name: '6追梦猪',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室',
                  occupation: '前端',
                  province: '河北省',
                  city: '石家庄',
                  like: '打游戏'
                }, {
                  name: '7追梦猪',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室',
                  occupation: '前端',
                  province: '河北省',
                  city: '石家庄',
                  like: '打游戏'
                }
            ]
        }
    },
    methods: {
        handleClick (data) {
            console.log(data)
        },
        currentConfig(data){
            return this.$setting.currentConfig[data];
        },
        selectCol(){
            this.$refs.table.setRadioCurrentRow(1)
        },
        resetSelectCol(){
            this.$refs.table.clearRadioCurrentRow()
        },
        selectCol2(){
            this.$refs.table2.setCheckboxCurrentRow([1,2])
        },
        resetSelectCol2(){
            this.$refs.table2.clearCheckboxCurrentRow()
        },
        tableRowClassName({ rowIndex }) {
          if (rowIndex === 1) {
            return 'warning-row';
          } else if (rowIndex === 3) {
            return 'success-row';
          }
          return '';
        },
        sortMethod(a, b) {
          return a.name > b.name
        }
    }
}
</script>
<style>
  .zmz-table .warning-row {
    background: oldlace;
  }

  .zmz-table .success-row {
    background: #f0f9eb;
  }
</style>

# Table 表格
----
## 基础用法
基础的表格展示数据用法。
<div class="demo-block">
  <zmz-table :data='table'>
    <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
    <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
    <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址"></zmz-table-column>
  </zmz-table>
</div>

::: demo
```html
<template>
  <div class="demo-block">
    <zmz-table :data='table'>
      <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
  export default {
    data () {
        return {
            table: [
                {
                  name: '追梦猪1',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪2',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪3',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪4',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪5',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    }
  }
</script>
```
:::

## 带斑马纹
添加属性``stripes``设置隔行变色, 属性``stripes-color``可自定义斑马纹颜色。
<div class="demo-block">
  <zmz-table :data='table' stripes>
    <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
    <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
    <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址"></zmz-table-column>
  </zmz-table>
</div>

::: demo
```html
<template>
  <div class="demo-block">
    <zmz-table :data='table' stripes>
      <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
  export default {
    data () {
        return {
            table: [
                {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    }
  }
</script>
```
:::

## 带边框表格
添加属性``border``设置边线
<div class="demo-block">
  <zmz-table :data='table' border>
      <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
  </zmz-table>
</div>

::: demo
```html
<template>
  <div class="demo-block">
    <zmz-table :data='table' border>
      <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址" width="180"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
  export default {
    data () {
        return {
            table: [
                {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    }
  }
</script>
```
:::

## 带状态表格
基础的表格展示数据用法。
<div class="demo-block">
  <zmz-table :data='table' border :row-class-name="tableRowClassName">
    <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
    <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址" width="180"></zmz-table-column>
    <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
  </zmz-table>
</div>

::: demo
```html
<template>
  <div class="demo-block">
    <zmz-table :data='table' border :row-class-name="tableRowClassName">
        <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
        <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
        <zmz-table-column prop="address" label="地址" width="180"></zmz-table-column>
        <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
  export default {
    data () {
        return {
            table: [
                {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    },
    methods: {
        tableRowClassName({ rowIndex }) {
          if (rowIndex === 1) {
            return 'warning-row';
          } else if (rowIndex === 3) {
            return 'success-row';
          }
          return '';
        },
    }
  }
</script>
```
:::

## 固定头部
纵向内容过多时，设置``height``固定头部。
<div class="demo-block">
  <zmz-table :data='table2' border :height="250">
    <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
    <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址"></zmz-table-column>
    <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
  </zmz-table>
</div>

::: demo
```html
<template>
  <div class="demo-block">
    <zmz-table :data='table2' border :height="250">
      <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
  export default {
    data () {
        return {
            table: [
                {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    }
  }
</script>
```
:::

## 固定列
横向内容过多时，可选择固定列
<div class="demo-block">
  <zmz-table :data='table2' border>
    <zmz-table-column prop="name" label="姓名" width="180" fixed="left"></zmz-table-column>
    <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址2" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址3" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址4" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址5" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址6" width="180"></zmz-table-column>
    <zmz-table-column prop="occupation" label="职业" width="180"></zmz-table-column>
    <zmz-table-column prop="province" label="省份" width="180"></zmz-table-column>
    <zmz-table-column prop="city" label="市区" width="180"></zmz-table-column>
    <zmz-table-column prop="like" label="爱好" width="180" fixed="right"></zmz-table-column>
  </zmz-table>
</div>

::: demo
```html
<template>
  <div class="demo-block">
    <zmz-table :data='table2' border>
      <zmz-table-column prop="name" label="姓名" width="180" fixed="left"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址2" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址3" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址4" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址5" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址6" width="180"></zmz-table-column>
      <zmz-table-column prop="occupation" label="职业" width="180"></zmz-table-column>
      <zmz-table-column prop="province" label="省份" width="180"></zmz-table-column>
      <zmz-table-column prop="city" label="市区" width="180"></zmz-table-column>
      <zmz-table-column prop="like" label="爱好" width="180" fixed="right"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
  export default {
    data () {
        return {
            table2: [
              {
                name: '1追梦猪',
                sex: '男',
                birthday: '2019-8-17',
                address: '石家庄新华区塔坛3201室',
                occupation: '前端',
                province: '河北省',
                city: '石家庄',
                like: '打游戏'
              }, {
                name: '2追梦猪',
                sex: '男',
                birthday: '2019-8-17',
                address: '石家庄新华区塔坛3201室',
                occupation: '前端',
                province: '河北省',
                city: '石家庄',
                like: '打游戏'
              }, {
                name: '4追梦猪',
                sex: '男',
                birthday: '2019-8-17',
                address: '石家庄新华区塔坛3201室',
                occupation: '前端',
                province: '河北省',
                city: '石家庄',
                like: '打游戏'
              }, {
                name: '3追梦猪',
                sex: '男',
                birthday: '2019-8-17',
                address: '石家庄新华区塔坛3201室',
                occupation: '前端',
                province: '河北省',
                city: '石家庄',
                like: '打游戏'
              }, {
                name: '5追梦猪',
                sex: '男',
                birthday: '2019-8-17',
                address: '石家庄新华区塔坛3201室',
                occupation: '前端',
                province: '河北省',
                city: '石家庄',
                like: '打游戏'
              }, {
                name: '6追梦猪',
                sex: '男',
                birthday: '2019-8-17',
                address: '石家庄新华区塔坛3201室',
                occupation: '前端',
                province: '河北省',
                city: '石家庄',
                like: '打游戏'
              }, {
                name: '7追梦猪',
                sex: '男',
                birthday: '2019-8-17',
                address: '石家庄新华区塔坛3201室',
                occupation: '前端',
                province: '河北省',
                city: '石家庄',
                like: '打游戏'
              }
          ]
        }
    }
  }
</script>
```
:::

## 固定列和表头
横纵内容过多时，可选择固定列和表头。
<div class="demo-block">
  <zmz-table :data='table2' border height="250">
    <zmz-table-column prop="name" label="姓名" width="180" fixed="left"></zmz-table-column>
    <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址2" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址3" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址4" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址5" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址6" width="180"></zmz-table-column>
    <zmz-table-column prop="occupation" label="职业" width="180"></zmz-table-column>
    <zmz-table-column prop="province" label="省份" width="180"></zmz-table-column>
    <zmz-table-column prop="city" label="市区" width="180"></zmz-table-column>
    <zmz-table-column prop="like" label="爱好" width="180" fixed="right"></zmz-table-column>
  </zmz-table>
</div>

::: demo
```html
<template>
  <div class="demo-block">
    <zmz-table :data='table2' border>
      <zmz-table-column prop="name" label="姓名" width="180" fixed="left"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址2" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址3" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址4" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址5" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址6" width="180"></zmz-table-column>
      <zmz-table-column prop="occupation" label="职业" width="180"></zmz-table-column>
      <zmz-table-column prop="province" label="省份" width="180"></zmz-table-column>
      <zmz-table-column prop="city" label="市区" width="180"></zmz-table-column>
      <zmz-table-column prop="like" label="爱好" width="180" fixed="right"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
  export default {
    data () {
        return {
            table: [
            {
              name: '追梦猪1',
              sex: '男',
              birthday: '2019-8-17',
              address: '石家庄新华区塔坛3201室',
              occupation: '前端',
              province: '河北省',
              city: '石家庄',
              like: '打游戏'
            }, {
              name: '追梦猪2',
              sex: '男',
              birthday: '2019-8-17',
              address: '石家庄新华区塔坛3201室',
              occupation: '前端',
              province: '河北省',
              city: '石家庄',
              like: '打游戏'
            }, {
              name: '追梦猪3',
              sex: '男',
              birthday: '2019-8-17',
              address: '石家庄新华区塔坛3201室',
              occupation: '前端',
              province: '河北省',
              city: '石家庄',
              like: '打游戏'
            }, {
              name: '追梦猪4',
              sex: '男',
              birthday: '2019-8-17',
              address: '石家庄新华区塔坛3201室',
              occupation: '前端',
              province: '河北省',
              city: '石家庄',
              like: '打游戏'
            }, {
              name: '追梦猪5',
              sex: '男',
              birthday: '2019-8-17',
              address: '石家庄新华区塔坛3201室',
              occupation: '前端',
              province: '河北省',
              city: '石家庄',
              like: '打游戏'
            }, {
              name: '追梦猪6',
              sex: '男',
              birthday: '2019-8-17',
              address: '石家庄新华区塔坛3201室',
              occupation: '前端',
              province: '河北省',
              city: '石家庄',
              like: '打游戏'
            }, {
              name: '追梦猪7',
              sex: '男',
              birthday: '2019-8-17',
              address: '石家庄新华区塔坛3201室',
              occupation: '前端',
              province: '河北省',
              city: '石家庄',
              like: '打游戏'
            }
          ]
        }
    }
  }
</script>
```
:::

## 最大高度
当数据量动态变化时，可以为 Table 设置一个最大高度
<div class="demo-block">
  <zmz-table :data='table2' border :max-height="250">
    <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
    <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址"></zmz-table-column>
    <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
  </zmz-table>
</div>

::: demo
```html
<template>
  <div class="demo-block">
    <zmz-table :data='table2' border :max-height="250">
      <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
  export default {
    data () {
        return {
            table2: [
                {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }, {
                    name: '追梦猪',
                    sex: '男',
                    birthday: '2019-8-17',
                    address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    }
}
</script>
```
:::

## 单选
选择单行数据时使用 radio
<div class="demo-block">
  <zmz-table :data='table' ref="table" border :max-height="250">
    <zmz-table-column prop="name" width="50" type="radio" align="center"></zmz-table-column>
    <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
    <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址"></zmz-table-column>
    <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
  </zmz-table>
  <zmz-space class="zmz-mt-20">
    <zmz-space-item><zmz-button type="primary" @click="selectCol">选择第二行</zmz-button></zmz-space-item>
    <zmz-space-item><zmz-button @click="resetSelectCol">取消选择</zmz-button></zmz-space-item>
  </zmz-space>
</div>

::: demo
```html
<template>
  <div class="demo-block">
    <zmz-table :data='table' ref="table" border :max-height="250">
      <zmz-table-column prop="name" width="50" type="radio" align="center"></zmz-table-column>
      <zmz-table-column prop="name" label="姓名" width="180"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
    </zmz-table>
    <zmz-space class="zmz-mt-20">
      <zmz-space-item><zmz-button type="primary" @click="selectCol">选择第二行</zmz-button></zmz-space-item>
      <zmz-space-item><zmz-button @click="resetSelectCol">取消选择</zmz-button></zmz-space-item>
    </zmz-space>
  </div>
</template>
<script>
 export default {
    data () {
        return {
            table: [
                {
                  name: '追梦猪1',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪2',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪3',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪4',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪5',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    },
    methods: {
        selectCol(data){
            this.$refs.table.setRadioCurrentRow(1)
        },
        resetSelectCol(data){
            this.$refs.table.clearRadioCurrentRow()
        }
    }
}
</script>
```
:::

## 多选
选择多行数据时使用 checkbox
<div class="demo-block">
  <zmz-table :data='table2' ref="table2" border :max-height="250">
    <zmz-table-column prop="name" label="姓名" width="50" type="checkbox" align="center"></zmz-table-column>
    <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址"></zmz-table-column>
    <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
  </zmz-table>
  <zmz-space class="zmz-mt-20">
    <zmz-space-item><zmz-button type="primary" @click="selectCol2">选择第二,三行</zmz-button></zmz-space-item>
    <zmz-space-item><zmz-button @click="resetSelectCol2">取消选择</zmz-button></zmz-space-item>
  </zmz-space>
</div>

::: demo
```html
<template>
  <div class="demo-block">
    <zmz-table :data='table2' ref="table2" border :max-height="250">
      <zmz-table-column prop="name" label="姓名" width="50" type="checkbox" align="center"></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
    </zmz-table>
    <zmz-space class="zmz-mt-20">
      <zmz-space-item><zmz-button type="primary" @click="selectCol2">选择第二,三行</zmz-button></zmz-space-item>
      <zmz-space-item><zmz-button @click="resetSelectCol2">取消选择</zmz-button></zmz-space-item>
    </zmz-space>
  </div>
</template>
<script>
 export default {
    data () {
        return {
            table2: [
                {
                  name: '追梦猪1',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪2',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪3',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪4',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪5',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    },
    methods: {
        selectCol(data){
            this.$refs.table2.setRadioCurrentRow(1)
        },
        resetSelectCol(data){
            this.$refs.table2.clearRadioCurrentRow()
        }
    }
}
</script>
```
:::

## 排序
对表格进行排序，可快速查找或对比数据。
<div class="demo-block">
  <zmz-table :data='table2' border :max-height="250">
    <zmz-table-column prop="name" label="姓名" width="180" align="left" sortable></zmz-table-column>
    <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址"></zmz-table-column>
    <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
  </zmz-table>
</div>

::: demo
```html
<template>
  <div class="demo-block">
    <zmz-table :data='table2' border :max-height="250">
      <zmz-table-column prop="name" label="姓名" width="180" align="left" sortable></zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
      <zmz-table-column prop="sex" label="性别" width="180"></zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
 export default {
    data () {
        return {
            table2: [
                {
                  name: '追梦猪1',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪2',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪3',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪4',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪5',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    }
}
</script>
```
:::

## 自定义模板
自定义列的显示内容，可组合其他组件使用。
<div class="demo-block">
  <zmz-table :data='table2' border :max-height="250">
    <zmz-table-column prop="name" label="姓名" width="180" align="left">
      <template #default="scope">
      {{scope.row?.name}}
      </template>
    </zmz-table-column>
    <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
    <zmz-table-column prop="address" label="地址"></zmz-table-column>
    <zmz-table-column prop="sex" label="操作" width="180">
      <template #default="scope">
        <zmz-space :interval="false" :show-last-padding="false">
          <zmz-space-item><zmz-button type="primary">查看</zmz-button></zmz-space-item>
          <zmz-space-item><zmz-button type="error">删除</zmz-button></zmz-space-item>
        </zmz-space>
      </template>
    </zmz-table-column>
  </zmz-table>
</div>

::: demo
```html
<template>
  <div class="demo-block">
    <zmz-table :data='table2' border :max-height="250">
      <zmz-table-column prop="name" label="姓名" width="180" align="left">
        <template #default="scope">
        {{scope.row.name}}
        </template>
      </zmz-table-column>
      <zmz-table-column prop="birthday" label="生日" width="180"></zmz-table-column>
      <zmz-table-column prop="address" label="地址"></zmz-table-column>
      <zmz-table-column prop="sex" label="操作" width="180">
        <template #default="scope">
          <zmz-space>
            <zmz-space-item><zmz-button type="primary">查看</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="error">删除</zmz-button></zmz-space-item>
          </zmz-space>
        </template>
      </zmz-table-column>
    </zmz-table>
  </div>
</template>
<script>
 export default {
    data () {
        return {
            table: [
                {
                  name: '追梦猪1',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪2',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪3',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪4',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }, {
                  name: '追梦猪5',
                  sex: '男',
                  birthday: '2019-8-17',
                  address: '石家庄新华区塔坛3201室'
                }
            ]
        }
    }
}
</script>
```
:::

## Table 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | 绑定数据 | Array | — | — |
| column | 绑定数据头部 | Array | — | — |
| height | 设置高度，可固定表头 | String/Number | — | — |
| border | 是否显示边线 | Boolean | — | false |
| stripes | 隔行变色斑马纹路 | Boolean | — | false |
| stripes-color | 自定义隔行变色颜色 | String | — | — |
| row-class-name | 自定义行内类名 | Function({row,rowIndex})/String | — | — |
| default-sort | 默认的排序列的 prop 字段和order顺序 |Object | prop：字段， order:排序(desc, asc) | 如果只指定了prop, 没有指定order, 则默认顺序是asc|


## Table-Thead 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | table的th表头 | — | —  | — |
| width | 表格宽度 | — | —  | 自动 |
| field | title对应数据字段名称 | — | —  | — |
| fixed | 列固定 | string | left、right  | — |

## Tabs 方法

| 事件名称      | 说明         |  参数      | 说明  |
|---------- |-------------- |---------- |---------- |
| on-select | 切换回调 | row  | — |
| on-select-radio | 选中radio回调 | row  | — |
| on-select-checkbox | 选中checkbox回调 | row  | [] |
| on-select-all-checkbox | 选中全部checkbox触发 | state, row  | — |
| on-sort-change | 排序筛选时触发 | row, order, event  | — |
| on-row-click | 当某一行被单击时会触发该事件 | row, index, event | — |
| on-row-dblclick | 当某一行被双击时会触发该事件 | row, index, event | — |
| on-row-contextmenu | 当某一行被右击时会触发该事件 | row, index, event | — |
| on-row-mouseover | 滑入某一行时会触发该事件 | row, index, event | — |
| on-row-mouseout | 滑出某一行时会触发该事件 | row, index, event | — |
| on-cell-click | 当某一单元格被单击时会触发该事件 | cell, row, index, event | — |
| on-cell-dblclick | 当某一单元格被双击时会触发该事件 | cell, row, index, event | — |
| on-cell-mouseover | 滑入某一单元格时会触发该事件 | cell, row, index, event | — |
| on-cell-mouseout | 滑出某一单元格时会触发该事件 | cell, row, index, event | — |



## Table-Methods 方法
| 参数      | 说明          | 参数      | 说明                           |
|---------- |-------------- |---------- |--------------------------------  |
| setRadioCurrentRow | 设置选中项 | 下标| Number/String  |
| clearRadioCurrentRow | 清除选中项 | — | —  |
| setCheckboxCurrentRow | 设置多选选中项 | 下标 | Number/String  |
| clearCheckboxCurrentRow | 清除多选选中项 | — | —  |

## Table-column 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 内置列类型 | String | left、right  | — |
| label | 表头文本 | String | —  | — |
| width | 表格宽度 | String | —  | — |
| min-width | 表格最小宽度 | String | —  | 80 |
| prop | 数据对应字段 | String | —  | — |
| parent | 多级表头嵌套顶级父级特有 | Boolean | —  | false |
| fixed | 列固定 | String/Boolean | left、right、false、true  | false |
| align | 对齐方式 | String | left、right、center  | left |
| sortable | 对应列是否可以排序，如果设置为 'custom' | Boolean | —  | false |

## Table-column slot插槽
| 名称      | 参数          | 说明          |
|---------- |-------------- |-------------- |
| default | { row, rowIndex } | 默认插槽 |
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
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        },
        add() {
            this.model4.items.push({label: '新增', value: ''})
        },
        del() {
            this.model4.items.splice(-1)
        },
        resetFields(name) {
            this.$refs[name].resetFields()
        },
        clearsAll(name) {
            this.$refs[name].clearValidate()
        },
        clears(name, fileds) {
            this.$refs[name].clearValidate(fileds)
        },
        onSubmit(name) {
            this.$refs[name].validate(res => {
                if (res) {
                    this.$message.success('效验成功');
                } else {
                    this.$message.error('校验失败');
                }
            });
        }
    },
    data() {
        var validateAge = (rule, value, callback) => {
            if (!value) {
              return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
              if (value < 18) {
                callback(new Error('必须年满18岁'));
              } else {
                callback();
              }
            }, 1000);
          };
          var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.model2.password2 !== '') {
                this.$refs.myForms.validateField('password2');
              }
              callback();
            }
          };
          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.model2.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          };
        const generateData = () => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: `左选项 ${ i }`,
                disabled: i % 4 === 0
              });
            }
            return data;
        };
        return {
            title: 'Form 表单' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            description: this.currentConfig('description'),
            data: 'right',
            size: 'default',
            model: { 
                input: '', 
                select: '' ,
                radio: '' ,
                datepicker: '' ,
                slider: '' ,
                checkbox: [] ,
                switch: true,
                textarea: '',
                cascader: [],
                colorpicker: '',
                timepicker: '',
                inputnumber: 1,
                rate: '',
                upload: [],
                transfer: [],
            },
            model2: {
                password: '',
                username: '',
            },
            model3: {
                password: '',
                password2: '',
                age: ''
            },
            model4: {
                items: [{label: '新增', value: ''}]
            },
            rules: {
                input: [{ required: true, message: '请输入' , trigger: 'blur'}],
                select: [{ required: true, message: '请选择' , trigger: 'change'}],
                radio: [{ required: true, message: '请选择' , trigger: 'change'}],
                datepicker: [{ required: true, type:'date', message: '请选择' , trigger: 'change'}],
                checkbox: [{ required: true, type:'array',message: '请选择' , trigger: 'change'}],
                textarea: [{ required: true, message: '请输入' , trigger: 'blur'}],
                cascader: [{ required: true, type: 'array', message: '请选择' , trigger: 'change'}],
                colorpicker: [{ required: true, message: '请选择' , trigger: 'blur'}],
                rate: [{ required: true, type: 'number', message: '请选择' , trigger: 'change'}],
                upload: [{ required: true, type: 'array', message: '请选择' , trigger: 'change'}],
                timepicker: [{ required: true, type: 'date',message: '请选择' , trigger: 'change'}],
            },
            rules2: {
                password: [{ required: true, message: '请输入' ,  trigger: 'blur'}],
                username: [{ required: true, message: '请输入' , trigger: 'blur'}],
            },
            rules3: {
                password: [{ validator: validatePass , trigger: 'blur'}],
                password2: [{ validator: validatePass2 , trigger: 'blur'}],
                age: [{ validator: validateAge , type: 'string' ,trigger: 'blur'}]
            },
            transferList: generateData(),
            input: '',
            options: [
                {
                    value: 'member',
                    label: '会员'
                },
                {
                    value: 'people',
                    label: '普通'
                },
                {
                    value: 'admin',
                    label: '超级管理员'
                }
            ],
            options2: [
                {
                    value: 'zhinan',
                    label: '指南',
                    disabled: true,
                    children: [
                        {
                            value: 'jieshao',
                            label: '介绍',
                            children: [
                                {
                                    value: 'texing',
                                    label: '特性'
                                },
                            ]
                        },
                        {
                            value: 'anzhuang',
                            label: '安装',
                            children: [
                                {
                                    value: 'npmanzhuang',
                                    label: 'npm 安装'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'zujian',
                    label: '组件',
                    children: [
                            {
                            value: 'basic',
                            label: '基础',
                            children: [
                                {
                                    value: 'icon',
                                    label: 'Icon 图标'
                                }
                            ]
                        },
                    ]
                }
            ]
        };
    }
};
</script>

# Form 表单
----
由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据
## 基础用法
<div class="demo-block">
    <div style="width:500px">
        <zmz-form :model="model" :rules="rules" ref="oneForm" placeholder-prefix-select="请选择" placeholder-prefix-input="请输入" label-width="100px">
            <zmz-form-item label="输入框" prop="input">
                <zmz-input v-model="model.input"></zmz-input>
            </zmz-form-item>
            <zmz-form-item label="下拉框" prop="select">
                <zmz-select v-model="model.select">
                   <zmz-select-option v-for="(item,index) in options" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
                </zmz-select>
            </zmz-form-item>
            <zmz-form-item label="单选框" prop="radio">
                <zmz-radio-group v-model="model.radio">
                    <zmz-radio label="男" value="1">男</zmz-radio>
                    <zmz-radio label="女" value="0">女</zmz-radio>
                    <zmz-radio label="未知" value="2">未知</zmz-radio>
                </zmz-radio-group>
            </zmz-form-item>
            <zmz-form-item label="滑块" prop="slider">
                <zmz-slider v-model="model.slider"></zmz-slider>
            </zmz-form-item>
            <zmz-form-item label="复选框" prop="checkbox">
                <zmz-checkbox-group v-model="model.checkbox">
                  <zmz-checkbox label="篮球" value="1">篮球</zmz-checkbox>
                  <zmz-checkbox label="游泳" value="2">游泳</zmz-checkbox>
                  <zmz-checkbox label="健身" value="3">健身</zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-form-item>
            <zmz-form-item label="开关" prop="switch">
                <zmz-switch v-model="model.switch"></zmz-switch>
            </zmz-form-item>
            <zmz-form-item label="数字输入框" prop="inputnumber">
                <zmz-inputnumber v-model="model.inputnumber"></zmz-inputnumber>
            </zmz-form-item>
            <zmz-form-item label="日期选择器" prop="datepicker">
                <zmz-datepicker v-model="model.datepicker"></zmz-datepicker>
            </zmz-form-item>
            <zmz-form-item label="时间选择器" prop="timepicker">
                <zmz-timepicker v-model="model.timepicker"></zmz-timepicker>
            </zmz-form-item>
            <zmz-form-item label="级联选择器" prop="cascader">
                <zmz-cascader v-model="model.cascader" :options="options2"></zmz-cascader>
            </zmz-form-item>
            <zmz-form-item label="颜色选择器" prop="colorpicker">
                <zmz-colorpicker v-model="model.colorpicker"></zmz-colorpicker>
            </zmz-form-item>
            <zmz-form-item label="文本域" prop="textarea">
                <zmz-textarea v-model="model.textarea"></zmz-textarea>
            </zmz-form-item>
            <zmz-form-item label="评价" prop="rate">
                <zmz-rate v-model="model.rate"></zmz-rate>
            </zmz-form-item>
            <zmz-form-item label="上传">
                <zmz-upload v-model="model.upload"></zmz-upload>
            </zmz-form-item>
            <zmz-form-item label="穿梭框" prop="transfer" :rules="[{ required: true, type: 'array', message: '请选择' , trigger: 'change'}]">
                <zmz-transfer v-model="model.transfer" :data="transferList"></zmz-transfer>
            </zmz-form-item>
            <zmz-form-item>
                <zmz-space>
                    <zmz-space-item><zmz-button type="primary" @click="onSubmit('oneForm')">确认</zmz-button></zmz-space-item>
                    <zmz-space-item><zmz-button @click="resetFields('oneForm')">重置</zmz-button></zmz-space-item>
                </zmz-space>
            </zmz-form-item>
        </zmz-form>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="width:500px">
            <zmz-form :model="model" :rules="rules" ref="oneForm" placeholder-prefix-select="请选择" placeholder-prefix-input="请输入" label-width="100px">
                <zmz-form-item label="输入框" prop="input">
                    <zmz-input v-model="model.input"></zmz-input>
                </zmz-form-item>
                <zmz-form-item label="下拉框" prop="select">
                    <zmz-select v-model="model.select">
                    <zmz-select-option v-for="(item,index) in options" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
                    </zmz-select>
                </zmz-form-item>
                <zmz-form-item label="单选框" prop="radio">
                    <zmz-radio-group v-model="model.radio">
                        <zmz-radio label="男" value="1">男</zmz-radio>
                        <zmz-radio label="女" value="0">女</zmz-radio>
                        <zmz-radio label="未知" value="2">未知</zmz-radio>
                    </zmz-radio-group>
                </zmz-form-item>
                <zmz-form-item label="滑块" prop="slider">
                    <zmz-slider v-model="model.slider"></zmz-slider>
                </zmz-form-item>
                <zmz-form-item label="复选框" prop="checkbox">
                    <zmz-checkbox-group v-model="model.checkbox">
                    <zmz-checkbox label="篮球" value="1">篮球</zmz-checkbox>
                    <zmz-checkbox label="游泳" value="2">游泳</zmz-checkbox>
                    <zmz-checkbox label="健身" value="3">健身</zmz-checkbox>
                    </zmz-checkbox-group>
                </zmz-form-item>
                <zmz-form-item label="开关" prop="switch">
                    <zmz-switch v-model="model.switch"></zmz-switch>
                </zmz-form-item>
                <zmz-form-item label="数字输入框" prop="inputnumber">
                    <zmz-inputnumber v-model="model.inputnumber"></zmz-inputnumber>
                </zmz-form-item>
                <zmz-form-item label="日期选择器" prop="datepicker">
                    <zmz-datepicker v-model="model.datepicker"></zmz-datepicker>
                </zmz-form-item>
                <zmz-form-item label="时间选择器" prop="timepicker">
                    <zmz-timepicker v-model="model.timepicker"></zmz-timepicker>
                </zmz-form-item>
                <zmz-form-item label="级联选择器" prop="cascader">
                    <zmz-cascader v-model="model.cascader" :options="options2"></zmz-cascader>
                </zmz-form-item>
                <zmz-form-item label="颜色选择器" prop="colorpicker">
                    <zmz-colorpicker v-model="model.colorpicker"></zmz-colorpicker>
                </zmz-form-item>
                <zmz-form-item label="文本域" prop="textarea">
                    <zmz-textarea v-model="model.textarea"></zmz-textarea>
                </zmz-form-item>
                <zmz-form-item label="评价" prop="rate">
                    <zmz-rate v-model="model.rate"></zmz-rate>
                </zmz-form-item>
                <zmz-form-item label="上传">
                    <zmz-upload v-model="model.upload"></zmz-upload>
                </zmz-form-item>
                <zmz-form-item label="穿梭框" prop="transfer" :rules="[{ required: true, type: 'array', message: '请选择' , trigger: 'change'}]">
                    <zmz-transfer v-model="model.transfer" :data="transferList"></zmz-transfer>
                </zmz-form-item>
                <zmz-form-item>
                    <zmz-space>
                        <zmz-space-item><zmz-button type="primary" @click="onSubmit('oneForm')">确认</zmz-button></zmz-space-item>
                        <zmz-space-item><zmz-button @click="resetFields('oneForm')">重置</zmz-button></zmz-space-item>
                    </zmz-space>
                </zmz-form-item>
            </zmz-form>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        resetFields(name) {
            this.$refs[name].resetFields()
        },
        onSubmit(name) {
            this.$refs[name].validate(res => {
                if (res) {
                    this.$message.success('效验成功');
                } else {
                    this.$message.error('校验失败');
                }
            });
        }
    },
    data() {
        const generateData = () => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: `左选项 ${ i }`,
                disabled: i % 4 === 0
              });
            }
            return data;
        };
        return {
            model: { 
                input: '', 
                select: '' ,
                radio: '' ,
                datepicker: '' ,
                slider: '' ,
                checkbox: [] ,
                switch: true,
                textarea: '',
                cascader: [],
                colorpicker: '',
                timepicker: '',
                inputnumber: 1,
                rate: '',
                upload: [],
                transfer: []
            },
            transferList: generateData(),
            input: '',
            rules: {
                input: [{ required: true, message: '请输入' , trigger: 'blur'}],
                select: [{ required: true, message: '请选择' , trigger: 'change'}],
                radio: [{ required: true, message: '请选择' , trigger: 'change'}],
                datepicker: [{ required: true, type:'date', message: '请选择' , trigger: 'change'}],
                checkbox: [{ required: true, type:'array',message: '请选择' , trigger: 'change'}],
                textarea: [{ required: true, message: '请输入' , trigger: 'blur'}],
                cascader: [{ required: true, type: 'array', message: '请选择' , trigger: 'change'}],
                colorpicker: [{ required: true, message: '请选择' , trigger: 'blur'}],
                rate: [{ required: true, type: 'number', message: '请选择' , trigger: 'change'}],
                upload: [{ required: true, type: 'array', message: '请选择' , trigger: 'change'}],
                timepicker: [{ required: true, type: 'date',message: '请选择' , trigger: 'change'}],
            },
            options: [
                {
                    value: 'member',
                    label: '会员'
                },
                {
                    value: 'people',
                    label: '普通'
                },
                {
                    value: 'admin',
                    label: '超级管理员'
                }
            ],
            options2: [
                {
                    value: 'zhinan',
                    label: '指南',
                    disabled: true,
                    children: [
                        {
                            value: 'jieshao',
                            label: '介绍',
                            children: [
                                {
                                    value: 'texing',
                                    label: '特性'
                                },
                            ]
                        },
                        {
                            value: 'anzhuang',
                            label: '安装',
                            children: [
                                {
                                    value: 'npmanzhuang',
                                    label: 'npm 安装'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'zujian',
                    label: '组件',
                    children: [
                            {
                            value: 'basic',
                            label: '基础',
                            children: [
                                {
                                    value: 'icon',
                                    label: 'Icon 图标'
                                }
                            ]
                        },
                    ]
                }
            ]
        };
    }
};
</script>
```
:::

## 行内用法
<div class="demo-block">
    <zmz-form :model="model2" :rules="rules2" :inline="true" ref="twoForm">
        <zmz-form-item label="用户名" prop="username">
            <zmz-input v-model="model.username"></zmz-input>
        </zmz-form-item>
        <zmz-form-item label="密码" prop="password">
            <zmz-input v-model="model.password"></zmz-input>
        </zmz-form-item>
        <zmz-form-item>
            <zmz-space>
                <zmz-space-item><zmz-button type="primary" @click="onSubmit('twoForm')">确认</zmz-button></zmz-space-item>
                <zmz-space-item><zmz-button @click="resetFields('twoForm')">重置</zmz-button></zmz-space-item>
            </zmz-space>
        </zmz-form-item>
    </zmz-form>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <zmz-form :model="model2" :rules="rules2" :inline="true" ref="twoForm">
            <zmz-form-item label="用户名" prop="username">
                <zmz-input v-model="model.username"></zmz-input>
            </zmz-form-item>
            <zmz-form-item label="密码" prop="password">
                <zmz-input v-model="model.password"></zmz-input>
            </zmz-form-item>
            <zmz-form-item>
                <zmz-space>
                    <zmz-space-item><zmz-button type="primary" @click="onSubmit('twoForm')">确认</zmz-button></zmz-space-item>
                    <zmz-space-item><zmz-button @click="resetFields('twoForm')">重置</zmz-button></zmz-space-item>
                </zmz-space>
            </zmz-form-item>
        </zmz-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            model2: {
                password: '',
                username: '',
            },
            rules2: {
                password: [{ required: true, message: '请输入' ,  trigger: 'blur'}],
                username: [{ required: true, message: '请输入' , trigger: 'blur'}],
            },
        };
    },
    methods: {
        resetFields(name) {
            this.$refs[name].resetFields()
        },
        onSubmit(name) {
            this.$refs[name].validate(res => {
                if (res) {
                    this.$message.success('效验成功');
                } else {
                    this.$message.error('校验失败');
                }
            });
        }
    }
};
</script>
```
:::

## 对齐方式
<div class="demo-block">
    <div style="margin-bottom: 20px;">
        <zmz-radio-group v-model="data" button>
            <zmz-radio value="left">左对齐</zmz-radio>
            <zmz-radio value="right">右对齐</zmz-radio>
            <zmz-radio value="top">顶部对齐</zmz-radio>
        </zmz-radio-group>
    </div>
    <div style="width:500px">
        <zmz-form :model="model" ref="myForm" label-width="100px" :label-position="data">
            <zmz-form-item label="名称" prop="input">
                <zmz-input v-model="model.input"></zmz-input>
            </zmz-form-item>
            <zmz-form-item label="下拉框" prop="select">
                <zmz-select v-model="model.select">
                   <zmz-select-option v-for="(item,index) in options" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
                </zmz-select>
            </zmz-form-item>
            <zmz-form-item label="单选框" prop="radio">
                <zmz-radio-group v-model="model.radio">
                    <zmz-radio label="男" value="1">男</zmz-radio>
                    <zmz-radio label="女" value="0">女</zmz-radio>
                    <zmz-radio label="未知" value="2">未知</zmz-radio>
                </zmz-radio-group>
            </zmz-form-item>
        </zmz-form>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="margin-bottom: 20px;">
            <zmz-radio-group v-model="data" button>
                <zmz-radio value="left">左对齐</zmz-radio>
                <zmz-radio value="right">右对齐</zmz-radio>
                <zmz-radio value="top">顶部对齐</zmz-radio>
            </zmz-radio-group>
        </div>
        <div style="width:500px">
            <zmz-form :model="model" ref="myForm" label-width="100px" :label-position="data">
                <zmz-form-item label="名称" prop="input">
                    <zmz-input v-model="model.input"></zmz-input>
                </zmz-form-item>
                <zmz-form-item label="下拉框" prop="select">
                    <zmz-select v-model="model.select">
                       <zmz-select-option v-for="(item,index) in options" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
                    </zmz-select>
                </zmz-form-item>
                <zmz-form-item label="单选框" prop="radio">
                    <zmz-radio-group v-model="model.radio">
                        <zmz-radio label="男" value="1">男</zmz-radio>
                        <zmz-radio label="女" value="0">女</zmz-radio>
                        <zmz-radio label="未知" value="2">未知</zmz-radio>
                    </zmz-radio-group>
                </zmz-form-item>
            </zmz-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            model: { 
                input: '', 
                select: '' ,
                radio: '' ,
            },
            transferList: generateData(),
            data: 'left',
            options: [
                {
                    value: 'member',
                    label: '会员'
                },
                {
                    value: 'people',
                    label: '普通'
                },
                {
                    value: 'admin',
                    label: '超级管理员'
                }
            ],
        };
    }
};
</script>
```
:::

## 自定义校验规则
<div class="demo-block">
    <div style="width:500px">
        <zmz-form :model="model3" :rules="rules3" ref="threeForms" label-width="100px" :label-position="data">
            <zmz-form-item label="密码" prop="password">
                <zmz-input v-model="model3.password"></zmz-input>
            </zmz-form-item>
            <zmz-form-item label="确认密码" prop="password2">
                <zmz-input v-model="model3.password2"></zmz-input>
            </zmz-form-item>
            <zmz-form-item label="年龄" prop="age">
                <zmz-input v-model="model3.age"></zmz-input>
            </zmz-form-item>
            <zmz-form-item>
                <zmz-space>
                    <zmz-space-item><zmz-button type="primary" @click="onSubmit('threeForms')">确认</zmz-button></zmz-space-item>
                    <zmz-space-item><zmz-button @click="resetFields('threeForms')">重置</zmz-button></zmz-space-item>
                    <zmz-space-item><zmz-button @click="clears('threeForms', 'age')">清空年龄验证</zmz-button></zmz-space-item>
                    <zmz-space-item><zmz-button @click="clearsAll('threeForms')">清空全部验证</zmz-button></zmz-space-item>
                </zmz-space>
            </zmz-form-item>
        </zmz-form>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="width:500px">
            <zmz-form :model="model3" :rules="rules3" ref="threeForms" label-width="100px" :label-position="data">
                <zmz-form-item label="密码" prop="password">
                    <zmz-input v-model="model3.password"></zmz-input>
                </zmz-form-item>
                <zmz-form-item label="确认密码" prop="password2">
                    <zmz-input v-model="model3.password2"></zmz-input>
                </zmz-form-item>
                <zmz-form-item label="年龄" prop="age">
                    <zmz-input v-model="model3.age"></zmz-input>
                </zmz-form-item>
                <zmz-form-item>
                    <zmz-space>
                        <zmz-space-item><zmz-button type="primary" @click="onSubmit('threeForms')">确认</zmz-button></zmz-space-item>
                        <zmz-space-item><zmz-button @click="resetFields('threeForms')">重置</zmz-button></zmz-space-item>
                        <zmz-space-item><zmz-button @click="clears('threeForms', 'age')">清空年龄验证</zmz-button></zmz-space-item>
                        <zmz-space-item><zmz-button @click="clearsAll('threeForms')">清空全部验证</zmz-button></zmz-space-item>
                    </zmz-space>
                </zmz-form-item>
            </zmz-form>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        resetFields(name) {
            this.$refs[name].resetFields()
        },
        clearsAll(name) {
            this.$refs[name].clearValidate()
        },
        clears(name, fileds) {
            this.$refs[name].clearValidate(fileds)
        },
        onSubmit(name) {
            this.$refs[name].validate(res => {
                if (res) {
                    this.$message.success('效验成功');
                } else {
                    this.$message.error('校验失败');
                }
            });
        }
    },
    data() {
        var validateAge = (rule, value, callback) => {
            if (!value) {
              return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
              if (value < 18) {
                callback(new Error('必须年满18岁'));
              } else {
                callback();
              }
            }, 1000);
          };
          var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.model2.password2 !== '') {
                this.$refs.myForms.validateField('password2');
              }
              callback();
            }
          };
          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.model2.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          };
        return {
            data: 'right',
            size: 'default',
            model3: {
                password: '',
                password2: '',
                age: ''
            },
            rules3: {
                password: [{ validator: validatePass , trigger: 'blur'}],
                password2: [{ validator: validatePass2 , trigger: 'blur'}],
                age: [{ validator: validateAge , type: 'string' ,trigger: 'blur'}]
            }
        };
    }
};
</script>
```
:::

## 不同尺寸
<div class="demo-block">
    <div style="margin-bottom: 20px;">
        <zmz-radio-group v-model="size" button>
            <zmz-radio value="large">超大</zmz-radio>
            <zmz-radio value="medium">中等</zmz-radio>
            <zmz-radio value="default">默认</zmz-radio>
            <zmz-radio value="small">小</zmz-radio>
            <zmz-radio value="mini">迷你</zmz-radio>
        </zmz-radio-group>
    </div>
    <div style="width:500px">
        <zmz-form :model="model" :rules="rules" ref="fourForm" label-width="100px" :size="size">
            <zmz-form-item label="输入框" prop="input">
                <zmz-input v-model="model.input"></zmz-input>
            </zmz-form-item>
            <zmz-form-item label="下拉框" prop="select">
                <zmz-select v-model="model.select">
                   <zmz-select-option v-for="(item,index) in options" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
                </zmz-select>
            </zmz-form-item>
            <zmz-form-item label="单选框" prop="radio">
                <zmz-radio-group v-model="model.radio">
                    <zmz-radio label="男" value="1">男</zmz-radio>
                    <zmz-radio label="女" value="0">女</zmz-radio>
                    <zmz-radio label="未知" value="2">未知</zmz-radio>
                </zmz-radio-group>
            </zmz-form-item>
            <zmz-form-item label="滑块" prop="slider">
                <zmz-slider v-model="model.slider"></zmz-slider>
            </zmz-form-item>
            <zmz-form-item label="复选框" prop="checkbox">
                <zmz-checkbox-group v-model="model.checkbox">
                  <zmz-checkbox label="篮球" value="1">篮球</zmz-checkbox>
                  <zmz-checkbox label="游泳" value="2">游泳</zmz-checkbox>
                  <zmz-checkbox label="健身" value="3">健身</zmz-checkbox>
                </zmz-checkbox-group>
            </zmz-form-item>
            <zmz-form-item label="开关" prop="switch">
                <zmz-switch v-model="model.switch"></zmz-switch>
            </zmz-form-item>
            <zmz-form-item label="数字输入框" prop="inputnumber">
                <zmz-inputnumber v-model="model.inputnumber"></zmz-inputnumber>
            </zmz-form-item>
            <zmz-form-item label="日期选择器" prop="datepicker">
                <zmz-datepicker v-model="model.datepicker"></zmz-datepicker>
            </zmz-form-item>
            <zmz-form-item label="时间选择器" prop="timepicker">
                <zmz-timepicker v-model="model.timepicker"></zmz-timepicker>
            </zmz-form-item>
            <zmz-form-item label="级联选择器" prop="cascader">
                <zmz-cascader v-model="model.cascader" :options="options2"></zmz-cascader>
            </zmz-form-item>
            <zmz-form-item label="颜色选择器" prop="colorpicker">
                <zmz-colorpicker v-model="model.colorpicker"></zmz-colorpicker>
            </zmz-form-item>
            <zmz-form-item label="评价" prop="rate">
                <zmz-rate v-model="model.rate"></zmz-rate>
            </zmz-form-item>
            <zmz-form-item>
                <zmz-space>
                    <zmz-space-item><zmz-button type="primary" @click="onSubmit('fourForm')">确认</zmz-button></zmz-space-item>
                    <zmz-space-item><zmz-button @click="resetFields('fourForm')">重置</zmz-button></zmz-space-item>
                </zmz-space>
            </zmz-form-item>
        </zmz-form>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div style="margin-bottom: 20px;">
            <zmz-radio-group v-model="size" button>
                <zmz-radio value="large">超大</zmz-radio>
                <zmz-radio value="medium">中等</zmz-radio>
                <zmz-radio value="default">默认</zmz-radio>
                <zmz-radio value="small">小</zmz-radio>
                <zmz-radio value="mini">迷你</zmz-radio>
            </zmz-radio-group>
        </div>
        <div style="width:500px">
            <zmz-form :model="model" :rules="rules" ref="fourForm" label-width="100px" :size="size">
                <zmz-form-item label="输入框" prop="input">
                    <zmz-input v-model="model.input"></zmz-input>
                </zmz-form-item>
                <zmz-form-item label="下拉框" prop="select">
                    <zmz-select v-model="model.select">
                    <zmz-select-option v-for="(item,index) in options" :value="item.value" :label="item.label" :key="index"></zmz-select-option>
                    </zmz-select>
                </zmz-form-item>
                <zmz-form-item label="单选框" prop="radio">
                    <zmz-radio-group v-model="model.radio">
                        <zmz-radio label="男" value="1">男</zmz-radio>
                        <zmz-radio label="女" value="0">女</zmz-radio>
                        <zmz-radio label="未知" value="2">未知</zmz-radio>
                    </zmz-radio-group>
                </zmz-form-item>
                <zmz-form-item label="滑块" prop="slider">
                    <zmz-slider v-model="model.slider"></zmz-slider>
                </zmz-form-item>
                <zmz-form-item label="复选框" prop="checkbox">
                    <zmz-checkbox-group v-model="model.checkbox">
                    <zmz-checkbox label="篮球" value="1">篮球</zmz-checkbox>
                    <zmz-checkbox label="游泳" value="2">游泳</zmz-checkbox>
                    <zmz-checkbox label="健身" value="3">健身</zmz-checkbox>
                    </zmz-checkbox-group>
                </zmz-form-item>
                <zmz-form-item label="开关" prop="switch">
                    <zmz-switch v-model="model.switch"></zmz-switch>
                </zmz-form-item>
                <zmz-form-item label="数字输入框" prop="inputnumber">
                    <zmz-inputnumber v-model="model.inputnumber"></zmz-inputnumber>
                </zmz-form-item>
                <zmz-form-item label="日期选择器" prop="datepicker">
                    <zmz-datepicker v-model="model.datepicker"></zmz-datepicker>
                </zmz-form-item>
                <zmz-form-item label="时间选择器" prop="timepicker">
                    <zmz-timepicker v-model="model.timepicker"></zmz-timepicker>
                </zmz-form-item>
                <zmz-form-item label="级联选择器" prop="cascader">
                    <zmz-cascader v-model="model.cascader" :options="options2"></zmz-cascader>
                </zmz-form-item>
                <zmz-form-item label="颜色选择器" prop="colorpicker">
                    <zmz-colorpicker v-model="model.colorpicker"></zmz-colorpicker>
                </zmz-form-item>
                <zmz-form-item label="评价" prop="rate">
                    <zmz-rate v-model="model.rate"></zmz-rate>
                </zmz-form-item>
                <zmz-form-item>
                    <zmz-space>
                        <zmz-space-item><zmz-button type="primary" @click="onSubmit('fourForm')">确认</zmz-button></zmz-space-item>
                        <zmz-space-item><zmz-button @click="resetFields('fourForm')">重置</zmz-button></zmz-space-item>
                    </zmz-space>
                </zmz-form-item>
            </zmz-form>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        resetFields(name) {
            this.$refs[name].resetFields()
        },
        onSubmit(name) {
            this.$refs[name].validate(res => {
                if (res) {
                    this.$message.success('效验成功');
                } else {
                    this.$message.error('校验失败');
                }
            });
        }
    },
    data() {
        var validateAge = (rule, value, callback) => {
            if (!value) {
              return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
              if (value < 18) {
                callback(new Error('必须年满18岁'));
              } else {
                callback();
              }
            }, 1000);
          };
          var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.model2.password2 !== '') {
                this.$refs.myForms.validateField('password2');
              }
              callback();
            }
          };
          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.model2.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          };
        const generateData = () => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: `左选项 ${ i }`,
                disabled: i % 4 === 0
              });
            }
            return data;
        };
        return {
            size: 'default',
            model: { 
                input: '', 
                select: '' ,
                radio: '' ,
                datepicker: '' ,
                slider: '' ,
                checkbox: [] ,
                switch: true,
                textarea: '',
                cascader: [],
                colorpicker: '',
                timepicker: '',
                inputnumber: 1,
                rate: '',
                upload: [],
                transfer: [],
            },
            rules: {
                input: [{ required: true, message: '请输入' , trigger: 'blur'}],
                select: [{ required: true, message: '请选择' , trigger: 'change'}],
                radio: [{ required: true, message: '请选择' , trigger: 'change'}],
                datepicker: [{ required: true, type:'date', message: '请选择' , trigger: 'change'}],
                checkbox: [{ required: true, type:'array',message: '请选择' , trigger: 'change'}],
                textarea: [{ required: true, message: '请输入' , trigger: 'blur'}],
                cascader: [{ required: true, type: 'array', message: '请选择' , trigger: 'change'}],
                colorpicker: [{ required: true, message: '请选择' , trigger: 'blur'}],
                rate: [{ required: true, type: 'number', message: '请选择' , trigger: 'change'}],
                upload: [{ required: true, type: 'array', message: '请选择' , trigger: 'change'}],
                timepicker: [{ required: true, type: 'date',message: '请选择' , trigger: 'change'}],
            },
            transferList: generateData(),
            options: [
                {
                    value: 'member',
                    label: '会员'
                },
                {
                    value: 'people',
                    label: '普通'
                },
                {
                    value: 'admin',
                    label: '超级管理员'
                }
            ],
            options2: [
                {
                    value: 'zhinan',
                    label: '指南',
                    disabled: true,
                    children: [
                        {
                            value: 'jieshao',
                            label: '介绍',
                            children: [
                                {
                                    value: 'texing',
                                    label: '特性'
                                },
                            ]
                        },
                        {
                            value: 'anzhuang',
                            label: '安装',
                            children: [
                                {
                                    value: 'npmanzhuang',
                                    label: 'npm 安装'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'zujian',
                    label: '组件',
                    children: [
                            {
                            value: 'basic',
                            label: '基础',
                            children: [
                                {
                                    value: 'icon',
                                    label: 'Icon 图标'
                                }
                            ]
                        },
                    ]
                }
            ]
        };
    }
};
</script>
```
:::

## 动态新增删除
<div class="demo-block">
    <div class="zmz-mb-20">
        <zmz-space>
            <zmz-space-item><zmz-button type="primary" @click="add">新增</zmz-button></zmz-space-item>
            <zmz-space-item><zmz-button type="error" @click="del">删除</zmz-button></zmz-space-item>
        </zmz-space>
    </div>
    <div style="width:500px">
        <zmz-form :model="model4" ref="myForms2" label-width="100px" :label-position="data">
            <zmz-form-item :prop="'items.' + index + '.value'" :label="item.label + index" v-for="(item,index) in model4.items" :key="index" :rules="{required: true, message: '请输入新增'+ index, trigger: 'blur'}">
                <zmz-input v-model="item.value"></zmz-input>
            </zmz-form-item>
            <zmz-form-item>
                <zmz-space>
                    <zmz-space-item><zmz-button type="primary" @click="onSubmit('myForms2')">确认</zmz-button></zmz-space-item>
                </zmz-space>
            </zmz-form-item>
        </zmz-form>
    </div>
</div>

::: demo
```html
<template>
    <div class="demo-block">
        <div class="zmz-mb-20">
            <zmz-space>
                <zmz-space-item><zmz-button type="primary" @click="add">新增</zmz-button></zmz-space-item>
                <zmz-space-item><zmz-button type="error" @click="del">删除</zmz-button></zmz-space-item>
            </zmz-space>
        </div>
        <div style="width:500px">
            <zmz-form :model="model4" ref="myForms2" label-width="100px" :label-position="data">
                <zmz-form-item :label="item.label" v-for="(item,index) in model4.items" :key="index" :rules="[{ required: true, message: '请输入' , trigger: 'blur'}]">
                    <zmz-input v-model="item.value"></zmz-input>
                </zmz-form-item>
                <zmz-form-item>
                    <zmz-space>
                        <zmz-space-item><zmz-button type="primary" @click="onSubmit('myForms2')">确认</zmz-button></zmz-space-item>
                    </zmz-space>
                </zmz-form-item>
            </zmz-form>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        add() {
            this.model4.items.push({label: '新增', value: ''})
        },
        del() {
            this.model4.items.splice(-1)
        },
        onSubmit(name) {
            this.$refs[name].validate(res => {
                if (res) {
                    this.$message.success('效验成功');
                } else {
                    this.$message.error('校验失败');
                }
            });
        }
    },
    data() {
        return {
            data: 'right',
            size: 'default',
            model4: {
                items: [{label: '新增', value: ''}]
            }
        };
    }
};
</script>
```
:::

## Form 属性

| 参数| 说明| 类型| 可选值| 默认值	| 备注|
|----------|--------------|----------|------------|--------|--------|
| model | 表单对象| Object| —| {}|—|
| rules | 表单验证规则，具体配置查看 async-validator| Object| —| {}|—|
| inline | 是否开启行内表单模式| Boolean| false/true| false|—|
| show-message | 是否显示校验错误信息| Boolean| false/true| true |—|
| hide-required-mark | 是否隐藏所有表单项的必选标记 | Boolean| false/true| false|—|
| disabled| 是否禁用该表单内的所有组件 | Boolean|  false/true | false|—|
| label-width | label宽度| String/Number | —| —|—|
| label-position | label对齐方式| String| left/center/top| right|—|
| placeholder-prefix-input | 是否开启输入框尊敬语气，例如，请输入，不开起只显示label内容| String| —| —|—|
| placeholder-prefix-select | 是否开启选择框尊敬语气，例如，请选择，不开起只显示label内容| String| —| —|—|
| size | 尺寸| String| large / medium / default / small / mini| default	|—|

## Form 事件

| 事件  | 说明  | 返回值    |
|---------- |-------------- |----   |
| on-validate	| 任一表单项被校验后触发，返回表单项 prop、校验状态、错误消息  | Function(prop, error, msg)  |

## Form 方法

| 事件  | 说明  | 返回值    |
|---------- |-------------- |----   |
| clearValidate	| 清除验证结果  | Function(props: array \| string)  |
| resetFields	| 重置表单  | Function(props: array	\| string)  |
| validateField	| 单个字段验证  | Function(props: string\| array , function)	|
| validate  | 表单验证，通过返回true，失败返回false| Function(function)|

## Form-item 属性

| 参数| 说明| 类型| 可选值| 默认值	|
|----------	|--------------|----------	|--------------------------------	|--------	|
| prop  | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的	| String    | — | —		|
| label | 标签文本| String	| —| —  |
| label-style | 内联方式, 自定义label样式| Object| —| {}|
| label-class | 类名方式, 自定义label类名| Array| —| []|
| content-style	| 内联方式, 自定义content样式| Object| —| {}|
| content-class	| 类名方式, 自定义content类名| Array| —| []|
| rules | 表单验证规则，具体配置查看 async-validator| Object| —| {}|
| label-width | label宽度| String/Number | —| —|
| required | 是否必填| Boolean | —| —|


## Form-item 插槽
| 名称      | 说明          |
|---------- |-------------- |
| default | 默认插槽 |
| label | 标题插槽 |

## Form 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-form-height|  --zmz-form-height   | 32px      | 高度|
| @zmz-form-font-size|  --zmz-form-font-size   |    12px   | 字体默认|
| @zmz-form-error-text-color     |  --zmz-form-error-text-color         | 错误主题颜色         | 错误文字颜色      |
| @zmz-form-error-text-font-size    |  --zmz-form-error-text-font-size        | 12px         | 错误文字大小      |
| @zmz-form-required-text-color   |  --zmz-form-required-text-color        | 错误主题颜色         | 错误文字大小      |
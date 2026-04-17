<template>
    <div class="zmz-upload" :class="[zmzUploadClass]">
        <zmz-upload-list :file-list="uploadFiles" :file-list-type="fileListType" @on-preview="handlePreview"
            @on-remove="handleRemove" v-if="fileListType === 'picture-card'">
            <slot name="list"></slot>
        </zmz-upload-list>
        <div class="zmz-upload__wrap" @click="handleClick">
            <slot>
                <template v-if="fileListType === 'picture-card'">
                    <i class="zmz-upload__wrap__icon zmz-icon--add"></i>
                </template>
                <template v-if="fileListType === 'text' || fileListType === 'picture'">
                    <zmz-button class="zmz-upload__wrap__btn" icon="zmz-icon--cloud-upload">点击上传</zmz-button>
                    <div class="zmz-upload__tip" v-if="tip">{{ tipText }}</div>
                </template>
            </slot>
        </div>
        <zmz-upload-list :file-list="uploadFiles" :file-list-type="fileListType" @on-preview="handlePreview"
            @on-remove="handleRemove" v-if="showFileList && fileListType === 'text' || fileListType === 'picture'">
            <slot name="list"></slot>
        </zmz-upload-list>
        <div class="zmz-upload__input">
            <input type="file" :accept="accept" :multiple="multiple" :name="name" @change="handleChange"
                ref="zmzUploadInner" class="zmz-upload__input__inner" />
        </div>
    </div>
</template>
<script>
import { ref, getCurrentInstance, computed, watch, inject } from 'vue';
import mixin from '../../../../utils/mixin.js';
import zmzUploadAjax from './zmz-upload-ajax.js';
import zmzUploadList from './zmz-upload-list.vue';

export default {
    name: 'ZmzUpload',
    components: {
        zmzUploadList
    },
    props: {
        /**
         * 请求方法
         */
        method: {
            type: String,
            default: 'POST'
        },
        /**
         * 请求地址
         */
        action: {
            type: String,
            default: ''
        },
        /**
         * 上传文件类型
         */
        accept: String,
        /**
         * 请求头
         */
        headers: {
            type: Object,
            default() {
                return {}
            }
        },
        /**
         * 请求参数
         */
        data: {
            type: Object,
            default() {
                return {}
            }
        },
        insideRequest: {
            type: Boolean,
            default: true
        },
        /**
         * name 属性
         */
        name: {
            type: String,
            default: 'file'
        },
        /**
         * 是否多选
         */
        multiple: {
            type: Boolean,
            default: false
        },
        /**
         * 是否禁用
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 类型
         */
        fileListType: {
            type: String,
            default: 'text',
            validator(value) {
                return ['text', 'picture', 'picture-card'].includes(value)
            }
        },
        /**
         * 显示文件列表
         */
        showFileList: {
            type: Boolean,
            default: false
        },
        /**
         * 上传限制
         */
        limit: Number,
        /**
         * 是否显示提示
         */
        tip: {
            type: Boolean,
            default: true
        },
        /**
         * 提示文本
         */
        tipText: {
            type: String,
            default: '只能上传jpg/png文件,且不超过500kb'
        },
        /**
         * 上传之前钩子
         */
        beforeUpload: Function,
        /**
         * 删除之前钩子
         */
        beforeRemove: Function,
        /**
         * 上传请求
         */
        httpRequest: {
            type: Function,
            default: zmzUploadAjax
        },
        /**
         * 支持发送 cookie 凭证信息
         */
        withCredentials: {
            type: Boolean,
            default: false
        },
        /**
         * 是否自动上传
         */
        autoUpload: {
            type: Boolean,
            default: true
        },
        /**
         * 上传列表
         */
        modelValue: {
            type: Array,
            required: true,
            default() {
                return []
            }
        }
    },
    emits: ['update:modelValue', 'on-file', 'on-success', 'on-error', 'on-change', 'on-remove', 'on-preview', 'on-exceed', 'on-progress'],
    setup(props, { emit }) {
        const { findParent } = mixin();
        const { parent } = getCurrentInstance();
        const tempIndex = ref(0);
        const zmzForm = inject('zmzForm', {});
        // file对象
        const zmzUploadInner = ref(null);
        // 请求地址
        const uploadFiles = ref([])
        const uploadFilesCurrent = ref({})
        // 触发input上传
        const handleClick = () => {
            if (globalFromDisabled.value) return;
            zmzUploadInner.value.value = null
            zmzUploadInner.value.click();
        };
        // 数据绑定
        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
                if (parentProxyFormItem.value) {
                    parentProxyFormItem.value.proxy.onValidate();
                }
            }
        });

        watch(() => props.modelValue, (newValue) => {
            if (newValue && newValue.length) {
                uploadFiles.value = newValue.map((item) => {
                    item.uid = item.uid || (Date.now() + tempIndex.value++);
                    item.status = item.status || 'success';
                    return item;
                })
            }
        }, { immediate: true, deep: true })

        // 公共类名
        const zmzUploadClass = computed(() => {
            let params = []
            if (props.fileListType) {
                params.push(`zmz-upload--${props.fileListType}`);
            }

            if (globalFromDisabled.value) {
                params.push(`zmz-upload--disabled`);
            }

            if (globalFromReadonly.value) {
                params.push(`zmz-upload--readonly`);
            }

            return params
        });
        // 父级
        const parentProxyFormItem = computed(() => {
            return findParent(parent, 'ZmzFormItem');
        });

        // 公共处理
        const handleCommon = (files) => {
            if (model.value.length > props.limit) {
                emit('on-exceed', files, model.value)
            } else {
                if (Object.prototype.toString.call(files) === "[object Array]") {
                    files.forEach(item => {
                        let preview = window.URL.createObjectURL(item);
                        model.value.push({
                            name: item.name,
                            url: preview,
                            uid: item.uid,
                            status: 'ready',
                            file: item
                        })
                    })
                } else {
                    let preview = window.URL.createObjectURL(files);
                    model.value.push({
                        name: files.name,
                        url: preview,
                        uid: files.uid,
                        status: 'ready',
                        file: files
                    })
                }
                if (props.insideRequest) { // 内置
                    if (!files || !window.FileReader) return;
                    files.uid = (Date.now() + tempIndex.value++);
                    if (props.autoUpload) {
                        handleRequest(files);
                    }
                } else { // 外置
                    emit('on-file', files);
                }
            }
        }

        // 触发input改变
        const handleChange = e => {
            var files = e.target.files || e.dataTransfer.files;
            if (files.length == 0) return;

            if (typeof props.beforeUpload == 'function' && Object.prototype.toString.call(props.beforeUpload()) === "[object Promise]") {
                props.beforeUpload(files).then((res) => {
                    if (res) {
                        processRequest(files)
                    }
                })
            } else {
                processRequest(files)
            }
        };

        // 处理请求
        const processRequest = (files) => {
            let filesArrFile = [];
            for (let f = 0; f < files.length; f++) {
                filesArrFile.push(files[f]);
                if (props.insideRequest) {
                    handleCommon(files[f]);
                }
            }

            if (!props.insideRequest) {
                handleCommon(filesArrFile)
            }
        }

        // 请求
        const handleRequest = files => {
            let { uid } = files;
            const options = {
                headers: props.headers,
                withCredentials: props.withCredentials,
                file: files,
                data: props.data,
                filename: props.name,
                action: props.action,
                method: props.method,
                onProgress: e => {
                    handleProgress(e, files);
                },
                onSuccess: res => {
                    handleSuccess(res, files);
                    delete uploadFilesCurrent.value[uid];
                },
                onError: err => {
                    handleError(err, files);
                    delete uploadFilesCurrent.value[uid];
                }
            };
            const req = props.httpRequest(options);
            uploadFilesCurrent.value[uid] = req;
            if (req && req.then) {
                req.then(options.onSuccess, options.onError);
            }
        };


        // 移除文件
        const handleRemove = (file, index) => {
            let removeCommon = () => {
                let filesList = uploadFiles.value
                filesList.splice(index, 1);
                model.value = filesList
                emit('on-remove', index, file, filesList);
            }
            if (typeof props.beforeRemove == 'function' && Object.prototype.toString.call(props.beforeRemove()) === "[object Promise]") {
                props.beforeRemove(index, file, uploadFiles.value).then((res) => {
                    if (res) {
                        removeCommon()
                    }
                })
            } else {
                removeCommon()
            }
        };

        // 预览文件
        const handlePreview = (files, index) => {
            emit('on-preview', index, files, uploadFiles.value);
        };

        // 文件上传错误
        const handleError = (error, files) => {
            let file = uploadFiles.value.find(item => item.file && item.file.uid === files.uid);
            const filesList = uploadFiles.value;
            file.status = 'fail';
            filesList.splice(filesList.indexOf(file), 1);
            model.value = filesList
            emit('on-change', file, filesList);
            emit('on-error', error, files, filesList);
        };

        // 文件上传成功
        const handleSuccess = (res, files) => {
            if (files) {
                files.status = 'success';
                files.response = res;
                uploadFiles.value.forEach(item => {
                    item.status = 'success'
                })
                emit('on-change', files, uploadFiles.value);
                emit('on-success', res, files, uploadFiles.value);
            }
        };

        // 文件上传进度
        const handleProgress = (event, files) => {
            emit('on-progress', event, files, uploadFiles.value);
        };

        // 手动提交
        const submit = () => {
            if (!props.autoUpload) {
                model.value.filter(item => item.status === 'ready').forEach(item => {
                    handleRequest(item.file);
                })
            }
        }

        // 全局禁用
        const globalFromDisabled = computed(() => {
            return (zmzForm && zmzForm.disabled) ? zmzForm.disabled : props.disabled;
        })

        // 全局禁用
        const globalFromReadonly = computed(() => {
            return (zmzForm && zmzForm.readonly) ? zmzForm.readonly : props.readonly;
        })

        return {
            handleClick,
            handleChange,
            handleRemove,
            handlePreview,
            zmzUploadInner,
            model,
            zmzUploadClass,
            uploadFiles,
            submit
        };
    }
};
</script>

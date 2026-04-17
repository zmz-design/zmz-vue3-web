<template>
    <div class="zmz-inputtag" ref="zmzInputtag" :class="zmzInputtagclass">
        <div class="zmz-inputtag__tags" ref="zmzinputtagTags">
            <div class="zmz-inputtag__item" v-for="(item, index) in modelTagList" :key="index">
                <div class="zmz-inputtag__item__inner">
                    <span class="zmz-inputtag__text">{{ item }}</span>
                    <i class="zmz-icon--error zmz-inputtag__icon" @click="handleDelete(item)"></i>
                </div>
            </div>
        </div>
        <input class="zmz-inputtag__input" :placeholder="placeholderText" @keyup.enter="handleBlur" @focus="handleFocus"
            ref="zmzInputtagInput" :disabled="globalFromDisabled" :readonly="globalFromReadonly" v-model="model"
            @blur="handleBlur" :style="[zmzInputtagInputStyle]" :autofocus="autofocus" :autocomplete="autocomplete"
            @input="handleInput" />
    </div>
</template>

<script>
import { computed, ref, getCurrentInstance, nextTick, watch, inject } from 'vue';
import { findParent } from '../../../../utils/find.js';
export default {
    name: 'ZmzInputtag',
    props: {
        /**
         * 占位符
         */
        placeholder: {
            type: String,
            default: ''
        },
        /**
         * 自动填充
         */
        autocomplete: {
            type: String,
            default: 'off'
        },
        /**
         * 尺寸
         */
        size: {
            type: String,
            default: 'default',
            validator(value) {
                return ['large', 'medium', 'small', 'mini', 'default'].includes(value)
            }
        },
        /**
         * 原生name
         */
        name: {
            type: String,
            default: ''
        },
        /**
         * 禁用
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 只读
         */
        readonly: {
            type: Boolean,
            default: false
        },
        /**
         * 获取焦点
         */
        autofocus: {
            type: Boolean,
            default: false
        },
        /**
         * 绑定值
         */
        modelValue: {
            type: [String, Number],
            default: ''
        },
        /**
         * 标签列表
         */
        tagList: {
            type: Array,
            default: () => {
                return [];
            }
        },
        /**
         * 标签长度
         */
        maxleng: {
            type: Number,
            default: -1
        }
    },
    emits: ['on-change', 'on-delete', 'on-focus', 'on-blur', 'update:modelValue', 'update:tag-list'],
    setup(props, { emit }) {
        const { parent } = getCurrentInstance();
        const focused = ref(false);
        const zmzinputtagTags = ref(null);
        const zmzInputtag = ref(null)
        const zmzInputtagWidth = ref('100%')
        const zmzForm = inject('zmzForm', {});
        const zmzFormItem = inject('zmzFormItem', {});

        const zmzFormSize = computed(() => {
            return zmzForm && zmzForm.size ? zmzForm.size.value : '';
        });

        // 占位符文本
        const placeholderText = computed(() => {
            return props.placeholder ? props.placeholder : zmzFormItem.placeholderPrefixTextInput ? zmzFormItem.placeholderPrefixTextInput.value : '';
        });

        // 全局禁用
        const globalFromDisabled = computed(() => {
            return (zmzForm && zmzForm.disabled) ? zmzForm.disabled : props.disabled;
        })

        // 全局禁用
        const globalFromReadonly = computed(() => {
            return (zmzForm && zmzForm.readonly) ? zmzForm.readonly : props.readonly;
        })

        //绑定
        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                if (globalFromDisabled.value || globalFromReadonly.value) return;
                emit('update:modelValue', val);
            }
        });

        const modelTagList = computed({
            get() {
                return props.tagList;
            },
            set(val) {
                if (globalFromDisabled.value || globalFromReadonly.value) return;
                emit('update:tag-list', val);
            }
        });

        const handleInput = (event) => {
            emit('on-change', event.target.value);
        }

        // 获取焦点
        const handleFocus = () => {
            focused.value = true
            emit('on-focus', modelTagList.value);
        };

        // 失去焦点
        const handleBlur = (event) => {
            focused.value = false
            if (model.value == '') return;
            if (props.maxleng == '-1') {
                let index = modelTagList.value.findIndex(item => item == model.value);
                if (index != -1) return;
                modelTagList.value.push(model.value);
            } else if (modelTagList.value.length >= props.maxleng) {
                modelTagList.value.splice(props.maxleng);
            } else if (modelTagList.value.length < props.maxleng) {
                let index = modelTagList.value.findIndex(item => item == model.value);
                if (index != -1) return;
                modelTagList.value.push(model.value);
            }
            emit('on-blur', modelTagList.value, model.value, event);
            model.value = '';
            if (parentProxyItem.value) {
                parentProxyItem.value.proxy.onValidate('blur');
            }
        };

        // input公共样式
        const zmzInputtagInputStyle = computed(() => {
            let params = {}

            params['width'] = zmzInputtagWidth.value;

            return params;
        });


        // 获取父元素
        const parentProxyItem = computed(() => {
            return findParent(parent, 'ZmzFormItem')
        })


        //公共class
        const zmzInputtagclass = computed(() => {
            let params = []

            if (globalFromDisabled.value) {
                params.push('zmz-inputtag--disabled')
            }

            if (globalFromReadonly.value) {
                params.push('zmz-inputtag--readonly')
            }

            if (zmzFormSize.value || props.size) {
                params.push(`zmz-inputtag--size-${zmzFormSize.value || props.size}`)
            }

            if (focused.value) {
                params.push('zmz-inputtag--focus')
            }

            return params;
        });

        const handleDelete = (item) => {
            if (globalFromDisabled.value || globalFromReadonly.value) return;
            let currentIndex = modelTagList.value.findIndex(items => item === items)
            emit('on-delete', currentIndex, modelTagList.value[currentIndex]);
            modelTagList.value.splice(currentIndex, 1);
        };

        const computedInputWidth = () => {
            nextTick(() => {
                let zmzInputtagDom = parseInt(zmzInputtag.value ? zmzInputtag.value.clientWidth : 0);
                let zmzinputtagTagsDom = parseInt(zmzinputtagTags.value ? zmzinputtagTags.value.clientWidth : 0);
                if (zmzInputtagDom - zmzinputtagTagsDom > 100) {
                    zmzInputtagWidth.value = zmzInputtagDom - zmzinputtagTagsDom - 2 + 'px';
                } else {
                    zmzInputtagWidth.value = '100%';
                }
            });
        };

        watch(() => modelTagList.value, () => {
            computedInputWidth();
        }, { lazy: true, immediate: true, deep: true });

        return {
            modelTagList,
            model,
            zmzInputtagclass,
            handleDelete,
            handleBlur,
            handleFocus,
            placeholderText,
            zmzinputtagTags,
            zmzInputtag,
            handleInput,
            globalFromDisabled,
            globalFromReadonly,
            zmzInputtagInputStyle
        };
    }
};
</script>

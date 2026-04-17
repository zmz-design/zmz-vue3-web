<template>
    <transition name="zmz-fade">
        <div class="zmz-messagebox zmz-teleport-mask" ref="zmzTeleportMask" :style="[maskCustomStyle]" :class="[maskCustomClass]"
            v-show="currentVisible && mask" @click.stop="handleCloseMask"></div>
    </transition>
    <transition name="zmz-fade-top" @before-leave="handleBeforeLeave" @leave="handleLeave"
        @after-leave="handleAfterLeave" @before-enter="handleBeforeEnter" @enter="handleEnter"
        @after-enter="handleAfterEnter">
        <div class="zmz-messagebox" ref="zmzMessageBox" v-show="currentVisible"
            :class="[zmzMessageBoxClass, messageboxCustomClass]" :style="messageboxCustomStyle">
            <div class="zmz-messagebox__wrap">
                <div class="zmz-messagebox__header">
                    <div class="zmz-messagebox__header__title"
                        :class="{ 'zmz-messagebox__header__title--center': headerCenter }">{{ title }}</div>
                    <div class="zmz-messagebox__header__close" @click="handleAction(false)" v-if="showCloseBtn">
                        <i class="zmz-messagebox__header__close__icon zmz-icon--wrong"></i>
                    </div>
                </div>
                <div class="zmz-messagebox__body" :class="{ 'zmz-messagebox__body--center': contentCenter }">
                    <template v-if="type == 'alert' || type == 'confirm'">
                        <div class="zmz-messagebox__content">
                            <i v-if="type != ''" :class="[iconClass, 'zmz-messagebox__content__icon']"></i>
                            <div class="zmz-messagebox__content__inner" v-if="contentHtml" v-html="content"></div>
                            <div class="zmz-messagebox__content__inner" v-else>{{ content }}</div>
                        </div>
                    </template>
                    <template v-if="type == 'prompt'">
                        <div class="zmz-messagebox__body__prompt" v-if="contentHtml" v-html="content"></div>
                        <div class="zmz-messagebox__body__prompt" v-else> {{ content }}</div>
                        <div class="zmz-messagebox__body__input">
                            <zmz-input :placeholder="placeholder" :class="{ 'failed': isInputErrorMsg }"
                                v-model="promptValue"></zmz-input>
                            <div class="zmz-messagebox__body__input__errormsg" v-if="isInputErrorMsg">{{ inputErrorMsg
                                }}</div>
                        </div>
                    </template>
                </div>
                <div class="zmz-messagebox__footer" :class="{ 'zmz-messagebox__footer--center': footerCenter }">
                    <template v-if="type == 'alert'">
                        <zmz-button type="primary" class="zmz-messagebox__footer__confirm" size="small"
                            @click.stop="handleAction(true)">
                            {{ confirmBtnText }}
                        </zmz-button>
                    </template>
                    <template v-if="type == 'confirm' || type == 'prompt'">
                        <zmz-button type="default" class="zmz-messagebox__footer__cancel"
                            @click.stop="handleAction(false)">
                            {{ cancelBtnText }}
                        </zmz-button>
                        <zmz-button type="primary" class="zmz-messagebox__footer__confirm"
                            @click.stop="handleAction(true)">
                            {{ confirmBtnText }}
                        </zmz-button>
                    </template>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import ZmzInput from '../../form/input/index.js';
import ZmzButton from '../../button/index.js';
import { ref, computed, onMounted, onUnmounted, reactive, nextTick } from 'vue';
import { nextZindex } from '../../../utils/zIndex.js';
export default {
    name: 'ZmzMessagebox',
    components: {
        ZmzInput,
        ZmzButton
    },
    props: {
        /**
         * 标题
         */
        title: {
            type: String,
            default: '提示'
        },
        /**
         * 内容
         */
        content: {
            type: String
        },
        /**
         * 确定按钮文本
         */
        confirmBtnText: {
            type: String,
            default: '确定'
        },
        /**
         * 取消按钮文本
         */
        cancelBtnText: {
            type: String,
            default: '取消'
        },
        /**
         * 消息类型
         */
        icon: {
            type: String,
            default: 'primary',
            validator(value) {
                return ['success', 'warning', 'default', 'error', 'primary', 'dark', ''].includes(value)
            }
        },
        /**
         * 内容居中
         */
        contentCenter: {
            type: Boolean,
            default: false
        },
        /**
         * 头部居中
         */
        headerCenter: {
            type: Boolean,
            default: false
        },
        /**
         * 底部居中
         */
        footerCenter: {
            type: Boolean,
            default: false
        },
        /**
         * 整体居中
         */
        center: {
            type: Boolean,
            default: false
        },
        /**
         * 占位符
         */
        placeholder: {
            type: String,
            default: '请输入'
        },
        /**
         * 输入框验证
         */
        inputValidation: {
            type: String,
            default: ''
        },
        /**
         * 输入框错误提示
         */
        inputErrorMsg: {
            type: String,
            default: ''
        },
        /**
         * 标志
         */
        type: {
            type: String,
            default: 'alert',
            validator(value) {
                return ['alert', 'confirm', 'prompt'].includes(value)
            }
        },
        /**
         * 是否显示遮罩
         */
        mask: {
            type: Boolean,
            default: true
        },
        /**
         * 点击遮罩关闭
         */
        maskClosable: {
            type: Boolean,
            default: false
        },
        /**
         * html
         */
        contentHtml: {
            type: Boolean,
            default: false
        },
        /**
         * 遮罩类名
         */
        maskCustomClass: [Array, String],
        /**
         * 遮罩样式
         */
        maskCustomStyle: Object,
        /**
         * 按键关闭
         */
        closeOnPressEscape: {
            type: Boolean,
            default: true
        },
        /**
         * 自定义类名
         */
        messageboxCustomClass: [Array, String],
        /**
         * 自定义样式
         */
        messageboxCustomStyle: Object,
        /**
         * 显示关闭
         */
        showCloseBtn: {
            type: Boolean,
            default: true
        },
        /**
         * 关闭前操作
         */
        beforeClose: Function
    },
    emits: ['on-open-before', 'on-open', 'on-open-after', 'on-close-before', 'on-close', 'on-close-after'],
    setup(props, { emit }) {
        const currentVisible = ref(false);
        const titleCenter = ref(false);
        const bottonCenter = ref('');
        const promptValue = ref('');
        const isInputErrorMsg = ref(false)
        const zmzTeleportMask = ref(null);
        const zmzMessageBox = ref(null);
        const reactives = reactive({
            promise: null,
            resolve: null,
            reject: null
        })

        const iconClass = computed(() => {
            return `zmz-icon--${props.icon}-fill`;
        });

        const zmzMessageBoxClass = computed(() => {
            return {
                'zmz-messagebox--center': props.center
            };
        });

        onUnmounted(() => {
            reactives.promise = null;
            reactives.resolve = null;
            reactives.reject = null;
        });

        const common = () => {
            reactives.promise = new Promise((resolve, reject) => {
                currentVisible.value = true;
                isInputErrorMsg.value = false
                reactives.resolve = resolve;
                reactives.reject = reject;
            });
            // 返回promise对象
            return reactives.promise;
        };

        const handleAction = action => {
            if (props.type == 'alert' || props.type == 'confirm') {
                if (action) {
                    reactives.resolve(action)
                } else {
                    reactives.reject(action)
                }
                currentVisible.value = false;
            } else if (props.type == 'prompt') {
                if (action) {
                    if (props.inputValidation) {
                        var reg = new RegExp(props.inputValidation, "g");
                        if (promptValue.value && reg.test(promptValue.value)) {
                            isInputErrorMsg.value = false
                            currentVisible.value = false;
                            reactives.resolve({ action, value: promptValue.value })
                        } else {
                            isInputErrorMsg.value = true
                        }
                    } else {
                        currentVisible.value = false;
                        reactives.resolve({ action, value: promptValue.value })
                    }
                } else {
                    currentVisible.value = false;
                    reactives.reject({ action, value: promptValue.value })
                }
            }
        };

        // 点击背景关闭
        const handleCloseMask = () => {
            if (!props.maskClosable) return;
            if (typeof props.beforeClose === 'function') {
                currentVisible.value = props.beforeClose();
            } else {
                currentVisible.value = false;
            }
        };

        // 打开前
        const handleBeforeEnter = () => {
            emit('on-open-before');
        };

        // 打开中
        const handleEnter = () => {
            emit('on-open');
        };

        // 打开之后
        const handleAfterEnter = () => {
            emit('on-open-after');
        };

        // 关闭之前
        const handleBeforeLeave = () => {
            emit('on-close-before');
        };

        // 关闭中
        const handleLeave = () => {
            emit('on-close');
        };

        // 关闭之后
        const handleAfterLeave = () => {
            emit('on-close-after');
        };

        const keyDown = (e) => {
            let key = e.keyCode;
            // 箭头
            if (key == 27) {
                currentVisible.value = false;
            }
        };

        onMounted(() => {
            window.addEventListener('keydown', (e) => {
                if (props.closeOnPressEscape) {
                    keyDown(e);
                }
            });
        });

        const setZindex = () => {
            nextTick(() => {
                if (zmzTeleportMask.value) {
                    zmzTeleportMask.value.style['z-index'] = nextZindex();
                }
                if (zmzMessageBox.value) {
                    zmzMessageBox.value.style['z-index'] = nextZindex();
                }
            })
        }

        return {
            confirm,
            alert,
            prompt,
            handleAction,
            currentVisible,
            titleCenter,
            bottonCenter,
            iconClass,
            handleAfterLeave,
            handleLeave,
            handleBeforeLeave,
            handleAfterEnter,
            handleEnter,
            handleBeforeEnter,
            promptValue,
            isInputErrorMsg,
            zmzTeleportMask,
            zmzMessageBox,
            setZindex,
            common,
            handleCloseMask,
            zmzMessageBoxClass
        };
    }
};
</script>

<template>
    <div v-zmzclickoutside="bodyCloseMenus" class="zmz-colorpicker" :class="[zmzColorpickerClass]" ref="zmzColorpicker">
        <div class="zmz-colorpicker__wrap" @click="handleClick" ref="zmzColorpickerWrap">
            <div class="zmz-colorpicker__color">
                <div class="zmz-colorpicker__color__block" :style="[colorBlockStyle]" :class="[colorBlockClass]"></div>
            </div>
        </div>
        <div class="zmz-colorpicker__text" :style="[promptTextColorStyle]" v-if="$slots.default || promptText">
            <template v-if="($slots.default && !promptText) || ($slots.default && promptText)">
                <slot></slot>
            </template>
            <template v-if="!$slots.default && promptText">
                {{ promptText }}
            </template>
            <template v-if="!$slots.default && !promptText && readonly && readonlyPrompt">
                {{ model }}
            </template>
        </div>
        <zmz-teleportdom :arrow="arrow" :teleport-dom="teleportDom" :parent-ref="zmzColorpicker" :visible="currentVisible"
            :placement="placement" :teleport="teleport" :class-name="[zmzTeleportdomClass, teleportClass]" :offset="offset"
            :popper-options="popperOptions" transition-name="zmz-fold-top" @on-close-before="handleBeforeLeave"
            @on-close="handleLeave" @on-close-after="handleAfterLeave" @on-open-before="handleBeforeEnter"
            @on-open="handleEnter" @on-open-after="handleAfterEnter">
            <div class="zmz-colorpicker__dropdown" ref="zmzColorpickerContainer">
                <div class="zmz-colorpicker__palette">
                    <div class="zmz-colorpicker__palette__wrap"><zmz-colorpicker-canvas :dot="modelValue" :color="COLOR"
                            @on-change="handleCanvas"></zmz-colorpicker-canvas></div>
                    <div class="zmz-colorpicker__palette__barcolor" ref="barcolor">
                        <zmz-colorpicker-slider :max="360" :min="0" v-model="COLOR.h" start-on="right"
                            @on-change="handleHue">
                            <div class="zmz-colorpicker__slider__color"></div>
                        </zmz-colorpicker-slider>
                    </div>
                    <div class="zmz-colorpicker__palette__opacitys" v-if="isOpacity && alpha">
                        <zmz-colorpicker-slider class="zmz-colorpicker__slider--alpha slider" :max="1" :min="0"
                            v-model="COLOR.a" @on-change="handleAlpha" :step="0.01">
                            <div style="width: 100%;height: 100%" :style="[alphaStyle]"></div>
                        </zmz-colorpicker-slider>
                    </div>
                </div>
                <!-- 预置颜色 -->
                <div class="zmz-colorpicker__presetcolor" v-if="preset">
                    <div class="zmz-colorpicker__presetcolor__wrap">
                        <zmz-colorpicker-preset v-if="material" :presetColor="presetColor"
                            @on-change="handlePreset"></zmz-colorpicker-preset>
                        <div v-else class="zmz-colorpicker__presetcolor__rgb">
                            <zmz-colorpicker-slider v-model="COLOR.r" start-on="right" @on-change="handleRgb" :max="255"
                                :min="0">
                                <div class="zmz-colorpicker__slider__bar__bg" :style="[sliderRStyle]"></div>
                            </zmz-colorpicker-slider>
                            <zmz-colorpicker-slider v-model="COLOR.g" start-on="right" @on-change="handleRgb" :max="255"
                                :min="0">
                                <div class="zmz-colorpicker__slider__bar__bg" :style="[sliderGStyle]"></div>
                            </zmz-colorpicker-slider>
                            <zmz-colorpicker-slider v-model="COLOR.b" start-on="right" @on-change="handleRgb" :max="255"
                                :min="0">
                                <div class="zmz-colorpicker__slider__bar__bg" :style="[sliderBStyle]"></div>
                            </zmz-colorpicker-slider>
                        </div>
                    </div>
                    <div class="zmz-colorpicker__presetcolor__switchs">
                        <svg width="20" height="22" xmlns="http://www.w3.org/2000/svg" @click="handlePresetSwitch">
                            <polygon points="7,8 13,8 10,4" style="fill:#000;" />
                            <polygon points="7,13 13,13 10,17" style="fill:#000;" />
                        </svg>
                    </div>
                </div>
                <div class="zmz-colorpicker__databoard">
                    <div class="zmz-colorpicker__databoard__inputs">
                        <input class="zmz-colorpicker__databoard__inputs__inner" type="text" v-model="inputColor"
                            @change="handleHex" @blur="handleInputBlur" />
                    </div>
                    <div class="zmz-colorpicker__databoard__btngroup">
                        <div class="zmz-colorpicker__databoard__btngroup__cancel" @click="handleCancel">清空</div>
                        <div class="zmz-colorpicker__databoard__btngroup__confirm" @click="handleConfirm">确定</div>
                    </div>
                </div>
            </div>
        </zmz-teleportdom>
    </div>
</template>

<script>
import { computed, ref, getCurrentInstance, inject } from 'vue';
import Color from './color';
import ZmzColorpickerSlider from './zmz-colorpicker-slider.vue';
import ZmzColorpickerCanvas from './zmz-colorpicker-canvas.vue';
import ZmzColorpickerPreset from './zmz-colorpicker-preset.vue';
import { getColorConversion } from '../../../../utils/color.js';
import { findParent } from '../../../../utils/find.js';
import ZmzTeleportdom from '../../../teleportdom/show.vue';

export default {
    name: 'ZmzColorpicker',
    components: { ZmzColorpickerSlider, ZmzColorpickerCanvas, ZmzColorpickerPreset, ZmzTeleportdom },
    props: {
        /**
         * 绑定值
         */
        modelValue: {
            type: String,
            default: ''
        },
        /**
         * 互联
         */
        strictly: {
            type: Boolean,
            default: false
        },
        /**
         * 显示在输入框中的格式
         */
        format: {
            type: String,
            default: 'hex'
        },
        /**
         * 是否显示预设
         */
        preset: {
            type: Boolean,
            default: false
        },
        /**
         * 预设颜色
         */
        presetColor: {
            type: Array,
            default: () => {
                return [
                    '#F44336',
                    '#E91E63',
                    '#9C27B0',
                    '#673AB7',
                    '#3F51B5',
                    '#2196F3',
                    '#03A9F4',
                    '#00BCD4',
                    '#009688',
                    '#4CAF50',
                    '#8BC34A',
                    '#CDDC39',
                    '#FFEB3B',
                    '#FFC107',
                    '#FF9800',
                    '#FF5722',
                    '#795548',
                    '#9E9E9E',
                    '#607D8B'
                ];
            }
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
         * 只读状态下是否启用默认文字
         */
        readonlyPrompt: {
            type: Boolean,
            default: true
        },
        /**
         * 是否显示透明度
         */
        alpha: {
            type: Boolean,
            default: false
        },
        /**
         * 提示文字
         */
        promptText: {
            type: String,
            default: ''
        },
        /**
         * 提示文字颜色
         */
        promptTextColor: {
            type: String,
            default: ''
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
         * 是否穿梭
         */
        teleport: {
            type: Boolean,
            default: true
        },
        /**
         * 穿梭类名
         */
        teleportClass: {
            type: [Array, String],
            default: ''
        },
        /**
         * 穿梭节点
         */
        teleportDom: {
            type: String,
            default: 'body'
        },
        /**
         * 偏移
         */
        offset: {
            type: Array,
            default() {
                return [0, 10]
            }
        },
        /**
         * 配置
         */
        popperOptions: {
            type: Array,
            default() {
                return []
            }
        },
        /**
         * 辅助三角
         */
        arrow: {
            type: Boolean,
            default: true
        },
        /**
         * 弹出位置
         */
        placement: {
            type: String,
            default: 'bottom'
        },
    },
    emits: ['update:modelValue', 'on-input', 'on-change', 'on-blur', 'on-close-before', 'on-close', 'on-close-after', 'on-open-before', 'on-open', 'on-open-after'],
    setup(props, { emit }) {
        const { parent } = getCurrentInstance();
        const hue = ref(0);
        const material = ref(true);
        const zmzColorpicker = ref(null);
        const zmzColorpickerContainer = ref(null);
        const zmzColorpickerWrap = ref(null);
        const zmzForm = inject('zmzForm', {});

        const zmzFormSize = computed(() => {
            return zmzForm && zmzForm.formSize ? zmzForm.formSize.value : '';
        });

        // 颜色面板是否显示
        const currentVisible = ref(false);
        const inputColor = ref(getColorConversion(props.modelValue, props.format));
        const COLOR = ref(new Color(getColorConversion(props.modelValue, props.format)));

        // model
        const model = computed({
            get() {
                if (!props.modelValue) return;
                return formatValue(props.modelValue, props.format);
            },
            set(val) {
                if (globalFromDisabled.value || globalFromReadonly.value) return;
                emit('update:modelValue', formatValue(val, props.format));
                if (parentProxyForm.value) {
                    parentProxyForm.value.proxy.onValidate();
                }
            }
        });

        const parentProxyForm = computed(() => {
            return findParent(parent, 'ZmzFormItem');
        });

        // 是否展示透明度
        const isOpacity = computed(() => {
            return props.format == 'rgba' || props.format == 'hsla';
        });

        const promptTextColorStyle = computed(() => {
            let params = {};
            if (props.promptTextColor) {
                params['color'] = props.promptTextColor;
            } else {
                params['color'] = model.value;
            }
            return params;
        });
        // 展示class
        const zmzColorpickerClass = computed(() => {
            let params = [];
            if (globalFromDisabled.value) {
                params.push('zmz-colorpicker--disabled');
            }

            if (globalFromReadonly.value) {
                params.push('zmz-colorpicker--readonly');
            }

            if (zmzFormSize.value || props.size) {
                params.push(`zmz-colorpicker--size-${zmzFormSize.value || props.size}`);
            }

            return params;
        });

        // 展示样式
        const colorBlockStyle = computed(() => {
            let params = {};
            if (model.value) {
                params['background'] = model.value;
            } else {
                params['background'] = '#ffffff';
                params['color'] = '#000';
            }
            return params;
        });

        const colorBlockClass = computed(() => {
            let params = 'zmz-icon--wrong';
            if (model.value) {
                params = 'zmz-icon--check';
            }
            return params;
        });

        const handleHex = () => {
            // let val = ev.target.value;
            // if (CheckIsColor(model.value)) {
            //     // COLOR.value.fromHex(val);
            //     // emit('on-input', val)
            // }
        };

        const handleInputBlur = ev => {
            let val = ev.target.value;
            if (CheckIsColor(model.value)) {
                COLOR.value.fromHex(val);
                emit('on-blur', val);
            }
        };

        const CheckIsColor = bgVal => {
            let type = '';
            if (/^rgb\(/.test(bgVal)) {
                //如果是rgb开头，200-249，250-255，0-199
                type = '^[rR][gG][Bb][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){2}[\\s]*(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\\s]*[)]{1}$';
            } else if (/^rgba\(/.test(bgVal)) {
                //如果是rgba开头，判断0-255:200-249，250-255，0-199 判断0-1：0 1 1.0 0.0-0.9
                type = '^[rR][gG][Bb][Aa][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){3}[\\s]*(1|1.0|0|0.[0-9])[\\s]*[)]{1}$';
            } else if (/^#/.test(bgVal)) {
                //六位或者三位
                type = '^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$';
            } else if (/^hsl\(/.test(bgVal)) {
                //判断0-360 判断0-100%(0可以没有百分号)
                type =
                    '^[hH][Ss][Ll][(]([\\s]*(2[0-9][0-9]|360｜3[0-5][0-9]|[01]?[0-9][0-9]?)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*)[)]$';
            } else if (/^hsla\(/.test(bgVal)) {
                type =
                    '^[hH][Ss][Ll][Aa][(]([\\s]*(2[0-9][0-9]|360｜3[0-5][0-9]|[01]?[0-9][0-9]?)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*,){2}([\\s]*(1|1.0|0|0.[0-9])[\\s]*)[)]$';
            }
            let re = new RegExp(type);
            if (bgVal && bgVal.match(re) == null) {
                return false;
            } else {
                return true;
            }
        };

        const bodyCloseMenus = e => {
            if (zmzColorpicker.value && !zmzColorpicker.value.contains(e.target)) {
                if (currentVisible.value == true) {
                    currentVisible.value = false;
                }
            }
        };
        // 更新input
        const inputColorHandle = val => {
            if (props.strictly) {
                if (val) {
                    inputColor.value = val;
                } else {
                    inputColor.value = COLOR.value.toHex();
                }
                model.value = COLOR.value.toHex();
            } else {
                if (val) {
                    inputColor.value = val;
                } else {
                    inputColor.value = COLOR.value.toHex();
                }
            }
            if (val) {
                emit('on-change', val);
            } else {
                emit('on-change', COLOR.value.toHex());
            }
        };

        // 调色板回调
        const handleCanvas = (r, g, b) => {
            let hsl = COLOR.value.rgb2hsl(r, g, b);
            Object.assign(COLOR.value, { r, g, b, h: COLOR.value.h, s: hsl[1], l: hsl[2] });
            inputColorHandle();
        };

        // 色条回调
        const handleHue = () => {
            COLOR.value.fromHSL();
            inputColorHandle();
        };

        // 透明回调
        const handleAlpha = () => {
            inputColorHandle();
        };

        // 预制颜色回调
        const handlePreset = val => {
            COLOR.value.fromHex(val);
            inputColorHandle(val);
        };

        const handlePresetSwitch = () => {
            material.value = !material.value;
        };

        // rgb调色回调
        const handleRgb = () => {
            COLOR.value.fromRGB();
            inputColorHandle();
        };

        // hsl调色回调
        const changeFromHSL = () => {
            COLOR.value.fromHSL();
            inputColorHandle();
        };

        const formatValue = (val, type) => {
            if (!val) return '';
            if (type == 'rgba') {
                return `rgba(${COLOR.value.r},${COLOR.value.g},${COLOR.value.b},${COLOR.value.a})`;
            } else if (type == 'rgb') {
                return `rgb(${COLOR.value.r},${COLOR.value.g},${COLOR.value.b})`;
            } else if (type == 'hsla') {
                return `hsla(${COLOR.value.h},${COLOR.value.s}%,${COLOR.value.l}%,${COLOR.value.a})`;
            } else if (type == 'hsl') {
                return `hsl(${COLOR.value.h},${COLOR.value.s}%,${COLOR.value.l}%)`;
            } else if (type == 'hex') {
                return COLOR.value.toHex();
            } else {
                return '';
            }
        };
        const alphaStyle = computed(() => {
            return {
                background: `linear-gradient(to left, rgba(${COLOR.value.r},${COLOR.value.g},${COLOR.value.b},1), rgba(${COLOR.value.r},${COLOR.value.g},${COLOR.value.b},0))`
            };
        });

        const sliderRStyle = computed(() => {
            return { background: `linear-gradient(to left, rgb(${0},${COLOR.value.g},${COLOR.value.b}), rgb(${255},${COLOR.value.g},${COLOR.value.b}))` };
        });

        const sliderGStyle = computed(() => {
            return { background: `linear-gradient(to left, rgb(${COLOR.value.r},${0},${COLOR.value.b}), rgb(${COLOR.value.r},${255},${COLOR.value.b}))` };
        });

        const sliderBStyle = computed(() => {
            return { background: `linear-gradient(to left, rgb(${COLOR.value.r},${COLOR.value.g},${0}), rgb(${COLOR.value.r},${COLOR.value.g},${255}))` };
        });

        const handleClick = () => {
            if (globalFromDisabled.value || globalFromReadonly.value) return;
            currentVisible.value = !currentVisible.value;
        };

        // 取消
        const handleCancel = () => {
            currentVisible.value = false;
            model.value = '';
            inputColor.value = '';
        };

        // 确认
        const handleConfirm = () => {
            model.value = inputColor.value;
            currentVisible.value = false;
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

        const zmzTeleportdomClass = computed(() => {
            let params = ['zmz-teleportdom--colorpicker']
            return params;
        })

        // 全局禁用
        const globalFromDisabled = computed(() => {
            return (zmzForm && zmzForm.disabled) ? zmzForm.disabled : props.disabled;
        })

        // 全局禁用
        const globalFromReadonly = computed(() => {
            return (zmzForm && zmzForm.readonly) ? zmzForm.readonly : props.readonly;
        })

        return {
            handleHex,
            handleCanvas,
            handleHue,
            handleAlpha,
            handlePreset,
            handlePresetSwitch,
            handleRgb,
            changeFromHSL,
            alphaStyle,
            sliderRStyle,
            sliderGStyle,
            sliderBStyle,
            COLOR,
            hue,
            material,
            colorBlockStyle,
            colorBlockClass,
            handleClick,
            currentVisible,
            model,
            handleInputBlur,
            inputColor,
            handleCancel,
            handleConfirm,
            isOpacity,
            zmzColorpickerClass,
            promptTextColorStyle,
            zmzColorpicker,
            bodyCloseMenus,
            handleAfterLeave,
            handleLeave,
            handleBeforeLeave,
            handleAfterEnter,
            handleEnter,
            handleBeforeEnter,
            zmzColorpickerContainer,
            zmzColorpickerWrap,
            zmzTeleportdomClass
        };
    }
};
</script>

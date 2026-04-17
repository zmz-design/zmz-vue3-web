<template>
    <teleport :to="teleportDom" :disabled="!fullscreen" v-bind="$attrs">
        <div class="zmz-watermark" ref="zmzWatermark">
            <div class="zmz-watermark__slot" v-if="$slots.default">
                <slot></slot>
            </div>
            <teleport :to="teleportDom" :disabled="!teleport" v-bind="$attrs">
                <div :class=[zmzWatermarkInnerClass] class="zmz-watermark--inner" ref="zmzWatermarkInner" v-if="model">
                </div>
            </teleport>
        </div>
    </teleport>
</template>
<script>

import { computed, nextTick, onMounted, ref, watch, onUnmounted } from 'vue';
export default {
    name: 'ZmzWatermark',
    props: {
        /**
         * 透明度
         */
        alpha: {
            type: [Number, String],
            default: .5
        },
        /**
         * 宽度
         */
        width: {
            type: [Number, String],
            default: 220
        },
        /**
         * 高度
         */
        height: {
            type: [Number, String],
            default: 220
        },
        /**
         * 图片地址
         */
        image: {
            type: String,
            default: '',
        },
        /**
         * 图片地址
         */
        imageZoom: {
            type: Number,
            default: 1,
        },
        /**
         * 文本配置
         */
        contentOptions: {
            type: Object,
            default() {
                return {}
            }
        },
        /**
         * 内容
         */
        content: {
            type: [String, Array],
            default: ''
        },
        /**
         * 层级
         */
        zindex: {
            type: Number,
            default: 9
        },
        /**
         * 旋转
         */
        rotate: {
            type: [Number, String],
            default: 0
        },
        /**
         * 显示
         */
        modelValue: {
            type: Boolean,
            default: false
        },
        /**
         * 全屏
         */
        fullscreen: {
            type: Boolean,
            default: false
        },
        /**
         * 是否穿梭
         */
        teleport: {
            type: Boolean,
            default: false
        },
        /**
         * 穿梭节点
         */
        teleportDom: {
            type: String,
            default: 'body'
        },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const zmzWatermark = ref(null);
        const zmzWatermarkInner = ref(null)
        const canvasImage = ref(null);
        const contentOptions = ref(Object.assign({
            space: 0,
            baseline: 'middle',
            color: '#2d8ff4',
            font: '12 Arial',
            align: 'center'
        }, props.contentOptions))
        const options = ref({
            childList: true,
            attributes: true,
            subtree: true,
            attributesOldValue: true,
            characterData: true,
            characterDataOldValue: true,
        })
        const observer = ref(null)

        const model = computed({
            get() {
                return props.modelValue
            },
            set(val) {
                emit('update:modelValue', val);
            }
        })

        const setWatermarkInit = () => {
            let canvas = document.createElement('canvas')
            let halfHeight = parseFloat(props.height) / 2 + 6
            let halfWidth = parseFloat(props.width) / 2
            canvas.width = parseFloat(props.width);
            canvas.height = parseFloat(props.height);
            let ctx = canvas.getContext('2d');
            if (props.image) {
                let img = new Image();
                img.setAttribute('crossOrigin', 'Anonymous');
                img.crossOrigin = '*'; // 解决跨域
                img.src = props.image + '?time=' + Math.random();
                img.onload = function () {
                    let imageWidth = img.width * props.imageZoom;
                    let imageHeight = img.height * props.imageZoom;
                    let x = (canvas.width - imageWidth) / 2;
                    let y = (canvas.height - imageHeight) / 2;
                    ctx.rotate(-(parseFloat(props.rotate) * Math.PI) / 180);
                    ctx.drawImage(img, x, y, imageWidth, imageHeight);
                    ctx.globalAlpha = parseFloat(props.alpha); // 透明度
                    canvasImage.value = canvas.toDataURL('image/png');
                    setWatermarkStyle()
                    setZmzWatermarkStyle()
                }
            } else {
                ctx.font = contentOptions.value.font;
                ctx.translate(halfWidth, halfHeight);
                ctx.globalAlpha = parseFloat(props.alpha); // 透明度
                ctx.rotate(-(parseFloat(props.rotate) * Math.PI) / 180);
                ctx.translate(-halfWidth, -halfHeight);
                ctx.textBaseline = contentOptions.value.baseline; // 设置在绘制文本时使用的当前文本基线
                ctx.fillStyle = contentOptions.value.color; // 设置填充绘画的颜色、渐变或者模式
                ctx.textAlign = contentOptions.value.align;
                fillTextCenter(ctx, props.content, 0, 0, canvas.width, canvas.height); // 处理单条多条
                canvasImage.value = canvas.toDataURL('image/png');
                setWatermarkStyle()
                setZmzWatermarkStyle()
                canvas = null
            }
        };

        // 文字居中
        const fillTextCenter = (ctx, text, x, y, width, height) => {
            let content = Array.isArray(props.content) ? props.content : [props.content]
            for (let i = 0; i < content.length; i++) {
                let xL = (width - x) / 2
                let metrics = ctx.measureText(content[i]);
                let fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent + contentOptions.value.space;
                let yL = y + ((height - ((fontHeight) * content.length)) / 2) + (fontHeight) * (i + 1)
                ctx.fillText(content[i], xL, yL)
            }
        }

        const setWatermarkStyle = () => {
            nextTick(() => {
                if (zmzWatermarkInner.value) {
                    zmzWatermarkInner.value.style.pointerEvents = 'none'
                    zmzWatermarkInner.value.style.top = '0'
                    zmzWatermarkInner.value.style.left = '0'
                    zmzWatermarkInner.value.style.right = '0'
                    zmzWatermarkInner.value.style.bottom = '0'
                    zmzWatermarkInner.value.style.fontWeight = 'lighter'
                    zmzWatermarkInner.value.style.background = 'url(' + canvasImage.value + ') center center repeat'
                    zmzWatermarkInner.value.style.zIndex = props.zindex
                    if (props.fullscreen || props.teleport) {
                        zmzWatermarkInner.value.style.position = 'fixed'
                    } else {
                        zmzWatermarkInner.value.style.position = 'absolute'
                    }
                }
            })
        }

        const setZmzWatermarkStyle = () => {
            nextTick(() => {
                if (zmzWatermark.value) {
                    if (props.fullscreen) {
                        zmzWatermark.value.style.position = ''
                    } else {
                        zmzWatermark.value.style.position = 'relative'
                    }
                }
            })
        }

        const zmzWatermarkInnerClass = computed(() => {
            let params = []
            if (props.teleport) {
                params.push('zmz-watermark')
            }
            return params
        })

        onMounted(() => {
            observer.value = new MutationObserver(() => {
                setWatermarkInit()
            });
            observer.value.observe(zmzWatermark.value, options.value);
            window.addEventListener('resize', setWatermarkInit)
        })

        onUnmounted(() => {
            window.removeEventListener('resize', setWatermarkInit)
        })

        watch(() => model.value, (val) => {
            val && setWatermarkInit()
        }, {
            lazy: true
        })

        return {
            zmzWatermark,
            zmzWatermarkInner,
            zmzWatermarkInnerClass,
            model
        }
    }
};
</script>
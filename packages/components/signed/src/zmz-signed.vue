<template>
    <div class="zmz-signed" :style="[zmzSignedStyle]">
        <canvas class="zmz-signed__canvas" ref="zmzSignedCanvas" @mousemove="handleMouseMove"
            @mousedown="handleMousedown" @mouseup="handleMouseUp" @mouseout="handleMouseOut">
            您的浏览器不支持canvas
        </canvas>
        <div class="zmz-signed__wrap">
            <div class="zmz-signed__paint">
                <div class="zmz-signed__paint__item" v-for="(item, index) in paint" :key="index"
                    @click="handleColorSelect(item)">
                    <span class="zmz-signed__paint__item__inner"
                        :class="{ 'zmz-signed__paint__item__inner--selected': current == index }"
                        :style="{ background: item }"></span>
                </div>
            </div>
            <div class="zmz-signed__button">
                <div class="zmz-signed__button__item" v-if="showDownloadButton" @click="handleDownload">
                    <slot name="download">
                        <zmz-button type="primary" class="zmz-signed__button__btn">下载</zmz-button>
                    </slot>
                </div>
                <div class="zmz-signed__button__item" v-if="showClearButton" @click="handleClear">
                    <slot name="clear">
                        <zmz-button class="">清除</zmz-button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref, onMounted, nextTick, reactive, onUnmounted } from 'vue';
import ZmzButton from '../../button/src/zmz-button.js';
export default {
    name: 'ZmzSigned',
    components: {
        ZmzButton
    },
    props: {
        /**
         * 颜色
         */
        color: {
            type: String,
            default: 'black'
        },
        /**
         * 宽度
         */
        width: {
            type: Number,
            default: 700
        },
        /**
         * 高度
         */
        height: {
            type: Number,
            default: 700
        },
        /**
         * 显示米字格
         */
        lattice: {
            type: Boolean,
            default: true
        },
        /**
         * 米字格颜色
         */
        latticeColor: {
            type: String,
            default: 'red'
        },
        /**
         * 画板颜色组
         */
        paint: {
            type: Array,
            default: () => ['black', 'blue', 'green', 'red', 'orange', 'yellow']
        },
        /**
         * 清除按钮
         */
        showClearButton: {
            type: Boolean,
            default: true
        },
        /**
         * 线宽
         */
        lineWidth: {
            type: Number,
            default: 10
        },
        /**
         * 下载按钮
         */
        showDownloadButton: {
            type: Boolean,
            default: true
        },
        /**
         * 下载名称
         */
        downloadName: {
            type: String,
            default: 'fileName'
        },
        /**
         * 下载类型
         */
        downloadMimeType: {
            type: String,
            default: 'image/png'
        },
    },
    emits: ['on-change', 'on-clear', 'on-download', 'on-canvas-down', 'on-canvas-move', 'on-canvas-up'],
    setup(props, { emit }) {
        const zmzSignedCanvas = ref(null);
        const ctx = ref(null);
        const defaultColor = ref(props.color);
        const canvasWidth = ref(props.width);
        const canvasHeight = ref(props.height);
        const isMouseDown = ref(false);
        var lastLoc = reactive({
            x: 0,
            y: 0
        });
        const lastTimestamp = ref(0);
        const lastLineWidth = ref(-1);

        const maxLineWidth = ref(props.lineWidth);
        const minLineWidth = ref(1);
        const maxStrokeV = ref(10);
        const minStrokeV = ref(0.1);

        nextTick(() => {
            ctx.value = zmzSignedCanvas.value.getContext('2d');
            zmzSignedCanvas.value.width = canvasWidth.value;
            zmzSignedCanvas.value.height = canvasHeight.value;

            if (props.lattice) {
                drawGrid();
            }
        });

        // 画板颜色选中下标
        const current = computed(() => {
            let index = props.paint.findIndex(item => item == defaultColor.value);
            return index;
        });

        // 样式
        const zmzSignedStyle = computed(() => {
            let params = {}
            params['width'] = props.width + 'px'
            return params
        })

        // 清除画布
        const handleClear = () => {
            ctx.value.clearRect(0, 0, canvasWidth.value, canvasHeight.value);
            if (props.lattice) {
                drawGrid();
            }
            emit('on-clear')
        };

        // 下载
        const handleDownload = () => {
            var MIME_TYPE = props.downloadMimeType;
            var imgURL = zmzSignedCanvas.value.toDataURL(MIME_TYPE);
            var dlLink = document.createElement('a');
            dlLink.download = props.downloadName;
            dlLink.href = imgURL;
            dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
            document.body.appendChild(dlLink);
            dlLink.click();
            document.body.removeChild(dlLink);
            emit('on-download')
        }

        // 选择画笔颜色
        const handleColorSelect = val => {
            defaultColor.value = val;
        };

        // 开始画
        const beginStroke = point => {
            isMouseDown.value = true;
            lastLoc = windowToCanvas(point.x, point.y);
            lastTimestamp.value = new Date().getTime();
            emit('on-canvas-down')
        };

        // 结束画
        const endStroke = () => {
            isMouseDown.value = false;
            emit('on-change', zmzSignedCanvas.value.toDataURL("image/png"))
            emit('on-canvas-up')
        };

        // 移动画
        const moveStroke = point => {
            var curLoc = windowToCanvas(point.x, point.y);
            var curTimestamp = new Date().getTime();
            var s = calcDistance(curLoc, lastLoc);
            var t = curTimestamp - lastTimestamp.value;

            var lineWidth = calcLineWidth(t, s);
            ctx.value.beginPath();
            ctx.value.moveTo(lastLoc.x, lastLoc.y);
            ctx.value.lineTo(curLoc.x, curLoc.y);
            ctx.value.strokeStyle = defaultColor.value;
            ctx.value.lineWidth = lineWidth;
            ctx.value.lineCap = 'round';
            ctx.value.lineJoin = 'round';
            ctx.value.stroke();
            lastLoc = curLoc;
            lastTimestamp.value = curTimestamp;
            lastLineWidth.value = lineWidth;
            emit('on-canvas-move')
        };

        onMounted(() => {
            zmzSignedCanvas.value.addEventListener('touchstart', handleTouchstart);
            zmzSignedCanvas.value.addEventListener('touchmove', handleTouchmove);
            zmzSignedCanvas.value.addEventListener('touchend', handleTouchend);
        });

        const handleTouchstart = (e) => {
            e.preventDefault();
            let touch = e.touches[0];
            beginStroke({
                x: touch.pageX,
                y: touch.pageY
            });
        }

        const handleTouchmove = (e) => {
            e.preventDefault();
            if (isMouseDown.value) {
                let touch = e.touches[0];
                moveStroke({
                    x: touch.pageX,
                    y: touch.pageY
                });
            }
        }

        const handleTouchend = (e) => {
            e.preventDefault();
            endStroke();
        }

        onUnmounted(() => {
            if (zmzSignedCanvas.value) {
                zmzSignedCanvas.value.removeEventListener('touchstart', handleTouchstart);
                zmzSignedCanvas.value.removeEventListener('touchmove', handleTouchmove);
                zmzSignedCanvas.value.removeEventListener('touchend', handleTouchend);
            }
        })

        // 按下
        const handleMousedown = e => {
            e.preventDefault();
            beginStroke({
                x: e.clientX,
                y: e.clientY
            });
        };
        // 抬起
        const handleMouseUp = e => {
            e.preventDefault();
            endStroke();
        };

        // 滑出
        const handleMouseOut = e => {
            e.preventDefault();
            endStroke();
        };

        // 移动
        const handleMouseMove = e => {
            e.preventDefault();
            if (isMouseDown.value) {
                moveStroke({
                    x: e.clientX,
                    y: e.clientY
                });
            }
        };

        // 转换坐标
        const windowToCanvas = (x, y) => {
            var bbox = zmzSignedCanvas.value.getBoundingClientRect();
            return {
                x: Math.round(x - bbox.left),
                y: Math.round(y - bbox.top)
            };
        };

        // 计算距离
        const calcDistance = (loc1, loc2) => {
            return Math.sqrt((loc1.x - loc2.x) * (loc1.x - loc2.x) + (loc1.y - loc2.y) * (loc1.y - loc2.y));
        };

        // 计算线宽
        const calcLineWidth = (t, s) => {
            var v = s / t;

            var resultLineWidth;
            if (v <= minStrokeV.value) {
                resultLineWidth = maxLineWidth.value;
            } else if (v >= maxStrokeV.value) {
                resultLineWidth = minLineWidth.value;
            } else {
                resultLineWidth = maxLineWidth.value - ((v - minStrokeV.value) / (maxStrokeV.value - minStrokeV.value)) * (maxLineWidth.value - minLineWidth.value);
            }
            if (lastLineWidth.value == -1) {
                return resultLineWidth;
            }
            return (lastLineWidth.value * 2) / 3 + (resultLineWidth * 1) / 3;
        };

        //绘制米字格
        const drawGrid = () => {
            ctx.value.save();
            ctx.value.strokeStyle = props.latticeColor;

            ctx.value.beginPath();
            ctx.value.moveTo(3, 3);
            ctx.value.lineTo(canvasWidth.value - 3, 3);
            ctx.value.lineTo(canvasWidth.value - 3, canvasHeight.value - 3);
            ctx.value.lineTo(3, canvasHeight.value - 3);
            ctx.value.closePath();

            ctx.value.lineWidth = 6;
            ctx.value.stroke();

            ctx.value.beginPath();
            ctx.value.moveTo(0, 0);
            ctx.value.lineTo(canvasWidth.value, canvasHeight.value);

            ctx.value.moveTo(canvasWidth.value, 0);
            ctx.value.lineTo(0, canvasHeight.value);

            ctx.value.moveTo(canvasWidth.value / 2, 0);
            ctx.value.lineTo(canvasWidth.value / 2, canvasHeight.value);

            ctx.value.moveTo(0, canvasHeight.value / 2);
            ctx.value.lineTo(canvasWidth.value, canvasHeight.value / 2);

            ctx.value.lineWidth = 2;
            ctx.value.stroke();

            ctx.value.restore();
        };

        return {
            zmzSignedCanvas,
            handleMousedown,
            handleMouseUp,
            handleMouseOut,
            handleMouseMove,
            handleClear,
            handleDownload,
            handleColorSelect,
            current,
            zmzSignedStyle
        };
    }
};
</script>
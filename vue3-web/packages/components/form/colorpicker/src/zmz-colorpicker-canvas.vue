<template>
    <div class="zmz-colorpicker__boardcolor" ref="zmzColorpickerBoardcolor" @mousedown="handleMousedown">
        <div v-show="dot" class="zmz-colorpicker__boardcolor__point" ref="zmzColorpickerBoardcolorPoint"
            :style="[zmzColorpickerBoardcolorPointStyle]">
            <div class="zmz-colorpicker__boardcolor__point__block"></div>
        </div>
        <canvas class="zmz-colorpicker__boardcolor__canvas" ref="zmzColorpickerBoardcolorCanvas"></canvas>
    </div>
</template>

<script>
import { computed, ref, onMounted, watch } from 'vue';
import Color from './color';
export default {
    name: 'ZmzColorpickerCanvas',
    props: {
        /**
         * 颜色
         */
        color: {
            type: Object,
            default: new Color()
        },
        /**
         * 点
         */
        dot: {
            type: String,
            default: ''
        }
    },
    emits: ['on-change'],
    setup(props, { emit }) {
        // 颜色板
        const zmzColorpickerBoardcolor = ref(null);
        // 颜色点选dom
        const zmzColorpickerBoardcolorPoint = ref(null);
        // 颜色画板
        const zmzColorpickerBoardcolorCanvas = ref(null);
        const ctxBoardcolorcanvas = ref(null);
        // 颜色画板大小
        const canvasWidth = ref();
        const canvasHeight = ref();
        const feedback = ref(true);
        const pointX = ref(0);
        const pointY = ref(0);
        const COLOR = ref(new Color());
        // 配置
        onMounted(() => {
            canvasWidth.value = 250;
            canvasHeight.value = 125;
            ctxBoardcolorcanvas.value = zmzColorpickerBoardcolorCanvas.value.getContext('2d', { willReadFrequently: true });
            zmzColorpickerBoardcolorCanvas.value.width = canvasWidth.value;
            zmzColorpickerBoardcolorCanvas.value.height = canvasHeight.value;
            handleColorToxy();
        });
        // 点样式
        const zmzColorpickerBoardcolorPointStyle = computed(() => {
            return { left: pointX.value + 'px', top: pointY.value + 'px' };
        });

        //监听鼠标拖动,并计算点坐标
        const handleMousedown = ev => {
            if (ev.button === 0) {
                feedback.value = false;
                handleComputeDot(ev);
                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseup', handleMouseUp);
            }
        };

        const handleMouseUp = () => {
            document.documentElement.style.cursor = '';
            feedback.value = true;
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        const handleMouseMove = ev => {
            if (ev.buttons === 1) {
                handleComputeDot(ev);
            } else {
                document.documentElement.style.cursor = '';
                feedback.value = true;
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
            }
        };

        const handleComputeDot = ev => {
            let boardcolors = zmzColorpickerBoardcolor.value.getBoundingClientRect();
            let cPointX = ev.clientX - boardcolors.left;
            let cPointY = ev.clientY - boardcolors.top;
            if (cPointX <= 0) {
                cPointX = 0;
            }
            if (cPointX >= boardcolors.width) {
                cPointX = boardcolors.width;
            }
            if (cPointY < 0) {
                cPointY = 0;
            }
            if (cPointY > boardcolors.height) {
                cPointY = boardcolors.height;
            }

            pointX.value = cPointX;
            pointY.value = cPointY;
            handleDotChange(cPointX, cPointY);
        };

        // 通过坐标改变颜色
        const handleDotChange = (cPointX, cPointY) => {
            let sRGB = COLOR.value.COLORHUES[props.color.h];
            let eRGB = { r: 255, g: 255, b: 255 };
            let color = [sRGB.r, sRGB.g, sRGB.b];
            if (cPointX > 0 && cPointX < canvasWidth.value) {
                color = ctxBoardcolorcanvas.value.getImageData(cPointX, cPointY, 1, 1).data;
            } else {
                let sY = 1 - cPointY / canvasHeight.value;
                let bColor = cPointX ? sRGB : eRGB;
                color[0] = Math.round(bColor.r * sY);
                color[1] = Math.round(bColor.g * sY);
                color[2] = Math.round(bColor.b * sY);
            }
            emit('on-change', ...color);
        };
        /**
         * 通过颜色更新坐标
         */
        const handleColorToxy = () => {
            let color = props.color;
            let sRGB = COLOR.value.COLORHUES[color.h];
            let sMax = sRGB.r > sRGB.g ? 'r' : 'g';
            sMax = sRGB[sMax] > sRGB.b ? sMax : 'b';
            let eMin = sRGB.r < sRGB.g ? 'r' : 'g';
            eMin = sRGB.b < sRGB[eMin] ? 'b' : eMin;
            let sY = 1 - color[sMax] / 255;

            let sX = 1 - color[eMin] / color[sMax];

            if (isNaN(sX)) {
                sX = 0;
            }
            if (isNaN(sY)) {
                sY = 0;
            }
            pointX.value = Math.round(canvasWidth.value * sX);
            pointY.value = Math.round(canvasHeight.value * sY);
            handleRenderCanvas();
        };
        /**
         * 渲染canvas 渐变
         */
        const handleRenderCanvas = () => {
            let hue = COLOR.value.COLORHUES[props.color.h];
            let width = canvasWidth.value,
                height = canvasHeight.value;

            let star = { r: 255, g: 255, b: 255 };
            let end = hue;
            for (let i = 0; i <= height; i++) {
                let grd = ctxBoardcolorcanvas.value.createLinearGradient(0, 0, width, 1);
                let bl = (height - i) / height;
                let r = Math.round(star.r * bl);
                let g = Math.round(star.g * bl);
                let b = Math.round(star.b * bl);
                grd.addColorStop(0, COLOR.value.rgb2hex(r, g, b));

                r = Math.round(end.r * bl);
                g = Math.round(end.g * bl);
                b = Math.round(end.b * bl);
                grd.addColorStop(1, COLOR.value.rgb2hex(r, g, b));

                ctxBoardcolorcanvas.value.fillStyle = grd;
                ctxBoardcolorcanvas.value.fillRect(0, i, width, 1);
            }
        };

        watch(
            props.color,
            () => {
                if (feedback.value) {
                    handleColorToxy();
                }
            },
            { lazy: true }
        );

        return {
            zmzColorpickerBoardcolor,
            zmzColorpickerBoardcolorPoint,
            zmzColorpickerBoardcolorCanvas,
            zmzColorpickerBoardcolorPointStyle,
            handleMousedown
        };
    }
};
</script>

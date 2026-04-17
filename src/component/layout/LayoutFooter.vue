<template>
    <div class="zmz-globalIndex__footer">
        <div class="zmz-globalIndex__footer__wrap">
            <div class="zmz-globalIndex__footer__item">
                <div class="zmz-globalIndex__footer__title">官网</div>
                <div class="zmz-globalIndex__footer__content">
                    <div class="zmz-globalIndex__footer__content__item">
                        <a href="https://www.zhuimengzhu.com/" target="_blank">追梦猪</a>
                    </div>
                    <div class="zmz-globalIndex__footer__content__item">
                        <a href="https://zmz-game.zhuimengzhu.com/" target="_blank">潮玩工坊</a>
                    </div>
                    <div class="zmz-globalIndex__footer__content__item">
                        <a href="https://dmbd.zhuimengzhu.com/" target="_blank">答面宝典</a>
                    </div>
                </div>
            </div>
            <div class="zmz-globalIndex__footer__item">
                <div class="zmz-globalIndex__footer__title">文档</div>
                <div class="zmz-globalIndex__footer__content">
                    <div class="zmz-globalIndex__footer__content__item">
                        <a href="https://zmz-vue3-web.zhuimengzhu.com/" target="_blank">zmz-vue3-web文档</a>
                    </div>
                </div>
            </div>
            <div class="zmz-globalIndex__footer__item">
                <div class="zmz-globalIndex__footer__title">编辑器</div>
                <div class="zmz-globalIndex__footer__content">
                    <div class="zmz-globalIndex__footer__content__item">
                        <a href="https://zmz-echarts.zhuimengzhu.com/" target="_blank">echarts编辑器</a>
                    </div>
                    <div class="zmz-globalIndex__footer__content__item">
                        <a href="https://zmz-play.zhuimengzhu.com/" target="_blank">vue编辑器</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="zmz-globalIndex__footer__copyright">
            <div class="zmz-globalIndex__footer__copyright__title">版权声明</div>
            <div class="zmz-globalIndex__footer__copyright__content">Copyright © 2018- {{ new Date().getFullYear() }} <a
                    href="https://www.zhuimengzhu.com/" target="_blank">追梦猪</a> <a href="https://beian.miit.gov.cn/"
                    target="_blank">冀ICP备18035267号-1</a></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LayoutFooter",
    data() {
        return {
        }
    }
};
</script>
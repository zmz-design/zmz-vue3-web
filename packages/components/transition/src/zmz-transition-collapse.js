import { h, Transition, defineComponent } from 'vue';
export default defineComponent({
    name: 'ZmzTransitionCollapse',
    setup(props, { slots }) {
        const beforeEnter = (el) => {
            el.classList.add('zmz-transition-collapse');
            if (!el.dataset) el.dataset = {};

            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;

            el.style.height = '0';
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
        }

        const enter = (el) => {
            el.dataset.oldOverflow = el.style.overflow;
            if (el.scrollHeight !== 0) {
                el.style.height = el.scrollHeight + 'px';
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
            } else {
                el.style.height = '';
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
            }

            el.style.overflow = 'hidden';
        }

        const afterEnter = (el) => {
            el.classList.remove('zmz-transition-collapse');
            el.style.height = '';
            el.style.overflow = el.dataset.oldOverflow;
        }

        const beforeLeave = (el) => {
            if (!el.dataset) el.dataset = {};
            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            el.dataset.oldOverflow = el.style.overflow;
            el.style.height = el.scrollHeight + 'px';
            el.style.overflow = 'hidden';
        }

        const leave = (el) => {
            if (el.scrollHeight !== 0) {
                el.classList.add('zmz-transition-collapse');
                el.style.height = 0;
                el.style.paddingTop = 0;
                el.style.paddingBottom = 0;
            }
        }

        const afterLeave = (el) => {
            el.classList.remove('zmz-transition-collapse');
            el.style.height = '';
            el.style.overflow = el.dataset.oldOverflow;
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }

        return () => h(Transition, {
            onBeforeEnter: beforeEnter,
            onEnter: enter,
            onAfterEnter: afterEnter,
            onBeforeLeave: beforeLeave,
            onLeave: leave,
            onAfterLeave: afterLeave
        }, slots.default);
    }
});
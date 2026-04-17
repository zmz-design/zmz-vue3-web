<template>
    <div class="zmz-waterfall__item" ref="zmzWaterfallItem">
        <slot></slot>
    </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { imageLoad } from '../../../utils/image.js';

export default {
    name: 'ZmzWaterfallItem',
    props: {
        item: {
            type: Object,
            default: () => { }
        },
        delay: {
            type: Boolean,
            default: true
        }
    },
    emits: ['on-load'],
    setup(props, { emit }) {
        const zmzWaterfallItem = ref(null);
        const getItemData = () => ({
            ...props.item,
            height: itemHeight.value
        });

        const itemHeight = computed(() => {
            return zmzWaterfallItem.value ? zmzWaterfallItem.value.clientHeight : 200
        })

        const delayLoad = async () => {
            await imageLoad(zmzWaterfallItem.value.querySelectorAll('img'));
            setTimeout(() => {
                emit('on-load', getItemData());
            }, 100);
        };

        const load = () => {
            emit('on-load', getItemData());
        };

        onMounted(() => {
            props.delay ? delayLoad() : load()
        });

        return {
            zmzWaterfallItem
        };
    }
};
</script>

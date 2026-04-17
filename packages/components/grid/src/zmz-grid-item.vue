<template>
    <div class="zmz-grid__item" ref="zmzGridItem" :style="[zmzGridItemStyle]" :class="[zmzGridItemClass]" @click="handleClick">

        <div class="zmz-grid__content">
            <slot>
                <div class="zmz-grid__content__icon">
                    <slot name="icon">
                        <i :class="icon" v-if="icon"></i>
                        <img :src="src" v-if="src" />
                    </slot>
                </div>
                <div class="zmz-grid__content__title">
                    <slot name="title">{{ title }}</slot>
                </div>
            </slot>
        </div>
    </div>
</template>
<script>
import { ref, inject, computed, getCurrentInstance, onMounted, onBeforeUnmount } from 'vue';
export default {
    name: 'ZmzGridItem',
    props: {
        /**
         * 图标
         */
        icon: {
            type: String,
            default: ''
        },
        /**
         * 地址
         */
        src: {
            type: String,
            default: ''
        },
        /**
         * 标题
         */
        title: {
            type: String,
            default: ''
        }
    },
    setup() {
        const Instance = getCurrentInstance();
        const zmzGrid = inject('zmzGrid', {})
        const index = ref(0)
        const zmzGridItem = ref(null)

        const columnNum = computed(() => {
            return 100 / zmzGrid.column + '%';
        })

        // 公共样式
        const zmzGridItemStyle = computed(() => {
            const params = {};
            if (zmzGrid.gutter) {
                if (((index.value + 1) % zmzGrid.column) == 0) {
                    params['padding-right'] = 0;
                } else {
                    params['padding-right'] = `${zmzGrid.gutter}`;
                }
            }

            if (zmzGridItem.value && zmzGrid.square) {
                params['height'] = zmzGridItem.value.offsetWidth + 'px'
            }

            params['flex-basis'] = columnNum.value
            params['margin-bottom'] = zmzGrid.gutter
            return params;
        });

        const handleClick = () => {
            zmzGrid.onChange(index.value);
        }

        onMounted(() => {
            addDom()
            updateDom()
        })

        onBeforeUnmount(() => {
            removeDom()
            updateDom()
        })

        const addDom = () => {
            zmzGrid.zmzGridList.value.push({
                uid: Instance.uid,
                instance: Instance
            });
        }

        const updateDom = () => {
            zmzGrid.updateDom();
        }

        const removeDom = () => {
            if (zmzGrid.zmzGridList.value && zmzGrid.zmzGridList.value.length) {
                const index = zmzGrid.zmzGridList.value.findIndex(item => item.uid === Instance.uid);
                zmzGrid.zmzGridList.value.splice(index, 1);
            }
        }

        const zmzGridItemClass = computed(() => {
            let params = [];
            return params
        })

        return {
            index,
            columnNum,
            handleClick,
            zmzGridItemStyle,
            zmzGridItemClass,
            zmzGridItem
        }
    },
};
</script>

<template>
    <div v-zmzclickoutside="bodyCloseMenus" class="zmz-dropdown" :class="[zmzDropdownClass]"
        @mouseenter="handleMouseenter" @mouseleave="handleMouseleave" ref="zmzDropdown">
        <div class="zmz-dropdown__header" @click="handleClick">
            <slot></slot>
        </div>
        <zmz-teleportdom :arrow="arrow" ref="zmzDropdownTeleport"
            :class-name="['zmz-teleportdom--dropdown', teleportClass]" :parent-ref="zmzDropdown"
            :visible="currentVisible" :offset="offset" :placement="placement" :teleport="teleport"
            :transition-name="placement == 'top' || placement == 'bottom' ? 'zmz-fold-top' : 'zmz-fold-left'"
            @on-mouseenter="handleMouseenter" @on-mouseleave="handleMouseleave">
            <slot name="dropdown"></slot>
        </zmz-teleportdom>
    </div>
</template>

<script>
import { computed, ref, watch, provide, onMounted } from 'vue';
import ZmzTeleportdom from '../../teleportdom/show.vue';

export default {
    name: 'ZmzDropdown',
    components: {
        ZmzTeleportdom
    },
    props: {
        /**
         * 显示位置
         */
        placement: {
            type: String,
            default: 'bottom'
        },
        /**
         * 高度
         */
        height: String,
        /**
         * 宽度
         */
        width: String,
        /**
         * 下拉角
         */
        arrow: {
            type: Boolean,
            default: true
        },
        /**
         * 是否显示
         */
        show: {
            type: Boolean,
            default: false
        },
        /**
         * 禁用
         */
        disabled: {
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
        /**
         * 穿梭类名
         */
        teleportClass: [Array, String],
        /**
         * 显示
         */
        modelValue: [String, Number],
        /**
         * 激活方式
         */
        trigger: {
            type: String,
            default: 'hover',
            validator(value) {
                return ['click', 'hover'].includes(value);
            }
        },
        /**
         * 点击是否隐藏
         */
        hideOnClick: {
            type: Boolean,
            default: true
        },
        /**
         * 偏移
         */
        offset: {
            type: Array,
            default() {
                return [0, 6]
            }
        },
    },
    emits: ['on-change', 'on-visible-change', 'update:modelValue'],
    setup(props, { emit }) {
        const currentVisible = ref(props.show);
        const timeout = ref(null);
        const zmzDropdown = ref(null);
        const zmzDropdownTeleport = ref(null);
        const zmzDropdownList = ref([])

        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
            }
        });

        // 点击事件
        const handleClick = () => {
            if (props.disabled) return
            if (props.trigger === 'custom') return false;
            if (props.trigger !== 'click') {
                return false;
            }
            currentVisible.value = !currentVisible.value;
        };

        //触发单个
        const handleItemClick = (index) => {
            model.value = index
            if (props.hideOnClick) {
                currentVisible.value = false
            } else {
                currentVisible.value = true;
            }
            emit('on-change', index);
        };

        onMounted(() => {
            updateDom()
        });

        const updateDom = () => {
            zmzDropdownList.value.forEach((item, index) => {
                if (!item.instance.props.index) {
                    item.instance.props.index = index;
                }
            });
        }

        provide('zmzDropdown', {
            zmzDropdownList: zmzDropdownList,
            model: model,
            width: props.width,
            height: props.height,
            hideOnClick: props.hideOnClick,
            handleItemClick: handleItemClick,
            updateDom: updateDom
        });

        watch(
            currentVisible,
            val => {
                emit('on-visible-change', val);
            },
            { lazy: true }
        );

        const handleMouseenter = () => {
            if (props.trigger === 'custom') return false;
            if (props.trigger !== 'hover') {
                return false;
            }
            if (timeout.value) {
                clearTimeout(timeout.value);
                timeout.value = null
            }

            timeout.value = setTimeout(() => {
                currentVisible.value = true;
            }, 250);
        }

        const handleMouseleave = () => {
            if (props.trigger === 'custom') return false;
            if (props.trigger !== 'hover') {
                return false;
            }
            if (timeout.value) {
                clearTimeout(timeout.value);
                timeout.value = null
                timeout.value = setTimeout(() => {
                    currentVisible.value = false;
                }, 150);
            }
        }

        const bodyCloseMenus = e => {
            if (zmzDropdown.value && !zmzDropdown.value.contains(e.target)) {
                if (currentVisible.value) {
                    currentVisible.value = false;
                }
            }
        };

        const zmzDropdownClass = computed(() => {
            let params = [];
            if (props.disabled) {
                params.push('zmz-dropdown--disabled')
            }

            if (currentVisible.value) {
                params.push('zmz-dropdown--open')
            }

            return params
        })

        return {
            currentVisible,
            handleClick,
            handleMouseenter,
            handleMouseleave,
            zmzDropdown,
            zmzDropdownTeleport,
            bodyCloseMenus,
            zmzDropdownClass
        };
    }
};
</script>

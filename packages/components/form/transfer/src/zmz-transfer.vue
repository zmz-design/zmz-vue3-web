<template>
    <div class="zmz-transfer" :class="[tansferClass]">
        <zmz-transfer-checkbox ref="zmztransfercheckboxleft" v-bind="$props" :data="leftDataList"
            v-model="leftDefaultCheckedList" :title="titles[0]" @on-change="checkboxGroupLeftOnChange">
            <template #leftTitle v-if="$slots.leftTitle">
                <slot name="leftTitle"></slot>
            </template>
            <template #leftCount="{ selectedtotal, datatotal }" v-if="$slots.leftCount">
                <slot name="leftCount" :selectedtotal="selectedtotal" :datatotal="datatotal"></slot>
            </template>
            <template #leftFooter v-if="$slots.leftFooter">
                <slot name="leftFooter"></slot>
            </template>
            <template #leftLabel="{ item }" v-if="$slots.leftLabel">
                <slot name="leftLabel" :item="item"></slot>
            </template>
        </zmz-transfer-checkbox>
        <div class="zmz-transfer__button">
            <div class="zmz-transfer__button__btn" @click="handleLeftBtnClick">
                <template v-if="$slots.leftBtn">
                    <slot :disabled="checkboxGroupRightLength == 0" name="leftBtn"></slot>
                </template>
                <zmz-button type="primary" icon="zmz-icon--arrow-left" :disabled="checkboxGroupRightLength == 0"
                    v-else></zmz-button>
            </div>
            <div class="zmz-transfer__button__btn" @click="handleRightBtnClick">
                <template v-if="$slots.rightBtn">
                    <slot :disabled="checkboxGroupLeftLength == 0" name="rightBtn"></slot>
                </template>
                <zmz-button type="primary" icon="zmz-icon--arrow-right" :disabled="checkboxGroupLeftLength == 0"
                    v-else></zmz-button>
            </div>
        </div>
        <zmz-transfer-checkbox ref="zmztransfercheckboxright" v-bind="$props" :data="rightDataList"
            v-model="rightDefaultCheckedList" :title="titles[1]" @on-change="checkboxGroupRightOnChange">
            <template #rightTitle v-if="$slots.rightTitle">
                <slot name="rightTitle"></slot>
            </template>
            <template #rightCount="{ selectedtotal, datatotal }" v-if="$slots.rightCount">
                <slot name="rightCount" :selectedtotal="selectedtotal" :datatotal="datatotal"></slot>
            </template>
            <template #rightFooter v-if="$slots.rightFooter">
                <slot name="rightFooter"></slot>
            </template>
            <template #rightLabel="{ item }" v-if="$slots.rightLabel">
                <slot name="rightLabel" :item="item"></slot>
            </template>
        </zmz-transfer-checkbox>
    </div>
</template>
<script>
import { ref, computed, getCurrentInstance, inject } from 'vue';
import ZmzButton from '../../../button/index.js';
import ZmzTransferCheckbox from './zmz-transfer-checkbox.vue';
import { findParent } from '../../../../utils/find.js';
export default {
    name: 'ZmzTransfer',
    components: {
        ZmzButton,
        ZmzTransferCheckbox
    },
    props: {
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
         * 绑定值
         */
        modelValue: {
            type: Array,
            default: () => []
        },
        /**
         * 数据
         */
        data: {
            type: Array,
            default: () => []
        },
        /**
         * 
         */
        insert: {
            type: String,
            default: 'initial'
        },
        /**
         * 标题
         */
        titles: {
            type: Array,
            default: () => {
                return ['左列表', '右列表']
            }
        },
        /**
         * 左默认选中
         */
        leftDefaultChecked: {
            type: Array,
            default: () => []
        },
        /**
         * 右默认选中
         */
        rightDefaultChecked: {
            type: Array,
            default: () => []
        },
        /**
         * 
         */
        fieldAlias: {
            type: Object,
            default() {
                return {
                    label: 'label',
                    key: 'key',
                    disabled: 'disabled'
                };
            }
        },
        /**
         * 搜索
         */
        search: {
            type: Boolean,
            default: false
        },
        /**
         * 搜索提示
         */
        searchPlaceholder: {
            type: String,
            default: '请输入搜索内容'
        },
        /**
         * 空
         */
        emptyText: {
            type: String,
            default: '暂无数据'
        },
        /**
         * 搜索空
         */
        searchEmptyText: {
            type: String,
            default: '暂无匹配数据'
        },
        /**
         * 搜索回调
         */
        searchMethod: Function
    },
    emits: ['update:modelValue', 'on-change', 'on-left-btn-click', 'on-right-btn-click'],
    setup(props, { emit }) {
        const { parent } = getCurrentInstance();
        const leftDefaultCheckedList = ref(props.leftDefaultChecked)
        const rightDefaultCheckedList = ref(props.rightDefaultChecked)
        const leftCheckedList = ref(props.leftDefaultChecked);
        const rightCheckedList = ref([]);
        const zmztransfercheckboxleft = ref(null)
        const zmztransfercheckboxright = ref(null)
        const zmzForm = inject('zmzForm', {});
        const model = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                emit('update:modelValue', val);
                if (parentProxyForm.value) {
                    parentProxyForm.value.proxy.onValidate();
                }
            }
        });
        // 处理对象
        const dataObj = computed(() => {
            return props.data.reduce((arr, item) => (arr[item[props.fieldAlias.key]] = item) && arr, {});
        });

        // 筛选左部数据
        const leftDataList = computed(() => {
            return props.data.filter(item => model.value.indexOf(item[props.fieldAlias.key]) === -1);
        });

        // 筛选右部数据
        const rightDataList = computed(() => {
            if (props.insert == 'initial') {
                return props.data.filter(item => model.value.indexOf(item[props.fieldAlias.key]) > -1);
            } else {
                return model.value.reduce((arr, item) => {
                    const val = dataObj.value[item];
                    if (val) {
                        arr.push(val);
                    }
                    return arr;
                }, []);
            }
        });

        // 点右按钮发生改变
        const handleRightBtnClick = () => {
            let currentValue = model.value.slice();
            const itemsToBeMoved = [];
            props.data.forEach(item => {
                const itemKey = item[props.fieldAlias.key];
                if (leftCheckedList.value.indexOf(itemKey) > -1 && model.value.indexOf(itemKey) === -1) {
                    itemsToBeMoved.push(itemKey);
                }
            });
            if (props.insert == 'unshift') {
                model.value = itemsToBeMoved.concat(currentValue);
            } else {
                model.value = currentValue.concat(itemsToBeMoved);
            }
            emit('on-change', model.value, leftCheckedList.value);
            emit('on-right-btn-click', model.value, leftCheckedList.value);
            leftCheckedList.value = []
            leftDefaultCheckedList.value = []
            zmztransfercheckboxleft.value.isAllChecked = false
        };

        // 点左按钮发生改变
        const handleLeftBtnClick = () => {
            let currentValue = model.value.slice();
            rightCheckedList.value.forEach(item => {
                const index = currentValue.indexOf(item);
                if (index > -1) {
                    currentValue.splice(index, 1);
                }
            });
            model.value = currentValue
            emit('on-change', model.value, rightCheckedList.value);
            emit('on-left-btn-click', model.value, leftCheckedList.value);
            rightCheckedList.value = []
            rightDefaultCheckedList.value = []
            zmztransfercheckboxright.value.isAllChecked = false
        };

        // 左发生改变
        const checkboxGroupLeftOnChange = data => {
            leftCheckedList.value = data;
            leftDefaultCheckedList.value = data
            emit('on-change', 'left', data);
        };

        // 右发生改变
        const checkboxGroupRightOnChange = data => {
            rightCheckedList.value = data;
            rightDefaultCheckedList.value = data
            emit('on-change', 'right', data);
        };

        // 选中总数左
        const checkboxGroupLeftLength = computed(() => {
            return leftCheckedList.value.length;
        });

        // 选中总数右
        const checkboxGroupRightLength = computed(() => {
            return rightCheckedList.value.length;
        });

        const parentProxyForm = computed(() => {
            return findParent(parent, 'ZmzFormItem');
        });

        const tansferClass = computed(() => {
            let params = {}
            if (globalFromDisabled.value) {
                params['zmz-transfer--disabled'] = globalFromDisabled.value
            }

            if (globalFromReadonly.value) {
                params['zmz-transfer--readonly'] = globalFromReadonly.value
            }
            return params
        })

        const clearSearchQuery = (type) => {
            if (type === 'left') {
                zmztransfercheckboxleft.value.searchQuery = '';
            } else if (type === 'right') {
                zmztransfercheckboxright.value.searchQuery = '';
            }
        }

        // 全局禁用
        const globalFromDisabled = computed(() => {
            return (zmzForm && zmzForm.disabled) ? zmzForm.disabled : props.disabled;
        })

        // 全局禁用
        const globalFromReadonly = computed(() => {
            return (zmzForm && zmzForm.readonly) ? zmzForm.readonly : props.readonly;
        })

        return {
            leftDataList,
            rightDataList,
            handleLeftBtnClick,
            handleRightBtnClick,
            checkboxGroupLeftLength,
            checkboxGroupRightLength,
            checkboxGroupLeftOnChange,
            checkboxGroupRightOnChange,
            leftCheckedList,
            leftDefaultCheckedList,
            rightDefaultCheckedList,
            tansferClass,
            clearSearchQuery,
            zmztransfercheckboxright,
            zmztransfercheckboxleft
        };
    }
};
</script>

<template>
    <div class="zmz-upload__list">
        <transition-group name="zmz-fade-top">
            <div :class="['zmz-upload__list__item', {
                'zmz-upload__list__item--hover': currentHover === index,
                'zmz-upload__list__item--success': item.status === 'success',
                'zmz-upload__list__item--ready': item.status === 'ready'
            }]" :key="index" @mouseover="handleMouseover(index)" @mouseout="handleMouseout(index)"
                v-for="(item, index) in  fileList">
                <template v-if="fileListType === 'text'">
                    <div class="zmz-upload__list__item__file" @Click="handlePreview(item, index)">
                        <div class="zmz-upload__list__item__file__wrap">
                            <i class="zmz-icon--file-fill"></i>
                        </div>
                        <div class="zmz-upload__list__item__file__name">{{ item.name }}</div>
                    </div>
                    <div class="zmz-upload__list__item__operation">
                        <div class="zmz-upload__list__item__operation__icon" @click="handleRemove(item, index)"
                            v-if="currentHover === index"><i class="zmz-icon--del"></i></div>
                        <div class="zmz-upload__list__item__operation__icon" v-else>
                            <i class="zmz-icon--loading" v-if="item.status === 'ready'"></i>
                            <i class="zmz-icon--success" v-else></i>
                        </div>
                    </div>
                </template>
                <template v-if="fileListType === 'picture'">
                    <div class="zmz-upload__list__item__file" @click="handlePreview(item, index)">
                        <div class="zmz-upload__list__item__file__wrap">
                            <img :src="item.url" class="zmz-upload__list__item__file__wrap__image" />
                        </div>
                        <div class="zmz-upload__list__item__file__name">{{ item.name }}</div>
                    </div>
                    <div class="zmz-upload__list__item__operation">
                        <div class="zmz-upload__list__item__operation__icon" @click="handleRemove(item, index)"
                            v-if="currentHover === index"><i class="zmz-icon--del"></i>
                        </div>
                        <div class="zmz-upload__list__item__operation__icon" v-else>
                            <i class="zmz-icon--loading" v-if="item.status === 'ready'"></i>
                            <i class="zmz-icon--success" v-else></i>
                        </div>
                    </div>
                </template>
                <template v-if="fileListType === 'picture-card'">
                    <div class="zmz-upload__list__item__file">
                        <div class="zmz-upload__list__item__file__wrap">
                            <img :src="item.url" class="zmz-upload__list__item__file__wrap__image" />
                        </div>
                    </div>
                    <div class="zmz-upload__list__item__operation">
                        <div class="zmz-upload__list__item__operation__icon" @click="handlePreview(item,
                            index)"><i class="zmz-icon--enlarge"></i></div>
                        <div class="zmz-upload__list__item__operation__icon" @click="handleRemove(item,
                            index)"><i class="zmz-icon--del"></i></div>
                    </div>
                </template>
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'ZmzUploadList',
    props: {
        /**
         * 数据源
         */
        fileList: {
            type: Array,
            default() {
                return []
            }
        },
        /**
         * 显示文件列表
         */
        showFileList: {
            type: Boolean,
            default: false
        },
        /**
         * 类型
         */
        fileListType: {
            type: String,
            default: 'text',
            validator(value) {
                return ['text', 'picture', 'picture-card'].includes(value)
            }
        },
    },
    data() {
        return {
            currentHover: null
        }
    },
    methods: {
        // 预览文件
        handlePreview(item, index) {
            this.$emit('on-preview', item, index);
        },
        // 移除文件
        handleRemove(item, index) {
            this.$emit('on-remove', item, index);
        },
        // 滑入
        handleMouseover(index) {
            this.currentHover = index
        },
        // 滑出
        handleMouseout() {
            this.currentHover = null
        },
    }
};
</script>

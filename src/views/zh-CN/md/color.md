<script>
import { baseColors } from '@/utils/color';
import { baseText } from '@/utils/text';
export default {
    metaInfo() {
        return {
            title: this.title,
            meta: [
                {
                    name: 'keywords',
                    content: this.keywords
                },
                {
                    name: 'describe',
                    content: this.describe
                }
            ]
        };
    },
    data() {
        return {
            title: 'Color 色彩' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe'),
            baseColorsDataList: baseColors,
            baseTextDataList: baseText
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        }
    }
};
</script>

<style lang="less" scoped>
.zmz-color-palette {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    
    &__item {
    }

    &__header { 
        padding: 16px;
        border-radius: 5px 5px 0 0; 
        overflow: hidden;
        display: flex;
        flex-direction: column;
        .zmz-color-palette-key {
            font-size: 20px;
            margin-bottom: 10px;
        }

        .zmz-color-palette-value {
            font-size: 14px;
            display:flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    &__section { 
        border-radius: 0 0  5px 5px; 
        overflow: hidden;
        &__item {
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .zmz-color-palette-key {
            font-size: 14px;
        }

        .zmz-color-palette-value {
            font-size: 14px;
        }
    }
}

.zmz-color-neutral {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    
    &__item {
    }

    &__header { 
        padding: 16px;
        border-radius: 5px 5px 0 0; 
        overflow: hidden;
        display: flex;
        flex-direction: column;
        .zmz-color-neutral-key {
            font-size: 16px;
        }
    }

    &__section { 
        border-radius: 0 0  5px 5px; 
        overflow: hidden;


        &__item {
            padding: 16px;
            display: flex;
            flex-direction: column;
            margin: 10px 0;
            border-radius: 5px;
            overflow: hidden;
            background-size: 20px 20px;
            background-position: 0px 0px, 10px 0px, 10px -10px, 0px 10px;
        }

        .zmz-color-neutral-key {
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;

            span {
                &:nth-child(1) {
                    font-size: 16px;
                    font-weight: bold;
                }
            }
        }

        .zmz-color-neutral-value {
            font-size: 12px;
        }
    }
}

.zmz-color {
    display: flex;
    align-items: center;
    margin-top: 20px;

    &__item {
        width: 300px;
        height: 120px;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        padding: 20px;
        margin-right: 20px;

        &__header {
            &__title {
                margin-bottom: 5px;
                color: #fff;
            }

            &__describe {
                color: #fff;
            }
        }

        &__section {
            height: 40px;
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;

            &__item {
                flex: 1;
                height: 100%;
            }
        }
    }
}

.zmz-color {
    &-primary {
        background: #2d8ff4;
    }

    &-success {
        background: #23c171;
    }

    &-warning {
        background: #e08c45;
    }

    &-error {
        background: #ff6767;
    }

    &-info {
        background: #7c838a;
    }
}

.zmz-color {
    &-text1 {
        background: #3f536e;
    }

    &-text2 {
        background: #606266;
    }

    &-text3 {
        background: #c5cbd3;
    }

    &-text4 {
        background: #e3e6ef;
    }
}
</style>

# Color 色彩

---

ZMZ 为了避免视觉传达差异，推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。

## 主色

ZMZ 使用较为安全的蓝色作为主色调。

<div class="zmz-color">
    <div class="zmz-color__item  zmz-color-primary" style="background: #2d91f4">
        <div class="zmz-color__item__header">
            <div class="zmz-color__item__header__title">
                Primary
            </div>
            <div class="zmz-color__item__header__describe">
                #2d91f4
            </div>
        </div>
    </div>
</div>

## 辅助色

辅助色是具有代表性的颜色，常用于提示，比如消息、成功、警告、失败

<div class="zmz-color">
    <div class="zmz-color__item" style="background: #86909C">
        <div class="zmz-color__item__header">
            <div class="zmz-color__item__header__title">
                消息-info
            </div>
            <div class="zmz-color__item__header__describe">
                #86909C
            </div>
        </div>
    </div>
    <div class="zmz-color__item" style="background: #4caf4f">
        <div class="zmz-color__item__header">
            <div class="zmz-color__item__header__title">
                成功-Success
            </div>
            <div class="zmz-color__item__header__describe">
                #4caf4f
            </div>
        </div>
    </div>
    <div class="zmz-color__item" style="background: #ff9900">
        <div class="zmz-color__item__header">
            <div class="zmz-color__item__header__title">
                警告-Warning
            </div>
            <div class="zmz-color__item__header__describe">
                #ff9900
            </div>
        </div>
    </div>
    <div class="zmz-color__item" style="background: #f32d26">
        <div class="zmz-color__item__header">
            <div class="zmz-color__item__header__title">
                错误-Error
            </div>
            <div class="zmz-color__item__header__describe">
                #f32d26
            </div>
        </div>
    </div>
</div>

## 中性色

中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。
<zmz-row  :gutter="20" class="zmz-color-neutral">
    <zmz-col  class="zmz-color-neutral__item" span="6"  v-for="(item, index) in baseTextDataList" :key="index">
        <div>
            <div class="zmz-color-neutral__header" :style="{'background': item.color, 'color': '#fff'}">
                <div class="zmz-color-neutral-key">
                    {{item.name}}
                </div>
            </div>
            <div class="zmz-color-neutral__section" v-if="item.children">
                <div class="zmz-color-neutral__section__item"  :style="[{'color': items.textColor}, items.color == 'Transparent'?{'background-image': items.background}: {'background': items.background} ]" v-for="(items, indexs) in item.children" :key="indexs">
                    <div class="zmz-color-neutral-key">
                        <span>{{items.name}}</span>
                        <span>{{items.color}}</span>
                    </div>
                    <div class="zmz-color-neutral-value">
                        {{items.describes}}
                    </div>
                </div>
            </div>
        </div>
    </zmz-col>
</zmz-row>

# 调色板
为了更灵活的进行颜色搭配，我们参考了 Material Design Color Palette ，使用上述提到的 品牌色 和 辅助色 作为主色，形成一条条完整的渐变色板。主色使用 500 色号。
<zmz-row  :gutter="20" class="zmz-color-palette">
    <zmz-col  class="zmz-color-palette__item" span="8"  v-for="(item, index) in baseColorsDataList" :key="index">
        <div>
            <div class="zmz-color-palette__header" :style="{'background': item.color, 'color': '#fff'}">
                <div class="zmz-color-palette-key">
                    {{item.name}}
                </div>
                <div class="zmz-color-palette-value">
                    <span>{{item.color}}</span>
                    <span>{{item.base}}</span>
                </div>
            </div>
            <div class="zmz-color-palette__section" v-if="item.children">
                <div class="zmz-color-palette__section__item"  :style="{'background': values, 'color': indexs > 2? '#fff': '#4B5563'}" v-for="(values, keys, indexs) in item.children" :key="indexs">
                    <div class="zmz-color-palette-key">
                        {{keys}}
                    </div>
                    <div class="zmz-color-palette-value">
                        {{values}}
                    </div>
                </div>
            </div>
        </div>
    </zmz-col>
</zmz-row>

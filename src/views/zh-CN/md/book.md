<script>
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
            title: 'Book 书籍' + this.currentConfig('tails'),
            keywords: this.currentConfig('keywords'),
            describe: this.currentConfig('describe'),
            pageList: [
                {
                    "front": {
                        "imgUrl": "https://bookcover.yuewen.com/qdbimg/349573/c_22389749000734402/180"
                    }, 
                    "behind": {
                        "style": {
                            "background": "#f00"
                        }
                    }
                }, 
                {
                    "front": {
                        "content": `先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
            宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。
            侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。
            将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。
            亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。
            臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。
            先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明，故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。
            愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言。深追先帝遗诏，臣不胜受恩感激。
            今当远离，临表涕零，不知所言 `, 
                        "title": "行宫"
                    }, 
                    "behind": {
                        "content": "白日依山尽，黄河入海流。欲穷千里目，更上一层楼。", 
                        "title": "登鹳雀楼"
                    }
                }, 
                {
                    "front": {
                        "content": "三日入厨下，洗手作羹汤。 未谙姑食性，先遣小姑尝。", 
                        "title": "新嫁娘词"
                    }, 
                    "behind": {
                        "content": "独坐幽篁里，弹琴复长啸。深林人不知，明月来相照。", 
                        "title": "竹里馆"
                    }
                }, 
                {
                    "front": {
                        "content": "君自故乡来，应知故乡事。来日绮窗前，寒梅著花未？", 
                        "title": "杂诗三首·其二", 
                        "enclosure": [
                            {
                                "name": "附件1", 
                                "url": "", 
                                "style": {
                                    "color": "#f00"
                                }
                            },
                            {
                                "name": "附件1-1", 
                                "url": "", 
                                "style": {
                                    "color": "#f00"
                                }
                            },
                            {
                                "name": "附件1-2", 
                                "url": "", 
                                "style": {
                                    "color": "#f00"
                                }
                            }
                        ]
                    }, 
                    "behind": {
                        "content": "床前明月光，疑是地上霜。举头望明月，低头思故乡。", 
                        "title": "静夜思", 
                        "enclosure": [
                            {
                                "name": "附件2", 
                                "url": "", 
                                "style": {
                                    "color": "#0f0"
                                }
                            }
                        ]
                    }
                }, 
                {
                    "front": {
                        "content": "终南阴岭秀，积雪浮云端。林表明霁色，城中增暮寒。", 
                        "title": "终南望余雪", 
                        "enclosure": [
                            {
                                "name": "附件3", 
                                "url": "", 
                                "style": {
                                    "color": "#00f"
                                }
                            }
                        ]
                    }, 
                    "behind": {
                        "content": "孤云将野鹤，岂向人间住。莫买沃洲山，时人已知处。", 
                        "title": "送方外上人"
                    }
                }, 
                {
                    "front": {
                        "content": "寒雨连江夜入吴，平明送客楚山孤。洛阳亲友如相问，一片冰心在玉壶。", 
                        "title": "芙蓉楼送辛渐"
                    }, 
                    "behind": {
                        "content": "独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。", 
                        "title": "九月九日忆山东兄弟"
                    }
                }, 
                {
                    "front": {
                        "content": "谁谓伤心画不成，画人心逐世人情。君看六幅南朝事，老木寒云满故城。", 
                        "title": "金陵图"
                    }, 
                    "behind": {
                        "content": "碧阑干外绣帘垂，猩色屏风画折枝。(猩色 一作：猩血)八尺龙须方锦褥，已凉天气未寒时。", 
                        "title": "已凉"
                    }
                }, 
                {
                    "front": {
                        "content": "十年离乱后，长大一相逢。问姓惊初见，称名忆旧容。别来沧海事，语罢暮天钟。明日巴陵道，秋山又几重。", 
                        "title": "喜见外弟又言别"
                    }, 
                    "behind": {
                        "content": "城阙辅三秦，风烟望五津。与君离别意，同是宦游人。海内存知己，天涯若比邻。无为在歧路，儿女共沾巾。", 
                        "title": "送杜少府之任蜀州"
                    }
                }
            ],
            mode: 'double',
            index: 0
        };
    },
    methods: {
        currentConfig(data) {
            return this.$setting.currentConfig[data];
        },
    }
};
</script>
# Book 书籍
----
书籍样式

## 基本用法
<div class="demo-block">
    <zmz-book v-model="index" front-cover :width="200" :height="300" :data="pageList"></zmz-book>
</div>

::: demo
```html
<template>
    <zmz-book v-model="index" front-cover :width="200" :height="300" :data="pageList"></zmz-book>
</template>
<script>
export default {
    data() {
        return {
            pageList: [
                {
                    "front": {
                        "imgUrl": "https://bookcover.yuewen.com/qdbimg/349573/c_22389749000734402/180"
                    }, 
                    "behind": {
                        "style": {
                            "background": "#f00"
                        }
                    }
                }, 
                {
                    "front": {
                        "content": `先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
            宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。
            侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。
            将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。
            亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。
            臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。
            先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明，故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。
            愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言。深追先帝遗诏，臣不胜受恩感激。
            今当远离，临表涕零，不知所言 `, 
                        "title": "行宫"
                    }, 
                    "behind": {
                        "content": "白日依山尽，黄河入海流。欲穷千里目，更上一层楼。", 
                        "title": "登鹳雀楼"
                    }
                }, 
                {
                    "front": {
                        "content": "三日入厨下，洗手作羹汤。 未谙姑食性，先遣小姑尝。", 
                        "title": "新嫁娘词"
                    }, 
                    "behind": {
                        "content": "独坐幽篁里，弹琴复长啸。深林人不知，明月来相照。", 
                        "title": "竹里馆"
                    }
                }, 
                {
                    "front": {
                        "content": "君自故乡来，应知故乡事。来日绮窗前，寒梅著花未？", 
                        "title": "杂诗三首·其二", 
                        "enclosure": [
                            {
                                "name": "附件1", 
                                "url": "", 
                                "style": {
                                    "color": "#f00"
                                }
                            },
                            {
                                "name": "附件1-1", 
                                "url": "", 
                                "style": {
                                    "color": "#f00"
                                }
                            },
                            {
                                "name": "附件1-2", 
                                "url": "", 
                                "style": {
                                    "color": "#f00"
                                }
                            }
                        ]
                    }, 
                    "behind": {
                        "content": "床前明月光，疑是地上霜。举头望明月，低头思故乡。", 
                        "title": "静夜思", 
                        "enclosure": [
                            {
                                "name": "附件2", 
                                "url": "", 
                                "style": {
                                    "color": "#0f0"
                                }
                            }
                        ]
                    }
                }, 
                {
                    "front": {
                        "content": "终南阴岭秀，积雪浮云端。林表明霁色，城中增暮寒。", 
                        "title": "终南望余雪", 
                        "enclosure": [
                            {
                                "name": "附件3", 
                                "url": "", 
                                "style": {
                                    "color": "#00f"
                                }
                            }
                        ]
                    }, 
                    "behind": {
                        "content": "孤云将野鹤，岂向人间住。莫买沃洲山，时人已知处。", 
                        "title": "送方外上人"
                    }
                }, 
                {
                    "front": {
                        "content": "寒雨连江夜入吴，平明送客楚山孤。洛阳亲友如相问，一片冰心在玉壶。", 
                        "title": "芙蓉楼送辛渐"
                    }, 
                    "behind": {
                        "content": "独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。", 
                        "title": "九月九日忆山东兄弟"
                    }
                }, 
                {
                    "front": {
                        "content": "谁谓伤心画不成，画人心逐世人情。君看六幅南朝事，老木寒云满故城。", 
                        "title": "金陵图"
                    }, 
                    "behind": {
                        "content": "碧阑干外绣帘垂，猩色屏风画折枝。(猩色 一作：猩血)八尺龙须方锦褥，已凉天气未寒时。", 
                        "title": "已凉"
                    }
                }, 
                {
                    "front": {
                        "content": "十年离乱后，长大一相逢。问姓惊初见，称名忆旧容。别来沧海事，语罢暮天钟。明日巴陵道，秋山又几重。", 
                        "title": "喜见外弟又言别"
                    }, 
                    "behind": {
                        "content": "城阙辅三秦，风烟望五津。与君离别意，同是宦游人。海内存知己，天涯若比邻。无为在歧路，儿女共沾巾。", 
                        "title": "送杜少府之任蜀州"
                    }
                }
            ],
            index: 0
        };
    }
};
</script>
```
:::

### 禁用用法
<div class="demo-alert demo-block">
    <zmz-book v-model="index" disabled front-cover :width="200" :height="300" :data="pageList"></zmz-book>
</div>

::: demo
```html
<template>
    <zmz-book v-model="index" disabled front-cover :width="200" :height="300" :data="pageList"></zmz-book>
</template>
<script>
export default {
    data() {
        return {
            pageList: [
                {
                    "front": {
                        "imgUrl": "https://bookcover.yuewen.com/qdbimg/349573/c_22389749000734402/180"
                    }, 
                    "behind": {
                        "style": {
                            "background": "#f00"
                        }
                    }
                }, 
                {
                    "front": {
                        "content": `先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
            宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。
            侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。
            将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。
            亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。
            臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。
            先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明，故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。
            愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言。深追先帝遗诏，臣不胜受恩感激。
            今当远离，临表涕零，不知所言 `, 
                        "title": "行宫"
                    }, 
                    "behind": {
                        "content": "白日依山尽，黄河入海流。欲穷千里目，更上一层楼。", 
                        "title": "登鹳雀楼"
                    }
                }, 
                {
                    "front": {
                        "content": "三日入厨下，洗手作羹汤。 未谙姑食性，先遣小姑尝。", 
                        "title": "新嫁娘词"
                    }, 
                    "behind": {
                        "content": "独坐幽篁里，弹琴复长啸。深林人不知，明月来相照。", 
                        "title": "竹里馆"
                    }
                }, 
                {
                    "front": {
                        "content": "君自故乡来，应知故乡事。来日绮窗前，寒梅著花未？", 
                        "title": "杂诗三首·其二", 
                        "enclosure": [
                            {
                                "name": "附件1", 
                                "url": "", 
                                "style": {
                                    "color": "#f00"
                                }
                            },
                            {
                                "name": "附件1-1", 
                                "url": "", 
                                "style": {
                                    "color": "#f00"
                                }
                            },
                            {
                                "name": "附件1-2", 
                                "url": "", 
                                "style": {
                                    "color": "#f00"
                                }
                            }
                        ]
                    }, 
                    "behind": {
                        "content": "床前明月光，疑是地上霜。举头望明月，低头思故乡。", 
                        "title": "静夜思", 
                        "enclosure": [
                            {
                                "name": "附件2", 
                                "url": "", 
                                "style": {
                                    "color": "#0f0"
                                }
                            }
                        ]
                    }
                }, 
                {
                    "front": {
                        "content": "终南阴岭秀，积雪浮云端。林表明霁色，城中增暮寒。", 
                        "title": "终南望余雪", 
                        "enclosure": [
                            {
                                "name": "附件3", 
                                "url": "", 
                                "style": {
                                    "color": "#00f"
                                }
                            }
                        ]
                    }, 
                    "behind": {
                        "content": "孤云将野鹤，岂向人间住。莫买沃洲山，时人已知处。", 
                        "title": "送方外上人"
                    }
                }, 
                {
                    "front": {
                        "content": "寒雨连江夜入吴，平明送客楚山孤。洛阳亲友如相问，一片冰心在玉壶。", 
                        "title": "芙蓉楼送辛渐"
                    }, 
                    "behind": {
                        "content": "独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。", 
                        "title": "九月九日忆山东兄弟"
                    }
                }, 
                {
                    "front": {
                        "content": "谁谓伤心画不成，画人心逐世人情。君看六幅南朝事，老木寒云满故城。", 
                        "title": "金陵图"
                    }, 
                    "behind": {
                        "content": "碧阑干外绣帘垂，猩色屏风画折枝。(猩色 一作：猩血)八尺龙须方锦褥，已凉天气未寒时。", 
                        "title": "已凉"
                    }
                }, 
                {
                    "front": {
                        "content": "十年离乱后，长大一相逢。问姓惊初见，称名忆旧容。别来沧海事，语罢暮天钟。明日巴陵道，秋山又几重。", 
                        "title": "喜见外弟又言别"
                    }, 
                    "behind": {
                        "content": "城阙辅三秦，风烟望五津。与君离别意，同是宦游人。海内存知己，天涯若比邻。无为在歧路，儿女共沾巾。", 
                        "title": "送杜少府之任蜀州"
                    }
                }
            ],
            index: 0
        };
    }
};
</script>
```
:::

## Book 属性
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| v-model      |    打开指定页面 |    Number/String   |    —    |    0  |
| data      |	书籍数据 |	Array   |	—    |	—  |
| width   | 书籍宽度 | Number  | —  |  200  |
| height |  书籍高度  |    Number    |   —  |    300      |
| page-number-style | 页码自定义样式 | Object | — | — |
| page-number-class | 页码自定义类名 | Array | — | — |
| page-title-style | 标题自定义样式 | Object | — | — |
| page-title-class | 标题自定义类名 | Array | — | — |
| page-content-style | 内容定义样式 | Object | — | — |
| page-content-class | 内容自定义类名 | Array | — | — |
| empty-text | 为空文字 | String | — | — |
| empty-icon | 为空icon | String | — | — |
| nomore-text | 暂无更多文字 | String | — | — |
| nomore-icon | 暂无更多icon | String | — | — |
| front-cover | 是否第一条数据为封面 | Boolean | — | false |
| disabled | 是否禁用 | Boolean | — | false |
| readonly | 是否只读 | Boolean | — | false |

## Book 方法
| 参数      | 说明           | 回调参数                           |
|---------- |-------------- |--------------------------------  |
| on-enclosure-click | 点击附件回调 | function(even)  |
| on-first-page | 跳转首页触发 | function(index: 开始)  |
| on-last-page | 跳转第最后页触发 | function(index: 结束)  |
| on-change-page | 页数发生改变触发 | function(index: 当前)  |

## Book 插槽
| 名称      | 说明          |参数          |
|---------- |-------------- |-------        |
| front | 书页正面插槽 | #front="{item}" |
| frontImg | 书页正面图片插槽 | #frontImg="{item}" |
| behind | 书页背面插槽 | #behind="{item}" |
| behindImg | 书页背面图片插槽 | #behindImg="{item}" |
| empty | 为空插槽 | — |
| nomore | 暂无更多插槽 | — |
| frontEnclosure | 书页正面附件插槽 | #frontEnclosure="{item}" |
| behindEnclosure | 书页背面附件插槽 | #behindEnclosure="{item}" |
| frontTitle | 书页正面标题插槽 | #frontTitle="{title}" |
| behindTitle | 书页背面标题插槽 | #behindTitle="{title}" |
| frontContent | 书页正面内容插槽 | #frontContent="{content}" |
| behindContent | 书页背面内容插槽 | #behindContent="{content}" |

## Book 默认样式变量
| less变量                          | css3变量                                | 默认值        | 说明           |
|---------------------------------- |--------------------------------------  |-------------- |-------------- |
| @zmz-book-width             |  --zmz-book-width                 | 400px     |   宽度    |
| @zmz-book-height      |  --zmz-book-height         | 300px         | 高度      |
| @zmz-book-item-width         |  --zmz-book-item-width          | 200px     | 每个宽度        |
| @zmz-book-item-height       |  --zmz-book-item-height         | 300px      | 每个高度        |
| @zmz-book-border-color       |  --zmz-book-border-color          | #e6e7eb     | 边线颜色        |
| @zmz-book-background-color       |  --zmz-book-background-color          | #fff      | 背景色        |
| @zmz-book-title-color       |  --zmz-book-title-color          | #213547      | 标题颜色        |
| @zmz-book-title-font-size       |  --zmz-book-title-font-size          | 14px      | 标题大小        |
| @zmz-book-content-color       |  --zmz-book-content-color          | #213547      | 内容颜色        |
| @zmz-book-content-font-size       |  --zmz-book-content-font-size          | 12px      | 内容大小        |
| @zmz-book-num-color       |  --zmz-book-num-color          | #213547      | 数字颜色        |
| @zmz-book-num-font-size       |  --zmz-book-num-font-size          | 12px      | 数字大小        |
| @zmz-book-empty-background-color      |  --zmz-book-empty-background-color         | #f4f5f9          | 空状态背景色   |
| @zmz-book-empty-color      |  --zmz-book-empty-color         | #cbcbcb          | 空状态字体颜色      |
| @zmz-book-empty-font-size   |  --zmz-book-empty-font-size      | 16px     | 空状态字体大小    |
| @zmz-book-empty-icon-size   |  --zmz-book-empty-icon-size      | 16px     | 空状态图标大小    |
| @zmz-book-nomore-background-color      |  --zmz-book-nomore-background-color         | #f4f5f9          | 暂无背景色   |
| @zmz-book-nomore-color      |  --zmz-book-nomore-color         | #cbcbcb          | 暂无字体颜色      |
| @zmz-book-nomore-font-size   |  --zmz-book-nomore-font-size      | 16px     | 暂无字体大小    |
| @zmz-book-nomore-icon-size   |  --zmz-book-nomore-icon-size      | 16px     | 暂无图标大小    |
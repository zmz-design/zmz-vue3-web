/**
 * zmz3文档
 */
import global from "@docs/globalConfig"
let pre = "zh-CN-";
let meta = {
    auth: false,
    isTitle: false,
    keywords: global.currentConfig.keywords,
    description: global.currentConfig.description
}
// 开发指南
const guide = [{
    path: "/docs/introduce",
    name: `${pre}introduce`,
    meta: {
        ...meta,
        title: '介绍',
        hidden: false
    },
    component: () => import(`@docs/views/zh-CN/md/introduce.md`)
},
{
    path: "/docs/start",
    name: `${pre}start`,
    meta: {
        ...meta,
        title: '快速开发',
        hidden: false
    },
    component: () => import(`@docs/views/zh-CN/md/start.md`)
},
{
    path: "/docs/logs",
    name: `${pre}logs`,
    meta: {
        ...meta,
        title: '更新日志',
        hidden: false
    },
    component: () => import(`@docs/views/zh-CN/md/logs.md`)
}, {
    path: "/docs/component/metainfo",
    name: `${pre}component-metainfo`,
    component: () => import(`@docs/views/zh-CN/md/meta-info.md`),
    meta: {
        ...meta,
        title: 'MetaInfo优化',
        hidden: false
    }
}, {
    path: "/docs/component/transition",
    name: `${pre}component-transition`,
    component: () => import(`@docs/views/zh-CN/md/transition.md`),
    meta: {
        ...meta,
        title: 'Transition 内置动画',
        hidden: false
    }
}, {
    path: "/docs/component/standard",
    name: `${pre}component-standard`,
    component: () => import(`@docs/views/zh-CN/md/standard.md`),
    meta: {
        ...meta,
        title: '开发规范',
        hidden: false
    }
}, {
    path: "/docs/component/color",
    name: `${pre}component-color`,
    component: () => import(`@docs/views/zh-CN/md/color.md`),
    meta: {
        ...meta,
        title: 'Color 色彩',
        hidden: false
    }
}
];

// 基础
const basics = [{
    path: "/docs/component/global",
    name: `${pre}component-global`,
    component: () => import(`@docs/views/zh-CN/md/global.md`),
    meta: {
        ...meta,
        title: 'Global 工具',
        hidden: false
    }
}, {
    path: "/docs/component/tool",
    name: `${pre}component-tool`,
    component: () => import(`@docs/views/zh-CN/md/tool.md`),
    meta: {
        ...meta,
        title: 'Tool 工具',
        hidden: false
    }
}, {
    path: "/docs/component/icon",
    name: `${pre}component-icon`,
    component: () => import(`@docs/views/zh-CN/md/icon.md`),
    meta: {
        ...meta,
        title: 'Icon 图标',
        hidden: false
    }
}, {
    path: "/docs/component/button",
    name: `${pre}component-button`,
    component: () => import(`@docs/views/zh-CN/md/button.md`),
    meta: {
        ...meta,
        title: 'Button 按钮',
        hidden: false
    }
}, {
    path: "/docs/component/floatbutton",
    name: `${pre}component-floatbutton`,
    component: () => import(`@docs/views/zh-CN/md/floatbutton.md`),
    meta: {
        ...meta,
        title: 'Floatbutton 悬浮按钮',
        hidden: false
    }
}, {
    path: "/docs/component/directive",
    name: `${pre}component-directive`,
    component: () => import(`@docs/views/zh-CN/md/directive.md`),
    meta: {
        ...meta,
        title: 'Directive 指令',
        hidden: false
    }
}, {
    path: "/docs/component/network",
    name: `${pre}component-network`,
    component: () => import(`@docs/views/zh-CN/md/network.md`),
    meta: {
        ...meta,
        title: 'Network 网络',
        hidden: false
    }
}];

// 布局
const layout = [{
    path: "/docs/component/layout",
    name: `${pre}component-layout`,
    component: () => import(`@docs/views/zh-CN/md/layout.md`),
    meta: {
        ...meta,
        title: 'Layout 布局',
        hidden: false
    }
}, {
    path: "/docs/component/grid",
    name: `${pre}component-grid`,
    component: () => import(`@docs/views/zh-CN/md/grid.md`),
    meta: {
        ...meta,
        title: 'Grid 宫格',
        hidden: false
    }
}, {
    path: "/docs/component/container",
    name: `${pre}component-container`,
    component: () => import(`@docs/views/zh-CN/md/container.md`),
    meta: {
        ...meta,
        title: 'Container 容器',
        hidden: false
    }
}, {
    path: "/docs/component/card",
    name: `${pre}component-card`,
    component: () => import(`@docs/views/zh-CN/md/card.md`),
    meta: {
        ...meta,
        title: 'Card 卡片',
        hidden: false
    }
}, {
    path: "/docs/component/cell",
    name: `${pre}component-cell`,
    component: () => import(`@docs/views/zh-CN/md/cell.md`),
    meta: {
        ...meta,
        title: 'Cell 列表',
        hidden: false
    }
}, {
    path: "/docs/component/graphic",
    name: `${pre}component-graphic`,
    component: () => import(`@docs/views/zh-CN/md/graphic.md`),
    meta: {
        ...meta,
        title: 'Graphic 图文列表',
        hidden: false
    }
}, {
    path: "/docs/component/collapse",
    name: `${pre}component-collapse`,
    component: () => import(`@docs/views/zh-CN/md/collapse.md`),
    meta: {
        ...meta,
        title: 'Collapse 折叠面板',
        hidden: false
    }
}, {
    path: "/docs/component/scrollbar",
    name: `${pre}component-scrollbar`,
    component: () => import(`@docs/views/zh-CN/md/scrollbar.md`),
    meta: {
        ...meta,
        title: 'Scrollbar 滚动条',
        hidden: false
    }
}];

// 视图
const view = [{
    path: "/docs/component/showmore",
    name: `${pre}component-showmore`,
    component: () => import(`@docs/views/zh-CN/md/showmore.md`),
    meta: {
        ...meta,
        title: 'Showmore 显示更多',
        hidden: false
    }
}, {
    path: "/docs/component/loadmore",
    name: `${pre}component-loadmore`,
    component: () => import(`@docs/views/zh-CN/md/loadmore.md`),
    meta: {
        ...meta,
        title: 'Loadmore 加载更多',
        hidden: false
    }
}, {
    path: "/docs/component/lazyload",
    name: `${pre}component-lazyload`,
    component: () => import(`@docs/views/zh-CN/md/lazyload.md`),
    meta: {
        ...meta,
        title: 'lazyload 图片懒加载',
        hidden: false
    }
}, {
    path: "/docs/component/timeaxis",
    name: `${pre}component-timeaxis`,
    component: () => import(`@docs/views/zh-CN/md/timeaxis.md`),
    meta: {
        ...meta,
        title: 'Timeaxis 时间轴',
        hidden: false
    }
}, {
    path: "/docs/component/carousel",
    name: `${pre}component-carousel`,
    component: () => import(`@docs/views/zh-CN/md/carousel.md`),
    meta: {
        ...meta,
        title: 'Carousel 轮播图',
        hidden: false
    }
}, {
    path: "/docs/component/calendar",
    name: `${pre}component-calendar`,
    component: () => import(`@docs/views/zh-CN/md/calendar.md`),
    meta: {
        ...meta,
        title: 'Calendar 日历',
        hidden: false
    }
}, {
    path: "/docs/component/split",
    name: `${pre}component-split`,
    component: () => import(`@docs/views/zh-CN/md/split.md`),
    meta: {
        ...meta,
        title: 'Split 面板分割',
        hidden: false
    }
}, {
    path: "/docs/component/sticky",
    name: `${pre}component-sticky`,
    component: () => import(`@docs/views/zh-CN/md/sticky.md`),
    meta: {
        ...meta,
        title: 'Sticky 吸顶',
        hidden: false
    }
}];

// 提示
const prompt = [{
    path: "/docs/component/alert",
    name: `${pre}component-alert`,
    component: () => import(`@docs/views/zh-CN/md/alert.md`),
    meta: {
        ...meta,
        title: 'Alert 提示',
        hidden: false
    }
}, {
    path: "/docs/component/loading",
    name: `${pre}component-loading`,
    component: () => import(`@docs/views/zh-CN/md/loading.md`),
    meta: {
        ...meta,
        title: 'Loading 加载',
        hidden: false
    }
}, {
    path: "/docs/component/loadingbar",
    name: `${pre}component-loadingbar`,
    component: () => import(`@docs/views/zh-CN/md/loading-bar.md`),
    meta: {
        ...meta,
        title: 'Loadingbar 加载进度条',
        hidden: false
    }
}, {
    path: "/docs/component/toast",
    name: `${pre}component-toast`,
    component: () => import(`@docs/views/zh-CN/md/toast.md`),
    meta: {
        ...meta,
        title: 'Toast 消息轻提示',
        hidden: false
    }
}, {
    path: "/docs/component/message",
    name: `${pre}component-message`,
    component: () => import(`@docs/views/zh-CN/md/message.md`),
    meta: {
        ...meta,
        title: 'Message 消息提示',
        hidden: false
    }
}, {
    path: "/docs/component/message-box",
    name: `${pre}component-messagebox`,
    component: () => import(`@docs/views/zh-CN/md/message-box.md`),
    meta: {
        ...meta,
        title: 'MessageBox 弹窗',
        hidden: false
    }
}, {
    path: "/docs/component/notice",
    name: `${pre}component-notice`,
    component: () => import(`@docs/views/zh-CN/md/notice.md`),
    meta: {
        ...meta,
        title: 'Notice 通知',
        hidden: false
    }
}, {
    path: "/docs/component/model",
    name: `${pre}component-model`,
    component: () => import(`@docs/views/zh-CN/md/model.md`),
    meta: {
        ...meta,
        title: 'Model 模态框',
        hidden: false
    }
}, {
    path: "/docs/component/drawer",
    name: `${pre}component-drawer`,
    component: () => import(`@docs/views/zh-CN/md/drawer.md`),
    meta: {
        ...meta,
        title: 'Drawer 抽屉',
        hidden: false
    }
}, {
    path: "/docs/component/tooltip",
    name: `${pre}component-tooltip`,
    component: () => import(`@docs/views/zh-CN/md/tooltip.md`),
    meta: {
        ...meta,
        title: 'Tooltip 文字提示',
        hidden: false
    }
}, {
    path: "/docs/component/popover",
    name: `${pre}component-popover`,
    component: () => import(`@docs/views/zh-CN/md/popover.md`),
    meta: {
        ...meta,
        title: 'Popover 文字提示',
        hidden: false
    }
}];

// 导航
const navigation = [{
    path: "/docs/component/menu",
    name: `${pre}component-menu`,
    component: () => import(`@docs/views/zh-CN/md/menu.md`),
    meta: {
        ...meta,
        title: 'Menu 菜单',
        hidden: false
    }
}, {
    path: "/docs/component/breadcrumb",
    name: `${pre}component-breadcrumb`,
    component: () => import(`@docs/views/zh-CN/md/breadcrumb.md`),
    meta: {
        ...meta,
        title: 'Breadcrumb 面包屑',
        hidden: false
    }
}, {
    path: "/docs/component/dropdown",
    name: `${pre}component-dropdown`,
    component: () => import(`@docs/views/zh-CN/md/dropdown.md`),
    meta: {
        ...meta,
        title: 'Dropdown 下拉菜单',
        hidden: false
    }
}, {
    path: "/docs/component/step",
    name: `${pre}component-step`,
    component: () => import(`@docs/views/zh-CN/md/step.md`),
    meta: {
        ...meta,
        title: 'Step 步骤条',
        hidden: false
    }
}, {
    path: "/docs/component/tabs",
    name: `${pre}component-tabs`,
    component: () => import(`@docs/views/zh-CN/md/tabs.md`),
    meta: {
        ...meta,
        title: 'Tabs 标签页',
        hidden: false
    }
}];

// 表单
const form = [{
    path: "/docs/component/input",
    name: `${pre}component-input`,
    component: () => import(`@docs/views/zh-CN/md/form-input.md`),
    meta: {
        ...meta,
        title: 'Input 输入框',
        hidden: false
    }
}, {
    path: "/docs/component/inputnumber",
    name: `${pre}component-inputnumber`,
    component: () => import(`@docs/views/zh-CN/md/form-inputnumber.md`),
    meta: {
        ...meta,
        title: 'Inputnumber 数字输入框',
        hidden: false
    }
}, {
    path: "/docs/component/inputtag",
    name: `${pre}component-inputtag`,
    component: () => import(`@docs/views/zh-CN/md/form-inputtag.md`),
    meta: {
        ...meta,
        title: 'Inputtag 标签输入框',
        hidden: false
    }
}, {
    path: "/docs/component/textarea",
    name: `${pre}component-textarea`,
    component: () => import(`@docs/views/zh-CN/md/form-textarea.md`),
    meta: {
        ...meta,
        title: 'Textarea 文本域',
        hidden: false
    }
}, {
    path: "/docs/component/radio",
    name: `${pre}component-radio`,
    component: () => import(`@docs/views/zh-CN/md/form-radio.md`),
    meta: {
        ...meta,
        title: 'Radio 单选框',
        hidden: false
    }
}, {
    path: "/docs/component/checkbox",
    name: `${pre}component-checkbox`,
    component: () => import(`@docs/views/zh-CN/md/form-checkbox.md`),
    meta: {
        ...meta,
        title: 'Checkbox 复选框',
        hidden: false
    }
}, {
    path: "/docs/component/switch",
    name: `${pre}component-switch`,
    component: () => import(`@docs/views/zh-CN/md/form-switch.md`),
    meta: {
        ...meta,
        title: 'Switch 开关',
        hidden: false
    }
}, {
    path: "/docs/component/select",
    name: `${pre}component-select`,
    component: () => import(`@docs/views/zh-CN/md/form-select.md`),
    meta: {
        ...meta,
        title: 'Select 选择器',
        hidden: false
    }
},
{
    path: "/docs/component/cascader",
    name: `${pre}component-cascader`,
    component: () => import(`@docs/views/zh-CN/md/form-cascader.md`),
    meta: {
        ...meta,
        title: 'Cascader 级联选择器',
        hidden: false
    }
}
    , {
    path: "/docs/component/upload",
    name: `${pre}component-upload`,
    component: () => import(`@docs/views/zh-CN/md/form-upload.md`),
    meta: {
        ...meta,
        title: 'Upload 上传',
        hidden: false
    }
}, {
    path: "/docs/component/slider",
    name: `${pre}component-slider`,
    component: () => import(`@docs/views/zh-CN/md/form-slider.md`),
    meta: {
        ...meta,
        title: 'Slider 滑块',
        hidden: false
    }
}, {
    path: "/docs/component/datepicker",
    name: `${pre}component-datepicker`,
    component: () => import(`@docs/views/zh-CN/md/form-datepicker.md`),
    meta: {
        ...meta,
        title: 'DatePicker 日期选择器',
        hidden: false
    }
}, {
    path: "/docs/component/timepicker",
    name: `${pre}component-timepicker`,
    component: () => import(`@docs/views/zh-CN/md/form-timepicker.md`),
    meta: {
        ...meta,
        title: 'Timepicker 时间选择器',
        hidden: false
    }
}, {
    path: "/docs/component/colorpicker",
    name: `${pre}component-colorpicker`,
    component: () => import(`@docs/views/zh-CN/md/form-colorpicker.md`),
    meta: {
        ...meta,
        title: 'Colorpicker 颜色选择器',
        hidden: false
    }
}, {
    path: "/docs/component/transfer",
    name: `${pre}component-transfer`,
    component: () => import(`@docs/views/zh-CN/md/form-transfer.md`),
    meta: {
        ...meta,
        title: 'Transfer 穿梭框',
        hidden: false
    }
}, {
    path: "/docs/component/rate",
    name: `${pre}component-rate`,
    component: () => import(`@docs/views/zh-CN/md/form-rate.md`),
    meta: {
        ...meta,
        title: 'Rate 评分',
        hidden: false
    }
}, {
    path: "/docs/component/form",
    name: `${pre}component-form`,
    component: () => import(`@docs/views/zh-CN/md/form.md`),
    meta: {
        ...meta,
        title: 'Form 表单',
        hidden: false
    }
}];

// 数据
const data = [{
    path: "/docs/component/pagination",
    name: `${pre}component-pagination`,
    component: () => import(`@docs/views/zh-CN/md/pagination.md`),
    meta: {
        ...meta,
        title: 'Pagination 分页',
        hidden: false
    }
}, {
    path: "/docs/component/tag",
    name: `${pre}component-tag`,
    component: () => import(`@docs/views/zh-CN/md/tag.md`),
    meta: {
        ...meta,
        title: 'Tag 标签',
        hidden: false
    }
}, {
    path: "/docs/component/tree",
    name: `${pre}component-tree`,
    component: () => import(`@docs/views/zh-CN/md/tree.md`),
    meta: {
        ...meta,
        title: 'Tree 树型',
        hidden: false
    }
}, {
    path: "/docs/component/table",
    name: `${pre}component-table`,
    component: () => import(`@docs/views/zh-CN/md/table.md`),
    meta: {
        ...meta,
        title: 'Table 表格',
        hidden: false
    }
}, {
    path: "/docs/component/progress",
    name: `${pre}component-progress`,
    component: () => import(`@docs/views/zh-CN/md/progress.md`),
    meta: {
        ...meta,
        title: 'Progress 进度条',
        hidden: false
    }
}, {
    path: "/docs/component/result",
    name: `${pre}component-result`,
    component: () => import(`@docs/views/zh-CN/md/result.md`),
    meta: {
        ...meta,
        title: 'Result 结果',
        hidden: false
    }
}, {
    path: "/docs/component/empty",
    name: `${pre}component-empty`,
    component: () => import(`@docs/views/zh-CN/md/empty.md`),
    meta: {
        ...meta,
        title: 'Empty 空状态',
        hidden: false
    }
}, {
    path: "/docs/component/badge",
    name: `${pre}component-badge`,
    component: () => import(`@docs/views/zh-CN/md/badge.md`),
    meta: {
        ...meta,
        title: 'Badge 徽章标记',
        hidden: false
    }
},
{
    path: "/docs/component/waterfall",
    name: `${pre}component-waterfall`,
    component: () => import(`@docs/views/zh-CN/md/waterfall.md`),
    meta: {
        ...meta,
        title: 'Waterfall 瀑布流',
        hidden: true
    }
},
{
    path: "/docs/component/skeleton",
    name: `${pre}component-skeleton`,
    component: () => import(`@docs/views/zh-CN/md/skeleton.md`),
    meta: {
        ...meta,
        title: 'Skeleton 骨架屏',
        hidden: false
    }
},
{
    path: "/docs/component/scroll",
    name: `${pre}component-scroll`,
    component: () => import(`@docs/views/zh-CN/md/scroll.md`),
    meta: {
        ...meta,
        title: 'Scroll 无线滚动',
        hidden: false
    }
}, {
    path: "/docs/component/divider",
    name: `${pre}component-divider`,
    component: () => import(`@docs/views/zh-CN/md/divider.md`),
    meta: {
        ...meta,
        title: 'Divider 分割线',
        hidden: false
    }
}, {
    path: "/docs/component/link",
    name: `${pre}component-link`,
    component: () => import(`@docs/views/zh-CN/md/link.md`),
    meta: {
        ...meta,
        title: 'Link 文字连接',
        hidden: false
    }
}, {
    path: "/docs/component/avatar",
    name: `${pre}component-avatar`,
    component: () => import(`@docs/views/zh-CN/md/avatar.md`),
    meta: {
        ...meta,
        title: 'Avatar 头像',
        hidden: false
    }
}, {
    path: "/docs/component/image",
    name: `${pre}component-image`,
    component: () => import(`@docs/views/zh-CN/md/image.md`),
    meta: {
        ...meta,
        title: 'Image 图片',
        hidden: false
    }
}, {
    path: "/docs/component/album",
    name: `${pre}component-album`,
    component: () => import(`@docs/views/zh-CN/md/album.md`),
    meta: {
        ...meta,
        title: 'Album 相册',
        hidden: false
    }
}, {
    path: "/docs/component/anchor",
    name: `${pre}component-anchor`,
    component: () => import(`@docs/views/zh-CN/md/anchor.md`),
    meta: {
        ...meta,
        title: 'Anchor 锚点',
        hidden: false
    }
}, {
    path: "/docs/component/space",
    name: `${pre}component-space`,
    component: () => import(`@docs/views/zh-CN/md/space.md`),
    meta: {
        ...meta,
        title: 'Space 间距',
        hidden: false
    }
}, {
    path: "/docs/component/descriptions",
    name: `${pre}component-descriptions`,
    component: () => import(`@docs/views/zh-CN/md/descriptions.md`),
    meta: {
        ...meta,
        title: 'Descriptions 描述列表',
        hidden: false
    }
}, {
    path: "/docs/component/formattime",
    name: `${pre}component-formattime`,
    component: () => import(`@docs/views/zh-CN/md/formattime.md`),
    meta: {
        ...meta,
        title: 'Formattime 时间处理',
        hidden: false
    }
}, {
    path: "/docs/component/signed",
    name: `${pre}component-signed`,
    component: () => import(`@docs/views/zh-CN/md/signed.md`),
    meta: {
        ...meta,
        title: 'Signed 签字板',
        hidden: false
    }
}, {
    path: "/docs/component/loupe",
    name: `${pre}component-loupe`,
    component: () => import(`@docs/views/zh-CN/md/loupe.md`),
    meta: {
        ...meta,
        title: 'Loupe 放大镜',
        hidden: false
    }
}, {
    path: "/docs/component/shutters",
    name: `${pre}component-shutters`,
    component: () => import(`@docs/views/zh-CN/md/shutters.md`),
    meta: {
        ...meta,
        title: 'Shutters 百叶窗',
        hidden: false
    }
}, {
    path: "/docs/component/numberdynamic",
    name: `${pre}component-numberdynamic`,
    component: () => import(`@docs/views/zh-CN/md/numberdynamic.md`),
    meta: {
        ...meta,
        title: 'Numberdynamic 动态数字',
        hidden: false
    }
}];

const page = [{
    path: "/docs/component/pageheader",
    name: `${pre}component-pageheader`,
    component: () => import(`@docs/views/zh-CN/md/pageheader.md`),
    meta: {
        ...meta,
        title: 'Pageheader 页头',
        hidden: false
    }
}, {
    path: "/docs/component/pagefooter",
    name: `${pre}component-pagefooter`,
    component: () => import(`@docs/views/zh-CN/md/pagefooter.md`),
    meta: {
        ...meta,
        title: 'Pagefooter 页尾',
        hidden: false
    }
}, {
    path: "/docs/component/pagecontent",
    name: `${pre}component-pagecontent`,
    component: () => import(`@docs/views/zh-CN/md/pagecontent.md`),
    meta: {
        ...meta,
        title: 'Pagecontent 内容',
        hidden: false
    }
}]

// 其他
const other = [{
    path: "/docs/component/backtop",
    name: `${pre}component-backtop`,
    component: () => import(`@docs/views/zh-CN/md/backtop.md`),
    meta: {
        ...meta,
        title: 'Backtop 回到顶部',
        hidden: false
    }
}, {
    path: "/docs/component/audio",
    name: `${pre}component-audio`,
    component: () => import(`@docs/views/zh-CN/md/audio.md`),
    meta: {
        ...meta,
        title: 'Audio 音频',
        hidden: false
    }
}, {
    path: "/docs/component/video",
    name: `${pre}component-video`,
    component: () => import(`@docs/views/zh-CN/md/video.md`),
    meta: {
        ...meta,
        title: 'Video 视频',
        hidden: false
    }
}, {
    path: "/docs/component/music",
    name: `${pre}component-music`,
    component: () => import(`@docs/views/zh-CN/md/music.md`),
    meta: {
        ...meta,
        title: 'Music 音乐',
        hidden: false
    }
}, {
    path: "/docs/component/comment",
    name: `${pre}component-comment`,
    component: () => import(`@docs/views/zh-CN/md/comment.md`),
    meta: {
        ...meta,
        title: 'Comment 评论',
        hidden: false
    }
}, {
    path: "/docs/component/book",
    name: `${pre}component-book`,
    component: () => import(`@docs/views/zh-CN/md/book.md`),
    meta: {
        ...meta,
        title: 'Book 书籍',
        hidden: false
    }
}, {
    path: "/docs/component/watermark",
    name: `${pre}component-watermark`,
    component: () => import(`@docs/views/zh-CN/md/watermark.md`),
    meta: {
        ...meta,
        title: 'Watermark 水印',
        hidden: false
    }
}, {
    path: "/docs/component/amount",
    name: `${pre}component-amount`,
    component: () => import(`@docs/views/zh-CN/md/amount.md`),
    meta: {
        ...meta,
        title: 'Amount 财务金额',
        hidden: false
    }
}, {
    path: "/docs/component/cron",
    name: `${pre}component-cron`,
    component: () => import(`@docs/views/zh-CN/md/cron.md`),
    meta: {
        ...meta,
        title: 'Cron 表达式',
        hidden: false
    }
}, {
    path: "/docs/component/barrage",
    name: `${pre}component-barrage`,
    component: () => import(`@docs/views/zh-CN/md/barrage.md`),
    meta: {
        ...meta,
        title: 'Barrage 弹幕',
        hidden: false
    }
}];

// 总路由
const router = [{
    path: "/",
    component: () => import(`@docs/views/index.vue`),
    meta: {
        ...meta,
        title: '首页入口',
        hidden: false
    },
},
{
    path: "/docs",
    redirect: "/docs/guide",
    component: () => import(`@docs/component/router/index.vue`),
    meta: {
        ...meta,
        title: '首页入口',
        hidden: false
    },
    children: [{
        path: "/docs/guide",
        name: `${pre}guide`,
        redirect: "/docs/introduce",
        component: () => import(`@docs/component/router/first.vue`),
        meta: {
            ...meta,
            title: '开发指南',
            hidden: false
        },
        children: [...guide]
    },
    {
        path: "/docs/component",
        name: `${pre}component`,
        redirect: "/docs/component/basics",
        component: () => import(`@docs/component/router/first.vue`),
        meta: {
            ...meta,
            title: '组件',
            hidden: false
        },
        children: [{
            path: "/docs/component/basics",
            name: `${pre}component-basics-main`,
            component: () => import(`@docs/component/router/second.vue`),
            meta: {
                ...meta,
                title: '基础',
                hidden: false,
                isTitle: true
            },
            children: [...basics]
        }, {
            path: "/docs/component/layout",
            name: `${pre}component-layout-main`,
            component: () => import(`@docs/component/router/second.vue`),
            meta: {
                ...meta,
                title: '布局',
                hidden: false,
                isTitle: true
            },
            children: [...layout]
        }, {
            path: "/docs/component/view",
            name: `${pre}component-view-main`,
            component: () => import(`@docs/component/router/second.vue`),
            meta: {
                ...meta,
                title: '视图',
                hidden: false,
                isTitle: true
            },
            children: [...view]
        }, {
            path: "/docs/component/prompt",
            name: `${pre}component-prompt-main`,
            component: () => import(`@docs/component/router/second.vue`),
            meta: {
                ...meta,
                title: '提示',
                hidden: false,
                isTitle: true
            },
            children: [...prompt]
        }, {
            path: "/docs/component/navigation",
            name: `${pre}component-navigation-main`,
            component: () => import(`@docs/component/router/second.vue`),
            meta: {
                ...meta,
                title: '导航',
                hidden: false,
                isTitle: true
            },
            children: [...navigation]
        }, {
            path: "/docs/component/second",
            name: `${pre}component-second-main`,
            component: () => import(`@docs/component/router/second.vue`),
            meta: {
                ...meta,
                title: '表单',
                hidden: false,
                isTitle: true
            },
            children: [...form]
        }, {
            path: "/docs/component/data",
            name: `${pre}component-data-main`,
            component: () => import(`@docs/component/router/second.vue`),
            meta: {
                ...meta,
                title: '数据',
                hidden: false,
                isTitle: true
            },
            children: [...data]
        }, {
            path: "/docs/component/page",
            name: `${pre}component-page-main`,
            component: () => import(`@docs/component/router/second.vue`),
            meta: {
                ...meta,
                title: '文本',
                hidden: false,
                isTitle: true
            },
            children: [...page]
        }, {
            path: "/docs/component/other",
            name: `${pre}component-other-main`,
            component: () => import(`@docs/component/router/second.vue`),
            meta: {
                ...meta,
                title: '其他',
                hidden: false,
                isTitle: true
            },
            children: [...other]
        }]
    }
    ]
}];
export default router

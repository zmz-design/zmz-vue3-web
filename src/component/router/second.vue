<template>
  <router-view class="zmz-doc-content"></router-view>
</template>

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
          name: 'description',
          content: this.description
        }
      ]
    };
  },
  name: 'layout-second',
  data() {
    return {
      init: false,
      title: 'zmz-vue3-web文档' + this.currentConfig('tails'),
      keywords: this.currentConfig('keywords'),
      description: this.currentConfig('description'),
      docDir: {},
      tocDir: [],
      modelValue: ''
    };
  },
  watch: {
    '$route': function (newValue, oldValue) {
      if (newValue != oldValue) {
        this.tocDir = [];
        // setTimeout(() => {
        this.getTocList();
        // }, 300)
      }
    }
  },
  methods: {
    currentConfig(data) {
      return this.$setting.currentConfig[data];
    },
    getTocList() {
      this.$nextTick(() => {
        if (this.$refs.zmzDocsDoc) {
          // 获取目录容器
          const tocContainer = this.$refs.zmzDocsDoc;
          // 获取所有的标题元素
          let headers = tocContainer.querySelectorAll('.zmz-doc-content>html>body>h1, .zmz-doc-content>html>body>h2, .zmz-doc-content>html>body>h3, .zmz-doc-content>html>body>h4, .zmz-doc-content>html>body>h5, .zmz-doc-content>html>body>h6');

          if (headers.length == 0) {
            headers = tocContainer.querySelectorAll('.zmz-docs__doc__left>section>h1, .zmz-docs__doc__left>section>h2, .zmz-docs__doc__left>section>h3, .zmz-docs__doc__left>section>h4, .zmz-docs__doc__left>section>h5, .zmz-docs__doc__left>section>h6');
          }

          headers.forEach((item, index) => {
            const level = item.tagName.toLowerCase().charAt(1);
            const id = item.id;
            const text = item.textContent;
            if (index == 0) {
              this.modelValue = text
            }

            this.tocDir.push({
              title: text,
              id: id,
              level: level
            })
          });
        }
      })
    }
  },
  computed: {
    setting() {
      return this.$setting.currentConfig;
    }
  },
  mounted() {
    this.docDir = this.$router.options.routes.find(item => item.path === this.setting.router);
    this.getTocList();
  }
};
</script>

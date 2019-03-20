<template>
  <div class="lang-menu">
    <div class="lang-current">{{currentLocale.name}}</div>
    <div class="lang-list">
      <a
        v-for="(item ,key, index) in localesList"
        @click="switchLocale(key)"
        class="lang-item"
        :key="index"
      >{{item.name}}</a>
    </div>
  </div>
</template>
<style lang="scss">
@import "./index.scss";
</style>
<script>
export default {
  data() {
    return {
      localesList: {
        cn: {
          name: "中文简体",
          url: "cn"
        },
        hant: {
          name: "中文繁体",
          url: "hant"
        },
        en: {
          name: "English",
          url: "en"
        },
        ko: {
          name: "한국어",
          url: "ko"
        },
        ja: {
          name: "日本語",
          url: "ja"
        },
        fr: {
          name: "Français",
          url: "fr"
        },
        nl: {
          name: "Nederlands",
          url: "nl"
        },
        vi: {
          name: "Tiếng Việt",
          url: "vi"
        }
      }
    };
  },
  props: ["locale"],
  computed: {
    currentLocale: function() {
      let _currentLocale = this.locale ? this.locale : "cn";
      return this.localesList[_currentLocale];
    }
  },
  methods: {
    switchLocale(key) {
      const pathArr = location.pathname.split("/");
      const search = location.search;
      const hash = location.hash;
      const currentLang = this.localesList[key] ? key : pathArr[1];
      pathArr.splice(1, 1, currentLang);
      location.href = pathArr.join("/") + search + hash;
    }
  }
};
</script>



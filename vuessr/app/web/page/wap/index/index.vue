<template>
  <layout description="vue server side render" keywords="egg, vue, webpack, server side render"></layout>
</template>
<style>
@import "./index.scss";
</style>
<script type="babel">
import VueI18n from "vue-i18n";
import createI18n from "framework/i18n/wap";
import layout from "component/layout/wap";
import Head from "../common/header/index.vue";
import Footer from "../common/footer/index.vue";

export default {
  components: {
    layout,
    Head,
    Footer
  },
  data() {
    return {
      isFinish: false,
      isLoading: false,
      pageIndex: 1,
      pageSize: 10
    };
  },
  computed: {
    lists() {
      return this.list;
    }
  },
  methods: {
    fetch() {
      this.$request
        .get(`/list?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`)
        .then(res => {
          console.log("res", res);
          if (res.data.list && res.data.list.length) {
            this.total = res.data.total;
            this.list = this.list.concat(res.data.list);
          } else {
            this.isFinish = true;
          }
          this.isLoading = false;
        });
    },
    loadPage() {
      if (!this.isFinish && !this.isLoading) {
        this.isLoading = true;
        this.pageIndex++;
        setTimeout(() => {
          this.fetch();
        }, 1500);
      }
    },
    hook: {
      render(context, options) {
        const i18n = createI18n(context.state.locale);
        options.i18n = i18n;
      }
    }
  },
  mounted() {
    window.addEventListener(
      "scroll",
      () => {
        this.loadPage();
      },
      false
    );
  }
};
</script>


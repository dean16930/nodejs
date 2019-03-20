<template>
  <div class="page-topbar">
    <div class="container">
      <div class="topbar-left">
        <a href class="topbar-link">上币申请</a>
        <a href class="topbar-link">邀请返佣</a>
        <a href class="topbar-link">帮助中心</a>
        <a href class="topbar-link">关于我们</a>
        <a href class="topbar-link">费率</a>
      </div>
      <div class="topbar-right">
        <lang-menu></lang-menu>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "./index.scss";
</style>
<script>
export default {
  components: {
    langMenu: () => import("@page/pc/common/lang")
  }
};
</script>
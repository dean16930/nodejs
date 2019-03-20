<template>
  <div class="page-plus-header">
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
    <div class="page-header">
      <div class="container">
        <nav class="header-nav">
          <a href class="logo">
            <img src="@asset/images/logo.png">
          </a>
          <a href class="nav-link">法币交易</a>
          <a href class="nav-link">币币交易</a>
          <a href class="nav-link">高级代币销售</a>
          <a href class="nav-link">联盟</a>
        </nav>
        <div class="header-account">
          <div class="header-account-info" v-if="userInfo"></div>
          <div class="header-account-sign" v-else>
            <a href class="account-login">登录</a>
            <a href class="account-register">注册</a>
          </div>
        </div>
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
  },
  data() {
    return {
      userInfo: null,
      logoUrl: "@asset/images/logo.png"
    };
  }
};
</script>
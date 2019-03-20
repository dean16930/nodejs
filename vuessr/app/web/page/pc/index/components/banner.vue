<template>
  <div class="page-banner">
    <canvas id="canv"></canvas>
  </div>
</template>
<style lang="scss">
.page-banner {
  height: 100%;
  background-image: -webkit-radial-gradient(
    ellipse farthest-corner at center top,
    #000d4d 0%,
    #000105 100%
  );
  background-image: radial-gradient(
    ellipse farthest-corner at center top,
    #000d4d 0%,
    #000105 100%
  );
  cursor: move;
}
</style>
<script>
const star = require("./star");
export default {
  methods: {
    init() {
      const newStar = new star();
      newStar.run();
    }
  },
  mounted() {
    this.init();
  }
};
</script>



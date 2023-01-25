<template>
  <div class="app">
    <Area :area-data="highScore"></Area>
  </div>
</template>

<script setup>
import Area from './views/area.vue'
import highScore from './data/high_score.json'
console.log(highScore)
</script>

<style lang="less" scoped>
.app {
  width: 1032px;
  margin: 0 auto;
}
</style>

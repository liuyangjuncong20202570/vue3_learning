<template>
  <div>
    <showInfo ref="info" @info-click="inClick"></showInfo>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import showInfo from './showInfo.vue'
const info = ref('')
const inClick = (val) => {
  console.log(val)
}
// 如果要使用组件内部的方法，必须在该组件内部将相应方法进行暴露，使用defineExpose方法
onMounted(() => {
  info.value.infoClick()
  // console.log(info.value)
})
</script>

<style lang="scss" scoped></style>

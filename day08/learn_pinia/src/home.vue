<template>
  <div>
    <h1>actions中的name拼接是：{{ homeStore.concateName('lyjc') }}</h1>
    <button @click="getData">获取data中的数据</button>
  </div>
</template>

<script setup>
import useHome from './stores/home.js'
const homeStore = useHome()
const getData = () => {
  homeStore.getData().then(() => {
    console.log('获取成功')
  })
}
</script>

<style lang="less" scoped></style>

<template>
  <!-- 在模板中可以拿到动态路由参数 -->
  <div>{{ $route.params.id }}</div>
</template>

<script setup>
// 在setup语法中需要通过useRoute来拿到$route实例
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id)
// 需要注意的是，路由的切换指向得组件是同一个组件，这就导致user组件得setup函数不会再次调用
// 所以我们需要监听组件的路由更新变化，使用一个函数：onBeforRouteUpdate
onBeforeRouteUpdate((to, from) => {
  console.log('from:', from.params.id)
  console.log('to:', to.params.id)
})
</script>

<style lang="less" scoped></style>

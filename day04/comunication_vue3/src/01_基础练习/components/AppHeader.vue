<template>
  <div class="header">
    <!-- $attrs.address可以拿到非props的attribute并进行绑定 -->
    <h1>{{ name }}</h1>
    <h1>商品信息</h1>
    <input type="text" />
  </div>
  <!-- 当出现多个根节点时需要手动指定非props的attribute绑定的根节点 -->
  <div v-bind="$attrs" class="others"></div>
</template>

<script>
export default {
  // inheritAttrs: false, // 可以取消非props的attribute绑定到子组件的根节点上
  props: {
    name: {
      type: String,
      default: '我是默认名称'
    }
  }
}
</script>

<style scoped>
.header {
  background-color: orange;
}
</style>

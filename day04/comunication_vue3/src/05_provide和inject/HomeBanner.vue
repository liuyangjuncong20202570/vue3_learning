<template>
  <div>
    <h1>我是HomeBanner</h1>
    <!-- 要想获取正确的message的值，需要手动解包 -->
    <h2>从父组件获取的值是{{ name }} - {{ age }} - {{ message.value }}</h2>
  </div>
</template>

<script>
export default {
  inject: ['name', 'age', 'message']
}
</script>

<style scoped></style>

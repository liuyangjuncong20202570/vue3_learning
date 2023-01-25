<template>
  <div>这是home页面</div>
  <router-link to="/order">订单</router-link>
  <button @click="logout">登出</button>
  <router-view></router-view>
</template>

<script setup>
const logout = () => {
  localStorage.removeItem('token')
}
</script>

<style lang="less" scoped>
.router-link-active,
.router-link-exact-active {
  color: red;
}
</style>

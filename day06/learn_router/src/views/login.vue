<template>
  <div>
    <h1>我是登录页面</h1>
    <button @click="loginBtn">登录</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const loginBtn = () => {
  localStorage.setItem('token', 'lyjc')
  router.push('/order')
}
</script>

<style lang="scss" scoped></style>

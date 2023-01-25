<template>
  <div>
    <button><router-link to="/home">我跳转到home</router-link></button>
    <button><router-link to="/about">我跳转到About</router-link></button>
    <router-link to="/user/123">用户123</router-link>
    <router-link to="/user/321">用户321</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="less" scoped></style>

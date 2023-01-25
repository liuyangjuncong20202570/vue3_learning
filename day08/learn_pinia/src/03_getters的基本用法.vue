<template>
  <div>
    <h1>doublecounter的值是：{{ counterStore.doubleCounter }}</h1>
    <h1>counter和age的和的值是：{{ counterStore.counterPlus }}</h1>
    <h1>id为111的friends的值是：{{ counterStore.getFriendsById(111) }}</h1>
  </div>
</template>

<script setup>
import useCounter from './stores/counterStore'
const counterStore = useCounter()
</script>

<style lang="less" scoped></style>

<template>
  <div>
    <h1>counterStore中的值是：{{ counterStore.counter }}</h1>
  </div>
</template>

<script setup>
import useCounter from './stores/counterStore'
const counterStore = useCounter()
</script>

<style lang="less" scoped></style>

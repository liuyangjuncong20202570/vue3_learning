<template>
  <div></div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
store.dispatch('getDataActions')
</script>

<style lang="scss" scoped></style>

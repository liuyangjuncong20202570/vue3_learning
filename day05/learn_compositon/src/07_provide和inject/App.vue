<template>
  <div>
    <showInfo></showInfo>
  </div>
</template>

<script>
import showInfo from './showInfo.vue'
import { ref, created, onMounted, provide } from 'vue'
export default {
  components: {
    showInfo
  },
  setup() {
    const name = ref('lyjc')
    provide('name', name)
    return { name }
  }
}
</script>

<style lang="scss" scoped></style>

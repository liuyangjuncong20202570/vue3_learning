<template>
  <div>{{ name }} - {{ height }}</div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup() {
    const name = inject('name')
    // inject第二个参数可以传递一个默认值以防父组件未传值
    const height = inject('height', 7.88)
    return { name, height }
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <h1>姓名{{ name }}年龄{{ age }}身高{{ height }}</h1>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue'
export default {
  setup() {
    const info = reactive({
      name: 'lyjc',
      age: 18,
      height: 1.88
    })
    // 因为reactive解构后，其内部的值将变成普通的值，成为非响应式数据
    const { name, age } = toRefs(info)
    // 单独解构
    const height = toRef(info, 'height')
    return { name, age, height }
  }
}
</script>

<style lang="less" scoped></style>

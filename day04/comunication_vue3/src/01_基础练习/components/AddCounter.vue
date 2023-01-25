<template>
  <div>
    <button @click="addCounter(1)">+1</button>
    <button @click="addCounter(5)">+5</button>
    <button @click="addCounter(10)">+10</button>
  </div>
</template>

<script>
export default {
  // vue3新增emits节点用于登记注册的自定义事件，一般为数组语法
  // 并且对象语法可以验证传递参数的完整性
  emits: {
    addCounter: function (counter) {
      if (counter <= 10) {
        return true
      }
      return false
    }
  },
  methods: {
    addCounter(val) {
      this.$emit('addCounter', val)
    }
  }
}
</script>

<style scoped></style>

<template>
  <div>
    <Home></Home>
    <button @click="message = 'hello Vue'">改变message</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import Home from '@/05_provide和inject/Home.vue'
export default {
  components: {
    Home
  },
  // provide: {
  //   name: 'lyjc',
  //   age: 18
  // }
  data() {
    return {
      message: 'hello World'
    }
  },
  provide() {
    return {
      name: 'lyjc',
      age: 18,
      message: computed(() => this.message) //这是一个响应式效果，通过引入vue自带的computed方法可以检测message的变化自动更新到provide节点中
    }
  }
}
</script>

<style scoped></style>

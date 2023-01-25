<template>
  <div>
    <h1>用户明细：{{ user.name }} - {{ user.password }}</h1>
    <button @click="user.name = 'kobe'">点击改变用户名</button>
    <h2>现在计数是：{{ counter }}</h2>
    <button @click="counter++">+1</button>
    <!-- 注意ref在template中使用的是浅层解包 -->

    <hr />
    <!-- 在对象对象中的ref不需要进行解包 -->
    <h1>我是对象中的ref {{ counter1.counter }}</h1>
    <!-- 但如果要对对象中的ref进行值的操作则需要继续解包 -->
    <!-- 现在（2023.1.15）已经是深层解包了，改变值也不需要.value了 -->
    <button @click="counter1.counter++">+1</button>
  </div>
</template>

<script>
// 在setup语法中定义响应式数据主要有两种方法
// reactive和ref函数，reactive主要定义复杂类型，ref复杂类型简单类型均可创建
import { reactive } from 'vue'
import { ref } from 'vue'
export default {
  setup() {
    // 方法1：reactive
    let user = reactive({
      name: 'lyjc',
      password: '23456'
    })
    // 方法2：ref，由于ref函数返回的是一个ref对象，所以在setup函数中需要进行解包使用
    // 但在template中会自动解包所以不用.value
    let counter = ref(0)
    let counter1 = ref({
      counter
    })
    return {
      user,
      counter,
      counter1
    }
  }
}
</script>

<style scoped></style>

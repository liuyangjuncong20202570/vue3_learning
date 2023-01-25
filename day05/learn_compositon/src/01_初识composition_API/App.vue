<template>
  <div>
    <h1>现在的计数是：{{ counter }}</h1>
    <button @click="add">+1</button>
    <button @click="minis">-1</button>
  </div>
</template>

<script>
import useCounter from './hooks/useCounter'
// import { ref } from 'vue'
export default {
  setup() {
    // 在setup函数中，所有的数据都不是响应式的，所以需要引入vue自身的ref函数来实现响应式
    // 当使用了ref函数后，返回的是一个对象，所以在改变这个值的时候需要对该值进行解包处理
    // 也就是进行counter.value
    // 但是在template中会自动对ref进行解包所以不用使用counter.value
    // 同样，可以将所有的对某一样数据进行改变的所有代码封装到一个js文件中
    // let counter = ref(100)
    // const add = () => {
    //   counter.value++
    // }
    // const minis = () => {
    //   counter.value--
    // }
    // const { counter, add, minis } = useCounter()
    // 也可以对该函数在return中做一个浅拷贝
    return {
      ...useCounter()
    }
  }
}
</script>

<style scoped></style>

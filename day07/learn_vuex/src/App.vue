<template>
  <div>
    <h1>state中的数据是：{{ $store.state.counter }}</h1>
    <h1>setup中的state数据是：{{ counter }}</h1>
    <h1>setup中的state数据是：{{ setupCounter }}</h1>
    <button @click="plus">+1</button>
    <Home></Home>
    <Action></Action>
    <Data></Data>
    <Name></Name>
  </div>
</template>

<script setup>
import Name from './05_默认子模块应用.vue'
import Data from './04_getters中的异步操作.vue'
import Action from './03_actions的使用.vue'
import Home from './01_setup中使用mapState.vue'
import { toRef, toRefs } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
// const setupCounter = store.state.counter //将vuex中state的数据挂载到普通变量上，但是该数据不是响应式的
// 所以我们需要用toRef去包裹整个store中的数据或者用toRefs包裹整个state函数，之后再解构,此时的数据就是响应式的了
const { counter } = toRefs(store.state)
const setupCounter = toRef(store.state, 'counter')
const plus = () => {
  store.commit('increament')
}
</script>

<style lang="scss" scoped></style>

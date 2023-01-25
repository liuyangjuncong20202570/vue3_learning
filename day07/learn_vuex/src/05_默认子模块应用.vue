<template>
  <div>
    <h1>子模块中的counter值是：{{ $store.state.home.counter }}</h1>
    <button @click="addCounter">+1</button>
    <h1>
      父组件和子组件的counter求和值是：{{
        $store.getters['home/doubleCounter']
      }}
    </h1>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
console.log(store.state.home.counter)
const addCounter = () => {
  store.commit('home/increament')
}
</script>

<style lang="less" scoped></style>

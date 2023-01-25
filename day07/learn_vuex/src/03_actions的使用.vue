<template>
  <div>
    <h1>counter的值是：{{ $store.state.counter }}</h1>
    <button @click="changeCounterActions">+1</button>
    <h1>name的值是：{{ $store.state.name }}</h1>
    <button @click="changeNameActions('aaa')">改变name的值</button>
  </div>
</template>

<script setup>
import { useStore, mapActions } from 'vuex'
const store = useStore()
const actions = mapActions(['changeCounterActions', 'changeNameActions'])
const newActions = {}
Object.keys(actions).forEach((key) => {
  newActions[key] = actions[key].bind({ $store: store })
})
const { changeCounterActions, changeNameActions } = newActions
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <h1>name:{{ name }}</h1>
    <h1>age:{{ age }}</h1>
    <h1>level:{{ level }}</h1>
    <button @click="changeName">更改name和level</button>
    <button @click="resetState">重置state</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useUser from './stores/userStore.js'
const userStore = useUser()
const { name, age, level } = storeToRefs(userStore)
// const changeName = () => {
//   userStore.name = 'james'
//   userStore.level = 999
// }
// state方法一：$reset可以将更改后的state值重置为原先的值
const resetState = () => {
  userStore.$reset()
}
// state方法2：$patch：一次性更改多个属性
const changeName = () => {
  userStore.$patch({
    name: 'james',
    age: 99,
    level: 999
  })
}
// state方法3：用一个新对象替换原对象（实际上内部是将两个对象中相同的部分做了一个合并，并不是完全做到了替换）
const oldState = userStore.$state
userStore.$state = {
  name: 'lyjc',
  age: 22,
  level: 9999
}
console.log(userStore.$state === oldState) //此处返回true，说明此处原来的对象和现在的state对象指向的是同一个地址
</script>

<style lang="less" scoped></style>

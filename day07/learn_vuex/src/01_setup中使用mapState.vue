<template>
  <div>
    方法一：通过改变setup中this的指向来达到获取state数据（理解）
    <h1>state中的数据是：{{ name1 }}</h1>
    方法2：直接对state解构（掌握）
    <h1>name:{{ newName }}</h1>
    <h1>age:{{ newAge }}</h1>
    <h1>counter:{{ newCounter }}</h1>
    <h1>id为111的朋友是{{ getFriendByID(112) }}</h1>
    <h1>两倍的counter是：{{ doubleCounter }}</h1>
    <button @click="changeName('wsnd')">更改名字</button>
    <h1>counter的值是：{{ newCounter }}</h1>
    <button @click="increament">+1</button>
  </div>
</template>

<script setup>
import { mapState, useStore, mapMutations } from 'vuex'
import { toRefs, computed } from 'vue'
const store = useStore()
// 方法一：通过改变setup中this的指向来达到获取state数据（理解）
// 首先通过mapState来将state中的数据映射到一个对象中，并且对象的属性值都是函数并将其解构出来
const { name, age, counter } = mapState(['name', 'age', 'counter'])
// 第二步，将函数挂载到conmputed计算属性上
// 重要：在vuex中获取state内部数据是通过this.$store.state.属性名获取的，明显在setup函数中this指向为空，所以，我们需要手动将this.$store
// 指向store
// 首先name.bind()返回一个函数（其this指向已被改变）符合computed传参要求，其次，name.bind({$store:store})获取的新函数this指向bind内部的对象
// 所以根据对象取值：this.$store = store
// 也就是说：this.$store.state = store.state
// 此时name1也就拿到了state中的name属性
const name1 = computed(name.bind({ $store: store }))
// 方法2：直接对state解构（掌握）
const { name: newName, age: newAge, counter: newCounter } = toRefs(store.state)
// 在compositionApi中使用getters
const { doubleCounter, getFriendByID } = toRefs(store.getters)
// 在compositionApi中使用mutations
// 对mutations进行封装
const mutations = mapMutations(['increament', 'changeName'])
let newMutations = {}
Object.keys(mutations).forEach((key) => {
  newMutations[key] = mutations[key].bind({ $store: store })
})
const { increament, changeName } = newMutations
console.log(store.commit)
</script>

<style lang="less" scoped></style>

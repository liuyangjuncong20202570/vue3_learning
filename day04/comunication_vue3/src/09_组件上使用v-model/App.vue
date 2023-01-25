<template>
  <div>
    <h1>app中的counter{{ appCounter }}</h1>
    <Counter v-model="appCounter"></Counter>
    <!-- 在组件中使用v-model相当于执行了一下语句 -->

    <!-- 相比于vue2,vue3中组件使用v-model更加标准化 -->
    <!-- 在vue2中v-model监听的是input事件,不论是元素还是组件 -->
    <!-- 但是在.sync修饰符中监听的是update:value事件,两个效果一致,但是语句不一致 -->
    <!-- 在vue3中统一变成了update:modelValue事件 -->
    <!-- 本质上都是在通过子组件达到修改props值得目的 -->
    <Counter
      :modelValue="appCounter"
      @update:modelValue="appCounter = $event"
    ></Counter>

    <!-- 重要:vue3中由于支持v-model自定义属性名,意味着一个组件可以多次绑定v-model,大大提高了效率 -->
    <!-- 而vue2中由于一个组件只能使用一次v-model,其他props要修改只能使用.sync修饰符 -->
    <!-- 所以在vue3中舍弃了.sync修饰符 -->
    <hr />
    <Counter v-model="appCounter" v-model:name="name"></Counter>
  </div>
</template>

<script>
import Counter from './Counter.vue'
export default {
  components: {
    Counter
  },
  data() {
    return {
      appCounter: 100,
      name: 'lyjc'
    }
  }
}
</script>

<style scoped></style>

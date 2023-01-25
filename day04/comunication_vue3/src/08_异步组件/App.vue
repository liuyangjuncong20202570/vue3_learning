<template>
  <div class="app">
    <template v-for="(item, index) in title" :key="item">
      <button
        :class="{ active: currentIndex === index }"
        @click="changeColor(index)"
      >
        {{ item }}
      </button>
    </template>
    <component :is="title[currentIndex]"></component>
  </div>
</template>

<script>
// 为什么要定义异步组件
// 如果所有的业务代码都打包到一个app.js文件中那么用户的首屏渲染速度会非常的慢
// 而如果定义了一个异步组件那么,webpack打包的时候会单独打包到一个文件中
// 如何定义异步组件:
import { defineAsyncComponent } from 'vue'
import Home from './view/home.vue'
import About from './view/about.vue'
// import Category from './view/category.vue'
// 使用函数导入即可定义异步组件
// 因为import导入返回的是一个promise对象所以需要用vue内部定义的defineAsyncComponent来将promise对象转化为一个异步组件
const AsyncCatagory = defineAsyncComponent(() => import('./view/category.vue'))
export default {
  data() {
    return {
      title: ['home', 'about', 'category'],
      currentIndex: 0
    }
  },
  components: {
    Home,
    About,
    Category: AsyncCatagory
  },
  methods: {
    changeColor(val) {
      this.currentIndex = val
    }
  }
}
</script>

<style scoped>
.active {
  color: red;
}
</style>

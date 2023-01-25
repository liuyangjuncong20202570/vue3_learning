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
import Home from './view/home.vue'
import About from './view/about.vue'
import Category from './view/category.vue'
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
    Category
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

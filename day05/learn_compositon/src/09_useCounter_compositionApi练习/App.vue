<template>
  <div>
    <!-- <Home></Home>
    <hr />
    <About></About> -->
    <!-- 改变组件 -->
    <h1>{{ scrollx }} - {{ scrolly }}</h1>
    <button @click="changeHome('首页')">home</button>
    <button @click="changeAbout('about')">about</button>
    <component :is="currentPage"></component>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
import useScroll from './hooks/useScroll'
import { ref } from 'vue'
import Home from './views/home.vue'
import About from './views/about.vue'
import useTitle from './hooks/useTitle'
export default {
  components: {
    Home,
    About
  },
  setup() {
    const { scrollx, scrolly } = useScroll()

    const { changeTitle } = useTitle()
    let currentPage = ref('home')
    const changeHome = (val) => {
      currentPage.value = 'home'
      changeTitle(val)
    }
    const changeAbout = (val) => {
      currentPage.value = 'about'
      changeTitle(val)
    }
    return {
      currentPage,
      changeHome,
      changeAbout,
      scrollx,
      scrolly
    }
  }
}
</script>

<style lang="scss" scoped></style>

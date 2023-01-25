<template>
  <div>
    <!-- <h1>about中计数：{{ counter }}</h1>
    <button @click="increament">+1</button>
    <button @click="decrement">-1</button>
    <button @click="changeTitle('hhh')">改变标题</button>
    {{ title }} -->
    <h1>我是about</h1>
    <button @click="hot">热门</button>
    <button @click="song">歌曲</button>
    <button @click="movie">电影</button>
  </div>
</template>

<script>
import useCounter from '../hooks/useCounter'
import { ref } from 'vue'
import useTitle from '../hooks/useTitle'
export default {
  setup() {
    const { changeTitle } = useTitle()
    const title = changeTitle('about')
    const hot = () => {
      title.value = 'hot'
    }
    const song = () => {
      title.value = 'song'
    }
    const movie = () => {
      title.value = 'movie'
    }
    return {
      ...useCounter(),
      title,
      changeTitle
    }
  }
}
</script>

<style lang="scss" scoped></style>

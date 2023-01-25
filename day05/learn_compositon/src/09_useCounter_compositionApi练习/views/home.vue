<template>
  <div>
    <!-- <h1>home中计数：{{ counter }}</h1>
    <button @click="increament">+1</button>
    <button @click="decrement">-1</button> -->
    <h1>我是home</h1>
  </div>
</template>

<script>
import useTitle from '../hooks/useTitle'
import useCounter from '../hooks/useCounter'
export default {
  setup() {
    const { changeTitle } = useTitle()
    changeTitle('home')
    return {
      ...useCounter()
    }
  }
}
</script>

<style lang="scss" scoped></style>

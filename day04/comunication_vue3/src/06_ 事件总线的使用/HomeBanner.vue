<template>
  <div>
    <h1>我是HomeBanner</h1>
    <button @click="eventEmit">点击进行事件传输</button>
  </div>
</template>

<script>
import EventBus from './utils/event-bus'
export default {
  data() {
    return {
      message: '我是从HomeBanner中传过来的message'
    }
  },
  methods: {
    eventEmit() {
      console.log('eventEmit')
      EventBus.emit('share', this.message)
    }
  }
}
</script>

<style scoped></style>

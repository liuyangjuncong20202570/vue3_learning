<template>
  <div>
    <h1>catagory</h1>
  </div>
</template>

<script>
import EventBus from './utils/event-bus'
export default {
  methods: {
    eventHandler() {
      console.log('事件监听到了')
    }
  },
  created() {
    EventBus.on('share', this.eventHandler)
  },
  unmounted() {
    EventBus.off('share', this.eventHandler)
  }
}
</script>

<style scoped></style>

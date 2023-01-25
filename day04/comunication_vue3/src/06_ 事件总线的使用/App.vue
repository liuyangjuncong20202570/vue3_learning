<template>
  <div>
    <Home></Home>
    <h1>事件总线传输 - {{ message }}</h1>
    <button @click="isCatagoryShow = false">展示catagory</button>
    <Catagory v-if="isCatagoryShow"></Catagory>
  </div>
</template>

<script>
import Catagory from '@/06_ 事件总线的使用/catagory.vue'
import EventBus from './utils/event-bus'
import Home from '@/06_ 事件总线的使用/Home.vue'
export default {
  components: {
    Home,
    Catagory
  },
  data() {
    return {
      message: '',
      isCatagoryShow: true
    }
  },
  created() {
    EventBus.on('share', (value) => {
      this.message = value
    })
  }
}
</script>

<style scoped></style>

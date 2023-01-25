<template>
  <div class="app">
    <!-- tabar -->
    <Tabbar :item="item" @changeChannel="changeChannel"></Tabbar>
    <!-- 展示内容 -->
    <h1>展示的内容是:{{ content }}</h1>
  </div>
</template>

<script>
import Tabbar from '@/02_tabbar-案例/Tabbar.vue'
export default {
  components: {
    Tabbar
  },
  data() {
    return {
      item: [
        { id: 1, name: '衣服' },
        { id: 2, name: '裤子' },
        { id: 3, name: '鞋子' }
      ],
      content: '衣服'
    }
  },
  methods: {
    changeChannel(val) {
      this.content = val
    }
  }
}
</script>

<style scoped></style>

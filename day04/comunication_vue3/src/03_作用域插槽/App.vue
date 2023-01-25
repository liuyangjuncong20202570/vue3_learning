<template>
  <div class="app">
    <!-- tabar -->
    <Tabbar :item="item" @changeChannel="changeChannel"></Tabbar>
    <!-- 展示内容 -->
    <h1>展示的内容是:{{ content }}</h1>
    <!-- 作用域插槽演示 -->
    <Tabbar :item="item" @changeChannel="changeChannel">
      <template #desc="props">
        <!-- 此时问题出现：我无法使用子组件中的item来渲染插槽中的内容，所以使用作用域插槽 -->
        <!-- 此时的props是通过作用域插槽来获取的，并不是通过App.Vue来获取的data中数据 -->
        <button>{{ props.item }}</button>
      </template>
    </Tabbar>
    <Tabbar :item="item" @changeChannel="changeChannel">
      <template #desc="props">
        <a href="#">{{ props.item }}</a>
      </template>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/03_作用域插槽/Tabbar.vue'
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

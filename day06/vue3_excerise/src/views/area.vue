<template>
  <!-- header -->
  <Title :title="areaData.title" :subtitle="areaData.subtitle"></Title>
  <!-- room-item -->
  <div class="room-list">
    <template v-for="item in areaData.list" :key="item.id">
      <container :item="item"></container>
    </template>
  </div>
</template>

<script setup>
import Title from './title.vue'
import container from './container.vue'
defineProps({
  areaData: {
    type: Object,
    required: true
  }
})
</script>

<style lang="less" scoped>
.room-list {
  // flex-wrap可以使弹性布局内部的item进行自动换行
  // 此处的margin可以使整个div上下有20px的高度，并且左右有8px的间距可以对其
  display: flex;
  flex-wrap: wrap;
  margin: 20px -8px;
}
</style>

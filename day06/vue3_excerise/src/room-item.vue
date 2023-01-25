<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    itemData: {
      type: Object,
      default: () => {}
    }
  })

  const itemTitle = computed(() => {
    return {
      title: props.itemData?.verify_info?.messages?.join(" ") ?? '',
      color: props.itemData?.verify_info?.text_color ?? '#008489'
    }
  })

</script>

<template>
  <div class="room-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.picture_url" alt="">
      </div>
      <div class="info">
        <div class="title" :style="{ color: itemTitle.color }">
          {{ itemTitle.title }}
        </div>
        <div class="name">
          {{ itemData.name }}
        </div>
        <div class="price">{{ itemData.price_format + "/晚" }}</div>
        <div class="bottom">{{ itemData?.bottom_info?.content }}</div>
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
  .room-item {
    width: 33.333333%;

    .item-inner {
      margin: 0 8px 12px;
      color: #484848;
      font-weight: 800;

      img {
        width: 100%;
        border-radius: 3px;
      }

      .info {
        .title {
          margin-top: 8px;
          font-size: 12px;
        }

        .name {
          margin-top: 3px;
          font-size: 16px;

          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .price {
          margin: 3px 0;
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
  }
</style>


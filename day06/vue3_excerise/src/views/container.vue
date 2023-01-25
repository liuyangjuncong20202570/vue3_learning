<template>
  <div class="room-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="item.picture_url" alt="" />
      </div>
      <div class="info">
        <div class="title" :style="{ color: title.color }">
          {{ title.text }}
        </div>
        <div class="name">
          {{ item.name }}
        </div>
        <div class="price">
          {{ item.price_format + '/晚' }}
        </div>
        <div class="bottom_info" :style="bottomInfo.style">
          {{ bottomInfo.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
// 可以通过const props来接收defineProps中的自定义属性
// const fullname = computed(() => {
//   return props.item.verify_info.messages.join(' ')
// })
// const fullColor = computed(() => {
//   return props.item.verify_info.text_color
// })
// 上面的计算属性可以达到目的，但是不同的计算属性其实内部相同的地方还是挺多的
// 所以我们完全可以封装同一个计算属性
// 记住：vue3是函数式编程，computed实际上是一个函数，所以我们完全可以返回一个对象由计算属性进行调用
const title = computed(() => {
  return {
    text: props.item.verify_info.messages.join(' '),
    color: props.item.verify_info.text_color
  }
})
// 同理下端描述性文字也可以同样的思路
// 因为style是一个多属性的选项，所以我们可以单独返回一个style对象，返回其属性
const bottomInfo = computed(() => {
  return {
    content: props.item.bottom_info.content,
    style: {
      color: props.item.bottom_info.content_color,
      fontSize: props.item.bottom_info.font_size + 'px'
    }
  }
})
</script>

<style lang="less" scoped>
.room-item {
  // 这个width说明每一个item都占据容器div的1/3，就可以实现三个盒子平分一行，但是每个盒子之间是紧挨着的，没有间距
  // 所以可以用一个item-inner进行包裹，对inner-item设置margin就可以实现由一定的间距，但是左右两边的两个item也会有一定的margin
  // 于是对父盒子设定margin,使其向左右拉伸8个px,这样就对其了
  width: 33.333333%;

  .item-inner {
    // margin:上、左右、下
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

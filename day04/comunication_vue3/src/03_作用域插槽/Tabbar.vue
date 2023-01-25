<template>
  <div class="tabbar">
    <div
      v-for="(item, index) in item"
      :key="item.id"
      :class="{ active: index + 1 === id }"
      class="item"
      @click="changeChannel(item.name, item.id)"
    >
      <!-- 提出需求：用户想要定制组件内部的元素 -->
      <!-- 也就是说，Tabbar内部不一定是span，可以是a、button标签 -->
      <!-- 此处使用span来定制 -->
      <!-- 作用域插槽可以通过v-bind来将子组件中的内容通过该插槽传递给父组件，让父组件来使用该内容 -->
      <slot name="desc" :item="item.name">
        <span>{{ item.name }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['changeChannel'],
  data() {
    return {
      id: 1
    }
  },
  props: {
    item: {
      type: Array,
      required: true
    }
  },
  methods: {
    changeChannel(val1, val2) {
      this.$emit('changeChannel', val1)
      this.id = val2
    }
  }
}
</script>

<style scoped>
.tabbar {
  display: flex;
  height: 44px;
  line-height: 44px;
}
.item {
  flex: 1;
  text-align: center;
}
.active {
  color: red;
}
.active span {
  padding: 8px;
  border-bottom: 3px solid red;
}
</style>

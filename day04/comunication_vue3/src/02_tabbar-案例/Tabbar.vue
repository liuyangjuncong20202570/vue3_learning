<template>
  <div class="tabbar">
    <div
      v-for="(item, index) in item"
      :key="item.id"
      :class="{ active: index + 1 === id }"
      class="item"
      @click="changeChannel(item.name, item.id)"
    >
      <span>{{ item.name }}</span>
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

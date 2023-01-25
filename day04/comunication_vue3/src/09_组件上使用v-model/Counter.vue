<template>
  <div>
    <h1>从App.vue中获取的appCounter {{ modelValue }}</h1>
    <button @click="changeCounter">改变Counter中的props值</button>

    <h2>获取得名字是{{ name }}</h2>
    <button @click="changeName">改变名字</button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number
    },
    name: {
      type: String
    }
  },
  emits: ['update:modelValue', 'update:name'],
  methods: {
    changeCounter() {
      this.$emit('update:modelValue', 999)
    },
    changeName() {
      this.$emit('update:name', 'james')
    }
  }
}
</script>

<style scoped></style>

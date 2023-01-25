<template>
  <div>
    <button @click="infoClick">发送自定义事件</button>
  </div>
</template>

<script setup>
// 要发送自定义事件需要在setupscript中定义defineEmits来定义一个emits实例用于发送自定义事件
const emits = defineEmits(['infoClick'])
const infoClick = () => {
  emits('infoClick', 'showInfo内部发生了点击事件')
}
// 使用defineExpose方法将infoclick方法进行暴露，使App.vue可以使用相应方法
const foo = () => {}
console.log('foo')
defineExpose({
  foo,
  infoClick
})
</script>

<style lang="scss" scoped></style>

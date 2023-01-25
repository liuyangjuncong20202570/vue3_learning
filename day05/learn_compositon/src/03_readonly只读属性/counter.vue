<template>
  <div>
    <h1>我是子组件</h1>
    <h2>父组件传过来的值是 {{ info }}</h2>
    <!-- 注意，不能通过子组件来修改父组件的值，这是违反单向数据流的，正确做法是子组件通过发送自定义事件，由父组件监听后改变父组件的值 -->
    <!-- 为了保证不违反单项数据流，vue3提供了readonly属性 -->
    <button @click="changeProps">
      通过自定义事件来改变父组件的值从而改变props
    </button>
    <button @click="info.name = '铸币'">铸币改对象</button>

    <!-- <h3>父组件传过来的单个值是： {{ counter }}</h3>
    <button @click="counter++">铸币改props值</button> -->
    <!-- readonly只接受对象传参，所以针对单个值没有效果 -->
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {}
    },
    counter: {
      type: Number,
      default: 0
    }
  },
  setup(props, context) {
    const changeProps = () => {
      // 在setup函数中不要使用this，vue3提供了context.emit来注册自定义事件
      context.emit('changeProps', 'Kobe')
      console.log(props.info)
    }
    return {
      changeProps
    }
  }
}
</script>

<style scoped></style>

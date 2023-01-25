<template>
  <div>
    <!-- 非prop属性的attribute会默认绑定到子组件的根节点上 -->
    <Header name="哈哈哈哈" address="吉安市"></Header>
    <Content></Content>
    <Footer></Footer>
    <h1>现在的数字是:{{ counter }}</h1>
    <AddCounter @addCounter="addCounter"></AddCounter>
  </div>
</template>

<script>
import Header from '@/01_基础练习//components/AppHeader.vue'
import Content from '@/01_基础练习//components/AppContent.vue'
import Footer from '@/01_基础练习//components/AppFooter.vue'
import AddCounter from '@/01_基础练习//components/AddCounter.vue'
export default {
  components: {
    AddCounter,
    Header,
    Content,
    Footer
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    addCounter(val) {
      return (this.counter += val)
    }
  }
}
</script>

<style lang="less" scoped></style>

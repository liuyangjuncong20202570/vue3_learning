<template>
  <div>
    <NavBar>
      <!-- 具名插槽的简写形式 -->
      <template #left>
        <button>返回</button>
      </template>
      <template #center> 购物车 </template>
      <!-- 具名插槽的完整形式 -->
      <template v-slot:right>
        <a href="#">登录</a>
      </template>
    </NavBar>

    <!-- 动态插槽，由一个参数动态控制想要使用的插槽名称 -->
    <!-- v-slot:[参数名] 由该参数来动态控制使用不同的插槽-->
    <NavBar>
      <template v-slot:[position]>
        <a href="#">登录</a>
      </template>
    </NavBar>
    <button @click="position = 'left'">left</button>
    <button @click="position = 'center'">center</button>
    <button @click="position = 'right'">right</button>
  </div>
</template>

<script>
import NavBar from '@/插槽/NavBar.vue'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      position: 'center'
    }
  }
}
</script>

<style scoped></style>

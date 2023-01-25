<template>
  <div>
    <h1 ref="h1Ref">hhh</h1>
    <showInfo ref="showInfoRef"></showInfo>
  </div>
</template>

<script>
import showInfo from './showInfo.vue'
import { ref, created, onMounted } from 'vue'
export default {
  components: {
    showInfo
  },
  setup() {
    const h1Ref = ref()
    const showInfoRef = ref()
    // created(() => {
    //   console.log(h1Ref)
    // })
    // 因为如果要使ref绑定到元素上，则必须使整个页面先加载一次，所以打印h1Ref要么在异步处理函数中要么在生命周期函数中
    onMounted(() => {
      console.log(h1Ref.value)
      console.log(showInfoRef.value)
      showInfoRef.value.getName()
    })
    return {
      h1Ref,
      showInfoRef
    }
  }
}
</script>

<style lang="scss" scoped></style>

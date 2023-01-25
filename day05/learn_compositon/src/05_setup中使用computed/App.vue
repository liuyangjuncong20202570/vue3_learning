<template>
  <div>全名是：{{ fullname }}</div>
</template>

<script>
import { computed, reactive } from 'vue'
export default {
  setup() {
    const names = reactive({
      firstname: 'kobe',
      lastname: 'bryant'
    })
    // 计算属性的使用，可以在计算属性中的set方法中给其他值赋值，在get方法中返回该值
    // 不进行赋值的话可以简单写只写get中的return返回值
    // 如果我要进行改值，则需要在函数中写上set方法
    // const fullname = computed(() => {
    //   return names.firstname + ' ' + names.lastname
    // })
    const fullname = computed({
      set: function (newvalue) {
        let newNames = newvalue.split(' ')
        names.firstname = newNames[0]
        names.lastname = newNames[1]
      },
      get: function () {
        return names.firstname + ' ' + names.lastname
      }
    })
    // 如果要给computed进行传参，因为computed返回的是一个ref对象，所以传参可以用.value语法
    fullname.value = '刘 阳俊聪'
    return { names, fullname }
  }
}
</script>

<style lang="scss" scoped></style>

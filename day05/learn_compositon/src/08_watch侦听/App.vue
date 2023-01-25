<template>
  <div>
    <h1>{{ obj }}</h1>
    <button @click="obj.name = 'lyjc'">改变深层对象</button>
  </div>
</template>

<script>
import { watch, reactive, watchEffect } from 'vue'
export default {
  setup() {
    // let obj = {
    //   name: 'lyjc'
    // }
    // console.log(obj)
    // let obj2 = reactive({
    //   name: 'kobe'
    // })
    // console.log(obj2)
    // 由以上两个对象打印结果可知，vue3对于对象的响应式实现是通过reactive或ref函数实现对相应对象的代理对象（proxy）进行值得改变
    let obj = reactive({
      name: 'kobe',
      friend: {
        name: 'james'
      }
    })
    // 对于proxy对象的监听
    watch(
      obj,
      (newVal, oldVal) => {
        console.log(newVal, oldVal)
      },
      {
        // 注意：对于侦听的如果是proxy对象，watch自动开启深层监听
        immediate: true
      }
    )
    // 对于普通对象的监听
    // watch实际上有三个参数1：一个回调函数，watch会根据该回调函数的返回值来确定监听对象.2:该回调函数用来接收返回来的新值和旧值.
    // 3：侦听器选项对象该对象内部主要有两个属性：immediate和deep
    // watch(
    //   // 这里相当于用浅拷贝将obj的值传给了一个普通对象
    //   () => ({ ...obj }),
    //   (newVal, oldVal) => {
    //     console.log(newVal, oldVal)
    //   },
    //   {
    //     // 对于普通对象的监听，watch不会自动打开深度监听
    //     immediate: true,
    //     deep: true
    //   }
    // )
    // watchEffect中的函数会自动执行一遍，并且会自动检测依赖，当依赖发生变化则还会调用函数
    // 为什么这里监听obj不会触发watchEffect的回调函数呢？这是因为对于obj（对象）的引用都是引用其地址
    // 当一个值发生变化，newValue和oldValue指向的都是同一个地址，自然当obj中一个值发生变化，由于监听的是一个地址
    // newVal和oldVal同时发生变化，即两者的值没有发生变化，都是指向改变后的值，在watchEffect眼中详单与没有发生变化
    // 如果监听的是其中一个属性值就相当于是指向其值本身，其值本身发生了变化，则触发watchEffect
    watchEffect(() => {
      console.log('========', obj.name)
    })
    // watch也可以监听多个数据源
    // watch(['name','age'],(newVal,oldVal)=>{console.log(newVal,oldVal)})
    return {
      obj
    }
  }
}
</script>

<style lang="scss" scoped></style>

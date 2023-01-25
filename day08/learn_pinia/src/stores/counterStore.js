import { defineStore } from 'pinia'
import useUser from './userStore'
const useCounter = defineStore('counter', {
  state: () => ({
    counter: 99,
    friends: [
      { id: 111, name: 'lyjc', level: 999 },
      { id: 112, name: 'kobe', level: 888 },
      { id: 113, name: 'james', level: 777 }
    ]
  }),
  getters: {
    // 方法1：获取state中数据的两种方法
    doubleCounter() {
      return this.counter * 2
    },
    // 方法2：通过导入其他store来访问其他store内部数据
    counterPlus(state) {
      const userStore = useUser()
      return state.counter + userStore.age
    },
    // 方法3：getters可以return一个函数
    getFriendsById() {
      return (id) => {
        return this.friends.find((item) => item.id === id)
      }
    }
  }
})

export default useCounter

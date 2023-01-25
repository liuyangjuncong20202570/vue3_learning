import { createStore } from 'vuex'
import homemodule from './modules/homemodule'
const store = createStore({
  state: () => ({
    counter: 100,
    name: 'lyjc',
    age: 18,
    friends: [
      { id: 111, name: 'kobe', age: 25 },
      { id: 112, name: 'james', age: 45 },
      { id: 113, name: 'zs', age: 30 }
    ]
  }),
  mutations: {
    increament(state) {
      state.counter++
    },
    changeName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    getFriendByID(state) {
      return function (id) {
        return state.friends.filter((item) => item.id === id)
      }
    },
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  actions: {
    changeCounterActions(context) {
      context.commit('increament')
    },
    changeNameActions(context, payload) {
      context.commit('changeName', payload)
    },
    async getDataActions() {
      const res = await fetch('http://123.207.32.32:8000/home/multidata')
      const data = await res.json()
      console.log(data)
    }
  },
  modules: {
    home: homemodule
  }
})

export default store

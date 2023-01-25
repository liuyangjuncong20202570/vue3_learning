export default {
  namespaced: true,
  // 加了命名空间后，在子组件中定义的getters、mutations、actions就定义在了单独的名字为模块名的空间中（home）
  // 不用担心子模块中的方法命名和父模块冲突
  // 注意：在state中记得将对象return出去
  state: () => ({
    counter: 99
  }),
  // 在父模块中调用getters：$store.getters['name/getters名']
  getters: {
    doubleCounter(state, getters, rootState) {
      return state.counter + rootState.counter
    }
  },
  // 在父模块中调用mutations：$store.commit ['name/mutations名']
  mutations: {
    increament(state) {
      state.counter++
    }
  },
  // 在父模块中调用actions：$store.dispatch['name/actions名']
  actions: {}
}

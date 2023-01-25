import { defineStore } from 'pinia'

const useHome = defineStore('Home', {
  state: () => ({
    homeName: 'james'
  }),
  actions: {
    async getData() {
      const res = await fetch('http://123.207.32.32:8000/home/multidata')
      const data = await res.json()
      console.log(data)
    },
    concateName(name) {
      return this.homeName + name
    }
  }
})

export default useHome

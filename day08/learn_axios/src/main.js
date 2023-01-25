import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import LyRequest from './service'
// axios
//   .post(
//     '/v1_0/user/followings',
//     // {},
//     {
//       data: {
//         name: 'lyjc'
//       }
//     },
//     {
//       params: {
//         id: 1
//       },
//       headers: {
//         name: 'lyjc'
//       },
//       baseURL: 'http://toutiao.itheima.net'
//     }
//   )
//   .then((res) => console.log(res))
// axios
//   .post(
//     'http://toutiao.itheima.net/v1_0/user/followings',
//     {
//       name: 'lyjc'
//     },
//     {
//       params: {
//         id: 1
//       },
//       timeout: 3000,
//       headers: {
//         name: 'lyjc'
//       }
//     }
//   )
//   .then((res) => console.log(res))
LyRequest.request({
  url: 'http://123.207.32.32:8000/home/multidata'
}).then((res) => {
  console.log(res)
})
LyRequest.get({
  url: '/home/multidata'
}).then((res) => {
  console.log(res)
})
createApp(App).mount('#app')

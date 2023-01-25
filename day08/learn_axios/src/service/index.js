import axios from 'axios'

class LyRequest {
  constructor(baseURL, timeout = 2000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }
  request(config) {
    // return axios.request(config)
    return new Promise((res, rej) => {
      this.instance
        .request(config)
        .then((ret) => {
          res(ret.data.data)
        })
        .catch((err) => {
          rej(err)
        })
    })
  }
  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new LyRequest('http://123.207.32.32:8000')

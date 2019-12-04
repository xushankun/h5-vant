import axios from 'axios'
import { Notify } from 'vant';
import store from '@/store'
import qs from 'qs'
import router from "../router";

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? `http://192.168.16.155:8086/api/api/v1` : process.env.VUE_APP_BASEURL,
  withCredentials: false, // 跨域请求时发送 cookies
  paramsSerializer: params => qs.stringify(params, {arrayFormat: 'repeat'}),  // I need array serialization to be repeat, eg: sort=p1,asc&sort=p2,desc
  // timeout: 5000,
  // headers: { 'Content-Type': 'application/json'}, // 默认
  // responseType: "json", // 表示响应数据类型  默认json
})

service.interceptors.request.use(
  config => {
    // 请求前对配置进行修改
    console.log(config)
    if (store.getters.token) {
      config.headers['Authorization'] = store.getters.token
    }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if(response.data.code === 401){
      Notify(response.data.msg);
      store.dispatch('signOut').then(()=>{
          router.push('/login')
      });
    }
    return response.data
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service

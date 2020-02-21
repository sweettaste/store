//导入相关文件
import axios from 'axios'

 export function request(config){
  //创建axios的实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000/api/hy',
    // baseURL:'http://106.54.54.237:8000/pai/hy',
    timeout:70000
  })
  //请求拦截
instance.interceptors.request.use(config =>{
  return config
},err => {
  console.log(err);
})
//响应拦截
instance.interceptors.response.use(res => {
  return res
},err => {
  console.log(err)
})
  //最后发送网络请求
  return instance(config)
}


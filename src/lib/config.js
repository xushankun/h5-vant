/**
 * Created by shankun on 2019/5/29.
 */
'use strict';
/* eslint-disable */
import axios from 'axios'
import Qs from 'qs'
import store from '../store'
import { Notify } from 'vant';
const _baseURL = process.env.VUE_APP_BASEURL + '/api/v1'
import router from '../router'

axios.interceptors.response.use(function (res) {
    return res.data;
}, function (error) {
    //打印异常周边
    if(error.message === 'Network Error'){
        //此处断网和接口404都会被拦截到， error.request.status === 0
        console.log('%c   404的API:','color:#333;font-weight:700;');
        console.log('%c   '+error.config.url,'color:#666;');
    }
    if(error.code === 'ECONNABORTED'){
        //我们在这里可以进行超时拦截
        console.log('%c   超时的API:','color:#333;font-weight:700');
        console.log('%c   '+error.config.url,'color:#666;');
    }
    return Promise.reject(error.message);
});


var config = {
    url: '',
    method:'get',
    // 基础url前缀
    baseURL: _baseURL,
    transformRequest: [function (data) {
        //允许在请求发送到服务器之前修改该请求
        data = Qs.stringify(data);
        // data = JSON.stringify(data);
        return data;
    }],

    transformResponse: [function (data) {
        //允许在数据传递到then/catch之前修改response数据
        if(typeof data === 'string' && data.length > 0){
            data = JSON.parse(data);
        }
        if(data.code === 401){
            Notify(data.msg);
            store.dispatch('signOut').then(()=>{
                router.push('/login')
            });
        }
        return data;
    }],

    headers: {
        // 'Content-Type':'application/json',
        'Content-Type':'application/x-www-form-urlencoded',
        'token': ''
    },//包含了http请求的各种信息
    //params是发送请求的查询参数对象，对象中的数据会被拼接成url?param1=value1&param2=value2
    params: {},
    paramsSerializer: function(params) {  //params参数序列化器。
        return Qs.stringify(params)
    },

//post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
    data: {},
    timeout: 30000,    //请求超时设置，单位为毫秒
    withCredentials: false, // default    表明是否有跨域请求需要用到证书
    // 表示服务器将返回响应的数据类型
    responseType: 'json', // default  有arraybuffer、blob、document、json、text、stream这6个类型
    // onUploadProgress: function (progressEvent) {  //允许在上传过程中的做一些操作
    //   // Do whatever you want with the native progress event
    // },
    //
    //
    // onDownloadProgress: function (progressEvent) {  //允许在下载过程中的做一些操作
    //   // Do whatever you want with the native progress event
    // },
    maxContentLength: 2000,   // 定义了接收到的response响应数据的最大长度。
    validateStatus: function (status) {  //定义了根据HTTP响应状态码决定是否接收或拒绝获取到的promise。如果 validateStatus 返回 true (或设置为 null 或 undefined ),promise将被接收;否则,promise将被拒绝。
        return status >= 200 && status < 300; // default
    },
    maxRedirects: 5, // default
}

let request = (_url, _method, _data) => {
    _data = _data || {};
    _method = _method.toLocaleUpperCase();
    if(_method === 'GET'){
        config.data = {}
        config.params = _data;
        return axios.get(_url,config);
    } else if (_method === 'POST') {
        config.params = {}
        config.data = _data;
        return axios.post(_url,{},config);
    }
};

export {
    config,
    request
}

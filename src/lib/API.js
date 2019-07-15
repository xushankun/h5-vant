/**
 * Created by shankun on 2019/5/29.
 */
import { request } from './config'
// import store from "../store/store";

export default {
    // 登录
    login: obj => request('/accesstoken', "post", obj),
    // 获取用户详情
    getUserData: obj => request('/user/'+ obj.userName, "get", obj),
    // ----------------------------------问答-----------------------------------
    // 问答列表
    qaList:obj => request('/lr-api/app/question/pageList', "get", obj)
}

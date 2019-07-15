/**
 * Created by shankun on 2019/5/29.
 */
import { request } from './config'
// import store from "../store/store";

export default {
    // 登录
    login: obj => request('/lr-api/sys/login', "post", obj),
    // ----------------------------------问答-----------------------------------
    // 问答列表
    qaList:obj => request('/lr-api/app/question/pageList', "get", obj)
}

import * as types from '../types'
import { config } from '../../lib/config'

const state = {
    isLogin: false,
    loginData: {},
    code:''
};
const mutations = {
    [types.SET_LOGIN_STATUS](state, res) {
        state.isLogin = res
    },
    [types.SET_LOGIN_INFO](state, res) {
        state.loginData = res
    },
    [types.SET_WX_CODE](state, res) {
        state.code = res
    },
};

const getters = {
    isLogin: state => state.isLogin,
    loginData: state => state.loginData,
    code: state => state.code
};
const actions = {
    signIn({commit},res){
        return new Promise((resolve) => {
            commit(types.SET_LOGIN_STATUS, true);
            commit(types.SET_LOGIN_INFO, res);
            config.headers.token = res.token;
            resolve(res)
        })
    },
    signOut({commit}){
        return new Promise((resolve) => {
            commit(types.SET_LOGIN_STATUS, false);
            commit(types.SET_LOGIN_INFO, {});
            config.headers.token = "";
            resolve()
        })
    },
    setCode({commit},res){
        return new Promise((resolve) => {
            commit(types.SET_WX_CODE, res);
            resolve(res)
        })
    },
};

export default {
    state,
    mutations,
    getters,
    actions
}

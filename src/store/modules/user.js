import * as types from '../types'
import { config } from '../../lib/config'

const state = {
    isLogin: JSON.parse(localStorage.getItem('isLogin')) || false,
    loginData: JSON.parse(localStorage.getItem('loginData')) || {}
};
const mutations = {
    [types.SET_LOGIN_STATUS](state, res) {
        state.isLogin = res
    },
    [types.SET_LOGIN_INFO](state, res) {
        state.loginData = res
    }
};

const getters = {
    isLogin: state => state.isLogin,
    loginData: state => state.loginData
};
const actions = {
    signIn({commit},res){
        return new Promise((resolve) => {
            commit(types.SET_LOGIN_STATUS, true);
            commit(types.SET_LOGIN_INFO, res);
            config.headers.token = res.token;
            localStorage.setItem('isLogin',true);
            localStorage.setItem('loginData',JSON.stringify(res));
            resolve(res)
        })
    },
    signOut({commit}){
        return new Promise((resolve) => {
            commit(types.SET_LOGIN_STATUS, false);
            commit(types.SET_LOGIN_INFO, {});
            config.headers.token = "";
            localStorage.removeItem('isLogin');
            localStorage.removeItem('loginData');
            resolve()
        })
    }
};

export default {
    state,
    mutations,
    getters,
    actions
}

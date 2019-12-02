import * as types from '../types'

const state = {
    isLogin: false,
    loginData: {},
    token:''
};
const mutations = {
    [types.SET_LOGIN_STATUS](state, res) {
        state.isLogin = res
    },
    [types.SET_LOGIN_INFO](state, res) {
        state.loginData = res
    },
    [types.SET_TOKEN](state, res) {
        state.token = res
    },
};

const getters = {
    isLogin: state => state.isLogin,
    loginData: state => state.loginData,
    token: state => state.token
};
const actions = {
    signIn({commit},res){
        return new Promise((resolve) => {
            commit(types.SET_LOGIN_STATUS, true);
            commit(types.SET_LOGIN_INFO, res);
            commit(types.SET_TOKEN, res.loginname);
            resolve(res)
        })
    },
    signOut({commit}){
        return new Promise((resolve) => {
            commit(types.SET_LOGIN_STATUS, false);
            commit(types.SET_LOGIN_INFO, {});
            commit(types.SET_TOKEN, '');
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

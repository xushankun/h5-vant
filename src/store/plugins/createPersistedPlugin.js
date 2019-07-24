export default function createPersistedPlugin(options = { key: 'store' }) {
    return store => {
        // -----------------------------当store初始化后调用-------------------------
        // 1. 判断`sessionStorage`中是否有`Vuex`快照
        let sessionStore = JSON.parse(sessionStorage.getItem(options.key))
        // 若无，则使用初始值, 否则使用快照的值
        sessionStore && store.replaceState(sessionStore)
        // 临时工，用完就解雇了～
        sessionStore = null
        // 2. 监听`Vuex`中`mutation`的变化
        store.subscribe((mutation, state) => {
            // ------------------------每次 mutation 之后调用------------------------
            // 3. 动态存储`Vuex`快照至`sessionStorage`中
            sessionStorage.setItem(options.key, JSON.stringify(state))
        })
    }
}

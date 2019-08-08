import Qs from 'qs'
import store from "../store";
const _initObj = {
    appid:'wx7954ab5eeaa9064b',
    redirect_uri: 'https://xu.shankun.top/wx-web',
    response_type:'code',
    scope:'snsapi_userinfo',
    state:'STATE'
}
let _url = `https://open.weixin.qq.com/connect/oauth2/authorize?${Qs.stringify(_initObj)}#wechat_redirect`
let getWxCode = ()=>{
    if(!store.state.user.code){
        // 如果不存在code 则去重定向微信url
        window.location.href = _url;
        //此code只能从window.location.href里获取
        let _search = window.location.href.split("?")[1]
        if(_search) {
            _search = Qs.parse(_search);
            if(_search.code) {
                // 1.拿到code
                console.log('code:', _search.code)
                // 不一定非要存store的存储code【等我们用完再丢掉】
                store.dispatch('setCode',_search.code)
                // 2.下面继续获取openid等

            }
        }
    }
}

export {
    _url,
    getWxCode
}

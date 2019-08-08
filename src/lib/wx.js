
import Qs from 'qs'
const _initObj = {
    appid:'wx7954ab5eeaa9064b',
    // redirect_uri: encodeURIComponent('https://xu.shankun.top/wx-web'),
    redirect_uri: 'https://xu.shankun.top/wx-web/#login',
    response_type:'code',
    scope:'snsapi_userinfo',
    state:'STATE'
}
console.log(_initObj)
const _url = `https://open.weixin.qq.com/connect/oauth2/authorize?${Qs.stringify(_initObj)}#wechat_redirect`
console.log(_url)
export default _url

// 获取当前时间戳
function _now() {
    return +new Date()
}

export default {
    // util.formatDate(new Date(item.xxxx.replace(/-/g, '/')), 'yyyy-MM-dd hh:mm');
    formatDate:(_date, fmt)=>{
        var o = {
            "M+": _date.getMonth() + 1,
            "d+": _date.getDate(),
            "h+": _date.getHours(),
            "m+": _date.getMinutes(),
            "s+": _date.getSeconds(),
            "q+": Math.floor((_date.getMonth() + 3) / 3), //季度
            "S": _date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (_date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    },
    // ----------------------------防抖----------------------------------
    /**
     * 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
     *
     * @param  {function} func        回调函数
     * @param  {number}   wait        表示时间窗口的间隔
     * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
     * @return {function}             返回客户调用函数
     */
    // immediate = true;   适合点赞或收藏时的立即执行
    // immediate = false;  适合搜索时,输入结束时调用搜索
    debounce:(func, wait = 50, immediate = true)=> {
        let timer, context, args

        // 延迟执行函数
        const later = () => setTimeout(() => {
            // 延迟函数执行完毕，清空缓存的定时器序号
            timer = null
            // 延迟执行的情况下，函数会在延迟函数中执行
            // 使用到之前缓存的参数和上下文
            if (!immediate) {
                func.apply(context, args)
                context = args = null
            }
        }, wait)

        // 这里返回的函数是每次实际调用的函数
        return function (...params) {
            // 如果没有创建延迟执行函数（later），就创建一个
            if (!timer) {
                timer = later()
                // 如果是立即执行，调用函数
                // 否则缓存参数和调用上下文
                if (immediate) {
                    func.apply(this, params)
                } else {
                    context = this
                    args = params
                }
                // 如果已有延迟执行函数（later），调用的时候清除原来的并重新设定一个
                // 这样做延迟函数会重新计时
            } else {
                clearTimeout(timer)
                timer = later()
            }
        }
    },
    // ------------------------------------------节流----------------------------------------

    /**
     * @param  {function}   func      回调函数
     * @param  {number}     wait      表示时间窗口的间隔
     * @param  {object}     options   如果想忽略开始函数的的调用，传入{leading: false}。
     *                                如果想忽略结尾函数的调用，传入{trailing: false}
     *                                两者不能共存，否则函数不能执行
     * @return {function}             返回客户调用函数
     */
    throttle:(func, wait, options)=>{
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) options = {};
        var later = function () {
            previous = options.leading === false ? 0 : _now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function () {
            var now = _now();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    },

    // -------------------------------------------客服---------------------------------------
    initCs:(w, d, e, x)=>{
        w[e] = function () {
            w.cbk = w.cbk || []
            w.cbk.push(arguments);
        }
        x = d.createElement('script');
        x.async = true;
        x.id = 'zhichiScript';
        x.className = 'zcBtn',  //该class可自行设置，只需要在使用的自定义入口上同名即可
            x.src = 'https://chat.sobot.com/chat/frame/v2/entrance.js?sysnum=c3c30a2efc154d7f9aec7bbcff3bfafc';
        d.body.appendChild(x);
        window[e]('config', {
            //设置自定义按钮生效
            custom: true,
            color:'009bff',
            title:'欢迎咨询',
            type:2,     // 仅人工客服
            msg_flag: 0,  //结束会话后是否显示留言入口  1关闭，0开启
            // leave_msg_flag: 1,  // 控制面板中的留言按钮  1开启， 0关闭
            // photo_flag:1,  // 上传附件按钮  1开启， 0关闭
            powered:false,  // 是否显示智齿标识
            size:{
                'width':640,
                'height':720
            },



            // 客户信息对接

        })
    }
}

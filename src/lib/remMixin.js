// 不需要rem的组件的操作
let remMixin = {
    data(){
        return {
            remHtmlFontSize: 0,
            flagFontSize: 37.5
        }
    },
    mounted(){
        this.remHtmlFontSize = document.getElementsByTagName('html')[0].style['font-size']
        document.getElementsByTagName('html')[0].style['font-size'] = this.flagFontSize + 'px'
    },
    destroyed(){
        document.getElementsByTagName('html')[0].style['font-size'] = this.remHtmlFontSize
    },
}
export default remMixin

<template>
    <div class="mine">
        <div>当前状态：{{isLogin ? '已登录' : '未登录'}}</div>
        <div class="signOut-block">
            <van-button type="primary" round size="normal"
                        class="lr-btn"
                        @click="signOutF">退出</van-button>
        </div>
        <div class="mt10">
            <img :src="loginData.avatar_url">
            <div>用户名：{{loginData.loginname}}</div>
            <div>创建时间：{{loginData.create_at}}</div>
        </div>
        <div class="signOut-block">
            <van-button type="primary" round size="normal" class="lr-btn" @click="$router.push('/cropper')">上传图片并裁剪</van-button>
        </div>
        <div class="signOut-block">
            <van-button type="primary" round size="normal" class="lr-btn" @click="$router.push('/pdf')">PDF-demo</van-button>
        </div>
        <div class="signOut-block">
            <van-button type="primary" round size="normal" class="lr-btn" @click="$router.push('/sign')">签字板</van-button>
        </div>
        <div class="signOut-block">
            <span> 弹出数字键盘，只能输入数字</span>
            <van-field type="number" pattern="[0-9]*" @input="onInput($event.target.value)" v-model="number" />
        </div>
        <!--        <div class="signOut-block">-->
<!--            <van-button type="primary" round size="normal" class="lr-btn" @click="$router.push('/sign')">canvas画板</van-button>-->
<!--        </div>-->
        <div class="signOut-block">
            <span>css图形绘画插件</span>
            <van-button type="primary" round size="normal" class="lr-btn" @click="$router.push('/doodle')">css-doodle</van-button>
        </div>
<!--        记得在App.vue里使用navigation组件-->
<!--        <div class="signOut-block">-->
<!--            <span>前进刷新，后退缓存</span>-->
<!--            <van-button type="primary" round size="normal" class="lr-btn" @click="$router.push('/list')">vue-navigation</van-button>-->
<!--        </div>-->
        <a href="javascript:void(0)" class="px-drop-down" @blur="isShow = false">
            <span @click.self="isShow = !isShow">菜单【.px- 开头的class 不转换rem】</span>
            <div v-if="isShow">子菜单</div>
        </a>
        <div class="signOut-block">
            <van-button type="primary" round size="normal" class="lr-btn" @click="$router.push('/camera')">摄像拍照</van-button>
        </div>
        <div class="signOut-block">
            <van-button type="primary" round size="normal" class="lr-btn" @click="$router.push('/camera2')">直接调用相机拍照</van-button>
        </div>
      <div class="signOut-block">
        <van-button type="primary" round size="normal" class="lr-btn" @click="$router.push('/card')">卡片滑动</van-button>
      </div>

        <div class="signOut-block">
            1.当然这种方式使用比较简单的事件埋点。复杂的话还是需要 JS 操作。<br>
            2.JS 埋点统计用户可以通过浏览器禁用，CSS的话没办法禁用
            <van-button type="primary" class="lr-btn test-btn">css埋点</van-button>
        </div>
        <div class="signOut-block">
            <van-button type="primary" round size="normal" class="lr-btn" @click="$router.push('/vueIntersect')">元素与可视区域的交叉</van-button>
        </div>

      <div>
<!--        this.$tipBlock.open()-->
        <van-button type="primary" round size="normal" class="lr-btn" @click="openTipBlock">打开tipBlock</van-button>
      </div>
      <div class="signOut-block">
        1.可通过js主动调用组件<br>
        2.body外层插入组件
        <van-button type="primary" class="lr-btn test-btn" @click="openTipBlock">打开tipBlock</van-button>
      </div>

      <!--js判断是否超出省略号-->
      <div class="signOut-block">
        <div style="width: 300px;">
          <textEllipsis teText="1.js判断是否超出省略号" :textClass="{
            width: '300px',
            color: 'red'
          }"></textEllipsis>
        </div>
        <div style="width: 300px;">
          <textEllipsis teText="2.超出范围就省略Hover提示全部" :hoverClass="{
          color: '#fff',
          background: 'rgba(0,0,0,.7)'
        }"></textEllipsis>
        </div>
        <div style="width: 300px;">
          <textEllipsis teText="3.不省略不提示"></textEllipsis>
        </div>
        <div style="width: 300px;">
          <textEllipsis teText="4.超出范围就省略Hover提示全部"></textEllipsis>
        </div>
      </div>

<!--        <div class="signOut-block">-->
<!--            <van-button type="primary" round size="normal" class="lr-btn" @click="backMp">返回小程序</van-button>-->
<!--        </div>-->

    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import textEllipsis from '../../components/textEllipsis/index.vue';
    export default {
        name: "mine",
        data(){
            return {
                number:null,
                userData:{},
                isShow:false
            }
        },
      components:{
        textEllipsis
      },
      methods:{
            ...mapActions(["signOut"]),
            openTipBlock(){
                this.$tipBlock.show()
            },
            signOutF(){
                this.signOut().then(()=>{
                    this.$toast('已退出')
                    this.$router.push("/login");
                })
            },
            // javascript
            // wx.miniProgram.navigateTo({url: '/path/to/page'})
            // wx.miniProgram.postMessage({ data: 'foo' })
            // wx.miniProgram.postMessage({ data: {foo: 'bar'} })
            // wx.miniProgram.getEnv(function(res) { console.log(res.miniprogram) })
            backMp(){
                // 返回小程序
                wx.miniProgram.navigateBack({
                    delta: 1
                })
            }
        },
        computed: {
            ...mapGetters(["isLogin","loginData"])
        }
    }
</script>

<style lang="less" scoped>
.mine {
    padding: 30px;
    box-sizing: border-box;
    .signOut-block {
        margin-top: 10px;
        .lr-btn {
            width: 100%;
        }
    }
    .px-drop-down {
        font-size: 14px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        color: #333;
        & > div {
            padding: 10px;
            background: rgba(0,0,0,.6);
            color: #fff;
        }
    }
    .test-btn:active::after {
        content: url("https://shankun.top");
        display: none;
    }
}
</style>

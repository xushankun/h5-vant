<template>
<div>
  原密码：<input type="text" v-model="pass"><br>
  加密后的密码：{{encryptedPass}}
</div>
</template>

<script>
let Base64 = require('js-base64').Base64
import JSEncrypt from 'jsencrypt'
export default {
  name: 'JsEncrypt',
  data(){
    return{
      pass:'91310107631581307F',
      encryptedPass:''
    }
  },
  mounted() {
    this.encryptedPass = this.getRSApass(this.pass)
    console.log(this.encryptedPass)
  },
  methods:{
    getRSApass (password) {
      // debugger;
      let jse = new JSEncrypt()
      // 公钥
      let PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDUkCqtVWcR/u9/Vj85/zNxd8uv+otdX3bVCOmKqgq1uKLbiNxJ4wNtHQrAqd9w/eSUvAgmdQhA2AwOtc0Bou4y+zrTXJKw1oXoCo/FqCl3as7XPUcCEDAAEEBFjHLgBzGT2bYNNJdxc4BJpA7rgEjAiJo2hSHaiAC8W2pTwxZeoQIDAQAB'
      // 1.先base64编码
      password = Base64.encode(password)
      // 2.加密内容
      jse.setPublicKey(PUBLIC_KEY)
      let _encrypted = jse.encrypt(password)
      console.log(_encrypted)
      // 3.base64解码
      return Base64.decode(_encrypted)
    }
  },
  watch:{
    'pass':function(newVal) {
      this.encryptedPass = this.getRSApass(newVal)
    }
  }
}
</script>

<style lang="less" scoped>

</style>

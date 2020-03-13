<template>
    <!--
         accept="image/*" 规定上传文件的类型，只支持图片
         capture="camera" 打开系统照相机进行拍照，触发
         onchange事件
         至于input是否好看，自己百度看如何美化...
       -->
    <div class="input-camera">
        <div class="home">
            <img alt="Vue logo" src="@/assets/logo.png"/>
            <input ref="photoref" type="file" accept="image/*" @change="Photograph()" capture="camera"/>
            <p>{{ fileName }}</p>
        </div>
        <div class="preview">
            <img :src="base64ImgData" alt=""/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "inputCamera",
        data(){
            return {
                fileName: '点击Vue拍照',
                base64ImgData: null
            }
        },
        methods:{
            /**
             * 获取用户拍照的图片信息
             */
            async Photograph () {
                // 获取用户拍照的图片名字，显示到页面上
                this.fileName = this.$refs.photoref.files[0].name
                // 获取图片base64 代码，并存放到 base64ImgData 中
                this.base64ImgData = await this.FileReader(this.$refs.photoref.files[0])
            },
            /**
             * 返回用户拍照图片的base64
             */
            FileReader (FileInfo) {
                // FileReader 方法参考地址：https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader
                let reader = new FileReader()
                // readAsDataURL 方法参考地址：https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/readAsDataURL
                reader.readAsDataURL(FileInfo)
                // 监听读取操作结束
                /* eslint-disable */
                return new Promise(resolve => reader.onloadend = () => resolve(reader.result))
            }
        }
    }
</script>

<style lang="less" scoped>
    .input-camera {
        .home {
            width: 200px;
            margin: 0 auto;
            position: relative;
            input[type="file"] {
                position: absolute;
                left: 0;
                top: 0;
                width: 200px;
                height: 200px;
                z-index: 9;
                opacity: 0;
            }
            p {
                font-size: 13px;
                color: #8d8d8d;
            }
        }
        .preview img {
            width: 100%;
        }
    }

</style>

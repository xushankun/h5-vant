<template>
    <!--
         accept="image/*" 规定上传文件的类型，只支持图片
         capture="camera" 打开系统照相机进行拍照，触发
         onchange事件
         至于input是否好看，自己百度看如何美化...
       -->
    <div class="input-camera">
        <div class="btn-block">
            <div class="btn-box">
                <input ref="photoFront" type="file" accept="image/*" @change="Photograph('photoFront')" capture="user"/>
                <van-button type="primary">前置【拍照】</van-button>
            </div>
            <div class="btn-box">
                <input ref="photorefEnd" type="file" accept="image/*" @change="Photograph('photorefEnd')" capture="camera"/>
                <van-button type="primary">后置【拍照】</van-button>
            </div>
        </div>
        <div class="btn-block">
            <div class="btn-box">
                <input ref="photoFront1" type="file" accept="video/*" @change="Photograph('photoFront1')" capture="user"/>
                <van-button type="primary">前置【摄像】</van-button>
            </div>
            <div class="btn-box">
                <input ref="photorefEnd1" type="file" accept="video/*" @change="Photograph('photorefEnd1')" capture="camera"/>
                <van-button type="primary">后置【摄像】</van-button>
            </div>
        </div>
        <div class="btn-block">
            <div class="btn-box">
                <input ref="photoFront2" type="file" accept="image/*,video/*" @change="Photograph('photoFront2')" capture="user"/>
                <van-button type="primary">前置【拍照/摄像】</van-button>
            </div>
            <div class="btn-box">
                <input ref="photorefEnd2" type="file" accept="image/*,video/*" @change="Photograph('photorefEnd2')" capture="camera"/>
                <van-button type="primary">后置【拍照/摄像】</van-button>
            </div>
        </div>
        <div class="preview">
            <p v-if="fileName">fileName:{{ fileName }}</p>
            <img :src="base64ImgData" alt=""/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "inputCamera",
        data(){
            return {
                fileName: '',
                base64ImgData: null
            }
        },
        methods:{
            /**
             * 获取用户拍照的图片信息
             */
            async Photograph (refName) {
                // 获取用户拍照的图片名字，显示到页面上
                this.fileName = this.$refs[refName].files[0].name
                // 获取图片base64 代码，并存放到 base64ImgData 中
                this.base64ImgData = await this.FileReader(this.$refs[refName].files[0])
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
        padding: 0 15px;
        box-sizing: border-box;
        .btn-block {
            display: flex;
            align-items: center;
            padding: 10px 0;
            .btn-box {
                position: relative;
                margin-right: 20px;
                input[type="file"] {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 9;
                    opacity: 0;
                }
                p {
                    font-size: 14px;
                    color: #333;
                    height: 44px;
                    display: flex;
                    align-items: center;
                }
            }
        }

        .preview {
            p {
                margin-bottom:20px ;
            }
            img {
                width: 100%;
            }
        }
    }

</style>

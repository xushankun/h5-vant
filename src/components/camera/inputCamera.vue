<template>
<!--    文档：http://h5apk.cn/input-capture.php-->
<!--    x5内核和iOS系统相对来说比较遵守HTML5官方规范，安卓的webview基本忽略了capture。-->
<!--    理想情况下应该按照如下开发webview：-->
<!--    1. 当accept="image/*"时，capture="user"调用前置照相机，capture="其他值"，调用后置照相机-->
<!--    2. 当accept="video/*"时，capture="user"调用前置录像机，capture="其他值"，调用后置录像机-->
<!--    3. 当accept="image/*,video/*"，capture="user"调用前置摄像头，capture="其他值"，调用后置摄像头，默认照相，可切换录像-->
<!--    4. 当accept="audio/*"时，capture="放空或者任意值"，调用录音机-->
<!--    5. 当input没有capture时，根据accppt类型给出文件夹选项以及摄像头或者录音机选项-->
<!--    6. input含有multiple时访问文件夹可勾选多文件，调用系统摄像头或者录音机都只是单文件-->
<!--    7. 无multiple时都只能单文件-->
<!--    但是由于谷歌安卓系统的webview只能判断有无capture，无法获取capture的值，因此h5apk.cn只能在判断有capture时直接调用照相机，以做到最大程度的兼容。-->
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
        <div class="btn-block">
            <div class="btn-box">
                <input ref="photoFront3" type="file" accept="audio/*" @change="Photograph('photoFront3')" capture=""/>
                <van-button type="primary">调用录音机</van-button>
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

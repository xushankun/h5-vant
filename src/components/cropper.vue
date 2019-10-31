<template>
    <div class="cropper-wrap">
        <van-uploader class="lr-upload-btn" v-model="fileList" :after-read="onRead">
            <div class="lr-upload">
                <span>选择图片</span>
            </div>
        </van-uploader>
        <cropper classname="cropper"
                 ref="cropper"
                 :src="img"
                 :stencil-props="{aspectRatio: 10/10}"
                 @change="change"
        ></cropper>
        <van-button class="c-btn" type="primary"  size="normal" @click="submit()">提交</van-button>
    </div>
</template>

<script>
    import { Cropper } from 'vue-advanced-cropper'
    export default {
        name: "imgCropper",
        data(){
            return {
                fileList:[],
                img: '',
                fileName:'',
                currFile: {}
            }
        },
        components: {
            Cropper
        },
        mounted(){
            this.$refs.cropper.setCoordinates((coordinates, imageSize) => ({
                width: imageSize.width,
                height: imageSize.width,
                left:0,
                top:0
            }))
        },
        methods:{
            // todo:选择图片
            onRead(file) {
                this.img = file.content
                this.fileName = file.file.name
                this.currFile = file
                if(this.fileList.length > 1){
                    this.fileList = [this.fileList.pop()]
                }
            },
            // todo:裁剪图片
            change({coordinates, canvas}) {
                if(canvas) {
                    this.fileList[0].content = canvas.toDataURL()
                    // 讲截图设为file
                    this.currFile.content = canvas.toDataURL()
                    this.currFile.file = this.dataURLtoFile(canvas.toDataURL(),this.fileName.split('.')[0])
                }
            },
            // todo:提交图片
            submit(){
                if(!this.fileList.length){
                    this.$toast('未选择图片，不能提交')
                    return
                }
                console.log('currFile:',this.currFile)
                this.$toast(this.currFile.file.name)
                let fd = new FormData()
                fd.append('file', this.currFile.file)
                // fd 在这里作为数据提交后台
                console.log('FormData:',fd)
            },
            // ------------------------Other-----------------------------
            // 将base64转换成file对象
            dataURLtoFile (dataurl, filename = 'file') {
                let arr = dataurl.split(',')
                let mime = arr[0].match(/:(.*?);/)[1]
                let suffix = mime.split('/')[1]     // 图片格式
                let bstr = atob(arr[1])
                let n = bstr.length
                let u8arr = new Uint8Array(n)
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n)
                }
                return new File([u8arr], `${filename}.${suffix}`, {type: mime})
            }
        }
    }
</script>
<style lang="less">
    .cropper-wrap {
        .van-uploader__preview {
            .van-icon.van-icon-delete.van-uploader__preview-delete {
                display: none;
            }
        }
    }
</style>
<style lang="less" scoped>
    .cropper-wrap {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: #fff;
        z-index: 999;
        .lr-upload-btn .van-uploader__input-wrapper {
            width: 80px;
            height: 80px;
            border: 1px dotted #ddd;
            .lr-upload {
                width: 80px;
                height: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 10px;
                color: #bbb;
                background: #eee;
                .iconfont {
                    font-size: 20px;
                    color: #999;
                }
            }
        }
        .cropper {
            width: 100%;
            height: 70vh;
            background: #ddd;
            box-sizing: border-box;
        }
        .c-btn {
            display: block;
            width: calc(100% - 30px);
            margin: 20px auto 0 auto;
        }
    }
</style>

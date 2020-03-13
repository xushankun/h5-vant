<template>
    <div class="camera-wrap">
        <video id="video" autoplay style="width: 480px;height: 320px;"></video>
        <div><van-button type="primary" @click="photograph">拍照</van-button></div>
        <canvas id="canvas" width="480" height="320"></canvas>
    </div>
</template>

<script>
    export default {
        name: "camera",
        data(){
            return {
                video:null,
                canvas:null,
                context:null,
                constraints:{
                    video: true,
                    audio: true
                }
            }
        },
        mounted() {
            this.video = document.getElementById('video')     //video元素
            this.canvas = document.getElementById('canvas')   //canvas元素
            this.context =  this.canvas.getContext('2d')

            this.init()
        },
        methods:{
            init(){
                if(navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia){
                    //调用用户媒体设备，访问摄像头
                    console.log('调用用户媒体设备，访问摄像头')
                    this.getUserMedia(this.constraints,this.success,this.error)
                }else{
                    alert('你的浏览器不支持访问用户媒体设备')
                }
            },
            //绑定拍照按钮的单击事件
            photograph(){
                this.context.drawImage(this.video,0,0,480,320)
            },
            //成功的回调函数
            success(stream){
                //兼容的webkit核心浏览器
                var CompatibleUrl = window.URL || window.webkitURL
                //将视频流内容设置为video元素的源(注意：此处因为使用的是比较新的浏览器，必须直接设置，否则报错)
                //如果使用的不是较新的浏览器，可以这样设置：video.src = CompatibleUrl.createObjectURL(stream)
                this.video.srcObject = stream
                this.video.play()
            },
            //异常的回调函数
            error(error){
                console.log('访问媒体设备失败',error.name,error.message);
            },
            // 访问用户媒体设备的兼容方法
            getUserMedia(constrains,success,error){
                if(navigator.mediaDevices.getUserMedia){
                    navigator.mediaDevices.getUserMedia(constrains).then(success).catch(error)
                }else if(navigator.webkitGetUserMedia){
                    navigator.webkitGetUserMedia(constrains,success,error)
                }else if(navigator.mozGetUserMedia){
                    navigator.mozGetUserMedia(constrains,success,error)
                }else if(navigator.getUserMedia){
                    navigator.getUserMedia(constrains,success,error)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
.camera-wrap {

}
</style>

<template>
    <canvas ref="canvas"></canvas>
</template>
<script>
import Bg from "../../static/bg.jpg"
import {imgToBase64} from "../api/index"

export default {
    computed: {
        canvas(){
            return this.$refs.canvas
        },
        context(){
            return this.$refs.canvas.getContext('2d')
        }
    },
    methods: {
        async loadImg(src){
            return new Promise((resolve,reject)=>{
                let img = new Image()
                img.src = src
                img.onload = ()=>{
                    resolve(img)
                }
                img.onerror = ()=>{
                    reject()
                }
            })
        }
    },
    async mounted() {
        let {canvas,context} = this;
        let img = await this.loadImg(Bg);
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img,0,0,img.width,img.height,0,0,img.width,img.height)
        

        //绘制头像
        const avatarUrl = "http://avatars1.githubusercontent.com/u/8192412?s=460&v=4"

        const response = await imgToBase64(avatarUrl)
        console.log(response)
        
        let avatar = await this.loadImg(avatarUrl)
        //绘制圆
        context.save()
        context.arc(140,792,36,0,360)
        context.clip()
        context.drawImage(avatar,0,0,avatar.width,avatar.height,97,754,80,80)

        //绘制圆形边框
        context.beginPath()
        context.lineWidth = 7
        context.strokeStyle = "#8db287"
        context.arc(140,792,36,0,360,false)
        context.stroke()
        context.closePath()

        //绘制姓名
        context.restore()
        context.font = '26px 微软雅黑'
        context.fillStyle = '#1b540d'
        let text = context.measureText('Lttian')
        context.fillText('Lttian',140-text.width/2,860)

        //生成图片
        let base64 = canvas.toDataURL('image/jpeg')


    }
}
</script>
<style>
canvas{
    width: 100%;
}
</style>
<template>
    <div class="nav">
        <dl v-for="(val,index) in navList" :key="index" @click="change(val)">
            <dt>
                <img v-if="val.src" :src="val.src" alt="">
                <img v-else src="../../static/image/12_05.gif" alt="">
            </dt>
            <dd>
                <span>{{val.text}}</span>
            </dd>
        </dl>
        <div class="mock" v-show="mockshow">
            <div class="mockBox">
                <img class="mockImg" :src="current.imgUrl" alt="">
            </div>
            <ul>
                <li @click="upload(1)">拍照</li>
                <li @click="upload(2)" class="mockactive">相册</li>
                <li @click="cancle">取消</li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'

import {uploadImg} from "../api/index"

export default {
    name:'',
    data(){
        return{
            mockshow:false,
            current:{}
        }
    },
    computed: {
        ...mapState({
            navList: state=>state.upload.navList
        })
    },
    methods: {
        ...mapMutations({
            updateLista: 'upload/updateList'
        }),
        change(val){
            this.current = val
            this.mockshow = !this.mockshow
        },
        cancle(){
            this.mockshow = !this.mockshow
        },
        async upload(type){
            let res = await uploadImg(type);
            let index = this.navList.findIndex(item=>item==this.current);
            console.log('index...', index);
            this.updateLista({
                index,
                src: res.data.url
            })
            this.mockshow = false;
            // console.log('res...',res)
            // uploadImg(type).then(res=>{
            //     if(res.code ==0){
            //         let src="";
            //         if(/picture.eclicks.cn/.test(res.data.image01)){
            //             src = res.data.image01.replace('http://','//');
            //         }else{
            //             src='//picture.eclicks.cn'+res.data.image01;
            //         }
            //         this.updataList({
            //             src,
            //             index:this.list.findIndex(item=>item==this.current)
            //         })
            //     }else{
            //         alert(res.msg)
            //     }
            // })
        }
    },
}
</script>
<style>
    .nav{
        width:100%;
        display: flex;
        background: #fff;
        padding: 10px 0;
        box-sizing: border-box;
    }
    .nav dl{
        width:20%;
        height:100%;
        text-align: center;
        margin-top:10px;
    }
    .nav dl dt{
        width:50px;
        height:40px;
        line-height: 40px;
        margin:0 auto;
    }

    .nav dl dt>img{
        width: 100%;
        height: 100%;
    }
    .nav dl dt span{
        width:30px;
        height:30px;
        line-height: 30px;
        display: inline-block;
        border-radius: 50%;
        border:1px solid #ccc;
        margin: 0 auto;
    }
    .nav dl dd{
        margin-top:5px;
        color:#ababab;
        font-size: 12px;
        padding: 0 20%;
        text-align: center;
    }

    .mock{
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .3);
        position: fixed;
        top:0;
        left:0;
        z-index: 123;
    }

    .mock>ul{
        width: 100%;
        background: #fff;
        margin:0 auto;
        position: absolute;
        bottom: 0px;
        left:0;
    }

    .mock>ul>li{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        color: #888;
        border-bottom: 1px solid #eee;
    }

    .mockactive{
        border-bottom: 10px solid #eee!important;
    }

    .mockBox{
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 10px;
        overflow: hidden;
    }
    
    .mockImg{
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
    }
</style>

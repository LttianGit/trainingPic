<template>
    <div class="tit">
        <div class="top1">
            <ul>
                <li>
                    <span class="span1">服务类型</span>
                    <span @click="changeDirve">{{form.type}}<b style="color:#888;padding-left:10px;">&gt;</b></span>
                </li>
                <li>
                    <span class="span1">当前驾照签发城市<i class="help"  @click="helpMock(1)">?</i></span>
                    <span class="span2" @click="chooseLssue">{{cityForm.choose}}</span>
                </li>
                <li>
                    <span class="span1">可补换的签发城市<i class="help" @click="helpMock(2)">?</i></span>
                    <span class="span2">请选择补换地</span>
                </li>
                <li>
                    <span class="span1">服务费</span>
                    <span class="span3">￥{{price}}</span>
                </li>
            </ul>
            <section>
                <van-popup v-model="show" overlay>
                    <van-picker :columns="serviceType" show-toolbar title="服务类型"  @cancel="onCancel"
                    @confirm="onConfirm"/>
                </van-popup>
            </section>
            <section>
                <van-popup v-model="lssueShow" position="bottom" overlay>
                    <van-picker :columns="cityArr" show-toolbar title="选择签发地"  @cancel="lssuwShowonCancel"
                    @confirm="lssuwShowonConfirm"/>
                </van-popup>
            </section>
            <HelpMock :flag="flag" :num="num" v-on:colseFlag="colseFlag"></HelpMock>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import HelpMock from "./helpMock"

export default {
    name:'',
    data(){
        return{
            price:399,
            show:false,
            serviceType:["换驾照","补驾照"],
            form:{
                type:'换驾照'
            },
            flag:false,
            num:1,
            lssueShow:false,
            cityList:[],
            cityArr:[],
            cityForm:{
                choose:"请选择签发地"
            }
        }
    },
    components:{
        HelpMock
    },
    created() {
        this.$emit('sendPrice',this.price)
    },
    methods: {
        changeDirve(){
            this.show = !this.show
        },
        onCancel(){
            this.show = !this.show
        },
        onConfirm(value){
            this.form.type = value
            this.onCancel()
        },
        helpMock(num){
            this.num = num;
            this.flag = !this.flag
        },
        colseFlag(){
            this.flag = false
        },
        chooseLssue(){
            this.lssueShow = !this.lssueShow
            axios.get('/api/ExchangeJiaZhao/cityList').then(res=>{
                this.cityList = res.data.data;
                this.cityList.map(val=>{
                    this.cityArr.push(val.name)
                })
            })
        },
        lssuwShowonCancel(){
            this.lssueShow = !this.lssueShow
        },
        lssuwShowonConfirm(value){
            this.cityForm.choose = value
            this.lssuwShowonCancel()
        }
    },
    mounted() {
        // .then(this.handleResponse)
        // .then(data => console.log(data))
        // .then(error => console.log(error))

        // function handleResponse (response) {
        //     let contentType = response.headers.get('content-type')
        //     if (contentType.includes('application/json')) {
        //         return handleJSONResponse(response)
        //     } else if (contentType.includes('text/html')) {
        //         return handleTextResponse(response)
        //     } else {
        //         // Other response types as necessary. I haven't found a need for them yet though.
        //         throw new Error(`Sorry, content-type ${contentType} not supported`)
        //     }
        // }
    },
}
</script>
<style>
.van-popup--bottom{
    width: 100%!important;
    border-radius:0!important;
}    

.van-picker__columns{
    height: 150px!important;
}

section{
    width: 100%;
}

.help{
    padding: 0px 6px;
    font-size: 12px;
    font-style: normal;
    background: #999;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    margin-left: 6px;
}

.van-popup{
    width: 50%;
    border-radius: 10px;
}

.van-ellipsis{
    justify-content: space-around!important;
}

.tit{                                                                                       
    width:100%;
    height:auto;
    background:#fff;
    border-bottom: 10px solid #eee;
}
.top1{
    width:100%;
    margin-top:10px;
}
.top1 ul{
    width:100%;
    height:100%;
}
.top1 ul li{
    width:100%;
    height:50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
}
.top1 ul li span{
    padding:0 8px;
}
.span1{
    color:#505155;
    font-size: 17px;
}
.span2{
    color:#b6b6b6;
}
.span3{
    color:#ff3c36;
}

.span5{
    color:#afb0b5;
}
</style>

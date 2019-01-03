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
                    <span class="span2" @click="chooseLssue"><span v-if="city.length">{{city.join(' ')}}</span><span v-else>请选择签发城市</span></span>
                </li>
                <li>
                    <span class="span1">可补换的签发城市<i class="help" @click="helpMock(2)">?</i></span>
                    <span class="span2" @click="costclick">请选择补换地</span>
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
                <van-popup v-model="lssueShow" position="bottom">
                    <van-picker :columns="cityColumns" show-toolbar title="选择签发地"  @cancel="lssuwShowonCancel"
                    @confirm="lssuwShowonConfirm" @change="cityChange" ref="cityPicker" />
                </van-popup>
            </section>
            <HelpMock :flag="flag" :num="num" v-on:colseFlag="colseFlag"></HelpMock>
        </div>
    </div>
</template>
<script>
import HelpMock from "./helpMock"
import {mapState,mapMutations,mapActions} from "vuex"
import {cityList,costList} from "../api/index"

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
            costShow:false,
            cityColumns:[],
            costList:[],
            cityForm:{
                choose:"请选择签发地"
            }
        }
    },
    created(){
        this.getCityList().then(res=>{
            this.cityColumns = [
                {
                    values:this.cityList.map(item=>item.name)
                },{
                    values:this.cityList[0].list.map(item=>item.name)
                }
            ]
        })
    },
    components:{
        HelpMock
    },
    computed: {
        ...mapState({
            cityList:state=>state.cityPicker.cityList,
            city:state=>state.cityPicker.city
        })
    },
    methods: {
        ...mapActions({
            getCityList:"cityPicker/getCityList",
            getCostList:"cityPicker/getCostList"
        }),
        ...mapMutations({
            updataState:"cityPicker/updataState"
        }),
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
        },
        lssuwShowonCancel(){
            this.lssueShow = !this.lssueShow
        },
        lssuwShowonConfirm(value){
            this.updataState({city:value})
            this.lssuwShowonCancel()
        },
        cityChange(picker,values){
            let index = this.cityList.findIndex(item=>item.name==values[0]);
            // this.cityColumns[1] = {
            //     values:this.cityList[index].list.map(item=>item.name)
            // }
            this.$refs.cityPicker.setColumnValues(1,this.cityList[index].list.map(item=>item.name))
            console.log(picker,values)
        },
        costclick(){
            if(!this.city.length){
                alert('请选择签发城市')
            }else{
                this.getCostList()
                this.lssueShow = !this.lssueShow
            }
        }
    },
    mounted() {
        this.getCityList()
        cityList().then(res=>{
            console.log(res)
        })
    }
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

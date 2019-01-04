<template>
    <div class="tit">
        <div class="top1">
            <ul>
                <LiVue></LiVue>
                <li>
                    <span class="span1">当前驾照签发城市<i class="help"  @click="helpMock(1)">?</i></span>
                    <span class="span2" @click="chooseLssue"><span v-if="city.length">{{city.join(' ')}}</span><span v-else>请选择签发城市</span></span>
                </li>
                <li>
                    <span class="span1">可补换的签发城市<i class="help" @click="helpMock(2)">?</i></span>
                    <span class="span2" @click="costclick"><span v-if="cost.length">{{cost.join(' ')}}</span><span v-else>请选择补换地</span></span>
                </li>
                <li>
                    <span class="span1">服务费</span>
                    <span class="span3">￥{{price}}</span>
                </li>
            </ul>
            <section>
                <van-popup v-model="lssueShow" position="bottom">
                    <van-picker :columns="cityColumns" show-toolbar title="选择签发地"  @cancel="lssuwShowonCancel"
                    @confirm="lssuwShowonConfirm" @change="cityChange" ref="cityPicker" />
                </van-popup>
            </section>
            <section>
                <van-popup v-model="costShow" position="bottom">
                    <van-picker :columns="costColumns" show-toolbar title="选择补发地"  @cancel="costShowCancel"
                    @confirm="costShowConfirm" @change="costChange" ref="costPicker" />
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
import LiVue from "./liVue"

export default {
    name:'',
    data(){
        return{
            price:399,
            flag:false,
            num:1,
            lssueShow:false,
            costShow:false,
            cityColumns:[],
            costColumns:[],
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
        HelpMock,
        LiVue
    },
    computed: {
        ...mapState({
            cityList:state=>state.cityPicker.cityList,
            costList:state=>state.cityPicker.costList,
            city:state=>state.cityPicker.city,
            cost:state=>state.cityPicker.cost
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
                this.getCostList().then(res=>{
                    this.costColumns = [
                        {
                            values:this.costList.map(item=>item.name)
                        },{
                            values:this.costList[0].list.map(item=>item.name)
                        }
                    ]
                    this.price = this.costList[0].list.map(item=>item.cost)[0]
                })
                this.costShow = !this.costShow
                console.log(this.$VueBus)
            }
        },
        costShowCancel(){
            this.costShow = !this.costShow
        },
        costShowConfirm(value){
            this.updataState({cost:value})
            this.costShow = !this.costShow
        },
        costChange(picker,values){
            let index = this.costList.findIndex(item=>item.name==values[0]);
            // this.cityColumns[1] = {
            //     values:this.cityList[index].list.map(item=>item.name)
            // }
            this.$refs.costPicker.setColumnValues(1,this.costList[index].list.map(item=>item.name))
            console.log(picker,values)
        }
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

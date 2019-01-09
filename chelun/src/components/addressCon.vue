<template>
    <div>
        <ol class="addressConWrap">
            <li class="connect border">
                <span>联系省市</span>
                <p>
                    <b>北京</b>
                    <b>北京市</b>
                </p>
            </li>
            <li class="addressDetail border">
                <span>详细地址</span>
                <p>
                    <input type="text">
                </p>
            </li>
            <li class="connectTell border">
                <span>联系电话</span>
                <p>
                    <input type="text" placeholder="请输入联系电话" ref="tell">
                </p>
            </li>
            <li class="connecter border">
                <span>联系人</span>
                <p>
                    <input type="text" placeholder="请输入联系人">
                </p>
            </li>
        </ol>
        <div class="bottom">
            <button @click="sure">
                确认
            </button>
        </div>
        <section>
            <van-popup v-model="lssueShow" position="bottom">
                <van-picker :columns="cityColumns" show-toolbar title="选择签发地"  @cancel="lssuwShowonCancel"
                @confirm="lssuwShowonConfirm" @change="cityChange" ref="cityPicker" />
            </van-popup>
        </section>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from "vuex"
import {cityList,costList} from "../api/index"

export default {
    name:"addressCon",
    data(){
        return{
            lssueShow:false,
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
        sure(){
            let tellValue = this.$refs.tell.value;
            if(!(/^1[34578]\d{9}$/.test(tellValue))){ 
                alert("手机号码有误，请重填");  
                return false; 
            } 
        },
        lssuwShowonCancel(){
            this.lssueShow = !this.lssueShow
        },
        lssuwShowonConfirm(value){
            this.updataState({city:value})
            this.lssuwShowonCancel()
        }, 
    }
}
</script>
<style>
.addressConWrap{
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    color: #666;
}

.addressConWrap>li{
    width: 100%;
    height: 44px;
    line-height: 44px;
    display: flex;
    justify-content: space-between;
}

.border { border-bottom: 1px solid #999 }

@media screen and (-webkit-min-device-pixel-ratio: 2) {
    .border { border-bottom: 0.5px solid #999 }
}
@media screen and (-webkit-min-device-pixel-ratio: 3) {
    .border { border-bottom: 0.333333px solid #999 }
}

.addressConWrap>li>span{
    padding-right: 20px;
    box-sizing: border-box;
}

.addressConWrap>li>p{
    flex: 1;
    text-align: right;
}

.addressConWrap>li>p>input{
    border: none;
    width: 100%;
    text-align: right;
}

.addressConWrap>li>p>b{
    font-weight: 400;
    padding-left: 20px;
    box-sizing: border-box;
}
</style>
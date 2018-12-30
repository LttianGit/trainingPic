<template>
    <div class="dynamicWrap">
        <div class="dynamicTop">
            <p><i class="iconfont icon-bianji1"></i>发动态</p>
            <p><i class="iconfont icon-next"></i>发布视频</p>
        </div>
        <Follow></Follow>
        <Dynamiclist :dynamicdata="dynamicdata"></Dynamiclist>
    </div>
</template>
<script>
import axios from "axios"
import Follow from "../firendCom/follow"
import Dynamiclist from "../firendCom/dynamicList"

export default {
    name:"dynamic",
    data(){
        return{
            dynamicdata:[]
        }
    },
    components:{
        Follow,
        Dynamiclist
    },
    mounted() {
     axios.get('/api/dynamic').then(res=>{
         this.dynamicdata = res.data.data;
     })   
    }
}
</script>
<style>
.dynamicWrap{
    width: 100%;
    flex: 1;
    overflow: auto;
    margin-bottom: 60px;
}

.dynamicTop{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-around;
    background: #33383b;
    color: #fff;
}

.dynamicTop>p{
    width: 50%;
    text-align: center;
    font-weight: 400;
}

.dynamicTop>p>i{
    padding-right: 10px;
    font-size: 22px;
    font-weight: 400;
}

</style>
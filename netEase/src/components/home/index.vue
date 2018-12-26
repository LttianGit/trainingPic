<template>
    <div class="homeWrap">
        <Heads></Heads>
        <div class="titleTab">
            <p class="remmend" v-for="(val,index) in titleTab" @click="pageTab(index)">
                <router-link :to="val.url">
                    <span :class="index==ind?'titleactive':''">{{val.name}}</span>
                </router-link>
            </p>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import Heads from "./homeComp/header.vue"
export default {
    name:"home",
    data(){
        return{
            titleTab:[{
                name:"个性推荐",
                url:"/home/recommend"
            },{
                name:"主播电台",
                url:"/home/anchor"
            }],
            ind:0
        }
    },
    components:{
        Heads
    },
    methods: {
        pageTab(index){
            this.ind = index;
        }
    },
}
</script>
<style scoped>
.homeWrap{
    width: 100%;
    height: 100%;
}

.titleTab{
    width: 100%;
    height: 34px;
    background: #33383b;
    color: #fff;
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
    padding-bottom: 10px;
    box-sizing: border-box;
}

.titleTab>p{
    width: 50%;
    text-align: center;
    font-size: 12px;
}

.titleTab>p>a{
    text-decoration: none;
    color: #fff;
}

.titleTab>p span{
    padding: 4px 0;
}

.titleactive{
    border-bottom: 2px solid #fff;
    border-radius: 4px;
}
</style>
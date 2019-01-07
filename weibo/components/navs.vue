<template>
    <div class="navWrap">
        <ul>
            <li v-for="(val,index) in navList" @click="changeIndex(index)" >
                <span :class="{active:index==ind}">
                    {{val.name}}
                </span>
            </li>
        </ul>
        <span><i class="iconfont icon-xiala" @click="changeList"></i></span>
        <ol class="listMock" :class="{flagOpen:flag}">
            <li v-for="(val,index) in navList" @click="changeIndex(index)" :class="{actives:index==ind}">
                {{val.name}}
            </li>
        </ol>
    </div>  
</template>
<script>
export default {
    name:"navs",
    data(){
        return{
            ind:0,
            navList:[{
                    gid: "102803", 
                    name: "热门"
                },{
                    gid: "102803_ctg1_7978_-_ctg1_7978",
                    name: "新鲜事"
                },{
                    gid: "102803_ctg1_4388_-_ctg1_4388",
                    name: "搞笑"
                },{
                    gid: "102803_ctg1_1988_-_ctg1_1988",
                    name: "情感"
                },{
                    gid: "102803_ctg1_4288_-_ctg1_4288",
                    name: "明星"
                },{
                    gid: "102803_ctg1_4188_-_ctg1_4188",
                    name: "社会"
                },{
                    gid: "102803_ctg1_5088_-_ctg1_5088", 
                    name: "数码"
                },{
                    gid: "102803_ctg1_1388_-_ctg1_1388",
                    name: "体育"
                },{
                    gid: "102803_ctg1_5188_-_ctg1_5188", 
                    name: "汽车"
                },{
                    gid: "102803_ctg1_3288_-_ctg1_3288", 
                    name: "电影"
                },{
                    gid: "102803_ctg1_4888_-_ctg1_4888", 
                    name: "游戏"
                }],
                flag:false
        }
    },
    methods: {
        changeIndex(index){
            this.ind = index
        },
        changeList(){
            this.flag = true
        }
    }
}
</script>
<style>
.navWrap{
    width: 100%;
    height: 44px;
    line-height: 44px;
    display: flex;
    background: #eeecec;
    border-bottom: 1px solid #ccc;
    color: #555;
    position: relative;
}

.navWrap>ul{
    width: 130%;
    display: flex;
    overflow: auto;
}

.navWrap>ul>li{
    padding: 0 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
}

.navWrap>ul>li>span{
    display: inline-block;
    width: 32px;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
}

.navWrap>span{
    padding: 0 20px;
}

.active{
    color: #000;
    border-bottom: 2px solid #000;
}

.actives{
    color: orangered!important;
}

.listMock{
    position: absolute;
    top:44px;
    left:0;
    width: 100%;
    background: #eeecec;
    padding: 10px 0;
    box-sizing: border-box;
    display: none;
    display: flex;
    flex-wrap: wrap;
}

.listMock>li{
    width: 23%;
    background: rgb(212, 207, 207);
    text-align: center;
    margin-left: 7px;
    margin-bottom: 7px;
    color: #000;
    border-radius: 6px;
}

.flagOpen{
    display: block;
}
</style>
<template>
    <div class="nearWrap">
        <div class="near_con" v-for="(val,index) in nearList" :key="index">
            <img :src="val.img" alt="">
            <h4>{{val.title}}</h4>
            <p><i class="iconfont con-dizhi-01"></i>网易云音乐 {{val.distance}}km</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"near",
    data(){
        return{
            nearList:[{
                img:"http://img.zcool.cn/community/0116ad59708a8da8012193a3be96f8.jpg@2o.jpg",
                title:"轻音乐:这么多优质的原创音乐等你来唤醒",
                distance:884
            },{
                img:"http://img.zcool.cn/community/01df3058ff0996a8012145501f1ee4.jpg@2o.jpg",
                title:"向心动的TA告白吧，再不告白就晚了",
                distance:893
            },{
                img:"http://img.zcool.cn/community/01b32657df980a0000018c1b2063dd.jpg",
                title:"空白格",
                distance:701
            },{
                img:"http://img.zcool.cn/community/01c7d5599bce67a8012017948d864b.JPG@1280w_1l_2o_100sh.png",
                title:"这么多优质的原创音乐等你来唤醒",
                distance:884
            }]
        }
    }
}
</script>
<style>
.nearWrap{
    width: 100%;
    flex: 1;
    overflow: auto;
    margin-bottom: 60px;
}

.near_con{
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 10px solid #eee;
}

.near_con>img{
    width: 100%;
}

.near_con>h4{
    font-weight: 400;
}

.near_con>p{
    color: #888;
    font-size: 12px;
    line-height: 24px;
}
</style>
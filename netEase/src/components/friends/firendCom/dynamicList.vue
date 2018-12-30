<template>
    <div class="video_box">
        <div class="video_list" v-for="(val,index) in dynamicdata" :key="index">
            <div class="left">
                <img :src="val.img" alt="">
            </div>
            <div class="right">
                <div class="right_top">
                    <div class="right_title">
                        <h4><span>{{val.name}}</span>发布视频：</h4>
                        <p>{{val.num}}万粉丝</p>
                    </div>
                    <div class="right_look">
                        <span>+ 关注</span>
                    </div>
                </div>
                <div class="right_movie">
                    <p>{{val.context}}</p>
                    <video autoplay="true">
                        <source :src="val.moviePath" type="video/mp4">
                    </video>
                </div>
                <div class="right_bottom">
                    <div class="bottom_left">
                        <span v-for="item in val.tag"><i class="iconfont icon-bianji1"></i>{{item}}</span>
                    </div>
                    <div class="bottom_right">
                        <i class="iconfont icon-gengduo"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"dynamicList",
    props:["dynamicdata"]
}
</script>
<style>

.video_box{
    width: 100%;
}

.video_box>video{
    width: 100%;
}

.video_list{
    width: 100%;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
}

.left{
    width: 10%;
}

.left>img{
    width: 100%;
    border-radius: 50%;
}

.right{
    flex: 1;
    padding-left: 10px;
    box-sizing: border-box;
}

.right_top{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.right_title{
    flex: 1;
}

.right_title>h4{
    color: #888;
}

.right_title>h4>span{
    color: darkcyan;
    padding-right: 10px;
}

.right_title>p{
    color: #999;
    font-size: 12px;
    line-height: 30px;
}

.right_look>span{
    display: inline-block;
    padding: 4px 10px;
    background: #33383b;
    color: #fff;
    text-align: center;
    border-radius: 20px;
    font-size: 12px;
}

.right_movie{
    width: 100%;
}

.right_movie>p{
    line-height: 36px;
    color: #333;
}

.right_movie>video{
    width: 100%;
}

.right_bottom{
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #888;
    height: 40px;
    line-height: 40px;
}

.bottom-left{
    flex: 1;
}

.bottom_left>span{
    padding-right: 20px;
}

.bottom-left>span>i{
    font-size: 20px;
    padding-right: 4px;
}
</style>
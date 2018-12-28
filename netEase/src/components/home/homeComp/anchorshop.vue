<template>
    <div class="anchorshopWrap bg-blur">
        <h2>精品推荐</h2>
        <p>你值得拥有的优质内容</p>
        <div class="shop_con">
            <dl>
                <dt>
                    <img src="" alt="">
                </dt>
                <dd>
                    <h4></h4>
                    <span class="money"></span>
                </dd>
            </dl>
        </div>
        <p class="shop_con_title">全部精品电台<i class="iconfont icon-chevron-thin-right"></i></p>
    </div>
</template>
<script>
export default {
    name:"accout",
    data(){
        return{
            anchorshop:[{
                img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545967487905&di=7d88ff66afc8349051dcb31eaaafd5de&imgtype=0&src=http%3A%2F%2Fcdn.lizhi.fm%2Fradio_cover%2F2014%2F05%2F09%2F11436397862443524.jpg",
                title:"一听就会得古典音乐"
            },{
                img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545968040184&di=e5733dd06877ba1748eed43a60492f35&imgtype=0&src=http%3A%2F%2Fcdn.lizhi.fm%2Fradio_cover%2F2013%2F10%2F28%2F6978813977565444.jpg",
                title:"最通俗易懂的爵士乐入门宝典"
            },{
                img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545968124389&di=7ffd2a7c388087b3378e645d73062443&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Fradio_cover%2F2014%2F10%2F01%2F14819913262283652_320x320.jpg",
                title:"凯叔马未都趣味讲述中国史"
            }]
        }
    }
}
</script>
<style>
.anchorshopWrap{
    width: 100%;
    height: 412px;
    padding: 20px 2px;
    box-sizing: border-box;
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545967487905&di=7d88ff66afc8349051dcb31eaaafd5de&imgtype=0&src=http%3A%2F%2Fcdn.lizhi.fm%2Fradio_cover%2F2014%2F05%2F09%2F11436397862443524.jpg") no-repeat;
    background-size: 100% 100%;
    margin: 20px 0;
    color: #fff;
}
.bg-blur {
    /* float: left; */
    width: 100%;
    /* background-repeat: no-repeat; */
    /* background-position: center; */
    /* background-size: cover; */
    -webkit-filter: blur(6px);
    -moz-filter: blur(6px);
    -o-filter: blur(6px);
    -ms-filter: blur(6px);
    filter: blur(6px);
}

.anchorshopWrap>h2{
    width: 100%;
    height:44px;
    line-height: 44px;
    text-align: center;
}
</style>
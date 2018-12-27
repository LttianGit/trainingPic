<template>
    <div class="recommendWrap">
        <Swiper :swiperList="swiperList"></Swiper>
        <RecomBox></RecomBox>
        <div class="recommend_sing">推荐歌单<span class="iconfont xiangyou icon-angle-right"></span></div>
        <RecomList :singList="singList"></RecomList>
    </div>
</template>
<script>
import axios from "axios";
import RecomBox from "../homeComp/recomBox";
import Swiper from "../homeComp/swiper";
import RecomList from "../homeComp/recomList";

export default {
    name:"recommend",
    data(){
        return{
            swiperList:[{
                name:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545838979970&di=da97555801e25e7f5d2deeef553a82f9&imgtype=0&src=http%3A%2F%2Fwww.tj108.cn%2Fupload%2Fimg%2Fr4rYgtJOloSw3hfPpivZPZTmLo0E9-NYoXF0GHIAUwwNFs6%2FOmggN1eQdJPL7yH9efiTEFWQyMQzU1h3zQFrU9ks5i%2FA5PsxSokESVMkrnjS04V8zdBq2DE.jpg"
            },{
                name:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545838979970&di=91704db601471e3c8d124e49bdcf34ca&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa17ef3b8f3aa106027c3a0366b86eeb686a1d7f21f3a4-2lXHeP_fw658"
            },{
                name:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545838979969&di=d873281c38c434aaee386a889871a55c&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F627353762b860a7a214bde40d3ae3301934e833e13f02-dkCVG7_fw658"
            },{
                name:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545838979968&di=977e5c13c8c42888e46e0613d8ecc11e&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170601%2Fdb0e40d12f254af5a76a171f8a176f26_th.jpg"
            },{
                name:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545838979967&di=e25e0c331191172766607842d9c416dd&imgtype=0&src=http%3A%2F%2Fqnm.hunliji.com%2Fo_1cq5g9njo4bc1h5p1k5oco51g179.jpg%3FimageView2%2F1%2Fw%2F770%2Fh%2F330"
            },{
                name:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545838979967&di=d258e98e61a35fa59aa501c8bc795c05&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3349f7fe98d1ae03abe5e986895cc259396134bcf654-TgGajn_fw658"
            },{
                name:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545838979984&di=458f3d9f88a301bc7f7019e20b2c94f5&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa0cc0ecd8fad224e90907ee7e35881630d3d0af0156b4-VPK5iq_fw658"
            },{
                name:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545838979983&di=b05a6f37c513e25a7295438432dd7d6b&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170601%2F2d4b9a5b76904d5ab9811f9f240eeef6_th.jpg"
            }],
            singList:[]
        }
    },
    components:{
        Swiper,
        RecomBox,
        RecomList
    },
    mounted() {
        axios.get('/api/recommendSing').then(res=>{
            this.singList = res.data.data;
            console.log(this.singList)
        })   
    }
}
</script>
<style>
.recommendWrap{
    padding-bottom: 60px;
    width: 100%;
    flex: 1;
    overflow: auto;
}    

.recommend_sing{
    width: 100%;
    height:36px;
    padding: 0 10px;
    font-size: 14px;
}
.xiangyou{
    color: #999;
    padding-left: 4px;
}

.singlist{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.singlist>dl{
    width: 32%;
    padding-bottom: 10px;
}

.singlist>dl>dt>img{
    width: 100%;
    height: 80%;
}

.singlist>dl>dd{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 12px;
    color: #333;
    padding: 0 6px;
    box-sizing: border-box;
}
</style>
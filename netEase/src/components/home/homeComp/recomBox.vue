<template>
    <div class="recomBoxWrap">
        <dl v-for="val in conList">
            <router-link :to="val.pathto">
                <dt>
                    <img :src="val.url" alt="">
                </dt>
                <dd>
                    {{val.name}}
                </dd>
            </router-link>
        </dl>
    </div>
</template>
<script>
export default {
    name:"accout",
    data(){
        return{
            conList:[{
                url:"../../../../static/images/dl1_03.jpg",
                name:"私人FM",
                pathto:"/person"
            },{
                url:"../../../../static/images/dl2_03.jpg",
                name:"每日推荐",
                pathto:"/today"
            },{
                url:"../../../../static/images/dl3_03.jpg",
                name:"歌单",
                pathto:"/singerlist"
            },{
                url:"../../../../static/images/dl4_03.jpg",
                name:"排行榜",
                pathto:"/rank"
            }]
        }
    }
}
</script>
<style>
.recomBoxWrap{
    width: 100%;
    margin-top: 12%;
    display: flex;
    justify-content: space-around;
}

.recomBoxWrap>dl{
    width: 25%;
    text-align: center;
    padding: 20px 0;
    box-sizing: border-box;
}

.recomBoxWrap>dl>a{
    text-decoration: none;
    color: #333;
}

.recomBoxWrap>dl>a>dt>img{
    width: 44px;
    height: 44px;
}

.recomBoxWrap>dl>a>dd{
    font-size: 12px;
    color: #333;
    height: 22px;
    line-height: 22px;
}
</style>
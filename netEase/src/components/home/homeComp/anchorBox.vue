<template>
    <div class="recomBoxWrap">
        <dl v-for="val in conList">
            <dt>
                <img :src="val.url" alt="">
            </dt>
            <dd>
                {{val.name}}
            </dd>
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
                name:"电台分类"
            },{
                url:"../../../../static/images/dl2_03.jpg",
                name:"电台排行"
            },{
                url:"../../../../static/images/dl3_03.jpg",
                name:"DL电音"
            },{
                url:"../../../../static/images/dl4_03.jpg",
                name:"小冰电台"
            }]
        }
    }
}
</script>
<style>
.recomBoxWrap{
    width: 100%;
    margin-top: 14%;
    display: flex;
    justify-content: space-around;
}

.recomBoxWrap>dl{
    width: 25%;
    text-align: center;
    padding: 20px 0;
    box-sizing: border-box;
}

.recomBoxWrap>dl>dt>img{
    width: 44px;
    height: 44px;
}

.recomBoxWrap>dl>dd{
    font-size: 12px;
    color: #333;
    height: 22px;
    line-height: 22px;
}
</style>
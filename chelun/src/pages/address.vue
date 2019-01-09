<template>
    <div class="addressWrap">
        <div class="input_con">
            <input type="text" placeholder="收货地址">
        </div>
        <AddressCon></AddressCon>
        <div class="anctor money" @click="share"><img src="http://pic.51yuansu.com/pic2/cover/00/27/16/57fc31b21756f_610.jpg" alt=""></div>
        <van-popup v-model="show" >
            <div class="content">
                <h4>分享后自己能够获得优惠券</h4>
                <p class="prefect">自己和好友都能获得</p>
                <p class="imgP"><img src="http://down1.sucaitianxia.net/psd02/psd240/psds64469.jpg" alt=""></p>
                <div class="btnCon">
                    <button class="noshare" @click="noshare">给钱都不要</button>
                    <button class="share" @click="shareMoney">果断分享</button>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
import AddressCon from "../components/addressCon"
import {goShare} from "../api/index"
export default {
    name:"addressC",
    data(){
        return{
            show:false,
            cityColumns:[]
        }
    },
    components:{
        AddressCon
    },
    methods: {
        share(){
            this.show = !this.show
        },
        noshare(){
            this.show = !this.show
        },
        shareMoney(){
            this.show = !this.show
            window['CHELUN_SHARE_DATA_WXMESSAGE'] = {
                title:"龙作为，我好看呗",
                desc:"真是一个闭月羞花、沉鱼落雁的美人儿",
                link:"http://img5.duitang.com/uploads/item/201410/05/20141005082835_2RTzn.thumb.700_0.jpeg",
                imgUrl:"http://pic2.ooopic.com/11/17/55/15b1OOOPIC45.jpg"
            }
            //微信朋友圈分享
            window['CHELUN_SHARE_DATA_WXTIMELINE'] = {
                type:"photo",
                imgUrl:"http://cdn.duitang.com/uploads/item/201411/12/20141112002035_zaJha.jpeg"
            }

            goShare()
        }
    }
}
</script>
<style>
.addressWrap{
    width: 100%;
    height: 100%;
}

.input_con{
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}

.input_con>input{
    width: 100%;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border: none;
    background: #efefef;
    font-size: 14px;
}

.bottom{
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: fixed;
    left:0;
    bottom: 0;
    padding: 0 10px;
    box-sizing: border-box;
}

.bottom>button{
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    background: #999;
    border: none;
}

.anctor{
    position: fixed;
    right:10px;
    bottom:60px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    overflow: hidden;
}

.anctor>img{
    width: 55px;
    height: 55px;
}

.money{
    bottom:140px;
}

.van-popup{
    width: 76%;
}

.content{
    width: 100%;
    height: 60%;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
}

.content>p>img{
    width: 100%;
}

.content>h4{
    line-height: 36px;
    font-size: 18px;
    font-weight: 400;
}

.content>p{
    color: #666;
    font-size: 14px;
    line-height: 30px;
}

.btnCon{
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.btnCon>button{
    width: 40%;
    border:none;
    background: #ccc;
    height: 34px;
    color: #fff;
    border-radius: 6px;
}

.share{
    background: turquoise!important;
    color: #fff!important;
}
</style>
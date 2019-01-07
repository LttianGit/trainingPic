<template>
    <div class="addressWrap">
        <div class="input_con">
            <input type="text" placeholder="收货地址">
        </div>
        <AddressCon></AddressCon>
        <div class="bottom">
            <button>
                确认
            </button>
        </div>
        <div class="anctor"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546407029449&di=b1912010b12f816e09babf41cab4d689&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01af1055e67c0c32f875a132af9f7c.jpg%402o.jpg" alt=""></div>
    </div>
</template>
<script>
import AddressCon from "../components/addressCon"
export default {
    name:"addressC",
    components:{
        AddressCon
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
</style>
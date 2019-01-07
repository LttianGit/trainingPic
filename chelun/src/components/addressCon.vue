<template>
    <ol class="addressConWrap">
        <li class="connect border">
            <span>联系省市</span>
            <p>
                <b>北京</b>
                <b>北京市</b>
            </p>
        </li>
        <li class="addressDetail border">
            <span>详细地址</span>
            <p>
                <input type="text">
            </p>
        </li>
        <li class="connectTell border">
            <span>联系电话</span>
            <p>
                <input type="text" placeholder="请输入联系电话">
            </p>
        </li>
        <li class="connecter border">
            <span>联系人</span>
            <p>
                <input type="text" placeholder="请输入联系人">
            </p>
        </li>
    </ol>
</template>
<script>
export default {
    name:"addressCon"
}
</script>
<style>
.addressConWrap{
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    color: #666;
}

.addressConWrap>li{
    width: 100%;
    height: 44px;
    line-height: 44px;
    display: flex;
    justify-content: space-between;
}

.border { border-bottom: 1px solid #999 }

@media screen and (-webkit-min-device-pixel-ratio: 2) {
    .border { border-bottom: 0.5px solid #999 }
}
@media screen and (-webkit-min-device-pixel-ratio: 3) {
    .border { border-bottom: 0.333333px solid #999 }
}

.addressConWrap>li>span{
    padding-right: 20px;
}

.addressConWrap>li>p{
    flex: 1;
    text-align: right;
}

.addressConWrap>li>p>input{
    border: none;
    width: 100%;
    text-align: right;
}

.addressConWrap>li>p>b{
    font-weight: 400;
    padding-left: 20px;
}
</style>
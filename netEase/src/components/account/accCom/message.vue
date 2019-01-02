<template>
    <div class="messageWrap">
        <div class="mess">
            <dl>
                <dt>
                    <img src="http://pic1.5577.com/5577/mb/up/2018-6/15284462347684050_360_360.gif" alt="">
                </dt>
                <dd>
                    <h3>Lttian_</h3>
                    <p><span>Lv.6</span></p>
                </dd>
            </dl>
            <p>
                <span><i class="iconfont icon-ficonfontaxiandingdan">签到</i></span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name:"move"
}
</script>
<style>
.messageWrap{
    width: 100%;
    height: 100%;
    overflow: auto;
}

.mess{
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}

.mess>p{
    width: 20%;
}

.mess>dl{
    display: flex;
    flex: 1;
}

.mess>dl>dt{
    width: 20%;
}

.mess>dl>dt>img{
    width: 100%;
    border-radius: 50%;
}

.mess>p{
    border-radius: 20px;
    border:1px solid #666;
    color: #666;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding: 0 10px;
    font-size: 12px;
}

.mess>p>span>i{
    padding-right: 6px;
}
</style>
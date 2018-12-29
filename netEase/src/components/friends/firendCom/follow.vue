<template>
    <div class="followWrap">
        <p class="followTitle">我关注的他们<i class="iconfont icon-chevron-thin-right"></i></p>
        <dl class="follow_dl">
            <dt>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546435849&di=196b792d0ce278c035d6f46346503682&imgtype=jpg&er=1&src=http%3A%2F%2Fm.wdeqq.com%2FuploadFiles%2F2018-09%2F15366746066531309.jpg" alt="">
            </dt>
            <dd>-Lttian</dd>
        </dl>
    </div>
</template>
<script>
export default {
    name:"accout"
}
</script>
<style>
.followWrap{
    width: 100%;
    padding: 10px 0;
    padding-left: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
}

.followTitle{
    width: 100%;
    height: 44px;
    line-height: 44px;
    color: #333;
}

.followTitle>i{
    padding-left: 6px;
    color: #888;
}

.follow_dl{
    width: 70px;
}

.follow_dl>dt{
    width: 80%;
    border-radius: 50%;
    overflow: hidden;
}

.follow_dl>dt>img{
    width: 100%;
}

.follow_dl>dd{
    height: 30px;
    line-height: 30px;
    color: #888;
}
</style>
<template>
    <div class="accheader">
        <span></span>
        <p>账号</p>
        <span class="iconfont icon-zhuanhuan"></span>
    </div>
</template>
<script>
export default {
    name:"accheader"
}
</script>
<style>
.accheader{
    width: 100%;
    height: 44px;
    line-height: 44px;
    background: #33383b;
    color: #fff;
    display: flex;
    justify-content: space-between;
}

.accheader>p{
    flex: 1;
    text-align: center;
    padding-left: 10px;
}

.accheader>span{
    padding: 0 20px;
}
</style>
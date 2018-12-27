<template>
    <div class="checkToday">
        <h2>今日优选</h2>
        <span><i class="iconfont icon-suijibofang"></i>换一换</span>
    </div>
</template>
<script>
export default {
    name:"accout"
}
</script>
<style>

.checkToday{
    width: 100%;
    display: flex;
    height: 40px;
    padding: 0 10px;
    box-sizing:border-box;
    justify-content: space-between;
}

.checkToday>h2{
    font-size: 14px;
}

.checkToday>span{
    color: #888;
    font-size: 12px;
}

.checkToday>span>i{
    padding-right: 6px;
}
</style>
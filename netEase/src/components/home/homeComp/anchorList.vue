<template>
    <div class="anchorList">
        <dl v-for="(val,index) in singList" :key="index">
            <dt>
                <img class="anchorImg" :src="val.img" alt="">
            </dt>
            <dd>
                <h3>{{val.title}}</h3>
                <p>节目：123</p>
                <p>愿你的故事有人能懂哈哈哈哈</p>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    name:"accout",
    props:["singList"]
}
</script>
<style>
.anchorList{
    width: 100%;
}

.anchorList>dl{
    width: 100%;
    display: flex;
    padding: 0 8px;
    box-sizing: border-box;
    padding-top: 6px;
}

.anchorList>dl>dt{
    width: 26%;
    height: 76%;
}

.anchorImg{
    width: 100%;
    height: 80%;
}

.anchorList>dl>dd{
    flex: 1;
    padding-left: 10px;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
}

.anchorList>dl>dd>h3{
    width: 100%;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.anchorList>dl>dd>p{
    font-size:12px;
    color: #888;
    height: 20px;
    line-height: 20px;
}
</style>
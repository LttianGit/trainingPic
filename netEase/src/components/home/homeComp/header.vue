<template>
    <div class="header">
       <span><i class="iconfont icon-xiayiqu1"></i></span>
       <input type="text" placeholder="猜你喜欢 浮生">
       <span><i class="iconfont icon-zanting3"></i></span>
    </div>
</template>
<style scoped>
    .header{
        width: 100%;
        height: 44px;
        line-height: 44px;
        background: #33383b;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header>span{
        padding: 0 16px;
    }

    .header>span>i{
        font-size: 22px;
    }

    .header>input{
        flex: 1;
        height: 26px;
        border:none;
        border-radius: 20px;
        text-align: center;
        font-size: 12px;
        background: #5b6161;
    }

    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:#ccc;
}
</style>
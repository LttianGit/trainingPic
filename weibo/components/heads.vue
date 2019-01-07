<template>
    <div class="header">
        <span>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546834960260&di=6212f7152835f6ad35b1be1f70bd632b&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi3%2F1081958043%2FTB2akRUfZnI8KJjSspeXXcwIpXa_%2521%25211081958043-2-daren.png" alt="">
        </span>
        <div class="input_Con">
            <nuxt-link to="/search">
                <input type="text" placeholder="大家都在搜：李诞对张艺兴的吐槽好狠">
            </nuxt-link>
        </div>
        <span class="fontLine">
            <i class="iconfont icon-bianji1"></i>
        </span>
    </div>
</template>
<style>
.header{
    width: 100%;
    height: 44px;
    line-height: 44px;
    display: flex;
    background: #eeecec;
    align-items: center;
}

.header>span{
    padding: 0 15px;
    box-sizing: border-box;
    line-height: 40px;
}

.header>span>img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
}

.input_Con{
    flex: 1;
    padding-bottom: 6px;
    box-sizing: border-box;
}

.input_Con input{
    width: 100%;
    height: 30px;
    border:none;
    border-radius: 6px;
    background: #ccc;
    padding-left: 10px;
    box-sizing: border-box;
}

.header>span>i{
    font-size: 30px;
}
</style>
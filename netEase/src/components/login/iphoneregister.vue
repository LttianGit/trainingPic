<template>
    <div class="registerWrap">
        <div class="toptitle">
            <span @click="goBack"><i class="iconfont icon-xiangzuo"></i></span>
            <p>手机号注册</p>
            <span></span>
        </div>
        <div class="inputBox">
            <div class="number">
                <input type="text" placeholder="手机号">
            </div>
            <div class="password">
                <input type="password" placeholder="密码">
            </div>
        </div>
        <div class="btnBo">
            <button class="btnRigister">
                登录
            </button>
        </div>
        <div class="lineList">
            <u class="actor">游客试用</u>
        </div>
    </div>
</template>

<script>
export default {
    name:"register",
    data(){
        return{

        }
    },
    methods: {
        goBack(){
            history.go(-1)
        }
    }
}
</script>

<style>
.registerWrap{
    width: 100%;
    height:100%;
}

.toptitle{
    width: 100%;
    height: 44px;
    line-height: 44px;
    display: flex;
    justify-content: space-between;
    color: #fff;
    background: #393f42;
}

.toptitle>span{
    padding: 0 20px;
}

.toptitle>p{
    flex: 1;
    text-align: center;
    padding-right: 20px;
}

.inputBox{
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}

input{
    width: 100%;
    height: 36px;
    margin-top: 10px;
    border:none;
    border-bottom: 1px solid #eee;
}

.btnBo{
    width: 100%;
    text-align: center;
    padding-top: 30px;
}

.btnBo>button{
    width: 96%;
    height: 36px;
    background: #393f42;
    color: #888;
    text-align: center;
    line-height: 36px;
    border-radius: 20px;
    border:none;
}

.lineList{
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #888;
    padding-top: 20px;
}
</style>
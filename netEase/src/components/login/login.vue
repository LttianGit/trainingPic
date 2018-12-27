<template>
  <div class="login">
    <div class="loginLogo">
      <img class="loginimg" src="../../../static/images/1_02.jpg" alt="">
    </div>
    <div class="btnBox">
      <button class="btn" @click="iphoneLogin">手机号登录</button>
      <button class="btn"  @click="iphoneRegister">注册</button>
    </div>
    <div class="lineList">
        <u class="actor">游客试用</u>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script scoped>
import Bottom from "@/components/login/bottom";

export default {
  name: 'Login',
  data () {
    return {
      
    }
  },
  components:{
    Bottom
  },
  methods: {
    iphoneLogin(){
      this.$router.push('/iphonelogin')
    }
    ,
    iphoneRegister(){
      this.$router.push('/iphoneregister')
    }
  }
}
</script>

<style>
.login{
  width: 100%;
  height: 100%;
  background: #f7f6f6;
}

.loginLogo{
  width: 100%;
}

.loginimg{
  width: 100%!important;
}

.btnBox{
  width: 100%;
  padding-top: 20px;
  box-sizing: border-box;
  text-align: center;
}

.btn{
  width: 86%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border:1px solid #d33930;
  border-radius: 20px;
  color: #d33930;
  background: transparent;
  margin-bottom: 20px;
}

.lineList{
  width: 100%;
  text-align: center;
}

.lineList>u{
  color: #888;
  font-size: 12px;
}

</style>

<template>
  <div class="containers">
    <Heads></Heads>
    <div class="login">
        <nuxt-link to="/login">
          登录/注册
        </nuxt-link>
    </div>
    <Navs></Navs>
  </div>
</template>

<script>
import Heads from "../components/heads";
import Navs from "../components/navs";
export default {
  name:"default",
  components:{
    Heads,
    Navs
  }
}
</script>
<style>
@import url("../fonts/iconfont.css");

*{
  padding:0;
  margin:0;
  list-style: none;
}

.containers{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.login{
  width: 120px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  text-align: center;
  background:rgb(23, 163, 218);
  position: fixed;
  bottom: 20px;
  left: 40%;
  border-radius: 20px;
}

.login>a{
  text-decoration: none;
  color: #fff;
  font-size: 18px;
}
</style>
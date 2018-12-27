<template>
  <div id="app">
    <router-view/>
    <div class="app_Bottom">
        <dl v-for="(val,index) in iconList" :key="index" >
          <router-link :to="val.url">
            <dt>
              <i class="iconfont" :class="val.icon"></i>
            </dt>
            <dd>{{val.name}}</dd>
          </router-link>
        </dl>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      iconList:[{
        icon:"icon-dribbble",
        name:"发现",
        url:"/"
      },{
        icon:"icon-bofang3",
        name:"视频",
        url:"/movie"
      },{
        icon:"icon-default-avatar",
        name:"我的",
        url:"/mine"
      },{
        icon:"icon-xiaoxi",
        name:"朋友",
        url:"/friends"
      },{
        icon:"icon-yonghu",
        name:"账号",
        url:"/account"
      }]
    }
  }
}
</script>

<style>
  @import url('./fonts/iconfont.css');
  
  *{
    padding:0;
    margin:0;
    list-style: none;
    box-sizing: border-box;
  }

  html,body{
    width: 100%;
    height: 100%;
  }

  #app{
    width: 100%;
    height: 100%;
  }

  .app_Bottom{
    padding-top: 10px;
    width: 100%;
    height: 60x;
    display: flex;
    justify-content: space-around;
    background:rgba(255,255,255,.9);
    position: fixed;
    left:0;
    bottom: 0;
  }

  .app_Bottom>dl{
    width: 25%;
    text-align: center;
    color: #666;
  }

  .app_Bottom>dl>a{
    text-decoration: none;
    color: #333;
  }

  .app_Bottom>dl dt>i{
    font-size: 22px;
  }

  .app_Bottom>dl dd{
    font-size: 12px;
    line-height: 20px;
  }

  .router-link-exact-active{
    font-weight: 600;
  }

</style>

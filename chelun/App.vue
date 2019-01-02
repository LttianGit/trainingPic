<template>
  <div class="app">
    <Top></Top>
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546399507783&di=700adf877783baf109a4a43482428d98&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e25259a8c8f7a8012028a99fb154.jpg%402o.jpg" alt="">
    <Nav></Nav>
    <Tit></Tit>
    <Bottom></Bottom>
  </div>
</template>

<script>
// const JSBridge = require('./utils/JSBridge.js');
import Top from './components/top';
import Nav from './components/nav';
import Tit from './components/tit';
import Bottom from './components/bottom';

export default {
  name: 'app',
  data () {
    return {}
  },
  // methods: {
  //   login(){
  //     JSBridge.invoke('app', 'login', {
  //       loginCallBackName: (res)=>{
  //         console.log('res...', res);
  //       }
  //     });
  //   }
  // }
  components:{
    Top,
    Nav,
    Tit,
    Bottom
  }
}
</script>

<style lang="scss">
    *{
      padding: 0;
      margin: 0;
      list-style: none;
    }
    body,html,.app{
      width:100%;
      height:100%;
    }
    .app{
      background: #eeeeee;
    }
    .app img{
      width:100%;
    }
</style>

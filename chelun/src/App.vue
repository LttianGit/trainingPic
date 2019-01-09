<template>
  <div class="appWrap">
      <Top></Top>
      <router-view></router-view>
      <div class="anctor" id="cc"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546407029449&di=b1912010b12f816e09babf41cab4d689&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01af1055e67c0c32f875a132af9f7c.jpg%402o.jpg" alt=""></div>
    </div>
</template>
<script>
import Top from './components/top';
export default{
  name:"wrap",
  components:{
    Top
  }
}
</script>
<style>
*{
    padding: 0;
    margin: 0;
    list-style: none;
}

body,html,.appWrap{
  width: 100%;
  height: 100%;
}

.anctor{
        position: fixed;
        right:10px;
        bottom:60px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        overflow: hidden;
    }

    .anctor>img{
        width: 55px;
        height: 55px;
    }
</style>
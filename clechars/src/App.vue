<template>
  <div id="app">
    <Heads></Heads>
    <div class="banner">
      <img src="http://picture.eclicks.cn/g1/l/2018/04/17/2e324eb8e740788b_2633_960.png" alt="">
    </div>
    <Contents></Contents>
  </div>
</template>

<script>
import Heads from "@/components/heads";
import Contents from "@/components/contents";
import "@/js/flexible.js"

export default {
  name: 'App',
  components:{
    Heads,
    Contents
  }
}
</script>

<style>
@import url('./css/index.css');
@import url('./fonts/iconfont.css');

*{
  padding:0;
  margin:0;
  list-style: none;
}

html,
body {
    width: 100%;
    height: 100%;
}

.banner{
  width: 100%;
}

.banner>img{
  width: 100%;
}
</style>

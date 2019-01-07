<template>
  <div class="appWrap">
      <Top></Top>
      <router-view></router-view>
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
</style>
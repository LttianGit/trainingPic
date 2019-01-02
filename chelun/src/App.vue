<template>
  <div class="appWrap">
    <router-view></router-view>
  </div>
</template>
<script>
export default{
  name:"wrap"
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
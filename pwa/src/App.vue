<template>
  <div id="app">
    
  </div>
</template>

<script>
// import sw from "./pwalist/sw.js"

export default {
  name: 'App',
  mounted() {
    if(navigator.serviceWorker != null){
        navigator.serviceWorker.register('sw.js')
        .then(function(registartion){
          console.log('支持sw:',registartion.scope)
        })
      } 
  }
}
</script>

<style>
h3{
    color: #f00;
}
</style>

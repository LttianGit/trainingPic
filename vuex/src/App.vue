<template>
  <div id="app">
    <div class="count">{{count}}</div>
    <div class="btn">
      <button @click="changeNum">同步添加</button>
      <button @click="changeNumAsync">异步添加</button>
    </div>
    <div style="margin-top:10px">{{date}}</div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from "vuex";
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    // count(){
    //   return this.$store.state.app.num
    // }
    ...mapState({
      count:state=>state.app.num
    }),
    ...mapGetters({
      date:"app/date"
    })
  },
  mounted() {
    
  },
  methods: {
    ...mapMutations({
      changeNum:"app/changeNum"
    }),
    ...mapActions({
      changeNumAsync:"app/changeNumAsync"
    })
  }
}
</script>

<style>
.count{
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
}

.btn{
  width: 100%;
  text-align: center;
}

button{
  width: 100px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background: firebrick;
  color: #fff;
  border:none;
  border-radius: 10px;
  font-size: 16px;
}
</style>

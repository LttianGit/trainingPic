<template>
    <div class="bottomWrap">
        <div class="bottom">
            <p class="loginMethods">其他登录方式</p>
            <div class="list_box">
                <dl v-for="val in bottomList">
                <dt>
                    <img :src="val.img" alt="">
                </dt>
                <dd>
                    {{val.name}}
                </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            bottomList:[{
                img:"../../static/images/wx_05.jpg",
                name:"微信"
            },{
                img:"../../static/images/qq_05.jpg",
                name:"QQ"
            },{
                img:"../../static/images/yi_05.jpg",
                name:"网易"
            },{
                img:"../../static/images/wb_05.jpg",
                name:"微博"
            }]
        }
    }
}
</script>
<style>
.bottom{
  width: 100%;
  padding-top: 84px;
  position: fixed;
  left:0px;
  bottom:10px;
}

.loginMethods{
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #777;
  font-size: 12px;
}

.list_box{
  width: 100%;
  display: flex;
  justify-content: space-around;
}

dl{
  width: 25%;
  text-align: center;
}

dl dt>img{
  width: 34px;
  height: 34px;
}

dl dd{
  font-size: 12px;
  color: #555;
}
</style>
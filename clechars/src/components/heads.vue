<template>
    <div class="header">
        <p>
            <img src="https://www.chelun.com/static/dist/img/logo.png" alt="">
        </p>
        <ul>
            <li v-for="(val,index) in headList" :key="index">
                <span :class="{active:index==2}">
                    {{val.name}}
                </span>
            </li>
        </ul>
        <span>
            <i class="iconfont icon-shouqi-01"></i>
        </span>
    </div>
</template>
<script>
export default {
    name:"heads",
    data(){
        return{
            headList:[{
                name:"产品"
            },{
                name:"关于我们"
            },{
                name:"大数据"
            },{
                name:"新闻"
            },{
                name:"招聘"
            },{
                name:"商城"
            },{
                name:"登录/注册"
            }]
        }
    }
}
</script>
<style>
@import url('../css/heads.css');
</style>
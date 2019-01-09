<template>
    <div class="helpWrap" v-show="flag">
        <img v-if="num==1" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546493682&di=bc40aefe0751d31491d9c147390b690c&src=http://yuntuku-b.vanrea.com:8099/group1/M00/00/FA/rBjwZFvDLJTKanFzAACyhzqYRs4642.jpg" alt="">
        <img v-else src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546505540839&di=d96ec616cf821e38d0628ec40fe08c5a&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171116%2Fadc7dd88ebbe4f61862e7ec426511ded.jpeg" alt="">
        <p><span @click="close">X</span></p>
    </div>
</template>

<script>
export default{
    name:"helpMock",
    props:['flag','num'],
    data(){
        return{

        }
    },
    methods: {
        close(){
            this.$emit('colseFlag')
        }
    },
}
</script>

<style>
.helpWrap{
    width: 70%;
    position: fixed;
    top:32%;
    left: 20%;
}

.helpWrap>img{
    width: 100%;
}

.helpWrap>p{
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
}

.helpWrap>p>span{
    background: #555;
    color: #fff;
    padding:4px 10px;
    border-radius: 50%;
}
</style>
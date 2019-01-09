<template>
    <div>
        <button @click="share">微信分享</button>
    </div>
</template>
<script>
import {goShare} from "../api/index"

export default {
    methods: {
        share(){
            //微信好友分享
            window['CHELUN_SHARE_DATA_WXMESSAGE'] = {
                title:"龙作为，我好看呗",
                desc:"真是一个闭月羞花、沉鱼落雁的美人儿",
                link:"http://img5.duitang.com/uploads/item/201410/05/20141005082835_2RTzn.thumb.700_0.jpeg",
                imgUrl:"http://pic2.ooopic.com/11/17/55/15b1OOOPIC45.jpg"
            }
            //微信朋友圈分享
            window['CHELUN_SHARE_DATA_WXTIMELINE'] = {
                type:"photo",
                imgUrl:"http://cdn.duitang.com/uploads/item/201411/12/20141112002035_zaJha.jpeg"
            }

            goShare()
        }   
    }
}
</script>
<style>

</style>
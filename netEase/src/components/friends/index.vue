<template>
    <div class="friendsWrap">
        <FriendHead></FriendHead>
        <router-view></router-view>
    </div>
</template>
<script>
import FriendHead from "./firendCom/header";

export default {
    name:"friends",
    components: {
        FriendHead
    }
}
</script>
<style>
.friendsWrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
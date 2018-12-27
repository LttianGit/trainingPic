<template>
    <div class="singlist">
        <dl v-for="(val,index) in singList" :key="index">
            <dt>
                <img :src="val.img" alt="">
            </dt>
            <dd>{{val.title}}</dd>
        </dl>
    </div>
</template>
<script>
export default {
    name:"accout",
    props:["singList"]
}
</script>
<style>

</style>
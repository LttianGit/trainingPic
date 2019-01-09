<template>
    <li class="liVueWrap">
        <span class="span1">服务类型</span>
        <span @click="changeDirve">{{form.type}}<b style="color:#888;padding-left:10px;">&gt;</b></span>
        <van-popup v-model="show" overlay>
            <van-picker :columns="serviceType" show-toolbar title="服务类型"  @cancel="onCancel"
            @confirm="onConfirm"/>
        </van-popup>
    </li>
</template>

<script>
export default {
    data(){
        return{
            show:false,
            serviceType:["换驾照","补驾照"],
            form:{
                type:'换驾照'
            },
        }
    },
    methods: {
        onCancel(){
            this.show = !this.show
        },
        onConfirm(value){
            this.form.type = value
            this.onCancel()
        },
        changeDirve(){
            this.show = !this.show
        }
    }
}
</script>

<style>
.liVueWrap{
    width:100%;
    height:50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
}
.top1 ul li span{
    padding:0 8px;
}
</style>
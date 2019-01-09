<template>
    <div>
        <div class="input">
            <input type="file" accept="image/png,image/jpg,image/jpeg,iamge/gif" @change="uploadFile">
            上传图片
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        uploadFile(e){
            console.log(e.target.files)
            let file = e.target.files[0].size
            if(file.size>300*1024){
                let reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = res=>{
                    console.log(res.target.result)
                }
            }
        }
    }
}
</script>
<style>

</style>
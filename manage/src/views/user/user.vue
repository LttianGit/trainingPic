<template>
   <div>
        <el-table
        :data="tableData"
        style="width: 100%;text-align: center">
        <el-table-column prop="id" label="ID" width="60"></el-table-column>
        <el-table-column label="头像" width="120">
            <template slot-scope="scope">
                <img :src="scope.row.avatar" alt="" style="width:100%">
            </template>
        </el-table-column>
        <el-table-column prop="username" label="姓名" width="100"></el-table-column>
        <el-table-column prop="profile" label="简介"></el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="角色" width="120">
            <template slot-scope="scope">
                <el-tag
                :key="tag"
                v-for="tag in scope.row.rolers">
                {{tag}}
              </el-tag>
            </template>
        </el-table-column>
        <el-table-column label="权限" width="120">
            <template slot-scope="scope">
                <el-tag
                :key="tag"
                v-for="tag in scope.row.access">
                {{tag}}
              </el-tag>
            </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            <el-button size="mini" style="margin: 5px 0;" @click="handleRoler(scope.$index, scope.row)">修改角色</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
      :current-page="current"
      @current-change="handleChange"
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>

    <el-dialog :title="type=='edit'?'编辑用户信息':'修改用户角色'" :visible.sync="dialogFormVisible">
      <el-form :model="currentUser" label-position="right" label-width="80px" :rules="rules" ref="form">
        <el-form-item v-if="type=='edit'" label="头像" :label-width="formLabelWidth">
            <el-upload action="123" class="avatar-uploader" :show-file-list="false">
              <img v-if="currentUser.avatar" :src="currentUser.avatar" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item v-if="type=='edit'" label="姓名" :label-width="formLabelWidth" prop="username">
          <el-input v-model="currentUser.username" autoComplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="type=='edit'" label="简介" :label-width="formLabelWidth" prop="profile">
          <el-input v-model="currentUser.profile" autoComplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="type=='edit'" label="手机号" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="currentUser.phone" autoComplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="type=='edit'" label="邮箱" :label-width="formLabelWidth" prop="email">
          <el-input v-model="currentUser.email" autoComplete="off"></el-input>
        </el-form-item>
      </el-form-item>
        <el-form-item v-if="type=='edit'" label="地址" :label-widtnameh="formLabelWidth" prop="address">
          <el-input v-model="currentUser.address" autoComplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="type=='roler'" label="我的角色" :label-widtnameh="formLabelWidth" prop="address">
            <el-tag
                :key="tag"
                closable
                @close="handleColse(tag)"
                v-for="tag in myRoles">
                {{tag}}
              </el-tag>
          </el-form-item>
          <el-form-item v-if="type=='roler'" label="全部角色" :label-widtnameh="formLabelWidth" prop="address">
              <el-tag
              :key="tag"
              v-for="tag in roles">
              <span @click="addRoler(tag)">
                  {{tag}}
              </span>
            </el-tag>
          </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
   </div>
  </template>

  <script>
    import {mapState,mapActions} from "vuex"

    export default {
      data() {
        const profileValidator = (rule,value,callback)=>{
          if(!value||value.length<20){
            callback('个人简介不能低于20字')
          }else{
            callback()
          }
        }
        const phoneValidator = (rule, value, callback)=>{
          if (!/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(value)){
            callback(new Error('请输入正确的手机号码'))
          }else{
            callback();
          }
        }
        const emailValidator = (rule, value, callback)=>{
          if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value)){
            callback(new Error('请输入正确的邮箱地址'))
          }else{
            callback();
          }
        }
        return {
            current:1,
            roles:['boss','developer','producter','operator','designer'],
            myRoles:[],
            dialogFormVisible:false,
            dialogTableVisible: false,
            formLabelWidth: '120px',
            currentUser:{},
            rules:{
              username:[{trigger:"blur",required:true,message:"用户名必填"}],
              profile:[{trigger:"blur",required:true,validator:profileValidator}],
              phone:[{trigger:"blur",required:true,validator:phoneValidator}],
              email:[{trigger:"blur",required:true,validator:emailValidator}]
            },
            type:''
        }
      },
      computed: {
          ...mapState({
            tableData:state=>state.list.list
          })
      },
      created() {
         this.getUserList()
      },
      methods: {
        ...mapActions({
            getUserList:"list/getUserList",
            updateUserInfo:"list/updateUserInfo",
            deleteUserInfo:"list/deleteUserInfo",
            monifyUserInfo:"list/monifyUserInfo"
        }),
        handleEdit(index,row){
            this.type="edit"
            this.dialogFormVisible = !this.dialogFormVisible
            this.currentUser = {...row}
        },
        handleChange(page){
            this.getUserList({page})
        },
        handleRoler(index,row){
            this.type="roler"
            this.currentUser = {...row}
            this.myRoles = [...row.rolers]
            this.dialogFormVisible = !this.dialogFormVisible
        },
        handleColse(roler){
          let index = this.myRoles.findIndex(item=>item==roler)
          this.myRoles.splice(index,1)
        },
        addRoler(roler){
          this.myRoles.push(roler)
          this.myRoles = [...new Set(this.myRoles)]
        },
        submit(){
          if(this.type=='edit'){
              this.$refs.form.validate(valid=>{
              if(valid){
                let {id,username,profile,email,phone} = this.currentUser;
                this.updateUserInfo({id,username,profile,email,phone}).then(res=>{
                  this.$message({
                    message:res,
                    center:true,
                    type:'success'
                  })
                  this.getUserList({page:this.current})
                }).catch(err=>{
                  this.$message({
                    message:err,
                    center:true,
                    type:'error'
                  })
                })
              }
            })
          }else if(this.type="roler"){
            let {id} = this.currentUser;
            let rolerId = this.myRoles.map(item=>{
              return this.roles.findIndex(value=>value.item)+1
            })
            this.monifyUserInfo({uid:id,rolerId}).then(res=>{
              this.$message({
                message:res,
                center:true,
                type:'success'
              })
              this.getUserList({page:this.current})
            }).catch(err=>{
              this.$message({
                message:err,
                center:true,
                type:'error'
              })
            })
          }
          this.dialogFormVisible = !this.dialogFormVisible
        },
        handleDelete(index,row){
          let {id} = row;
          this.deleteUserInfo({uid:id}).then(res=>{
            this.$message({
              message:res,
              center:true,
              type:'success'
            })
            this.getUserList({page:this.current})
          }).catch(err=>{
            this.$message({
              message:err,
              center:true,
              type:'error'
            })
          })
        }
      }
    }
  </script>

  <style>
  .cell{
      text-align: center!important;
  }

  .avatar{
    width: 40px;
  }
  </style>
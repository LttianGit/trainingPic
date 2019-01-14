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
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
      :current-page="current"
      page-count="13"
      @current-change="handleChange"
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
   </div>
  </template>

  <script>
    import {mapState,mapActions} from "vuex"

    export default {
      data() {
        return {
            current:1
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
            getUserList:"list/getUserList"
        }),
        handleEdit(index,val){
            console.log(index,val)
        },
        handleDelete(index,val){

        },
        handleChange(page){
            this.getUserList({page})
        }
      }
    }
  </script>

  <style>
  .cell{
      text-align: center!important;
  }
  </style>
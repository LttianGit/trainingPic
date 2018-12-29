import { resolve } from "path";

const state = {
    num:100
}

const getters = {
    date(){
        return "getters:10000"
    }
}

const mutations = {
    changeNum(state,{payload}){
        state.num=state.num+1
        // commit("changeNum",action)
    }
}

const actions = {
    changeNumAsync({commit},action){
        // console.log(commit,action)
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                commit("changeNum",action)
                resolve()
            },1000)
        })
    }
}

export default {
    namespaced:true,state,getters,mutations,actions
}
import {cityList,costList} from "../../api/index"


const state = {
    cityList:[],
    city:[]
}

const mutations = {
    updataState(state,action){
        state = Object.assign(state,action)
    }
}

const actions = {
    async getCityList({commit}){
        let res = await cityList();
        res.data.forEach(item=>{
            item.list.forEach(value=>{
                delete value.list
            })
        })
        commit('updataState',{cityList:res.data})
    }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations
}
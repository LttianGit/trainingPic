import {cityList,costList} from "../../api/index"

const state = {
    cityList:[],
    costList:[],
    city:[],
    cost:[]
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
    },
    async getCostList({commit,state},action){
        let proIndex = state.cityList.findIndex(item=>item.name==state.city[0]),
            cityIndex = state.cityList[proIndex].list.findIndex(item=>item.name==state.city[1])
        let res = await costList(1,state.cityList[proIndex].id,state.cityList[proIndex].list[cityIndex].id)
        console.log(res.data)
        commit('updataState',{costList:res.data})
    }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations
}
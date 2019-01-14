import request from "@/utils/request"

export function getUser(params){
    return request({
        url:"/users/list",
        method:'get',
        params
    })
}
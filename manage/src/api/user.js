import request from "@/utils/request"

export function getUser(params){
    return request({
        url:"/users/list",
        method:'get',
        params
    })
}

export function updateUserInfo(data){
    return request({
        url:"/users/update",
        method:"post",
        data
    })
}

export function deleteUserInfo(data){
    return request({
        url:"/users/action",
        method:"delete",
        data
    })
}
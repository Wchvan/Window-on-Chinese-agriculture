import request from "./request";

export const ReqMap = ()=>{    
    return request({
        url:'/map',
        method:'GET'
    })
}


export const ReqNationDate = ()=>{    
    return request({
        url:'/nation',
        method:'GET'
    })
}

export const ReqSaleDate = ()=>{    
    return request({
        url:'/sale',
        method:'GET'
    })
}


export const ReqProvinceDate = (name)=>{    
    return request({
        url:'/province',
        method:'GET',
        params:{
            name
        }
    })
}
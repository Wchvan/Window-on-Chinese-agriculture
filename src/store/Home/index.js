import { ReqMap} from "@/api"

const state = {
    mapData : []
}
const mutations = {
    GETMAPDATA(state,data){
        state.mapData = data
    }
}
const actions = {
    async getMapData({commit}){
        let res = await ReqMap()
        if(res.code == 0){
            commit('GETMAPDATA',res.data)
        }
    }
}
const getters = {
    
}

export default{
    state,
    mutations,
    actions,
    getters
}
import { ReqNationDate} from "@/api"

const state = {
    lineData1 : {},
    lineData2 : {},
    pieData : {},
}
const mutations = {
    GETNATIONDATA(state,data){
        state.lineData1 = data['line1']
        state.lineData2 = data['line2']
        state.pieData = data['pie']
    }
}
const actions = {
    async getNationData({commit}){
        let res = await ReqNationDate()
        if(res.code == 0){
            commit('GETNATIONDATA',res.data)
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
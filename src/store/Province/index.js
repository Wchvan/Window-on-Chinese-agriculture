import { ReqProvinceDate} from "@/api"

const state = {
    lineData1 : {},
    lineData2 : {},
    lineData3:{},
    pieData : {},
}
const mutations = {
    GETPROVINCEDATA(state,data){
        state.lineData1 = data['line1']
        state.lineData2 = data['line2']
        state.lineData3 = data['line3']
        state.pieData = data['pie']
    }
}
const actions = {
    async getProvinceData({commit},name){
        let res = await ReqProvinceDate(name)
        console.log(res)
        if(res.code == 0){
            commit('GETPROVINCEDATA',res.data)
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
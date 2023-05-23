import { ReqSaleDate} from "@/api"

const state = {
    inData:{},
    outData:{},
    inPie:{},
    outPie:{}
}
const mutations = {
    GETSALEDATA(state,data){
        state.inData = data['in']
        state.outData = data['out']
        state.inPie = data['inPie']
        state.outPie = data['outPie']
    }
}
const actions = {
    async getSaleData({commit}){
        let res = await ReqSaleDate()
        if(res.code == 0){
            commit('GETSALEDATA',res.data)
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
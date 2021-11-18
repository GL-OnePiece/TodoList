//该文件用于创建VUEx中最为核心的store
import Vue from 'vue'
Vue.use(Vuex)
//引入Vuex
import Vuex from "vuex";
//准备actions--用于响应组件的动作
const actions={
  // jia(context,value){
  //   context.conmmit('JIA',value)
  // },
  // jian(context,value){
  //   context.conmmit('JIAN',value)
  // },
  jiaOdd(context,value){
    if(context.state.sum % 2){
      context.commit('JIA',value)
    }
  },
  jiaWait(context,value){
    setTimeout(()=>{
      context.commit('JIA',value)
    },500)
  }
}
//准备mutations---用于操作数据(state)
const mutations ={
  JIA(state,value){
    state.sum += value
  },
  JIAN(state,value){
    state.sum -= value
  },

  
}
//准备state = {}
const state = {
  sum: 0
}

//创建store
export default new Vuex.Store({
  actions,
  mutations,
  state
})
//导出store

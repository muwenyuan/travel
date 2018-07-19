import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
let defaultcity="北京"
try{
  if(localStorage.city){
    defaultcity=localStorage.city
  }
}
catch(e){}

export default new Vuex.Store({
  state: {
    city: defaultcity
  },
  mutations: {
    increment (state,city) {
      state.city=city
      try{
        localStorage.city=city
      }
      catch(e){}
    }
  },
  actions: {
    changeCity (ctx,city) {
      ctx.commit('increment',city)
    }
  }
})

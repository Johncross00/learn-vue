import { createStore } from 'vuex'

export default createStore({
  state: {
    day: 15,
    month: 2,
    year: 2005
  },
  getters: {
    formattedDate: (state) => `${state.day}/${state.month}/${state.year}`
  },
  mutations: {
    INCREMENT_DAY(state) {
      state.day++
    },
    INCREMENT_MONTH(state) {
      state.month++;
    },
    INCREMENT_YEAR(state) {
      state.year++;
      state.month = 1
    }
  },
  actions: {
    incrementMonth(context){
      if(context.state.month + 1 > 12){
        context.commit('INCREMENT_YEAR')
      }
      else{
        context.commit("INCREMENT_MONTH");
      }
    }
  },
  modules: {
  }
})

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
  },
  actions: {
  },
  modules: {
  }
})

import { createStore } from 'vuex'
import { especies } from '../data/db.js'  

export default createStore({
  state: {
    especies: especies,  // Inicializamos directamente con los datos
    especieSeleccionada: null,
    loading: false,
    error: null
  },
  mutations: {
    SET_ESPECIES(state, especies) {
      state.especies = especies
    },
    SET_ESPECIE_SELECCIONADA(state, especie) {
      state.especieSeleccionada = especie
    },
    SET_LOADING(state, status) {
      state.loading = status
    },
    SET_ERROR(state, error) {
      state.error = error
    }
  },
  actions: {
    fetchEspecies({ commit }) {
      commit('SET_LOADING', true)
      // Simulamos una llamada API
      setTimeout(() => {
        commit('SET_ESPECIES', especies)
        commit('SET_LOADING', false)
      }, 1000)
    },
    fetchEspecieById({ commit, state }, id) {
      commit('SET_LOADING', true)
      setTimeout(() => {
        const especie = state.especies.find(e => e.id === parseInt(id))
        commit('SET_ESPECIE_SELECCIONADA', especie)
        commit('SET_LOADING', false)
      }, 500)
    }
  }
})
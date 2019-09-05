import { getCardInfo } from '@/api/api.js'

export const state = () => ({
  cards: []
})

export const getters = {
  getCards(state) {
    return state.cards
  }
}

export const mutations = {
  getCards(state) {
    return state.cards
  },
  setCards(state, card) {
    state.cards.push(card)
  },
  removeCard(state, index) {
    state.cards.splice(index, 1)
  }
}

export const actions = {
  getCards({ commit }) {
    commit('getCards')
  },
  async setCards({ commit }, params) {
    const data = await getCardInfo(params)
    if (data) {
      commit('setCards', data[0])
    } else {
      console.log('probleme récupération données')
    }
  },
  removeCard({ commit, dispatch }, params) {
    if (params !== '' && params !== 'undefined') {
      commit('removeCard', params)
      dispatch('getCards')
    } else {
      console.log('erreur suppression carte')
    }
  }
}

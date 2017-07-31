const ns = 'auth/'
let state = {
  status: 0,
  currentUser: {
    username: null,
    password: null
  }
}

const getters = {
  [ns + 'currentUser'] (state) {
    return state.currentUser
  },
  [ns + 'status'] (state) {
    return state.status
  }
}

const mutations = {
  [ns + 'login'] (state) {
    state.status = 2
  },
  [ns + 'loggedIn'] (state, payload) {
    state.currentUser = payload
    state.status = 1
  }
}

export default {
  state,
  getters,
  mutations
}

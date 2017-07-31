export default {
  login ({store, mutation}) {
    store.commit('auth/loggedIn', mutation.payload)
  }
}

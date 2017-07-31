import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Modules
 */
import auth from './modules/auth'

/**
 * Plugins
 */
import dummy from './plugins/dummy'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth
  },
  plugins: [
    dummy
  ]
})

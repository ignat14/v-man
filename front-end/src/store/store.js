
import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {},

  modules: {
    login
  }

})

import { createStore } from 'vuex'
import { UserModule } from './User'

export default createStore({

  state: {},

  getters: {},

  // Mutations are functions that effect the STATE.
  mutations: {},

  // Action are functions that you call throughout your app that all Mutations.
  actions: {},

  modules: {
   User: UserModule
  }
})

export const UserModule = {
    namespaced: true,


    state: {
        user: null
      },
    
      getters: {},
    
      // Mutations are functions that effect the STATE.
      mutations: {
        SET_USER(state, user) {
          state.user = user
        }
      },
    
      // Action are functions that you call throughout your app that all Mutations.
      actions: {
        setUser({commit}, user) {
          commit('SET_USER', user)
        }
      },
}
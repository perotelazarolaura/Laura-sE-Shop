import { AuthData } from '@/models/AuthData'
import { createStore } from 'vuex'

export interface IState {
  authData: AuthData | null;
}
// It logs the user In and Out and checks if the user is logged in.
const store = createStore<IState>({
  state: {
    authData: null
  },
  mutations: {
    logout (state) {
      state.authData = null
    },
    login (state, authData: AuthData) {
      state.authData = authData
    }
  },
  getters: {
    authData (state) {
      return state.authData
    }
  }
})

export default store

import { createStore } from 'vuex'
import { cartModule } from './cartModule'
import { favoritesModule } from './favoritesModule'

export default createStore({
  state: {
    likes: 0,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart: cartModule,
    favorites: favoritesModule,
  }
})

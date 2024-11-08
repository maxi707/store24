export const favoritesModule = {
    state: () => ({
        favorites: new Map(),
    }),
    getters: {
    },
    mutations: {
        toggleFavorite(state, payload) {
            state.favorites = payload
        }
    },
    actions: {
        toggleFavorite(context, product) {
            const favorites = new Map(context.state.favorites)
            if (favorites.has(product.id)) {
                favorites.delete(product.id)
            } else {
                favorites.set(product.id, product)
            }
            context.commit('toggleFavorite', favorites)
        }
    },
    modules: {
    },
    namespaced: true
}

export const cartModule = {
    state: () => ({
        cart: new Map(),
    }),
    getters: {
    },
    mutations: {
        set(state, payload) {
            state.cart = payload
            // console.log(2,payload)
        }
    },
    actions: {
        add(context, v) {
            const product = v.product
            // console.log(1, v)
            const cart = new Map(context.state.cart)
            const obj = cart.get(product.id) || {}
            let count = obj.count || 0
            count += v.count
            if (count == 0) {
                cart.delete(product.id)
            } else {
                cart.set(product.id, {product, count})
            }
            context.commit('set', cart)
        },
        set(context, v) {
            const cart = new Map(context.state.cart)
            const product = v.product
            const count = +v.count
            if (count == 0) {
                cart.delete(product.id)
            } else {
                cart.set(product.id, {product, count})
            }
            context.commit('set', cart)
        },
        empty(context) {
            const cart = new Map()
            context.commit('set', cart)
        }
    },
    modules: {
    },
    namespaced: true
}

const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(action, id) {
            if (action == 'add') {
                this.cart.push(id)
            } else {
                this.cart.splice(this.cart.indexOf(id, 1))
            }
        }
    }
})

import { createStore } from 'vuex'
import contact from './modules/contact.js'

// Create a new store instance.
const storeOptions = {
    strict: true,
    state: {
        count: 10,
    },
    mutations: {
        increment(state) {
            state.count++
        },
        setCount(state, { val }) {
            console.log('val: ', val)
            state.count = val
        },
    },
    getters: {
        count(state) { return state.count }
    },
    modules: {
        contact
    }
}
const store = createStore(storeOptions)
export default store
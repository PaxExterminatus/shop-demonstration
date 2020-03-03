import Vue from 'vue';
import Vuex from 'vuex';
import Basket from './models/Basket';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        basket: new Basket(),
    },
    mutations: {
        basketProductAdd (state, product) {
            state.basket.products.push(product);
        }
    }
});

export {
    store,
}

export default store

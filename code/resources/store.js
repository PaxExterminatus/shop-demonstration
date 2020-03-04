import Vue from 'vue';
import Vuex from 'vuex';
import BasketStore from './models/BasketStore';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        basket: new BasketStore(),
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

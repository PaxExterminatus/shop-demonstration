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
            const other = state.basket.products.filter( (prod) =>  prod.id !== product.id);
            state.basket.products = [...other, product];
        }
    }
});

export {
    store,
}

export default store

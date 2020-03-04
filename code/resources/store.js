import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'
import BasketStore from './models/BasketStore';

const vuexPersist = new VuexPersist({
    key: 'shop-demonstration',
    storage: window.localStorage
});


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
    },
    plugins: [vuexPersist.plugin],
});

export {
    store,
}

export default store

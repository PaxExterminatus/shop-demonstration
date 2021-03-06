import Vue from 'vue'
import App from './components/app.vue'
import router from './router'
import store from './store'

Vue.component('icon', require('./components/svg/icon').default);
Vue.component('Basket', require('./components/layouts/Basket').default);
Vue.component('MobileMenu', require('./components/layouts/MobileMenu').default);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

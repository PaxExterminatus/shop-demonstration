import Vue from 'vue'
import App from './components/app.vue'
import {router} from './router'

Vue.component('icon', require('./components/svg/icon').default);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

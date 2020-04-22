require('./bootstrap');
require('./fontawesome');
window.Vue = require('vue');

Vue.component('user-info', require('./components/UserInfo.vue').default);
Vue.component('answer', require('./components/Answer.vue').default);


const app = new Vue({
    el: '#app',
});

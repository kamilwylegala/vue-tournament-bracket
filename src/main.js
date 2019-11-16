import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
// import { homedir } from 'os';

Vue.config.productionTip = false;

Vue.use(VueRouter);

// const NotFound = {template : '<p> this in the the page you are looking for </p>'}

const routes = [
    { path: '', component: App}
];

const router = new VueRouter({
    routes
});


new Vue({
    // data: {
    //     // currentRoute: window.location.pathname
    //     message: "Hi there"
    // },
    router,
    // computed: {
    //     ViewComponent () {
    //         console.log("aiuwehfuo")
    //         console.log(this.currentRoute)
    //         return routes[this.currentRoute] //TODO make a not found component
    //     }
    // },
    render: h => h(App)
}).$mount('#app');

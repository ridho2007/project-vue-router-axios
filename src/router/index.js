
// import { createRouter, createWebHistory, RouterLink } from "vue-router";
import HomeView from "../view/home.vue";
import Jakarta from "../view/jakarta.vue"
import jawabarat from "../view/jawabarat.vue"
import jawatengah from "../view/jawatengah.vue"
import jawatimur from "../view/jawatimur.vue"
import bali from "../view/bali.vue"

import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)
const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    
    {
        path: "/jakarta",
        name: "jakarta",
        component: Jakarta,
    },
    {
        path: "/jawabarat",
        name: "jawabarat",
        component: jawabarat,
    },
    {
        path: "/jawatengah",
        name: "jawatengah",
        component: jawatengah,
    },
    {
        path: "/jawatimur",
        name: "jawatimur",
        component: jawatimur,
    },
    {
        path: "/bali",
        name: "bali",
        component: bali,
    },

    
]
// const rounter = createRouter({
// history: createWebHistory(process.env.BASE_URL),
// routes,
// })
const router = new Router({
    routes,
    mode: "history",
})
export default router;
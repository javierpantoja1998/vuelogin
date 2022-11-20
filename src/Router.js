import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
import LoginComponent from './components/LoginComponent.vue';

const routes = [
    {
        path:"/", component:HomeComponent
    },
    {
        path:"/login", component:LoginComponent
    },
    {
        path:"/register", component:RegisterComponent
    }
]


const router = new createRouter({
    history:createWebHistory(),
    routes:routes
});

export default router;
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/menu',
        component: Menu,
        name: 'Menu'
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router
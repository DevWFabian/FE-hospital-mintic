import {
    createRouter,
    createWebHistory
} from 'vue-router'
import App from './App.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Paciente from './views/Paciente.vue'
const routes = [{
    path: '/',
    name: 'root',
    component: App
}, {
    path: '/login',
    name: "Login",
    component: Login
},
{
    path: '/home',
    name: "Home",
    component: Home
},
{
    path: '/paciente',
    name: "Paciente",
    component: Paciente
},

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router

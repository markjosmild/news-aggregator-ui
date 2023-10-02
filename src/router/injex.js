// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/results',
        name: 'results',
        component: Home
    },
    {
        path: '/how-to-play',
        name: 'how-to-play',
        component: Home
    },
    {
        path: '/prizes',
        name: 'prizes',
        component: Home
    },
    {
        path: '/faqs',
        name: 'faqs',
        component: Home
    },
    {
        path: '/news',
        name: 'news',
        component: Home
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
import { createWebHistory, createRouter } from 'vue-router'
import store from '../store'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../pages/index.vue'),
            children: [
                { path: '', name: 'home', component: () => import('../pages/home.vue') },
                { path: 'about', name: 'about', component: () => import('../pages/about.vue') },
                { path: 'services', name: 'services', component: () => import('../pages/services.vue') },
                { path: 'doctors', name: 'doctors', component: () => import('../pages/doctors.vue') },
                { path: 'contacts', name: 'contacts', component: () => import('../pages/contacts.vue') },
            ]
        },
        {
            path: '/admin',
            component: () => import('../pages/admin/admin.vue'),
            children: [
                { path: '', name: 'admin-appointments', component: () => import('../pages/admin/appointments.vue') },
                { path: 'reviews', name: 'admin-reviews', component: () => import('../pages/admin/reviews.vue') },
                { path: 'doctors', name: 'admin-doctors', component: () => import('../pages/admin/doctors.vue') },
                { path: 'services', name: 'admin-services', component: () => import('../pages/admin/services.vue') },
                { path: 'faqs', name: 'admin-faqs', component: () => import('../pages/admin/faqs.vue') },
            ],
            beforeEnter: (_, __, next) => {
                // if (store().isLogged) next()
                // else next('/login')
                next()
            }
        },
        {
            path: '/login',
            component: () => import('../pages/admin/login.vue')
        }
    ],
    scrollBehavior(to, _, savedPosition){
        if (to.hash) return { el: to.hash }
        else if (savedPosition) return savedPosition
        else return { top: 0 }
    },
})
import { createWebHistory, createRouter } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: () => import('../pages/index.vue') },
        { path: '/about', name: 'about', component: () => import('../pages/about.vue') },
        { path: '/services', name: 'services', component: () => import('../pages/services.vue') },
        { path: '/doctors', name: 'doctors', component: () => import('../pages/doctors.vue') },
        { path: '/doctor/:id', name: 'doctor', component: () => import('../pages/doctor.vue') },
        { path: '/contacts', name: 'contacts', component: () => import('../pages/contacts.vue') },
        { path: '/reviews', name: 'reviews', component: () => import('../pages/reviews.vue') },
    ]
})
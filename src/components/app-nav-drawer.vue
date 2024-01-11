<template>
    <div class="border bg-white absolute md:sticky top-0 h-[100vh] transition-all" :class="isOpen ? 'w-[220px]' : 'w-[57px]'">
        <div class="p-2 flex flex-col gap-1">
            <router-link v-for="link, i in links" :key="i" :to="link.url">
                <div class="px-2 py-1 rounded w-full overflow-hidden flex items-center gap-6 transition-all"
                    :class="route.fullPath === link.url ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-400/20'">
                    <i class="text-2xl" :class="link.icon"></i>
                    <span class="text-sm">{{ link.title }}</span>
                </div>
            </router-link>
        </div>

        <button @click="isOpen = !isOpen"
            class="bg-white rounded-full w-[30px] h-[30px] text-gray-500 border cursor-pointer absolute right-[-15px]">
            <i class="mdi mdi-chevron-right transition-all relative flex items-center justify-center"
                :class="!isOpen ? 'transform rotate-0' : 'transform rotate-180'"></i>
        </button>
    </div>
</template>
    
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()
const links = [
    { title: 'Home', icon: 'mdi mdi-view-grid', url: '/' },
    { title: 'Products', icon: 'mdi mdi-package', url: '/a' },
    { title: 'Categories', icon: 'mdi mdi-chart-donut', url: '/b' },
    { title: 'Brands', icon: 'mdi mdi-chart-pie', url: '/c' },
    { title: 'Users', icon: 'mdi mdi-account-group', url: '/d' },
    { title: 'Orders', icon: 'mdi mdi-cart-variant', url: '/i' },
    { title: 'Settings', icon: 'mdi mdi-cog', url: '/f' },
]
</script>
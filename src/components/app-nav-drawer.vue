<template>
    <div class="border z-30 bg-white absolute md:sticky top-0 h-[100vh] transition-all flex flex-col" :class="isOpen ? 'w-[220px]' : 'w-[57px]'">
        <div class="p-2 flex flex-col gap-1">
            <router-link v-for="link, i in admin_links" :key="i" :to="link.url">
                <div class="px-2 py-2 rounded w-full overflow-hidden flex whitespace-nowrap items-center gap-6 transition-all"
                    :class="current_router === link.url ? 'bg-purple-600 hover:bg-purple-500 text-white' : 'text-gray-500 hover:bg-gray-400/20'">
                    <div>
                        <component :is="link.icon" class="text-2xl" />
                    </div>
                    <span class="text-sm">{{ link.title }}</span>
                </div>
            </router-link>
        </div>

        <button @click="isOpen = !isOpen"
            class="bg-white rounded-full w-[30px] h-[30px] text-gray-500 border cursor-pointer absolute top-[40%] right-[-15px] flex items-center justify-center">
            <BxSolidChevronRight class="transition-all relative flex items-center justify-center"
                :class="!isOpen ? 'transform rotate-0' : 'transform rotate-180'" />
        </button>

        <div class="mt-auto flex-1 flex flex-col justify-end">
            <div class="p-2 flex flex-col gap-1">
                <div class="px-2 py-2 rounded w-full overflow-hidden flex items-center gap-6 transition-all active:bg-gray-400/40 text-gray-500 hover:bg-gray-400/20 cursor-pointer">
                    <div>
                        <BxLogOut class="text-2xl" />
                    </div>
                    <span class="text-sm">Выйти</span>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { admin_links } from '@/constants'
import { BxSolidChevronRight, BxLogOut } from "@kalimahapps/vue-icons"

const isOpen = ref(false)
const route = useRoute()
const current_router = computed(() => {
    if(route.fullPath.endsWith('/')) return route.fullPath.slice(0, -1)
    return route.fullPath
})
</script>
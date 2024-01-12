<template>
    <div class="w-full">
        <div class="container py-16">
            <div class="text-center pt-20 pb-10">
                <h1 class="font-medium text-purple-600 text-3xl">Наши услуги</h1>
                <p class="text-base text-gray-600">
                    Далеко-далеко за словесными горами в стране гласных
                </p>
            </div>
            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <site-service-card  v-for="item,i in all_services" :key="i" :item="item" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SiteServiceCard from '@/components/site-service-card.vue'
import { all_services } from '@/constants'
</script>
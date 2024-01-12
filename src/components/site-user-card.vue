<template>
<div class="border p-3 flex flex-col justify-between">
    <div class="flex justify-start gap-2 items-center">
        <div class="rounded-full w-[70px] h-[70px] overflow-hidden">
            <img :src="doctor.image" class="w-full h-full object-cover" alt="">
        </div>
        <div>
            <h1 class="font-medium">{{ doctor.name }}</h1>
            <h3 class="text-sm text-gray-600">{{ doctor.specialty }}</h3>
        </div>
    </div>
    <div class="mt-2 flex flex-1 flex-col gap-2">
        <p class="text-purple-600 text-sm font-normal">{{ doctor.experience }}</p>
        <p class="flex-1">{{ doctor.education }}</p>
        <div class="w-full flex justify-start gap-4">
            <a v-for="sc,i in social_links" :key="i" :href="sc.url">
                <component :is="sc.icon" class="text-gray-700 text-xl" />
            </a>
        </div>
        <button @click="$emit('send-appointment', doctor.name)" class="bg-purple-600 hover:bg-purple-500 text-white w-full py-2">Записаться на прием</button>
    </div>
</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { social_links } from '@/constants'

const { doctor } = defineProps<{ 
    doctor: {
        image: string,
        name: string,
        specialty: string,
        experience: string,
        education: string,
        languages: string[],
    },
}>()
</script>
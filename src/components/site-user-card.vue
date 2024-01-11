<template>
<div class="border px-3 py-2">
    <div class="flex justify-start gap-4 items-center">
        <div class="rounded-full w-[60px] h-[60px] overflow-hidden">
            <img :src="doctor.image" alt="">
        </div>
        <div>
            <h1 class="font-medium">{{ doctor.name }}</h1>
            <h3 class="text-sm text-gray-600">{{ doctor.specialty }}</h3>
        </div>
        <!-- <a href="#" class="text-purple-600 hover:underline">Записаться на прием &RightArrow;</a> -->
    </div>
    <div class="flex flex-col gap-2">
        <p class="mt-2 text-purple-600 text-sm font-normal">{{ doctor.experience }}</p>
        <p>{{ doctor.education }}</p>
        <div class="flex justify-start gap-4">
            <a v-for="sc,i in social_links" :key="i" :href="sc.url">
                <component :is="sc.icon" class="text-gray-700 text-xl" />
            </a>
        </div>
        <button class="mt-2 bg-purple-600 hover:bg-purple-500 text-white w-full py-2">Записаться на прием</button>
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
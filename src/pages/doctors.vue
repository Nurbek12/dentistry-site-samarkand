<template>
    <div class="w-full">
        <div class="container">
            <div class="min-h-[100vh] py-16 flex flex-col items-center">
                <div class="text-center pt-20 pb-10">
                    <h1 class="font-medium text-purple-600 text-3xl">Врачи нашей команды</h1>
                    <p class="text-base text-gray-600">
                        Далеко-далеко за словесными горами в стране гласных
                    </p>
                </div>
                <div class="w-full">
                    <div class="border p-2">
                        <img src="/images/doctors-2-image.jpg" class="w-full h-[550px] object-top object-cover" alt="">
                    </div>
                    <div class="grid py-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <site-user-card @send-appointment="$emit('open-dialog', $event)" v-for="doctor,i in doctors" :key="i" :doctor="doctor" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { doctors } from '@/constants'
import siteUserCard from '@/components/site-user-card.vue';
</script>
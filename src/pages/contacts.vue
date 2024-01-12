<template>
    <div class="w-full">
        <div class="container">
            <div class="min-h-[100vh] py-16 flex flex-col items-center">
                <div class="text-center pt-20 pb-10">
                    <h1 class="font-medium text-purple-600 text-3xl">Связаться с нами</h1>
                    <p class="text-base text-gray-600">
                        Далеко-далеко за словесными горами в стране гласных
                    </p>
                </div>
                <div class="w-full grid gap-3 grid-cols-1 md:grid-cols-2">
                    <site-contact-info />
                    <div class="p-2 border min-h-[400px]">
                        <iframe width="100%" height="100%" id="gmap_canvas"
                            :src="`https://maps.google.com/maps?q=samarkhand&t=&z=12&ie=UTF8&iwloc=&output=embed`"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SiteContactInfo from '@/components/site-contact-info.vue'
</script>
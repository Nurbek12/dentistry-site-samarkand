<template>
    <div class="bg-black">
        <div class="container py-4">
            <div class="w-full py-4 border-b grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <div class="flex flex-col items-start gap-3">
                    <p class="text-gray-300 text-sm">Карта сайта</p>
                    <router-link v-for="link,i in navigation_links" :key="i" :to="link.url"
                        class="text-white hover:underline">{{ link.title }}</router-link>
                </div>
                <div class="flex flex-col items-start gap-3">
                    <p class="text-gray-300 text-sm">Помощь и ЧЗВ</p>
                    <a v-for="link,i in faqs_links" :key="i" :href="link.url"
                        class="text-white hover:underline flex items-center gap-2" target="_blank">
                        {{ link.title }}
                    </a>
                </div>
                <div>
                    <div class="flex flex-col items-stretch gap-3">
                        <p class="text-gray-300 text-sm">Контакты</p>
                        <a v-for="link,i in contact_links" :key="i" href="/" class="text-white hover:underline inline-flex items-center gap-2" target="_blank">
                            <component :is="link.icon" />
                            {{ link.title }}
                        </a>
                    </div>
                    <div>
                        <p class="mt-4 text-gray-300 text-sm">В социальных сетях</p>
                        <div class="flex gap-4 mt-2">
                            <a v-for="link,i in social_links" :key="i" :href="link.url"
                                class="text-white hover:underline flex items-center gap-2" target="_blank">
                                <component :is="link.icon" class="h-5 w-5" />
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <p class="text-gray-300 text-sm">Описание футера</p>
                    <p class="text-white">Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Ему лучше не грустный вопроса ручеек текстов обеспечивает за щеке?</p>
                </div>
            </div>
            <div class="w-full pt-2 text-center text-thin text-gray-300">
                <span>Ⓒ Самарканд областная стоматология - {{ new Date().getFullYear() }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { navigation_links, social_links, contact_links, faqs_links } from '../constants'
</script>
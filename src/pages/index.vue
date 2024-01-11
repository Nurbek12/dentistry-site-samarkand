<template>
    <div class="w-full">
        <div class="flex items-center h-[100vh] bg-white">
            <div class="container">
                <div class="content max-w-full md:max-w-[600px] relative z-10 border-l-0 border-purple-600">
                    <h1 class="text-3xl text-purple-600 font-medium">Стоматологическая поликлиника в Самарканде</h1>
                    <p class="mt-4 text-base text-gray-600">Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Злых свое снова дал взгляд, то там это возвращайся своих запятой от всех наш всемогущая скатился дороге вопрос! Мир, пунктуация деревни?</p>
                    <div class="mt-4 text-gray-400 font-bold">Качественное лечение зубов по доступным ценам</div>
                    <div class="flex gap-2 mt-10">
                        <button class="bg-purple-600 hover:bg-purple-500 text-white px-3 py-2">Записаться на прием</button>
                        <button class="border-2 border-purple-600 text-purple-600 hover:bg-purple-500 hover:text-white px-3 py-2">Отправить отзыв</button>
                    </div>
                </div>
                <div class="md:block hidden absolute top-[230px] right-40 w-[450px] h-[400px] overflow-hidden" style="border-radius: 30% 70% 70% 30% / 30% 29% 71% 70%;">
                    <img src="/images/bg-image.jpg" class="w-full h-full object-cover">
                </div>
            </div>
        </div>
        <div>
            <div class="container">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-8">
                    <div v-for="item,i in index_card_items" :key="i" class="flex justify-center items-center flex-col text-center p-4 border" :class="{'md:border-l-0 border-l':i>0}">
                        <div class="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-purple-600/10">
                            <component :is="item.icon" class="w-8 h-8 text-purple-600" />
                        </div>
                        
                        <span class="">{{ item.title }}</span>
                        <p class="text-sm font-thin text-gray-600 mt-2">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-100">
            <div class="container py-16">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h1 class="font-normal text-xl mb-4">Далеко-далеко за словесными горами в стране.</h1>
                        <p class="text-gray-600 text-base">Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Повстречался имеет пустился единственное. Запятых грамматики, своих коварных, это текстами великий моей имеет о которое океана, ее пор она подпоясал!</p>
                        <br>
                        <p class="text-gray-600 text-base">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Составитель домах пунктуация имеет запятых на берегу коварный бросил не парадигматическая.</p>
                        <br>
                        <p class="text-gray-600 text-base">Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. За первую оксмокс жаренные рыбными сбить прямо необходимыми реторический безорфографичный текстами? Текстами запятой безорфографичный жизни.</p>
                        <br>
                        <button class="bg-purple-600 hover:bg-purple-500 text-white px-3 py-2">Подробнее</button>
                    </div>
                    <div class="border p-2">
                        <img src="/images/bg-2-image.jpg" class="h-full w-[100%] object-cover" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="container py-16">
                <div class="text-center mb-4">
                    <h1 class="font-normal text-xl">Далеко-далеко за словесными горами.</h1>
                    <p class="text-base text-gray-600">
                        Далеко-далеко за словесными горами в стране гласных
                    </p>
                </div>
                <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <site-service-card  v-for="item,i in service_cards" :key="i" :item="item" />
                </div>
            </div>
        </div>
        <div>
            <div class="container py-16">
                <div class="bg-purple-600 flex items-stretch relative">
                    <div class="w-full md:w-[50%] p-6">
                        <h1 class="text-normal text-xl text-white">Далеко-далеко за словесными горами.</h1>
                        <p class="text-white text-balance mt-2">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Необходимыми грамматики путь, там букв предложения всеми языком буквоград подзаголовок!</p>
                        <div class="flex flex-wrap justify-start items-center gap-2">
                            <input type="text" class="mt-4 text-base border-2 bg-white py-2 px-4 outline-none font-thin" placeholder="Напишите вопрос">
                            <button class="mt-2 sm:mt-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 px-4 py-2">Отправить вопрос</button>
                        </div>
                    </div>
                    <div class="absolute right-0 overflow-hidden hidden md:block w-[50%] h-full rounded-tl-full">
                        <img src="/images/bg-5-image.jpg" class=" w-full h-full object-cover" height="200">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="container py-8">
                <div class="text-center mb-4">
                    <h1 class="font-normal text-xl">Далеко-далеко за словесными горами.</h1>
                    <p class="text-base text-gray-600">
                        Далеко-далеко за словесными горами в стране гласных
                    </p>
                </div>
                <div>
                    <site-expand-item :items="site_faqs" />
                </div>
            </div>
        </div>
        <div>
            <div class="container py-8">
                <div class="text-center mb-4">
                    <h1 class="font-normal text-xl">Далеко-далеко за словесными горами.</h1>
                    <p class="text-base text-gray-600">
                        Далеко-далеко за словесными горами в стране гласных
                    </p>
                </div>
                <div class="grid py-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <site-user-card v-for="i in 4" :key="i" :doctor="doctors[i]" />
                </div>
            </div>
        </div>
        <div class="bg-purple-600">
            <div class="container py-10">
                <div class="text-center mb-4 text-white">
                    <h1 class="font-normal text-xl">Далеко-далеко за словесными.</h1>
                    <p class="text-base">
                        Далеко-далеко за словесными горами в стране гласных
                    </p>
                </div>
                <div class="flex items-center justify-center">
                    <site-review-form />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SiteUserCard from '@/components/site-user-card.vue'
import siteReviewForm from '@/components/site-review-form.vue'
import siteExpandItem from '@/components/site-expand-item.vue'
import SiteServiceCard from '@/components/site-service-card.vue'
import { index_card_items, service_cards, site_faqs, doctors } from '../constants'
</script>
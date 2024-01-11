<template>
    <div class="max-w-[600px] w-full bg-white p-4">
        <div class="text-center mb-4">
            <h1 class="font-medium text-xl">Форма отзыва</h1>
        </div>
        <form @submit.prevent>
            <div class="flex flex-wrap justify-between gap-2">
                <div class="w-full md:w-[49%] border">
                    <input required v-model="review.firstname" class="p-3 w-full outline-none text-sm" type="text" placeholder="Имя">
                </div>
                <div class="w-full md:w-[49%] border">
                    <input required v-model="review.lastname" class="p-3 w-full outline-none text-sm" type="text" placeholder="Фамилия">
                </div>
                <div class="w-full md:w-[49%] border">
                    <input required v-model="review.phone" class="p-3 w-full outline-none text-sm" type="text" placeholder="Телефон">
                </div>
                <div class="w-full md:w-[49%] border">
                    <input v-model="review.email" class="p-3 w-full outline-none text-sm" type="text" placeholder="Электрон почта">
                </div>
                <div class="border w-full">
                    <textarea required v-model="review.message" class="p-3 w-full outline-none text-sm resize-none" rows="4" type="text" placeholder="Отзыв" />
                </div>
                <div class="w-full">
                    <button type="submit" class="bg-purple-600 hover:bg-purple-500 text-white px-3 py-2 w-full">Отправить</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const review = reactive({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: ''
})
</script>
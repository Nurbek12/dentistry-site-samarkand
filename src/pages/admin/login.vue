<template>
<div class="h-[100vh] flex items-center justify-center">
    <div class="max-w-[450px] w-full p-4 border">
        <form @submit.prevent class="w-full">
            <h1 class="text-xl font-medium text-center text-purple-600">Войти в систему</h1>
            <div class="w-full mt-4 border">
                <input required v-model="form_data.login" class="p-3 w-full outline-none text-sm" type="text" placeholder="Логин">
            </div>
            <div class="w-full mt-4 border">
                <input type="password" required v-model="form_data.password" class="p-3 w-full outline-none text-sm" placeholder="Пароль">
            </div>
            <div class="w-full mt-4">
                <button type="submit" class="bg-purple-600 hover:bg-purple-500 text-white px-3 py-2 w-full">Отправить</button>
            </div>
        </form>
    </div>
</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form_data = reactive({
    login: '',
    password: ''
})
</script>
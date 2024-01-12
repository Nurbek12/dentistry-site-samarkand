<template>
    <div class="w-full p-2">
        <div class="p-2 flex bg-white border justify-between items-center gap-2">
            <div class="border w-full max-w-[300px]">
                <input @input="searchItems" type="text" class="px-3 py-2 w-full text-sm outline-none" placeholder="Поиск">
            </div>
        </div>
        <div class="border w-full rounded mt-2">
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Имя и фамилия
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Телефон
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Доктор
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Дата
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Управлять
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item,i in items" :key="i" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs text-balance">{{ item.name }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs text-balance">{{ item.phone }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs text-balance">{{ item.doctor }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs text-balance">{{ item.created_at }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="flex gap-1">
                                    <button @click="checkItem(item.id!, i)" :disabled="item.checked" class="bg-purple-600 hover:bg-purple-500 disabled:bg-purple-300 text-white text-xs px-3 py-2">{{item.checked?"Проверено":"Проверять"}}</button>
                                    <button @click="deleteItem(item.id!, i)" class="bg-purple-600 hover:bg-purple-500 text-white text-xs px-3 py-2">Удалить</button>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="py-2 flex items-center justify-between">
            <div class="border w-full max-w-[100px]">
                <select v-model="limit" class="px-3 py-2 w-full text-sm outline-none" placeholder="Поиск">
                    <option :value="20" selected>20</option>
                    <option :value="50">50</option>
                    <option :value="100">100</option>
                </select>
            </div>
            <div class="border flex items-center justify-between gap-4 bg-white p-2">
                <span class="text-sm">1-20 / {{ count }}</span>
                <div class="flex items-center gap-2">
                    <button @click="page--" class="bg-purple-600 hover:bg-purple-500 text-white text-xs px-3 py-2">
                        <AkChevronLeft />
                    </button>
                    <button @click="page++" class="bg-purple-600 hover:bg-purple-500 text-white text-xs px-3 py-2">
                        <AkChevronRight />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { debounce } from 'lodash'
import { Appointment } from '@/types'
import { appointments } from '@/constants'
import { ref, computed } from 'vue'
import { AkChevronRight, AkChevronLeft } from '@kalimahapps/vue-icons'

const search = ref('')
const page = ref<number>(1)
const count = ref<number>(0)
const limit = ref<number>(20)
const items = ref<Appointment[]>([])

const qs = computed(() => {
    const params = new URLSearchParams();

    if (page.value) 
        params.append('page', String(page.value))

    if (limit.value) 
        params.append('limit', String(limit.value))

    if (search.value.trim())
        params.append('search', search.value)

    return '?'+params.toString()
})

const searchItems = debounce((e: any) => {
    search.value = e.target.value
    page.value = 1
}, 500)

const getItems = async () => {
    console.log(qs.value)
    items.value = appointments
}

const deleteItem = async (id: number, index: number) => {
    if(!confirm('Вы хотите удалить это?')) return
    console.log('Deleted', id)
    items.value.splice(index, 1)
}

const checkItem = async (id: number, index: number) => {
    if(!confirm('Вы чекали это?')) return
    console.log('check', id)
    Object.assign(items.value[index], { checked: true })
}

getItems()
</script>
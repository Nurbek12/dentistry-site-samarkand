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
                                Вопрос
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ответ
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Управлять
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item,i in items" :key="i" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs text-balance">{{ item.title }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs text-balance">{{ item.content }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="flex gap-1">
                                    <button @click="editItem(item, i)" class="bg-purple-600 hover:bg-purple-500 text-white text-xs px-3 py-2">{{ item.publish?'Скрыть':'Публиковать' }}</button>
                                    <button @click="editItem(item, i)" class="bg-purple-600 hover:bg-purple-500 text-white text-xs px-3 py-2">Изменить</button>
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
    <app-dialog title="Изменить ответ" :open="dialog" @close-dialog="close">
        <form @submit.prevent="save" class="mt-4 flex flex-col gap-4">
            <div class="w-full border">
                <textarea readonly required v-model="faqs.title" class="text-sm p-2 w-full outline-none resize-none" rows="4" type="text" placeholder="Название" />
            </div>
            <div class="w-full border">
                <textarea required v-model="faqs.content" class="text-sm p-2 w-full outline-none resize-none" rows="4" type="text" placeholder="Описание" />
            </div>
            <button type="submit" class="bg-purple-600 hover:bg-purple-500 text-white text-sm px-3 py-2">Сохранить</button>
        </form>
    </app-dialog>
</template>

<script setup lang="ts">
import { debounce } from 'lodash'
import { FAQs } from '@/types'
import { site_faqs } from '@/constants'
import { ref, reactive, computed } from 'vue'
import AppDialog from '@/components/app-dialog.vue'
import { AkChevronRight, AkChevronLeft } from '@kalimahapps/vue-icons'

const search = ref('')
const dialog = ref(false)
const page = ref<number>(1)
const count = ref<number>(0)
const limit = ref<number>(20)
const items = ref<FAQs[]>([])
const itemIndex = ref<number|null>(null)
const faqs = reactive<FAQs>({
    title: "",
    content: "",
    publish: false,
})

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
    items.value = site_faqs
}

const editItem = (item: FAQs, index: number) => {
    Object.assign(faqs, item)
    itemIndex.value = index
    dialog.value = true
}

const deleteItem = async (id: number, index: number) => {
    if(!confirm('Вы хотите удалить это?')) return
    console.log('Deleted', id)
    items.value.splice(index, 1)
}

const save = async () => {
    Object.assign(items.value[itemIndex.value!], faqs)
    close()
}

const close = () => {
    Object.assign(faqs, {
        title: "",
        content: "",
        publish: false,
    })
    dialog.value = false
    itemIndex.value = null
}

getItems()
</script>
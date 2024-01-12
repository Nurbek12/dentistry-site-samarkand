<template>
    <div class="w-full p-2">
        <div class="p-2 flex bg-white border justify-between items-center gap-2">
            <div class="border w-full max-w-[300px]">
                <input @input="searchItems" type="text" class="px-3 py-2 w-full text-sm outline-none" placeholder="Поиск">
            </div>
            <button @click="dialog=true" class="bg-purple-600 hover:bg-purple-500 text-white text-xs px-3 py-2">Добавить</button>
        </div>
        <div class="border w-full rounded mt-2">
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Иконок
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Название
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Цена
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Описание
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Управлять
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item,i in items" :key="i" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="w-[40px] h-[40px] bg-purple-600/10 p-1 overflow-hidden">
                                    <img :src="item.icon||'/icons/crown.png'" alt="">
                                </div>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs text-balance">{{ item.title }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs">{{ item.price }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs text-balance">{{ item.description }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="flex gap-1">
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
    <app-dialog :title="itemIndex==null?'Добавить услугу':'Изменить услугу'" :open="dialog" @close-dialog="close">
        <form @submit.prevent="save" class="mt-4 flex flex-col gap-4">
            <div class="flex items-center justify-center">
                <label for="file-input" class="cursor-pointer">
                    <div class="w-[120px] h-[120px] border-2 hover:bg-purple-600/10 border-purple-600 p-1 overflow-hidden rounded-full">
                        <img :src="currentImage" class="w-full rounded-full h-full object-cover" alt="">
                    </div>
                </label>
            </div>
            <div class="w-full border">
                <input required v-model="service.title" class="text-sm p-2 w-full outline-none" type="text" placeholder="Название">
            </div>
            <div class="w-full border">
                <input required v-model="service.price" class="text-sm p-2 w-full outline-none" type="number" min="0" placeholder="Цена">
            </div>
            <div class="w-full border">
                <textarea required v-model="service.description" class="text-sm p-2 w-full outline-none resize-none" rows="4" type="text" placeholder="Описание" />
            </div>
            <div class="w-full" hidden>
                <input @change="onFileChange" id="file-input" accept="image/*" type="file" placeholder="Фото для ава">
            </div>
            <button type="submit" class="bg-purple-600 hover:bg-purple-500 text-white text-sm px-3 py-2">Сохранить</button>
        </form>
    </app-dialog>
</template>

<script setup lang="ts">
import { debounce } from 'lodash'
import { Service } from '@/types'
import { all_services } from '@/constants'
import { ref, reactive, computed } from 'vue'
import AppDialog from '@/components/app-dialog.vue'
import { AkChevronRight, AkChevronLeft } from '@kalimahapps/vue-icons'

const search = ref('')
const dialog = ref(false)
const page = ref<number>(1)
const file = ref<any>(null)
const count = ref<number>(0)
const limit = ref<number>(20)
const items = ref<Service[]>([])
const itemIndex = ref<number|null>(null)
const service = reactive<Service>({
    description: "",
    title: "",
    price: ""
})

const currentImage = computed(() => {
    if(file.value) return URL.createObjectURL(file.value)
    else if(itemIndex.value!==null) return items.value[itemIndex.value]?.icon || '/images/nophoto.jpg'
    else return '/images/nophoto.jpg'
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
    items.value = all_services
}

const onFileChange = (e: any) => {
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length) return file.value = null
  return file.value = files[0]
}

const editItem = (item: Service, index: number) => {
    Object.assign(service, item)
    itemIndex.value = index
    dialog.value = true
}

const deleteItem = async (id: number, index: number) => {
    if(!confirm('Вы хотите удалить это?')) return
    console.log('Deleted', id)
    items.value.splice(index, 1)
}

const save = async () => {
    const form_data = new FormData()
    Object.keys(service).map((key) => {
        form_data.append(key, (service as any)[key])
    })
    
    if(file.value) form_data.append('file', file.value)

    if(itemIndex !== null) {
        Object.assign(items.value[itemIndex.value!], service)
    } else {
        items.value.push(service)
    }

    close()
}

const close = () => {
    Object.assign(service, {
        description: "",
        title: "",
        price: ""
    })
    file.value = null
    dialog.value = false
    itemIndex.value = null
}

getItems()
</script>
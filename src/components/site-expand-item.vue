<template>
    <div class="flex flex-col gap-2">
        <div v-for="item,i in items" :key="i">
            <div class="flex justify-between items-center p-2 bg-gray-100">
                <h1 class="font-medium">{{ i+1 }}. {{ item.title }}</h1>
                <button @click="openExpand(i)" class="rounded-full p-2 border">
                    <AkChevronUp :class="i===opened?'rotate-0':'rotate-180'" />
                </button>
            </div>
            <div class="border p-2" :class="i===opened?'block':'hidden'">
                <p><em>Ответ</em>: {{ item.content }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { AkChevronUp } from "@kalimahapps/vue-icons"

const opened = ref<number>(-1)
const { items } = defineProps<{ 
    items: {
        title: string,
        content: string
    }[] 
}>()

const openExpand = (i: number) => {
    opened.value = i === opened.value ? -1 : i
}
</script>
<template>
<div class="p-4 border flex flex-col gap-2 items-start">
    <div class="flex gap-2 items-center">
        <div class="w-[50px] h-[50px] p-2 bg-purple-600/10">
            <img :src="item.icon" alt="">
        </div>
        <span class="font-medium text-lg">{{ item.title }}</span>
    </div>
    <p class="text-gray-600 text-base flex-1">{{ item.description }}</p>
    <div>
        <a href="#" class="text-purple-600 hover:underline">Подробнее &RightArrow;</a>
    </div>
</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const { item } = defineProps<{item: {
    icon: string,
    title: string,
    description: string,
}}>()
</script>
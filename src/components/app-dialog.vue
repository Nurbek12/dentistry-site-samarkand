<template>
    <transition name="fade">
        <div v-if="open" @click="$emit('close-dialog')" class="fixed flex items-center z-50 justify-center w-full h-full inset-0 bg-black/20 backdrop-blur-sm transition">
            <div class="bg-white border p-4 max-w-[500px] w-full" @click.stop>
                <h1 class="text-purple-600 font-normal text-xl">{{ props.title || 'App Dialog' }}</h1>
                <slot />
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

const props = defineProps<{title: string, open: boolean}>()
const { open } = toRefs(props)
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.05s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
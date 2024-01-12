<template>
    <select class="border-2 p-1 pt-0 outline-none text-purple-600 border-purple-600">
        <option v-for="l,i in languages" :key="i" @click="changeLang(l.lang)">{{ l.title }}</option>
    </select>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { languages } from '@/constants'

const { locale } = useI18n()
const changeLang = (l: string) => {
  console.log(l)
  localStorage.setItem('site-language', l)
  locale.value = l
}
</script>
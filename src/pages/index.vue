<template>
  <div>
    <site-nav-bar @open-drawer="drawer=!drawer" :drawer="drawer" />
    <site-nav-drawer :drawer="drawer" />
    <main class="min-h-[100vh]">
      <router-view @open-dialog="openAppointment" />
    </main>
    <site-footer />
    <app-dialog title="ЗАПИСЬ К СПЕЦИАЛИСТУ" :open="dialog" @close-dialog="dialog=false">
      <form @submit.prevent="send" class="mt-4 flex flex-col gap-4">
        <div class="w-full border">
            <input required v-model="appointment.name" class="text-sm p-2 w-full outline-none" type="text" placeholder="Ваше имя">
        </div>
        <div class="w-full border">
            <input required v-model="appointment.phone" class="text-sm p-2 w-full outline-none" type="text" placeholder="Телефон">
        </div>
        <button type="submit" class="bg-purple-600 hover:bg-purple-500 text-white text-sm px-3 py-2">Отправить</button>
      </form>
    </app-dialog>
  </div>
</template>
    
<script setup lang="ts">
import { ref, reactive } from 'vue'
import AppDialog from '@/components/app-dialog.vue'
import SiteFooter from '@/components/site-footer.vue'
import SiteNavBar from '@/components/site-nav-bar.vue'
import SiteNavDrawer from '@/components/site-nav-drawer.vue'

const dialog = ref(false)
const drawer = ref(false)
const appointment = reactive({
  name: "",
  phone: "",
})

const openAppointment = (doctor: number | undefined) => {
  if(doctor !== undefined) Object.assign(appointment, { doctor })
  dialog.value = true
}

const send = () => {
  console.log(appointment)
  Object.assign(appointment, { 
    name: "",
    phone: "",
  })
}
</script>
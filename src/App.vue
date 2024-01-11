<template>
  <div>
    <site-nav-bar @open-drawer="drawer=!drawer" :drawer="drawer" />
    <site-nav-drawer :drawer="drawer" />
    <main class="min-h-[100vh]">
      <router-view />
    </main>
    <site-footer />
  </div>
  <!-- <site-loader /> -->
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
// import SiteLoader from './components/site-loader.vue'
import SiteFooter from './components/site-footer.vue'
import SiteNavBar from './components/site-nav-bar.vue'
import SiteNavDrawer from './components/site-nav-drawer.vue'

const drawer = ref(false)
</script>
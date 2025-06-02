<template>
  <div class="mx-auto">
    <NavBar />
    <div style="min-height: calc(100vh - 264px);">
      <router-view />
    </div>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { useNewsStore } from "./stores/news";
import { onMounted } from "vue";
const newsStore = useNewsStore();

onMounted(async () => {
  await newsStore.getNews();
  await newsStore.getAchievements();
  await newsStore.getYouTubes();
});
</script>

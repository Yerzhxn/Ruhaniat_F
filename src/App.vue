<template>
  <div class="mx-auto">
    <NavBar />
    <router-view />
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
});
</script>

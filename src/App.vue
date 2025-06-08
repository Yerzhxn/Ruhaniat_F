<template>
  <div class="mx-auto">
    <NavBar />
    <div style="min-height: calc(100vh - 264px)" v-if="!loading">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { useNewsStore } from "./stores/news";
import { onMounted, ref } from "vue";

const newsStore = useNewsStore();
const loading = ref(true);

onMounted(async () => {
  try {
    await Promise.all([
      newsStore.getNews(),
      newsStore.getAchievements(),
      newsStore.getYouTubes(),
      newsStore.getPartners(),
      newsStore.getBanners(),
    ]);
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  } finally {
    loading.value = false;
  }
});
</script>

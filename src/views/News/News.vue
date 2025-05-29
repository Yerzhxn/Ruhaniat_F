<template>
  <div class="container mx-auto px-[20px] md:px-[100px] py-[140px]">
    <div class="flex justify-between items-center">
      <p class="text-[24px]">Новости</p>
    </div>
    <div class="grid md:grid-cols-3 gap-5 pt-10">
      <NewsCard v-for="item in news" :data="item" :key="item.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import NewsCard from "../../components/NewsCard.vue";
import { useNewsStore } from "../../stores/news";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const newsStore = useNewsStore();
const { news } = storeToRefs(newsStore);

onMounted(async () => {
  await newsStore.getNews();
});
</script>

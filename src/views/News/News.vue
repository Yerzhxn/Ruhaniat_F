<template>
  <div class="container mx-auto px-[20px] py-[140px]">
    <img
      src="../../assets/img/oyu_2.png"
      alt=""
      class="absolute md:w-[600px] h-[600px] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 -z-10"
    />
    <div class="flex items-center">
      <p class="text-[24px]">Жаңалықтар</p>
    </div>
    <div class="md:grid md:grid-cols-3 gap-5 pt-10">
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

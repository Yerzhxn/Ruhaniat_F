<template>
  <div class="container mx-auto px-[20px] md:px-[100px] py-[140px] relative">
    <img
      src="../../assets/img/oyu_2.png"
      alt=""
      class="absolute md:w-[600px] h-[600px] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 -z-10"
    />
    <div class="flex justify-between items-center">
      <p class="text-[24px]">You-Tube</p>
    </div>
    <div class="grid md:grid-cols-3 gap-5 pt-10">
      <YouTubeCard v-for="item in youTubes" :data="item" :key="item.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import YouTubeCard from "../../components/YouTubeCard.vue";
import { useNewsStore } from "../../stores/news";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const newsStore = useNewsStore();
const { youTubes } = storeToRefs(newsStore);

onMounted(async () => {
  await newsStore.getNews();
});
</script>

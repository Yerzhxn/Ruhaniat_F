<template>
  <div class="container mx-auto px-[100px] py-[140px]">
    <div v-if="loading" class="flex justify-center items-center">
      <a-spin :spinning="loading" size="large" />
    </div>
    <div class="" v-else>
      <img
        :src="API_URL + currentYouTube.image.url"
        alt=""
        class="w-full h-[400px] object-cover rounded-xl mb-4"
      />
      <p class="text-[24px]">{{ currentYouTube.title }}</p>
      <p class="text-xs text-gray-500">
        {{ currentYouTube.createdAt.split("T")[0] }}
      </p>
      <div
        v-html="currentYouTube.description"
        class="pt-10 text-[16px] text-gray-500"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useNewsStore } from "../../stores/news";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { API_URL } from "../../env";

const route = useRoute();
const newsId = route.params.id;
const loading = ref(true);

const newsStore = useNewsStore();
const { currentYouTube } = storeToRefs(newsStore);

onMounted(async () => {
  await newsStore.getCurrentYouTube(newsId);
  loading.value = false;
});
</script>

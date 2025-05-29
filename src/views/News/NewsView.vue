<template>
  <div class="container mx-auto px-[20px] md:px-[100px] py-[140px]">
    <div v-if="loading" class="flex justify-center items-center">
      <a-spin :spinning="loading" size="large" />
    </div>
    <div class="" v-else>
      <img
        :src="API_URL + currentNews.image.url"
        alt=""
        class="w-full h-[400px] object-cover rounded-xl mb-4"
      />
      <p class="text-[24px]">{{ currentNews.title }}</p>
      <p class="text-xs text-gray-500">
        {{ currentNews.createdAt.split("T")[0] }}
      </p>
      <div
        v-html="currentNews.description"
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
const { currentNews } = storeToRefs(newsStore);

onMounted(async () => {
  await newsStore.getCurrentNews(newsId);
  loading.value = false;
});
</script>

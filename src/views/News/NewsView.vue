<template>
  <div class="container mx-auto px-[20px] md:px-[100px] py-[30px]">
    <div v-if="loading" class="flex justify-center items-center">
      <a-spin :spinning="loading" size="large" />
    </div>

    <!-- Родитель с clearfix -->
    <div v-else class="clearfix">
      <div>
        <img
          :src="API_URL + currentNews.image.url"
          alt=""
          class="w-full md:w-[50%] md:float-left md:mr-6 mb-4 rounded-xl object-cover"
        />
        <p class="text-[24px] font-bold">{{ currentNews.title }}</p>
        <p class="text-xs text-gray-500 mb-4">
          {{ currentNews.createdAt.split("T")[0] }}
        </p>
        <div
          v-html="currentNews.description"
          class="text-[16px] text-gray-700"
        />
        <div class="mt-4 clear-both text-white">
          asd
        </div>
      </div>
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
const item = route?.state?.item;
onMounted(async () => {
  await newsStore.getCurrentNews(newsId);
  loading.value = false;
});
</script>

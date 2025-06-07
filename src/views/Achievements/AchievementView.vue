<template>
  <div class="container mx-auto px-[20px] md:px-[100px] py-[140px]">
    <div v-if="loading" class="flex justify-center items-center">
      <a-spin :spinning="loading" size="large" />
    </div>
    <div class="" v-else>
      <img
        :src="API_URL + currentAchievement.image.url"
        alt=""
        class="w-full h-[400px] object-cover rounded-xl mb-4"
      />
      <p class="text-[24px]">{{ currentAchievement.title }}</p>
      <p class="text-xs text-gray-500">
        {{ currentAchievement.createdAt.split("T")[0] }}
      </p>
      <div
        v-html="currentAchievement.description"
        class="pt-10 text-[16px] text-gray-500"
      />
      <a
        :href="currentAchievement.link"
        target="_blank"
        class="text-[16px] text-blue-500"
      >
        <a-button type="primary" class="mt-4"> Жобаға өту </a-button>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useNewsStore } from "../../stores/news";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { API_URL } from "../../env";
import { ArrowRightOutlined } from "@ant-design/icons-vue";

const route = useRoute();
const newsId = route.params.id;
const loading = ref(true);

const newsStore = useNewsStore();
const { currentAchievement } = storeToRefs(newsStore);
const item = route?.state?.item;
onMounted(async () => {
  await newsStore.getCurrentAchievement(newsId);
  loading.value = false;
});
</script>

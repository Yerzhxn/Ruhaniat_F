<template>
  <div class="container mx-auto px-[20px] md:px-[100px] py-[30px]">
    <div v-if="loading" class="flex justify-center items-center">
      <a-spin :spinning="loading" size="large" />
    </div>

    <!-- Родитель с clearfix -->
    <div v-else class="clearfix">
      <div>
        <img
          :src="API_URL + currentAchievement.image.url"
          alt=""
          class="w-full md:w-[50%] md:float-left md:mr-6 mb-4 rounded-xl object-cover"
        />
        <p class="text-[24px] font-bold">{{ currentAchievement.title }}</p>
        <p class="text-xs text-gray-500 mb-4">
          {{ currentAchievement.createdAt.split("T")[0] }}
        </p>
        <div
          v-html="currentAchievement.description"
          class="text-[16px] text-gray-700"
        />
        <div class="mt-4 clear-both">
          <a
            :href="currentAchievement.link"
            target="_blank"
            class="text-[16px] text-blue-500 inline-block"
          >
            <a-button type="primary">Жобаға өту</a-button>
          </a>
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

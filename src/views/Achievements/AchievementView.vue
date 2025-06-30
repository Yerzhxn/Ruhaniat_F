<template>
  <div class="container mx-auto px-[20px] md:px-[100px] py-[30px]">
    <div v-if="loading" class="flex justify-center items-center">
      <a-spin :spinning="loading" size="large" />
    </div>

    <div v-else class="clearfix">
      <div>
        <img
          :src="API_URL + currentAchievement.image.url"
          alt=""
          class="w-full md:w-[50%] md:float-left md:mr-6 mb-4 rounded-xl object-cover"
        />
        <p class="text-[24px] font-bold">
          {{ locale === 'ru' && currentAchievement.titleRu ? currentAchievement.titleRu : currentAchievement.title }}
        </p>
        <p class="text-xs text-gray-500 mb-4">
          {{ currentAchievement.createdAt.split("T")[0] }}
        </p>
        <div
          class="text-[16px] text-gray-700"
          v-html="locale === 'ru' && currentAchievement.descriptionRu ? currentAchievement.descriptionRu : currentAchievement.description"
        />
        <div class="mt-4 clear-both">
          <a
            :href="currentAchievement.link"
            target="_blank"
            class="text-[16px] text-blue-500 inline-block"
          >
            <a-button type="primary">{{ $t('next') }}</a-button>
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
import { useI18n } from "vue-i18n";

const { locale } = useI18n(); // реактивно следим за языком

const route = useRoute();
const newsId = route.params.id;
const loading = ref(true);

const newsStore = useNewsStore();
const { currentAchievement } = storeToRefs(newsStore);

onMounted(async () => {
  await newsStore.getCurrentAchievement(newsId);
  loading.value = false;
});
</script>


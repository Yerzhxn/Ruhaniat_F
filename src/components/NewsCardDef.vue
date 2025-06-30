<template>
  <div>
    <img
      class="w-full h-[200px] rounded-xl object-fill mb-3"
      alt="example"
      :src="API_URL + data.image?.url"
    />
    <p
      @click="$router.push(`/achievements/${data.documentId}`)"
      class="text-[18px] md:text-[24px] hover:text-gray-200 cursor-pointer transition-all duration-300 font-bold mb-1"
    >
      {{ locale === 'ru' && data.titleRu ? data.titleRu : data.title }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { API_URL } from "../env";
import { useI18n } from "vue-i18n";

const { locale } = useI18n(); // реактивное значение locale

defineProps<{
  data: {
    title: string;
    titleRu?: string;
    image?: { url: string };
    documentId: string | number;
  };
}>();
</script>

<style scoped></style>

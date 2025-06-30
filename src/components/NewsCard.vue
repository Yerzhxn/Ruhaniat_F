<template>
  <a-card hoverable>
    <template #cover>
      <img
        :alt="data.title"
        :src="API_URL + data.image.url"
        class="w-full h-[200px] object-cover rounded-xl"
        loading="lazy"
      />
    </template>
    <a-card-meta>
      <template #title>
        <p
          @click="$router.push(`/news/${data.documentId}`)"
          class="text-[16px] transition-colors duration-300 hover:text-[#00B5C0] cursor-pointer line-clamp-2"
        >
          {{ locale === 'ru' && data.titleRu ? data.titleRu : data.title }}
        </p>
      </template>
      <template #description>
        <p
          v-html="locale === 'ru' && data.descriptionRu ? data.descriptionRu : data.description"
          class="text-[14px] !text-gray-500 line-clamp-2 break-words"
        />
      </template>
    </a-card-meta>
  </a-card>
</template>

<script setup lang="ts">
import { API_URL } from "../env";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

defineProps<{
  data: {
    title: string;
    titleRu?: string;
    description: string;
    descriptionRu?: string;
    image: { url: string };
    documentId: string | number;
  };
}>();
</script>

<style scoped>
.ant-card {
  transition: transform 0.2s ease;
}
.ant-card:hover {
  transform: translateY(-4px);
}
</style>

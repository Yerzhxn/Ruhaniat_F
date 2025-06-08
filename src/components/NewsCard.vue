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
          {{ data.title }}
        </p>
      </template>
      <template #description>
        <p
          v-html="data.description"
          class="text-[14px] !text-gray-500 line-clamp-2 break-words"
        />
      </template>
    </a-card-meta>
  </a-card>
</template>

<script setup lang="ts">
import { API_URL } from "../env";

interface NewsData {
  documentId: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
}

defineProps<{
  data: NewsData;
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

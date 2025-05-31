<template>
  <a-card>
    <template #cover>
      <img
        alt=""
        :src="API_URL + data.image.url"
        class="w-full h-[200px] object-cover rounded-xl"
      />
    </template>
    <a-card-meta>
      <template #title>
        <p
          @click="$router.push(`/news/${data.documentId}`)"
          class="text-[18px] md:text-[24px] hover:text-gray-200 cursor-pointer transition-all duration-300 font-bold mb-1"
        >
          {{ data.title }}
        </p>
      </template>
      <template #description>
        <p
          v-html="data.description"
          class="text-[14px] !text-gray-500 line-clamp-2"
        />
      </template>
    </a-card-meta>
  </a-card>
</template>

<script setup lang="ts">
import { API_URL } from "../env";

const props = defineProps<{
  data: any;
}>();
</script>

<style scoped></style>

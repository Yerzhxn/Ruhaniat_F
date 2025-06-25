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
      {{ data.title }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { API_URL } from "../env";

defineProps<{
  data: any;
}>();
</script>

<style scoped></style>

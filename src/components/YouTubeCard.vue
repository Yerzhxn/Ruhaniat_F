<template>
  <div>
    <img
      class="w-full h-[200px] rounded-xl object-cover mb-3"
      alt="example"
      :src="API_URL + data.image?.url"
    />
    <a
      :href="data.link"
      target="_blank"
      class="text-[18px] md:text-[24px] cursor-pointer transition-all duration-300 font-bold mb-1"
    >
      {{ data.title }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { API_URL } from "../env";

defineProps<{
  data: any;
}>();
</script>

<style scoped></style>

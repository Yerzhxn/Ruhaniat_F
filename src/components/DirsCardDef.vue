<template>
  <div class="grid place-items-center">
    <p
      @click="$router.push(`/dirs/${data.documentId}`)"
      class="text-[18px] md:text-[24px] hover:text-gray-200 cursor-pointer transition-all duration-300 font-medium mb-1"
    >
      {{ data.name }}
    </p>
    <p
      @click="$router.push(`/dirs/${data.documentId}`)"
      class="text-[16px] md:text-[20px] hover:text-gray-200 cursor-pointer transition-all duration-300 font-medium mb-1"
    >
      {{ data.lauazym }}
    </p>
    <img
      class="w-[200px] h-[200px] rounded-full object-cover mt-[20px]"
      alt="example"
      :src="API_URL + data.image?.url"
    />
    
    <p 
      v-html="data.description"
      class="text-[16px] line-clamp-2 text-gray-500 w-[300px] mt-[20px]"
    />
  </div>
</template>

<script setup lang="ts">
import { API_URL } from "../env";

defineProps<{
  data: any;
}>();
</script>

<style scoped></style>

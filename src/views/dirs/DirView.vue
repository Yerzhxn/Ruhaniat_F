<template>
  <div class="container mx-auto px-[20px] md:px-[100px] py-[140px]">
    <div v-if="loading" class="flex justify-center items-center">
      <a-spin :spinning="loading" size="large" />
    </div>
    <div class="flex" v-else>
      <img
        :src="API_URL + currentDir.image.url"
        alt=""
        class="w-[300px] h-[300px] object-cover rounded-full mb-4"
      />
      <div class="place-content-center px-[40px]">
        <p class="text-[24px]">{{ currentDir.name }}</p>
        <p class="text-[20px] text-gray-500">
          {{ currentDir.lauazym}}
        </p>
        <p class="text-[20px] text-gray-500">
          {{ currentDir.description}}
        </p>

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

const route = useRoute();
const newsId = route.params.id;
const loading = ref(true);

const newsStore = useNewsStore();
const { currentDir } = storeToRefs(newsStore);

onMounted(async () => {
  await newsStore.getCurrentDir(newsId);
  loading.value = false;
});
</script>

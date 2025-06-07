<template>
  <div class="p-4 container mx-auto text-[#00B5C0]">
    <h1 class="text-2xl font-semibold mb-4">Іздеу нәтижелері</h1>
    <div v-if="results.length === 0">Нәтиже табылмады.</div>
    
    <div v-else class="space-y-4 grid md:grid-cols-3 gap-4 ">
      <template v-for="item in results" :key="item.id">
        <div v-if="item.type === 'news'">
          <NewsCard :data="item" />
        </div>

        <div v-else-if="item.type === 'achievement'">
          <NewsCardDef :data="item" />
        </div>

        <div v-else-if="item.type === 'youtube'">
          <YouTubeCard :data="item" />
        </div>

        <div v-else class="border p-4 rounded bg-gray-50">
          <router-link
            :to="getLink(item)"
            class="text-lg font-bold mb-1 block hover:underline"
          >
            {{ item.title }}
          </router-link>
          <div class="md:flex space-x-[20px] space-y-[20px]">
            <img
              v-if="item.image && item.image.url"
              :src="API_URL + item.image.url"
              alt=""
              class="w-[200px]"
            />
            <p class="text-gray-700 text-sm" v-if="item.description">
              {{ item.description }}
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { API_URL } from "../env";

// Импорт компонентов
import NewsCard from "../components/NewsCard.vue";
import NewsCardDef from "../components/NewsCardDef.vue";
import YouTubeCard from "../components/YouTubeCard.vue";

const results = ref([]);

function getLink(item) {
  switch (item.type) {
    case "achievement":
      return { name: "achievementsView", params: { id: item.id } };
    case "news":
      return { name: "newsView", params: { id: item.id } };
    default:
      return "/";
  }
}

onMounted(() => {
  const stored = localStorage.getItem("searchResults");
  results.value = stored ? JSON.parse(stored) : [];
});
</script>

<template>
  <div class="mb-[40px] p-4 container mx-auto text-[#00B5C0]">
    <div class="flex items-center gap-2">
      <input
        v-model="searchQuery"
        @input="handleSearch"
        placeholder="Сайт бойынша іздеу"
        class="w-[300px] bg-white h-[40px] text-[20px] mt-[30px] border-1 border-[#00B5C0] md:h-[35px] rounded-full px-4 text-[14px]"
      />
    </div>

    <div v-if="searchQuery && filteredResults.length === 0" class="mt-4">
      Нәтиже табылмады.
    </div>

    <div v-else class="space-y-8 mt-6">
      <!-- News Group -->
      <div v-if="groupedResults.news.length">
        <h2 class="mb-[30px] text-[20px] md:text-[28px] my-[40px] font-semibold mb-2" @click="$router.push('/news')">Жаңалықтар</h2>
        <div class="grid md:grid-cols-3 gap-4">
          <NewsCard v-for="item in groupedResults.news" :key="item.id" :data="item" />
        </div>
      </div>

      <!-- Achievements Group -->
      <div v-if="groupedResults.achievement.length">
        <h2 class="mb-[30px] text-[20px] md:text-[28px] my-[40px] font-semibold mb-2" @click="$router.push('/achievements')">Жобалар</h2>
        <div class="grid md:grid-cols-3 gap-4">
          <NewsCardDef v-for="item in groupedResults.achievement" :key="item.id" :data="item" />
        </div>
      </div>

      <!-- YouTube Group -->
      <div v-if="groupedResults.youtube.length">
        <h2 class="mb-[30px] text-[20px] md:text-[28px] my-[40px] font-semibold mb-2" @click="$router.push('/youTubes')">YouTube</h2>
        <div class="grid md:grid-cols-3 gap-4">
          <YouTubeCard v-for="item in groupedResults.youtube" :key="item.id" :data="item" />
        </div>
      </div>

      <!-- Others -->
      <div v-if="groupedResults.other.length">
        <h2 class="mb-[30px] text-[20px] md:text-[28px] font-semibold mb-2">Басқа</h2>
        <div class="grid md:grid-cols-3 gap-4">
          <div
            v-for="item in groupedResults.other"
            :key="item.id"
            class="border p-4 rounded bg-gray-50"
          >
            <router-link :to="getLink(item)" class="text-lg font-bold mb-1 block hover:underline">
              {{ item.title }}
            </router-link>
            <div class="md:flex space-x-[20px] space-y-[20px]">
              <img
                v-if="item.image && item.image.url"
                :src="API_URL + item.image.url"
                alt=""
                class="w-[200px]"
              />
              <p class="text-gray-700 text-sm" v-if="item.description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { API_URL } from "../env";
import NewsCard from "../components/NewsCard.vue";
import NewsCardDef from "../components/NewsCardDef.vue";
import YouTubeCard from "../components/YouTubeCard.vue";
import { useRouter } from "vue-router";
import { useNewsStore } from "../stores/news.js";

const router = useRouter();
const searchQuery = ref(""); // Больше не используем localStorage
const allItems = ref([]);

const newsStore = useNewsStore();

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

const filteredResults = computed(() => {
  if (!searchQuery.value.trim()) return [];
  const q = searchQuery.value.toLowerCase();
  return allItems.value.filter(item => {
    return (
      item.title?.toLowerCase().includes(q) ||
      item.description?.toLowerCase().includes(q)
    );
  });
});

const groupedResults = computed(() => {
  return {
    news: filteredResults.value.filter(item => item.type === "news"),
    achievement: filteredResults.value.filter(item => item.type === "achievement"),
    youtube: filteredResults.value.filter(item => item.type === "youtube"),
    other: filteredResults.value.filter(
      item => !["news", "achievement", "youtube"].includes(item.type)
    ),
  };
});

// ✅ Загружаем всё при открытии
onMounted(async () => {
  // Загружаем все данные
  await Promise.all([
    newsStore.loadAll("news"),
    newsStore.loadAll("achievements"),
    newsStore.loadAll("youtubes"),
  ]);

  // Объединяем всё в один массив
  allItems.value = [
    ...newsStore.news.map((item) => ({ ...item, type: "news" })),
    ...newsStore.achievements.map((item) => ({ ...item, type: "achievement" })),
    ...newsStore.youTubes.map((item) => ({ ...item, type: "youtube" })),
  ];

  // Если в localStorage уже есть запрос — подставляем и сразу ищем
  const storedQuery = localStorage.getItem("searchQuery");
  if (storedQuery) {
    searchQuery.value = storedQuery;
    handleSearch(); // автоматический переход на /res
  }
});
const drawerVisible = ref(false);

const handleSearch = () => {
  const query = searchQuery.value.trim();
  drawerVisible.value = false;

  if (!query) return;

  localStorage.setItem("searchQuery", query);
  router.push("/res");
};
</script>



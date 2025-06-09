<template>
  <div class="container mx-auto px-[20px] py-[40px] relative">
    <img
      src="../../assets/img/oyu_2.png"
      alt=""
      class="absolute w-[600px] h-[600px] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 -z-10"
    />

    <div class="flex items-center mb-5">
      <p class="text-[24px]">Бөлімдер</p>
    </div>
    <a-collapse v-model:activeKey="activeKey">
      <a-collapse-panel v-for="(item, key) in list" :key="key" :header="key">
        <div class="grid md:grid-cols-3 grid-cols-1 gap-5 justify-center">
          <div
            v-for="user in item"
            :key="user.id"
            class="grid grid-cols-[100px_1fr] gap-4 p-3 border-gray-300 rounded-lg border"
          >
            <img
              :src="API_URL + user.image.url"
              alt=""
              class="w-[100px] h-[100px] rounded-full object-cover"
            />
            <div class="mt-4">
              <p class="text-[16px] font-bold">{{ user.name }}</p>
              <p class="text-[14px] text-gray-500">
                {{ user.role ?? "Қызметкер" }}
              </p>
              <p class="text-[14px] text-gray-500">{{ user.tel }}</p>
            </div>
          </div>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useNewsStore } from "../../stores/news";
import { storeToRefs } from "pinia";
import { API_URL } from "../../env";

const newsStore = useNewsStore();
const { jumyss } = storeToRefs(newsStore);

const activeKey = ref<string[]>([]);

onMounted(async () => {
  await newsStore.getJumyss();
});

const list = computed(() => {
  return jumyss.value.reduce((acc: any, item: any) => {
    if (!acc[item.bolim]) {
      acc[item.bolim] = [item];
    } else {
      acc[item.bolim].push(item);
    }
    return acc;
  }, {});
});
</script>

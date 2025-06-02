<template>
  <div class="container mx-auto px-[20px] md:px-[100px] py-[140px] relative"
  style="min-height: calc(100vh);">
    <img
      src="../../assets/img/oyu_2.png"
      alt=""
      class="absolute w-[600px] h-[600px] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 -z-10"
    />
    <div class="flex justify-between items-center">
      <p class="text-[24px]">Біздің Басшылар</p>
    </div>
    <div class="grid md:grid-cols-3 gap-5 pt-10">
      <DirsCardDef v-for="item in dirs" :data="item" :key="item.id" />
    </div>
  </div>

  <div class="p-6 text-[20px] mx-auto px-[20px] md:px-[100px]">
    <p class="text-[24px] py-[40px]">Біздің Бөлімдер</p>
    <!-- Dropdown по bolim -->
    <a-dropdown>
        <a-button size="large"  class="text-[red] text-[20px]">
          {{ selectedBolim || "Бөлімді таңдаңыз" }}
          <DownOutlined />
        </a-button>
      <template #overlay>
        <a-menu @click="onSelectBolim" >
          <a-menu-item
          
            v-for="bolim in uniqueBolims"
            :key="bolim"
          >
            {{ bolim }}
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>

    <!-- Вывод отфильтрованных данных -->
    <div class="mt-6">
      
        <div v-for="item in filteredData" :key="item.id" class="flex items-center text-[20px] space-x-[40px] mt-[40px]">
          <div>
            <img
              class="w-[80px] h-[80px] rounded-full object-cover "
              alt="example"
              :src="API_URL + item.image?.url"
            />
          </div>
          <div >
            {{ item.name }}
          </div>
          <div >
            {{ item.tel }}
          </div>
        </div>
     
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import DirsCardDef from "../../components/DirsCardDef.vue";
import { useNewsStore } from "../../stores/news";
import { storeToRefs } from "pinia";
import { DownOutlined } from "@ant-design/icons-vue";
import { API_URL } from "../../env";

const newsStore = useNewsStore();
const { dirs, jumyss } = storeToRefs(newsStore);

onMounted(async () => {
  await newsStore.getDirs();
  await newsStore.getJumyss();
  console.log(jumyss);
});

const selectedBolim = ref("");

// Уникальные значения поля bolim
const uniqueBolims = computed(() =>
  [...new Set(jumyss.value.map((item: any) => item.bolim))].filter(Boolean)
);

// Фильтрованные данные по bolim
const filteredData = computed(() => {
  if (!selectedBolim.value) return [];
  return jumyss.value.filter((item: any) => item.bolim === selectedBolim.value);
});

// Обработчик выбора
function onSelectBolim({ key }: { key: string }) {
  selectedBolim.value = key;
}
</script>
{{ item.name }}
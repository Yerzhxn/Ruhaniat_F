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

    <!-- Только когда данные готовы -->
    <div v-if="isReady">
      <div v-for="(users, bolim) in list" :key="bolim" class="mb-4">
        <a-collapse v-model:activeKey="activeKeys[bolim]">
          <a-collapse-panel :key="bolim" :header="bolim">
            <div class="grid gap-y-3">
              <div
                v-for="user in users"
                :key="user.id"
                class="flex place-items-center gap-5 p-3 border-gray-300 rounded-lg border"
              >
                <img
                  :src="API_URL + user.image.url"
                  alt=""
                  class="w-[100px] h-[100px] rounded-full object-cover"
                />
                <div class="flex gap-x-[20px]">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useNewsStore } from "../../stores/news";
import { storeToRefs } from "pinia";
import { API_URL } from "../../env";

const newsStore = useNewsStore();
const { jumyss } = storeToRefs(newsStore);

const activeKeys = ref<{ [bolim: string]: string[] }>({});
const list = ref<Record<string, any[]>>({});
const isReady = ref(false);

// Имена, для которых надо открывать панели
const openNames = [
  "Салин Қолғанат Мақатұлы",
  "Жунусова Салтанат Ермековна",
  "Досжанова Сауле Болатовна",
  "Сауле Шабанбаевна Дабиева"
];

onMounted(async () => {
  await newsStore.getJumyss();

  const grouped: Record<string, any[]> = {};
  const tempActiveKeys: { [bolim: string]: string[] } = {};

  jumyss.value.forEach((user) => {
    const bolim = user.bolim;
    if (!grouped[bolim]) {
      grouped[bolim] = [];
    }
    grouped[bolim].push(user);

    // Проверяем, если имя в списке, отмечаем этот бөлім для раскрытия
    if (openNames.includes(user.name)) {
      tempActiveKeys[bolim] = [bolim];
    }
  });

  list.value = grouped;
  activeKeys.value = tempActiveKeys;
  isReady.value = true;
});
</script>

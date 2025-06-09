<template>
  <div class="navbar">
    <div class="h-[50px] bg-gray-200 hidden md:flex items-center px-0">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center gap-1 md:gap-4">
          <p class="text-[14px] md:text-[16px] text-[#00B5C0]">KZ</p>
          <p class="text-[14px] md:text-[16px]">RU</p>
        </div>
        <div class="flex text-gray-400 gap-1 md:gap-4">
          <a href="https://www.instagram.com/ruhaniat.kz" target="_blank">
            <img
              src="../assets/img/instagram.png"
              alt=""
              class="cursor-pointer h-[20px] md:h-[25px]"
            />
          </a>
          <a href="https://www.youtube.com/@ruhaniatkz" target="_blank">
            <img
              src="../assets/img/youtube.png"
              alt=""
              class="cursor-pointer h-[20px] md:h-[25px]"
            />
          </a>
          <a href="https://www.facebook.com/ruhaniatnursultan" target="_blank">
            <img
              src="../assets/img/facebook.png"
              alt=""
              class="cursor-pointer h-[20px] md:h-[25px]"
            />
          </a>
        </div>
        <div class="flex items-center gap-2">
          <input
            v-model="searchQuery"
            @keyup.enter="handleSearch"
            placeholder="Сайт бойынша іздеу"
            class="w-[300px] bg-white h-[30px] md:h-[35px] rounded-full border-[1px] border-[#00B5C0] px-4 text-[14px]"
          />
        </div>
      </div>
    </div>
    <div class="hidden md:grid container mx-auto py-3 px-[20px]">
      <div
        class="hidden md:grid md:grid-cols-3 space-y-[20px] items-center justify-between"
      >
        <div class="w-[410px] md:w-[79%] block relative">
          <swiper
            v-if="banners.length > 0"
            class="relative"
            :modules="[Autoplay, Navigation]"
            :loop="true"
            :autoplay="{
              delay: 4500,
            }"
            :slides-per-view="1"
            @swiper="onSwiperInit"
          >
            <swiper-slide
              v-for="item in banners.filter((b) => b.type === 'type_1')"
              :key="item"
            >
              <a :href="item.link" target="_blank" class="cursor-pointer">
                <div class="relative z-10">
                  <img
                    :src="API_URL + item.image.url"
                    alt=""
                    class="w-full h-[150px] object-cover"
                  />
                </div>
              </a>
            </swiper-slide>
            <div
              @click="swiperController?.slidePrev()"
              class="cursor-pointer absolute z-10 left-0 top-1/2 -translate-y-1/2 !bottom-0 min-w-[40px] h-[40px] text-white bg-[#00B5C0] flex items-center justify-center"
            >
              <ArrowLeftOutlined />
            </div>
            <div
              @click="swiperController?.slideNext()"
              class="cursor-pointer absolute z-10 right-0 top-1/2 -translate-y-1/2 !bottom-0 min-w-[40px] h-[40px] text-white bg-[#00B5C0] flex items-center justify-center"
            >
              <ArrowRightOutlined />
            </div>
          </swiper>
        </div>
        <img
          src="../assets/img/logo.png"
          alt=""
          class="min-h-10 cursor-pointer mx-auto"
          @click="$router.push('/')"
        />
        <div
          class="md:max-w-[80%] font-light italic relative text-center md:text-right"
        >
          <img
            src="../assets/img/quote.png"
            alt=""
            class="w-[25px] absolute -top-5 -right-10"
          />
          <p class="font-semibold">
            Данышпандар туралы зерде - олардың өздері көтерген мәселелердің
            өзектілігі жойылғанша ғана ел жадында сақталады.
          </p>
          <p class="text-[14px] text-gray-500 text-center md:text-right">
            Олжас Сүлейменов
          </p>
        </div>
      </div>
    </div>

    <div class="bg-[#00B5C0] h-[50px] flex">
      <div>
        <div
          ref="menuButtonRef"
          class="md:hidden cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-[#008e96]"
          @click="openDrawerBelowMenu"
        >
          <MenuOutlined class="!text-white" />
        </div>
      </div>
      <div
        class="container hidden mx-auto md:flex items-center gap-4 justify-around text-lg"
      >
        <p
          @click="$router.push('/news')"
          class="text-white hover:text-gray-100 transition-all duration-300 cursor-pointer"
        >
          Жаңалықтар
        </p>
        <a-dropdown>
          <p
            class="text-white hover:text-gray-100 transition-all duration-300 cursor-pointer"
          >
            Кестелер
          </p>
          <template #overlay>
            <a-menu>
              <a-menu-item @click="$router.push('/table1')">
                Мемлекеттік тілде өткізілген сабақтардың сағат саны
              </a-menu-item>
              <a-menu-item @click="$router.push('/table2')">
                Мемлекеттік тіл курсына қатысушылар тізімі
              </a-menu-item>
              <a-menu-item @click="$router.push('/table3')">
                Мемлекеттік тіл курсының сабақ кестесі
              </a-menu-item>
              <a-menu-item @click="$router.push('/table4')">
                Мемлекеттік тілді оқыту бойынша таңдаушылардың сабаққа қатысу
                туралы мәлімет
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
        <p
          @click="$router.push('/achievements')"
          class="text-white hover:text-gray-100 transition-all duration-300 cursor-pointer"
        >
          Жобалар
        </p>
        <p
          @click="$router.push('/youTubes')"
          class="text-white hover:text-gray-100 transition-all duration-300 cursor-pointer"
        >
          You-Tube
        </p>

        <a-dropdown>
          <p
            class="text-white hover:text-gray-100 transition-all duration-300 cursor-pointer"
          >
            Біз Туралы
          </p>
          <template #overlay>
            <a-menu>
              <a-menu-item @click="$router.push('/about')">
                Жалпы Ақпарат
              </a-menu-item>
              <a-menu-item @click="$router.push('/kurylym')">
                Құрылым
              </a-menu-item>
              <a-menu-item @click="$router.push('/dirs')">
                Бөлімдер
              </a-menu-item>
              <a-menu-item @click="$router.push('/map')">
                Байланыс
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
      <a-drawer
        v-model:open="drawerVisible"
        placement="bottom"
        :closable="false"
        :height="`calc(100% - ${drawerTopOffset}px)`"
        :style="{ top: drawerTopOffset + 'px' }"
        class="bg-[#00B5C0]"
      >
        <!-- Новый блок языков и соцсетей -->
        <div class="flex items-center justify-between px-4 py-2 bg-white">
          <div class="flex items-center gap-4">
            <p class="text-[#00B5C0] text-sm font-semibold">KZ</p>
            <p class="text-gray-600 text-sm">RU</p>
          </div>
          <div class="flex items-center gap-2">
            <input
              v-model="searchQuery"
              @keyup.enter="handleSearch"
              placeholder="Сайт бойынша іздеу"
              class="w-[200px] bg-white h-[30px] md:h-[35px] rounded-full border-[1px] border-[#00B5C0] px-4 text-[14px]"
            />
          </div>
          <div class="flex items-center gap-3">
            <a href="https://www.instagram.com/ruhaniat.kz" target="_blank">
              <img src="../assets/img/instagram.png" class="h-[22px]" />
            </a>
            <a href="https://www.youtube.com/@ruhaniatkz" target="_blank">
              <img src="../assets/img/youtube.png" class="h-[22px]" />
            </a>
            <a
              href="https://www.facebook.com/ruhaniatnursultan"
              target="_blank"
            >
              <img src="../assets/img/facebook.png" class="h-[22px]" />
            </a>
          </div>
        </div>

        <!-- Старый блок пунктов меню -->
        <div
          class="flex flex-col gap-4 text-[#00B5C0] text-center text-[25px] text-xl p-4"
        >
          <p @click="navigate1('/news')">Жаңалықтар</p>

          <a-dropdown>
            <p class="cursor-pointer">Кестелер</p>
            <template #overlay>
              <a-menu>
                <a-menu-item @click="navigate1('/table1')">
                  Мемлекеттік тілде өткізілген сабақтардың сағат саны
                </a-menu-item>
                <a-menu-item @click="navigate1('/table2')">
                  Мемлекеттік тіл курсына қатысушылар тізімі
                </a-menu-item>
                <a-menu-item @click="navigate1('/table3')">
                  Мемлекеттік тіл курсының сабақ кестесі
                </a-menu-item>
                <a-menu-item @click="navigate1('/table4')">
                  Мемлекеттік тілді оқыту бойынша таңдаушылардың сабаққа қатысу
                  туралы мәлімет
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>

          <p @click="navigate1('/achievements')">Жобалар</p>
          <p @click="navigate1('/youTubes')">You-Tube</p>

          <a-dropdown>
            <p class="cursor-pointer">Біз Туралы</p>
            <template #overlay>
              <a-menu>
                <a-menu-item @click="navigate1('/about')"
                  >Жалпы Ақпарат</a-menu-item
                >
                <a-menu-item @click="navigate1('/kurylym')"
                  >Құрылым</a-menu-item
                >
                <a-menu-item @click="navigate1('/dirs')">Бөлімдер</a-menu-item>
                <a-menu-item @click="navigate1('/map')">Байланыс</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </a-drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { API_URL } from "../env";
import { useRouter } from "vue-router";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons-vue";
import { storeToRefs } from "pinia";
import { useNewsStore } from "../stores/news";

interface SearchResult {
  title?: string;
  description?: string;
  type: "news" | "achievement" | "youtube";
}

const { news, achievements, youTubes, banners } = storeToRefs(useNewsStore());
const swiperController = ref<typeof Swiper | null>(null);
const router = useRouter();
const drawerVisible = ref(false);
const drawerTopOffset = ref(0);
const menuButtonRef = ref<HTMLElement | null>(null);
const searchQuery = ref("");

function onSwiperInit(swiper: typeof Swiper) {
  swiperController.value = swiper;
}

const openDrawerBelowMenu = () => {
  if (menuButtonRef.value) {
    const rect = menuButtonRef.value.getBoundingClientRect();
    drawerTopOffset.value = rect.bottom;
  } else {
    drawerTopOffset.value = 50;
  }
  drawerVisible.value = true;
};

const navigate1 = (path: string) => {
  drawerVisible.value = false;
  router.push(path);
};

const handleSearch = () => {
  const query = searchQuery.value.trim();
  drawerVisible.value = false;

  if (!query) return;

  localStorage.setItem("searchQuery", query);
  router.push("/res");
};
</script>

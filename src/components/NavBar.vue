<template>
  <div class="navbar">
    <div class="h-[50px] bg-gray-200 hidden md:grid items-center px-[100px]">
      <div
        class="container mx-auto grid grid-cols-3 items-center justify-between"
      >
        <div class="flex items-center gap-1 md:gap-4">
          <div class="flex items-center gap-2 bg-gray-300 h-[50px] px-3 mr-5">
            <CalendarOutlined :style="{ color: '#00B5C0', fontSize: '24px'  }"  />
            <p class="text-[14px] md:text-[16px] p-[40px] py-[10px] font-sans text-[#424240] font-bold flex place-items-center">
              {{ new Date().toLocaleDateString("ru-RU") }}
            </p>
          </div>
          <p class="text-[14px] md:text-[16px] text-[#00B5C0]">KZ</p>
          <p class="text-[14px] md:text-[16px]">RU</p>
        </div>
        <div class="flex justify-center text-gray-400 gap-1 md:gap-4">
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
        <div class="flex justify-end items-center gap-2">
          <input
            v-model="searchQuery"
            @keyup.enter="handleSearch"
            placeholder="Сайт бойынша іздеу"
            class="w-[300px] bg-white h-[30px] md:h-[35px] rounded-full px-4 text-[14px]"
          />
        </div>
      </div>
    </div>
    <div class="hidden md:grid container mx-auto py-3 px-[100px]">
      <div
        class="hidden md:grid md:grid-cols-3 space-y-[20px] items-center justify-between"
      >
        <div class="w-[410px] md:w-[79%] block relative">
          <swiper
            v-if="banners.length > 0"
            class="relative"
            :modules="[Autoplay, Navigation]"
            :loop="true"
            
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
            {{ todayQuote?.description || 'Бүгінге арналған дәйексөз табылмады.' }}
          </p>
          <p class="text-[18px] font-semibold  text-[#00B5C0] text-center md:text-right">
            {{ todayQuote?.autor || '' }}
          </p>
        </div>
      </div>
    </div>

    <div class="bg-[#00B5C0] h-[50px] flex font-sans font-semibold">
      <div>
        <div
          ref="menuButtonRef"
          class="md:hidden cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-[#008e96]"
          @click="openDrawerBelowMenu"
        >
          <MenuOutlined class="!text-white" />
        </div>
      </div>
      <img
        src="../assets/img/logo_2.png"
        alt=""
        @click="$router.push('/')"
        class="hidden md:grid w-[70px] pb-2 cursor-pointer"
      />
      <div
        class="container hidden mx-auto md:flex items-center gap-4 justify-around text-[22px]"
      >
        <p
          @click="$router.push('/news')"
          class="text-white hover:text-gray-100 transition-all duration-300 cursor-pointer"
        >
          Жаңалықтар
        </p>
        <p
          @click="$router.push('/achievements')"
          class="text-white hover:text-gray-100 transition-all duration-300 cursor-pointer"
        >
          Жобалар
        </p>
        <a-dropdown>
          <p
            class="text-white hover:text-gray-100 transition-all duration-300 cursor-pointer"
          >
            Тіл курстары
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
              <a-menu-item @click="$router.push('/table4')">
                Ағылшын тілі курстары
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
        
        

        <a-dropdown>
          <p
            class=" text-white hover:text-gray-100 transition-all duration-300 cursor-pointer"
          >
            Құрылым
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
            </a-menu>
          </template>
        </a-dropdown>
        <p
          @click="$router.push('/map')"
          class="text-white hover:text-gray-100 transition-all duration-300 cursor-pointer"
        >
          Байланыс
        </p>
      </div>

      <div class="md:hidden flex w-full justify-end items-center font-sans font-semibold">
        <div>
          <a-drawer
            v-model:open="drawerVisible"
            placement="bottom"
            :closable="false"
            :height="`calc(100% - ${drawerTopOffset}px)`"
            :style="{ top: drawerTopOffset + 'px' }"
            class="bg-[#00B5C0]"
          >
            <div class="grid place-center px-4 py-2 bg-white space-y-4">
              <div class="flex justify-between">
                <div class="flex items-center gap-4">
                  <p class="text-[#00B5C0] text-sm font-semibold">KZ</p>
                  <p class="text-gray-600 text-sm">RU</p>
                </div>

                <div class="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/ruhaniat.kz"
                    target="_blank"
                  >
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

              <div class="flex items-center gap-2">
                <input
                  v-model="searchQuery"
                  @keyup.enter="handleSearch"
                  placeholder="Сайт бойынша іздеу"
                  class="w-full bg-white h-[30px] md:h-[35px] rounded-full border-[1px] border-[#00B5C0] px-4 text-[14px]"
                />
              </div>
            </div>
            <div
              class="flex flex-col gap-4 text-[#00B5C0] text-center text-[25px] text-xl p-4"
            >
              <p @click="navigate1('/news')">Жаңалықтар</p>
              <p @click="navigate1('/achievements')">Жобалар</p>
              <a-dropdown>
                <p class="cursor-pointer">Тіл курстары</p>
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
                      Мемлекеттік тілді оқыту бойынша таңдаушылардың сабаққа
                      қатысу туралы мәлімет
                    </a-menu-item>
                    <a-menu-item @click="navigate1('/table4')">
                      Ағылшын тілі курстары
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>

              
              

              <a-dropdown>
                <p class="cursor-pointer">Құрылым</p>
                <template #overlay>
                  <a-menu>
                    <a-menu-item @click="navigate1('/about')"
                      >Жалпы Ақпарат</a-menu-item
                    >
                    <a-menu-item @click="navigate1('/kurylym')"
                      >Құрылым</a-menu-item
                    >
                    <a-menu-item @click="navigate1('/dirs')"
                      >Бөлімдер</a-menu-item
                    >
                    
                  </a-menu>
                </template>
              </a-dropdown>
              <p @click="navigate1('/map')">Байланыс</p>
            </div>
          </a-drawer>
        </div>
        <div>
          <img
            src="../assets/img/logo_2.png"
            alt=""
            @click="$router.push('/')"
            class="w-[70px] pb-2"
          />
        </div>
      </div>
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
import { CalendarOutlined, MenuOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { API_URL } from "../env";
import { useRouter } from "vue-router";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons-vue";
import { storeToRefs } from "pinia";
import { useNewsStore } from "../stores/news";
import { onMounted } from "vue";
import { computed } from "vue";


const newsStore = useNewsStore();

const { news, banners,quotes } = storeToRefs(newsStore);;
onMounted(async () => {
  await newsStore.getNews();
  await newsStore.getQuotes();
  await newsStore.getBanners();
});
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

const todayQuote = computed(() => {
  return quotes.value.find((q) => q.date === today);
});
const today = new Date().toISOString().split("T")[0];
</script>

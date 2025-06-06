<template>
  <div class="navbar">
    <div class="h-[50px] bg-gray-200 flex items-center">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center gap-4">
          <p class="text-[16px] text-[#00B5C0]">KZ</p>
          <p class="text-[16px]">RU</p>
        </div>
        <div class="flex text-gray-400 gap-4">
          <a href="https://www.instagram.com/ruhaniat.kz" target="_blank">
            <img
              src="../assets/img/instagram.png"
              alt=""
              class="cursor-pointer h-[25px]"
            />
          </a>
          <a href="https://www.youtube.com/@ruhaniatkz" target="_blank">
            <img
              src="../assets/img/youtube.png"
              alt=""
              class="cursor-pointer h-[25px]"
            />
          </a>
          <a href="https://www.facebook.com/ruhaniatnursultan" target="_blank">
            <img
              src="../assets/img/facebook.png"
              alt=""
              class="cursor-pointer h-[25px]"
            />
          </a>
        </div>
        <input
          placeholder="Сайт бойынша іздеу"
          class="w-[300px] bg-white h-[35px] rounded-full px-4 text-[14px]"
        />
      </div>
    </div>
    <div class="container mx-auto py-3">
      <div class="grid grid-cols-3 items-center justify-between">
        <div class="w-[79%] block relative">
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
            <swiper-slide v-for="item in banners" :key="item">
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
        />
        <div class="max-w-[80%] font-light italic relative text-right">
          <img
            src="../assets/img/quote.png"
            alt=""
            class="w-[25px] absolute -top-5 -right-10"
          />
          <p class="font-semibold">
            Данышпандар туралы зерде - олардың өздері көтерген мәселелердің
            өзектілігі жойылғанша ғана ел жадында сақталады.
          </p>
          <p class="text-[14px] text-gray-500 text-right">Олжас Сүлейменов</p>
        </div>
      </div>
    </div>
    <div class="bg-[#00B5C0] h-[50px] flex">
      <div
        class="container relative mx-auto flex items-center gap-4 justify-around text-lg"
      >
        <div
          class="absolute cursor-pointer left-0 top-0 w-[50px] h-[50px] flex items-center justify-center bg-[#008e96]"
        >
          <MenuOutlined class="!text-white" />
        </div>
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
import {
  DownOutlined,
  FacebookFilled,
  InstagramFilled,
  MenuOutlined,
  SearchOutlined,
  YoutubeFilled,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import { API_URL } from "../env";
import { useRouter } from "vue-router";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons-vue";
import { storeToRefs } from "pinia";
import { useNewsStore } from "../stores/news";

const { banners } = storeToRefs(useNewsStore());
const newsStore = useNewsStore();
const swiperController = ref<Swiper | null>(null);
const lang = ref("KK");

const visible = ref(false);
const router = useRouter();

function onSwiperInit(swiper: Swiper) {
  swiperController.value = swiper;
}

function navigate(path: string) {
  router.push(path);
  visible.value = false; // Закрыть drawer после перехода
}
</script>

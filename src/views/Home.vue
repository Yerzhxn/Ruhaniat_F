<template>
  <div>
    <div class="mb-[20px]">
      <div
        class="header md:flex gap-5 space-y-[20px] container mx-auto pt-5 px-[20px] md:px-[100px]"
      >
        <div class="md:w-[74%] block relative">
          <swiper
            class="relative"
            :modules="[Autoplay, Navigation]"
            :loop="true"
            :autoplay="{ delay: 4500 }"
            :slides-per-view="1"
            @swiper="onSwiperInit"
          >
            <div
              @click="swiperController?.slidePrev()"
              class="cursor-pointer absolute z-10 left-0 text-[20px] !bottom-0 md:min-w-[80px] min-w-[50px] h-[100px] text-white bg-[#00B5C0] flex items-center justify-center"
            >
              <ArrowLeftOutlined />
            </div>
            <div
              @click="swiperController?.slideNext()"
              class="cursor-pointer absolute z-10 right-0 text-[20px] !bottom-0 md:min-w-[80px] min-w-[50px] h-[100px] text-white bg-[#00B5C0] flex items-center justify-center"
            >
              <ArrowRightOutlined />
            </div>

            <swiper-slide v-for="item in news" :key="item.id">
              <div class="relative">
                <img
                  :src="`${API_URL}${item.image?.url}`"
                  :alt="item.title"
                  class="w-full h-[430px] md:h-[430px] object-cover"
                />
                <div
                  class="absolute bottom-0 left-0 w-full bg-[#00000080] h-[100px] py-4 px-[80px] md:px-[130px]"
                >
                  <p
                    class="text-[18px] md:text-[24px] font-bold text-white cursor-pointer"
                    @click="$router.push(`/news/${item.documentId}`)"
                  >
                    {{ item.title }}
                  </p>
                  <p
                    class="text-[16px] text-white font-light line-clamp-2 max-w-[800px] flex items-center gap-2"
                  >
                    <CalendarOutlined class="text-[#00B5C0]" />
                    {{ new Date(item.createdAt).toLocaleDateString("ru-RU") }}
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="md:w-[25%]">
          <swiper
            class="relative"
            :modules="[Autoplay, Navigation]"
            :loop="true"
            :autoplay="{ delay: 4500 }"
            :slides-per-view="1"
          >
            <swiper-slide
              v-for="item in banners.filter(
                (banner) => banner.type === 'type_2'
              )"
              :key="item.id"
            >
              <div class="relative w-full h-[430px] overflow-hidden">
                <a :href="item.link" target="_blank">
                  <img
                    :src="`${API_URL}${item.image.url}`"
                    :alt="item.title"
                    class="w-full h-full object-fill cursor-pointer"
                  />
                </a>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        
      </div>
      <div class= "mt-[20px] container mx-auto md:mt-0 px-[20px] md:px-[100px]"
      @click="scrollToTop">
        <swiper
            class="relative"
            :modules="[Autoplay, Navigation]"
            :loop="true"
            :autoplay="{ delay: 4500 }"
            :slides-per-view="1"
          >
            <swiper-slide
              v-for="item in banners.filter(
                (banner) => banner.type === 'type_3'
              )"
              :key="item.id"
            >
              <div class="relative w-full h-[60px] md:h-[130px] overflow-hidden">
                <a :href="item.link" target="_blank">
                  <img
                    :src="`${API_URL}${item.image.url}`"
                    :alt="item.title"
                    class="w-full h-full object-fill cursor-pointer"
                  />
                </a>
              </div>
            </swiper-slide>
          </swiper>
      </div>
    </div>

    <div class="bg-[#00B5C0] py-[60px] md:py-[100px] relative px-[20px] md:px-[100px]">
      <img
        src="../assets/img/oyu_1.png"
        alt="Background"
        class="absolute w-[300px] md:w-[600px] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2"
      />
      
      <div>
        <p
          class="text-[25px] md:text-[60px] font-bold mb-8 pb-8 border-b border-white text-white"
        >
          {{ $t('main.about') }}
        </p>
        <p class="text-[16px] md:text-[24px] text-white">
          <img src="../assets/img/img_1.png" alt="About" class="w-[600px] h-[400px] md:px-[20px] my-[20px] float-right" />
          {{ $t('main.text') }}
        </p>
      </div>
        
      
    </div>

    <div class="partners py-[60px] md:py-[100px] container mx-auto px-[20px] md:px-[100px] ">
      <p class="text-[28px] md:text-[32px] font-sans font-semibold">{{ $t('main.book') }}</p>
      <swiper
        :slides-per-view="2"
        :space-between="30"
        :navigation="true"
        :modules="[Autoplay, Pagination, Navigation]"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          300: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }"
        class="pt-10 mt-20"
      >
        <swiper-slide v-for="item in books" :key="item.id">
          <div
            @click="downloadBook(item.book?.url, item.book?.name)"
            class="cursor-pointer"
          >
            <img
              :src="`${API_URL}${item.image.url}`"
              :alt="item.title"
              class="w-[240px] h-[320px] object-cover rounded-[5px] mx-auto mb-3"
            />
            <p class="text-[18px] md:text-[24px] text-center">
              {{ item.title }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div
      class="youtube py-[60px] md:py-[100px] bg-[#00B5C0] text-white relative px-[20px] md:px-[100px]"
    >
      <img
        src="../assets/img/oyu_1.png"
        alt="Background"
        class="absolute w-[600px] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2"
      />
      <div class="flex justify-between items-center container mx-auto">
        <p class="text-[28px] md:text-[32px] font-sans font-semibold">You-Tube</p>
        <button
          @click="$router.push('/youTubes')"
          class="text-[14px] md:text-[16px] flex items-center gap-2 bg-white rounded-xl cursor-pointer px-4 py-1 text-gray-600"
        >
          {{ $t('main.all') }}
          <ArrowRightOutlined />
        </button>
      </div>

      <div
        v-if="youTubes.length"
        class="grid relative md:grid-cols-3 gap-10 pt-10 container mx-auto"
      >
        <YouTubeCard
          v-for="item in youTubes.slice(0, 3)"
          :key="item.id"
          :data="item"
        />
      </div>
    </div>

    <div class="news py-[60px] md:py-[100px] container mx-auto px-[20px] md:px-[100px]">
      <div class="flex justify-between items-center">
        <p class="text-[28px] md:text-[32px] font-sans font-semibold">{{ $t('menu.news') }}</p>
        <button
          @click="$router.push('/news')"
          class="text-[14px] md:text-[16px] flex items-center gap-2 border border-gray-300 rounded-xl cursor-pointer px-4 py-1 text-gray-600"
        >
          {{ $t('main.all') }}
          <ArrowRightOutlined />
        </button>
      </div>

      <div class="md:grid md:grid-cols-3 gap-10 pt-10 container mx-auto">
        <NewsCard
          v-for="item in news.slice(0, 6)"
          :key="item.id"
          :data="item"
        />
      </div>
    </div>

    <div
      class="achievments py-[60px] md:py-[100px] bg-[#00B5C0] text-white relative px-[20px] md:px-[100px]"
    >
      <img
        src="../assets/img/oyu_1.png"
        alt="Background"
        class="absolute w-[600px] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2"
      />
      <div class="flex justify-between items-center container mx-auto">
        <p class="text-[28px] md:text-[32px] font-sans font-semibold">{{ $t('main.projects') }}</p>
        <button
          @click="$router.push('/achievements')"
          class="text-[14px] md:text-[16px] flex items-center gap-2 bg-white rounded-xl cursor-pointer px-4 py-1 text-gray-600"
        >
          {{ $t('main.all') }}
          <ArrowRightOutlined />
        </button>
      </div>

      <div
        v-if="achievements.length"
        class="grid relative md:grid-cols-3 gap-10 pt-10 container mx-auto"
      >
        <NewsCardDef
          v-for="item in achievements.slice(0, 3)"
          :key="item.id"
          :data="item"
        />
      </div>
    </div>

    <div class="partners py-[60px] md:py-[100px] container mx-auto px-[20px] md:px-[100px]">
      <p class="text-[28px] md:text-[32px] font-sans font-semibold">{{ $t('main.partners') }}</p>
      <swiper
        :slides-per-view="2"
        :space-between="30"
        :navigation="true"
        :modules="[Autoplay, Pagination, Navigation]"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          300: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }"
        class="pt-10 mt-20"
      >
        <swiper-slide v-for="item in partners" :key="item.id">
          <a :href="item.link" target="_blank">
            <img
              :src="`${API_URL}${item.image.url}`"
              :alt="item.title"
              class="w-[200px] h-[200px] object-cover rounded-full mx-auto mb-3"
            />
            <p class="text-[18px] md:text-[24px] text-center">
              {{ item.title }}
            </p>
          </a>
        </swiper-slide>
      </swiper>
    </div>

    <div
      class="footer px-[20px] md:px-[120px] py-[40px] border-b border-4 border-[#F7F7F8] md:flex justify-between bg-[#F7F7F8]"
    >
      <div class="grid space-y-[12px] mb-[20px]">
        <span class="text-[16px] md:text-[20px]">
          {{$t('main.text1')}}
        </span>
        <span class="md:w-[500px] text-[#81828c] text-[14px] md:text-[16px]">
          {{$t('main.text2')}}
        </span>
      </div>
      <div
        class="text-[14px] md:text-[16px] flex h-[30px] md:h-[40px] space-x-[8px]"
      >
        <input
          type="email"
          :placeholder= "$t('main.placeHolder')"
          class="border-none bg-white focus:outline-[#00B5C0] rounded-[12px] px-[10px] w-[240px]"
        />
        <button
          class="cursor-pointer text-[12px] md:text-[16px] bg-[#00B5C0] border-none text-white rounded-[12px] px-[20px] hover:bg-white hover:text-[#00B5C0] transition duration-300"
        >
          {{ $t('main.btn') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
} from "@ant-design/icons-vue";
import NewsCard from "../components/NewsCard.vue";
import NewsCardDef from "../components/NewsCardDef.vue";
import { useNewsStore } from "../stores/news";
import { storeToRefs } from "pinia";
import YouTubeCard from "../components/YouTubeCard.vue";
import { API_URL } from "../env";
import { onMounted, ref } from "vue";

const swiperController = ref<Swiper | null>(null);

function onSwiperInit(swiperInstance: any) {
  swiperController.value = swiperInstance;
}

const { news, achievements, youTubes, partners, banners ,books } = storeToRefs(
  useNewsStore()
);

const newsStore = useNewsStore();
console.log(newsStore.books);
onMounted(async () => {
  await newsStore.getBooks();
  await newsStore.fetchLast3News();
  console.log(newsStore.books);
});
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // плавная прокрутка
  });
};
const downloadBook = (pdfUrl?: string, fileName?: string) => {
  if (!pdfUrl) return;

  const fullUrl = `${API_URL}${pdfUrl}`;
  const link = document.createElement("a");
  link.href = fullUrl;
  link.setAttribute("download", fileName || "book.pdf"); // или item.book.name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

</script>

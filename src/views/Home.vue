<template>
  <div>
    <div class="mb-[20px]">
      
      <div class="header md:flex gap-5 space-y-[20px] container mx-auto pt-5 px-[20px] md:px-[100px]">
        <div class="md:w-[79%] block relative">
          <swiper 
        class="relative"
        :modules="[Autoplay, Navigation]" :loop="true" :autoplay="{
            delay: 4500,
          }" :slides-per-view="1"
        @swiper="onSwiperInit">
        <div
                @click="swiperController?.slidePrev()"
                class="cursor-pointer absolute z-10 left-0 text-[20px] !bottom-0 md:min-w-[80px] min-w-[50px]  h-[150px] text-white bg-[#00B5C0] flex items-center justify-center"
              >
                <ArrowLeftOutlined />
              </div>
              <div
                @click="swiperController?.slideNext()"
                class="cursor-pointer absolute z-10 right-0 text-[20px] !bottom-0 md:min-w-[80px] min-w-[50px] h-[150px] text-white bg-[#00B5C0] flex items-center justify-center"
              >
                <ArrowRightOutlined />
              </div>
          <swiper-slide v-for="item in news" :key="item">
            <div class="relative">
              <img :src="API_URL + item.image.url" alt="" class="w-full h-[400px] md:h-[700px] object-cover" />
              <div class="absolute bottom-0 left-0 w-full bg-[#00000080] h-[150px] py-4 px-[80px] md:px-[200px]">
                <p class="text-[18px] md:text-[24px] font-bold text-white cursor-pointer" @click="$router.push(`/news/${item.documentId}`)">
                  {{ item.title }}
                </p>
                <p class="text-[16px] text-white font-light line-clamp-2 max-w-[800px]">
                  {{ item.description }}
                </p>
                
              </div>
              
            </div>
          </swiper-slide>
        </swiper>
        </div>
        <div class="md:w-[20%]">
          <swiper 
        class="relative"
        :modules="[Autoplay, Navigation]" :loop="true" :autoplay="{
            delay: 4500,
          }" :slides-per-view="1">
          <swiper-slide v-for="item in banners.filter(b => b.type === 'type_2')" :key="item">
            <div class="relative">
              <a :href="item.link" target="_blank"><img :src="API_URL + item.image.url" alt="" class="h-[130px] w-[100%] md:w-full md:h-[700px] object-cover cursor-pointer" /></a>
            </div>
          </swiper-slide>
        </swiper>
        </div>
      </div>
      <div class="md:mt-0 mt-[20px]">
        <div class="w-full px-[20px] md:px-[100px] h-[130px]">
          <swiper 
        class="relative"
        :modules="[Autoplay, Navigation]" :loop="true" :autoplay="{
            delay: 4500,
          }" :slides-per-view="1">
          <swiper-slide v-for="item in banners.filter(b => b.type === 'type_3')" :key="item">
            <div class="relative">
              <a :href="item.link" target="_blank"><img :src="API_URL + item.image.url" alt="" class="w-[100%] h-[130px] object-cover cursor-pointer" /></a>
            </div>
          </swiper-slide>
        </swiper>
        </div>
      </div>
    </div>

    <div
      class="bg-[#00B5C0] py-[60px] md:py-[140px] relative px-[20px] md:px-[100px]"
    >
      <img
        src="../assets/img/oyu_1.png"
        alt=""
        class="absolute w-[300px] md:w-[600px] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2"
      />
      <div
        class="relative about grid md:grid-cols-2 gap-10 container mx-auto text-white"
      >
        <div>
          <p
            class="text-[25px] md:text-[60px] font-bold mb-8 pb-8 border-b border-white"
          >
            Біз туралы
          </p>
          <p class="text-[16px] md:text-[24px]">
            Біздің мектеп – қазақ тілін үйренуге арналған керемет орын. Мұнда
            тәжірибелі ұстаздар заманауи әдістермен сабақ береді. Оқушылар
            тілдік дағдыларын жылдам дамытады. Сабақтар қызықты, тиімді және
            қолжетімді. Қазақ мәдениетін тереңірек түсінуге көмектесеміз. Бізбен
            бірге қазақ тілін оңай үйреніңіз!
          </p>
        </div>
        <img src="../assets/img/img_1.png" alt="" class="w-[500px]" />
      </div>
    </div>



    <div class="container mx-auto py-[100px] px-[20px] md:px-[100px]">
      <div class="grid md:grid-cols-[300px_1fr] grid-cols-1 gap-5 place-items-center">
        <img
          class="w-[300px] h-[300px] rounded-full object-cover "
          alt="example"
          src="../assets/img/user.png"
        />
        <div class="mt-10">
          <p
            class="text-[20px] md:text-[20px] transition-all duration-300 font-medium mb-4"
          >
            Арман Манарбекұлы
          </p>
          <p class="text-[16px] text-gray-500">
            Астана қаласы әкімдігінің Тілдерді дамыту және архив ісі басқармасы
            басшысының 2025 жылғы 3 наурыздағы бұйрығына сәйкес, «Руханият»
            коммуналдық мемлекеттік мекемесінің басшысы лауазымына Шеризатов Арман
            Манарбекұлы тағайындалды.
            <br />
            <br />
            Арман Манарбекұлы — Қазақстан Жазушылар одағының мүшесі, «Дарын»
            мемлекеттік жастар сыйлығының лауреаты, «Тәңірқұт», «Күміс шық» жыр
            жинақтарының авторы. Педагогика ғылымдарының магистрі.
            <br />
            <br />
            <ul class="list-disc list-inside text-gray-500">
              <li>21.10.2024 жылдан бастап бүгінге дейін — «Астана қаласының
                коммуникациялар қызметі» ММ Контент өндіру бөлімінің басшысы</li>
              <li>29.01–10.06.2024 — ҚР Сыртқы істер министрлігіне қарасты «Отандастар
            қоры» КеАҚ, Шетелдегі қандастармен жұмыс департаментінің жобалар
            үйлестірушісі</li>
              <li>2023–2024 жж. — «Қазконтент» АҚ, RUH.KZ порталының бас
                редакторы</li>
              <li>2022 ж. — республикалық «Егемен Қазақстан» газетінің
                интернет-редакция тілшісі</li>
              <li>2019–2021 жж. — «Қазконтент» АҚ, «Әдебиет
                порталы» жобасының журналисі</li>
              <li>2017–2019 жж. — «Сәкен Сейфуллин
                музейі» МКҚК, ғылыми қызметкер, ғылыми-ағарту бөлімінің меңгерушісі</li>
            </ul>
          </p>
        </div>
      </div>
    </div>

<div
  class="youtube py-[60px] md:py-[140px] bg-[#00B5C0] text-white relative px-[20px] md:px-[100px]"
>
  <img
    src="../assets/img/oyu_1.png"
    alt=""
    class="absolute w-[600px] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2"
  />
  <div class="flex justify-between items-center container mx-auto">
    <p class="text-[18px] md:text-[24px]">You-Tube</p>
    <div
      @click="$router.push('/youTubes')"
      class="text-[14px] md:text-[16px] flex items-center gap-2 bg-white rounded-xl cursor-pointer px-4 py-1 text-gray-600"
    >
      Барлығы
      <ArrowRightOutlined />
    </div>
  </div>

  <div
    class="grid relative md:grid-cols-3 gap-10 pt-10 container mx-auto"
    v-if="youTubes.length > 0"
  > 
    <YouTubeCard
      v-for="item in youTubes.slice(0, 3)"
      :key="item.id"
      :data="item"
    />
  </div>
</div>

    <div class="news py-[60px] md:py-[140px] container mx-auto  px-[20px] md:px-[100px]">
      <div class="flex justify-between items-center">
        <p class="text-[18px] md:text-[24px]">Жаңалықтар</p>
        <div
          @click="$router.push('/news')"
          class="text-[14px] md:text-[16px] flex items-center gap-2 border border-gray-300 rounded-xl cursor-pointer px-4 py-1 text-gray-600"
        >
          Барлығы
          <ArrowRightOutlined />
        </div>
      </div>

      <div class="md:grid md:grid-cols-3 gap-10 pt-10 container mx-auto">
        <NewsCard
          v-for="item in news.slice(0, 6)"
          :data="item"
          :key="item.id"
        />
      </div>
    </div>

    <div
      class="achievments py-[60px] md:py-[140px] bg-[#00B5C0] text-white relative px-[20px] md:px-[100px]"
    >
      <img
        src="../assets/img/oyu_1.png"
        alt=""
        class="absolute w-[600px] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2"
      />
      <div class="flex justify-between items-center container mx-auto">
        <p class="text-[18px] md:text-[24px]">Жобалар</p>
        <div
          @click="$router.push('/achievements')"
          class="text-[14px] md:text-[16px] flex items-center gap-2 bg-white rounded-xl cursor-pointer px-4 py-1 text-gray-600"
        >
          Барлығы
          <ArrowRightOutlined />
        </div>
      </div>

      <div
        class="grid relative md:grid-cols-3 gap-10 pt-10 container mx-auto"
        v-if="achievements.length > 0"
      >
        <NewsCardDef
          v-for="item in achievements.slice(0, 3)"
          :key="item.id"
          :data="item"
        />
      </div>
    </div>

    <div class="partners py-[60px] md:py-[140px] container mx-auto px-[20px] md:px-[100px]">
      <p class="text-[18px] md:text-[24px]">Серіктестер</p>
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
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 6,
          },
        }"
        class="pt-10 mt-20"
      >
        <swiper-slide v-for="item in partners" :key="item.id">
          <a :href="item.link" target="_blank">
            <img :src="API_URL + item.image.url" alt="" class="w-[100px] h-[100px] object-cover rounded-full mx-auto mb-3" />
            <p class="text-[14px] md:text-[16px] text-center">{{ item.title }}</p>
          </a>
        </swiper-slide>
      </swiper>
    </div>

    <div
      class="footer px-[20px] md:px-[120px] py-[40px] border-b border-4 border-[#F7F7F8] md:flex justify-between bg-[#F7F7F8]"
    >
      <div class="grid space-y-[12px] mb-[20px]">
        <span class="text-[16px] md:text-[20px]"
          >Біздің жаңалықтар таратылымымызға жазылыңыз.</span
        >
        <span class="md:w-[500px] text-[#81828c] text-[14px] md:text-[16px]"
          >Біз сізге соңғы айда жіберілген қысқа мәліметтерді, жаңартуларды және
          команда талғау туралы ақпараттарды жеткіземіз..</span
        >
      </div>
      <div
        class="text-[14px] md:text-[16px] flex h-[30px] md:h-[40px] space-x-[8px]"
      >
        <input
          type="text"
          placeholder="@ Сіздің поштаңыз"
          class="border-none bg-[white] focus:outline-[#00B5C0] rounded-[12px] px-[10px]"
          width="240px"
        />
        <button
          class="text-[12px] md:text-[16px] bg-[#00B5C0] border-none text-[white] rounded-[12px] px-[20px] hover:bg-[white] hover:text-[#00B5C0] transition duration-300"
        >
          Жазылу
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
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons-vue";
import NewsCard from "../components/NewsCard.vue";
import NewsCardDef from "../components/NewsCardDef.vue";
import { useNewsStore } from "../stores/news";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import YouTubeCard from "../components/YouTubeCard.vue";
import { API_URL } from "../env";
import { ref } from "vue";

const swiperController = ref<Swiper | null>(null);

function onSwiperInit(swiperInstance: any) {
  swiperController.value = swiperInstance;
}

const { news, achievements, youTubes, partners,banners,dirs} = storeToRefs(useNewsStore());
const newsStore = useNewsStore();
console.log(achievements.value)

</script>

<template>
  <div>
    <div
      class="container mx-auto flex flex-col items-center justify-center h-[600px] md:h-[900px]"
    >
      <img
        src="../assets/img/logo_2.png"
        alt=""
        class="w-[150px] md:w-[350px] mb-5 md:mb-10"
      />
      <h1
        class="text-[30px] md:text-[80px] font-bold text-[#00B5C0] mt-2 md:mt-4"
      >
        RUHANIAT
      </h1>
      <p
        class="text-center text-sm md:text-[20px] text-gray-500 font-light max-w-[800px] w-[90%] mx-auto"
      >
        "Данышпандар туралы зерде - олардың өздері көтерген мәселелердің
        өзектілігі жойылғанша ғана ел жадында сақталады."
        <br />
        <span class="font-light text-[12px] md:text-[14px] block mt-2">
          Олжас Сүлейменов
        </span>
      </p>
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



    <div class="directors py-[60px] md:py-[140px] px-[20px] md:px-[100px]">
      
      <div class="grid md:grid-cols-[300px_1fr] grid-cols-1 gap-5">
        <img
          class="w-full h-[300px] rounded-full object-cover mt-[20px]"
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

    <div class="news py-[60px] md:py-[140px] container mx-auto  px-[20px] md:px-[0px]">
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
      class="achievments py-[60px] md:py-[140px] bg-[#00B5C0] text-white relative px-[20px] md:px-[0px]"
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

    <div class="partners py-[60px] md:py-[140px] container mx-auto px-[20px] md:px-[0]">
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
import { ArrowRightOutlined } from "@ant-design/icons-vue";
import NewsCard from "../components/NewsCard.vue";
import NewsCardDef from "../components/NewsCardDef.vue";
import { useNewsStore } from "../stores/news";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import YouTubeCard from "../components/YouTubeCard.vue";
import { API_URL } from "../env";

const { news, achievements, youTubes, partners } = storeToRefs(useNewsStore());
const newsStore = useNewsStore();
onMounted(async () => {
  await newsStore.getDirs();
});
</script>

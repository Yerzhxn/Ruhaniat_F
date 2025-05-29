<template>
  <div>
    <div
      class="container mx-auto flex flex-col items-center justify-center h-[600px] md:h-[900px]"
    >
      <img src="../assets/img/logo_2.png" alt="" class="w-[150px] md:w-[350px] mb-5 md:mb-10" />
      <p class="text-center text-sm md:text-[20px] text-gray-500 font-light">
        Jaña mektep, bizben birge beleske!
      </p>
      <h1 class="text-[30px] md:text-[80px] font-bold text-[#00B5C0] mt-2 md:mt-4">RUHANIAT</h1>
    </div>
    <div class="bg-[#00B5C0] py-[60px] md:py-[140px] relative px-[20px] md:px-[100px]">
      <img
        src="../assets/img/oyu_1.png"
        alt=""
        class="absolute w-[300px] md:w-[600px] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2"
      />
      <div
        class="relative about grid md:grid-cols-2 gap-10 container mx-auto text-white"
      >
        <div>
          <p class="text-[25px] md:text-[60px] font-bold mb-8 pb-8 border-b border-white">
            BIZ TURALY
          </p>
          <p class="text-[16px] md:text-[24px]">
            Bizdiñ mektep – qazaq tilin úırenýge arnalǵan keremet oryn. Múnda tásirıibeli ustazdar zamanawy ádistermen sabaq beredi. Oqushylar tildik daǵdyların jylдам damytady. Sabaqtar qyzyqty, tíimdi jáne qoljetimdi. Qazaq mádenietin tereńirek túsinýge kómektesemiz. Bizben birge qazaq tilin ońai úirenińiz!
          </p>
        </div>
        <img src="../assets/img/img_1.png" alt="" class="w-[500px]" />
      </div>
    </div>

    <div class="news py-[60px] md:py-[140px] container mx-auto px-[20px] md:px-[100px]">
      <div class="flex justify-between items-center">
        <p class="text-[18px] md:text-[24px]">Jańalyqtar</p>
        <div
          @click="$router.push('/news')"
          class=" text-[14px] md:text-[16px] flex items-center gap-2 border border-gray-300 rounded-xl cursor-pointer px-4 py-1 text-gray-600"
        >
          Bárliǵy
          <ArrowRightOutlined />
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-5 pt-10">
        <NewsCard
          v-for="item in news.slice(0, 6)"
          :data="item"
          :key="item.id"
        />
      </div>
    </div>

    <div class="youtube py-[60px] md:py-[140px] bg-[#00B5C0] text-white relative px-[20px] md:px-[100px]">
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
          Bárliǵy
          <ArrowRightOutlined />
        </div>
      </div>

      <div
        class="grid relative md:grid-cols-3 gap-10 pt-10 container mx-auto"
        v-if="youTubes.length > 0"
      >
        <NewsCardDef
          v-for="item in youTubes.slice(0, 3)"
          :key="item.id"
          :data="item"
        />
      </div>
    </div>

    <div class="directors py-[60px] md:py-[140px] px-[20px] md:px-[100px]">
      <div class="flex justify-between items-center container mx-auto">
        <p class="text-[18px] md:text-[24px]">Basşılar</p>
        <div
          class="text-[14px] md:text-[16px] flex items-center gap-2 border border-gray-300 rounded-xl cursor-pointer px-4 py-1 text-gray-600"
        >
          Bárliǵy
          <ArrowRightOutlined />
        </div>
      </div>

      <div
        class="grid relative md:grid-cols-3 gap-10 pt-20 container mx-auto text-center px-[100px]"
      >
        <div v-for="item in 3" :key="item">
          <img
            class="w-[100px] h-[100px] rounded-full m-auto mb-5 object-cover"
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
          <p
            class="text-[20px] md:text-[30px] hover:text-gray-200 cursor-pointer transition-all duration-300"
          >
            Kuralbayev T
          </p>
          <p class="text-[14px] md:text-[16px] text-gray-500 font-light">
            CEO and CTO of SpaceX
          </p>
        </div>
      </div>
    </div>

    <div class="achievments py-[60px] md:py-[140px] bg-[#00B5C0] text-white relative px-[20px] md:px-[100px]">
      <img
        src="../assets/img/oyu_1.png"
        alt=""
        class="absolute w-[600px] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2"
      />
      <div class="flex justify-between items-center container mx-auto">
        <p class="text-[18px] md:text-[24px]">Bizdiń jetistikter</p>
        <div
          @click="$router.push('/achievements')"
          class="text-[14px] md:text-[16px] flex items-center gap-2 bg-white rounded-xl cursor-pointer px-4 py-1 text-gray-600"
        >
          Bárliǵy
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
    <div
      class="FAG grid place-content-center my-[120px] md:my-[206px] w-[450px] md:w-[608px] md:mx-auto px-[20px] md:px-[100px]"
    >
      <div
        class="bg-[#E3EAFD] rounded-full p-[8px] mx-auto mb-[40px] text-[#133A9A]"
      >
        F.A.G
      </div>
      <div class="text-[16px] py-[24px] grid space-y-[40px] place-content-center">
        <span class="text-[24px] md:text-[48px] text-center">Kóp taralǵan swraq</span>
        <span class="text-[#81828c] text-center text-[14px] md:text-[20px]"
          >Biz en táýelsiz swraqtardyń jauaptarın jıqtap aldyq. Eger sizde basqa swraqtar bolsa — bizben baylanısyńyz!</span
        >
      </div>
      <div class="mx-auto w-[410px] md:w-[538px] space-y-[12px] mt-[17px]">
        <div
          class="question_1 transition duration-300 grid grid-cols-[95%_5%] text-[14px] md:text-[20px] border border-gray-300 justify-between px-[20px] py-[8px] md:py-[16px] rounded-[10px]  md:space-y-[8px]"
        >
          <span>Oquǵa kim tiriýleý alady?</span>
          <button
            id="toggle-btn1"
            class="cursor-pointer border-none bg-inherit text-[#81828c]"
          >
            +
          </button>
          <span class="answer_1 hidden md:w-[500px] text-[#81828c] text-[14px] md:text-[16px]"
            >1. Siz «Baylanystar» bólimi arqılı onlaýn ótinis toltyrýyńyz nemese belgilengen telefonnan qosylýyńyz múmkin. Bizdiń menedzherimiz sizben jaqyn uaqytta baylanısady.</span
          >
        </div>

        <div
          class="question_2 transition duration-300 grid grid-cols-[95%_5%] text-[14px] md:text-[20px] border border-gray-300 justify-between px-[20px] py-[8px] md:py-[16px] rounded-[10px]  md:space-y-[8px]"
        >
          <span>Oquǵa kim tiriýleý alady?</span>
          <button
            id="toggle-btn2"
            class="cursor-pointer border-none bg-inherit text-[#81828c]"
          >
            +
          </button>
          <span class="answer_2 hidden md:w-[500px] text-[#81828c] text-[14px] md:text-[16px]"
            >1. Siz «Baylanystar» bólimi arqılı onlaýn ótinis toltyrýyńyz nemese belgilengen telefonnan qosylýyńyz múmkin. Bizdiń menedzherimiz sizben jaqyn uaqytta baylanısady.</span
          >
        </div>
        <div
          class="question_3 transition duration-300 grid grid-cols-[95%_5%] text-[14px] md:text-[20px] border border-gray-300 justify-between px-[20px] py-[8px] md:py-[16px] rounded-[10px]  md:space-y-[8px]"
        >
          <span>Oquǵa kim tiriýleý alady?</span>
          <button
            id="toggle-btn3"
            class="cursor-pointer border-none bg-inherit text-[#81828c]"
          >
            +
          </button>
          <span class="answer_3 hidden md:w-[500px] text-[#81828c] text-[14px] md:text-[16px]"
            >1. Siz «Baylanystar» bólimi arqılı onlaýn ótinis toltyrýyńyz nemese belgilengen telefonnan qosylýyńyz múmkin. Bizdiń menedzherimiz sizben jaqyn uaqytta baylanısady.</span
          >
        </div>
        <div
          class="question_4 transition duration-300 grid grid-cols-[95%_5%] text-[14px] md:text-[20px] border border-gray-300 justify-between px-[20px] py-[8px] md:py-[16px] rounded-[10px]  md:space-y-[8px]"
        >
          <span>Oquǵa kim tiriýleý alady?</span>
          <button
            id="toggle-btn4"
            class="cursor-pointer border-none bg-inherit text-[#81828c]"
          >
            +
          </button>
          <span class="answer_4 hidden md:w-[500px] text-[#81828c] text-[14px] md:text-[16px]"
            >1. Siz «Baylanystar» bólimi arqılı onlaýn ótinis toltyrýyńyz nemese belgilengen telefonnan qosylýyńyz múmkin. Bizdiń menedzherimiz sizben jaqyn uaqytta baylanısady.</span
          >
        </div>
      </div>
    </div>
    <div
      class="footer px-[20px] md:px-[120px] py-[40px] border-b border-4 border-[#F7F7F8] md:flex justify-between bg-[#F7F7F8] "
    >
      <div class="grid space-y-[12px] mb-[20px]">
        <span class= "text-[16px] md:text-[20px]">Bizdiń jańalyqtar taratýymyzğa jazylıńyz.</span>
        <span class="md:w-[500px] text-[#81828c] text-[14px] md:text-[16px]"
          >Biz sizge soñǵy ayda jiberilgen qısqa mälimetterdi, jańartýlardy jäne komanda talğau twraly aqparattardy jetkizemiz.</span
        >
      </div>
      <div class="text-[14px] md:text-[16px] flex h-[30px] md:h-[40px] space-x-[8px]">
        <input
          type="text"
          placeholder="@ Sizdyn meiliniz"
          class="border-none bg-[white] focus:outline-[#00B5C0] rounded-[12px] px-[10px]"
          width="240px"
        />
        <button
          class="text-[12px] md:text-[16px] bg-[#00B5C0] border-none text-[white] rounded-[12px] px-[20px] hover:bg-[white] hover:text-[#00B5C0] transition duration-300"
        >
          ZHAZYLU
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightOutlined } from "@ant-design/icons-vue";
import NewsCard from "../components/NewsCard.vue";
import NewsCardDef from "../components/NewsCardDef.vue";
import { useNewsStore } from "../stores/news.js";
import { storeToRefs } from "pinia";

const { news, achievements , youTubes } = storeToRefs(useNewsStore());
import { onMounted } from 'vue'
console.log('aasasddsd')
onMounted(() => {
  console.log("Achievements:", youTubes.value)
})

document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.getElementById("toggle-btn1");
  const btn2 = document.getElementById("toggle-btn2");
  const btn3 = document.getElementById("toggle-btn3");
  const btn4 = document.getElementById("toggle-btn4");
  const answer1 = document.querySelector(".answer_1") as HTMLElement | null;
  const answer2 = document.querySelector(".answer_2") as HTMLElement | null;
  const answer3 = document.querySelector(".answer_3") as HTMLElement | null;
  const answer4 = document.querySelector(".answer_4") as HTMLElement | null;
  const question_1 = document.querySelector(
    ".question_1"
  ) as HTMLElement | null;
  const question_2 = document.querySelector(
    ".question_2"
  ) as HTMLElement | null;
  const question_3 = document.querySelector(
    ".question_3"
  ) as HTMLElement | null;
  const question_4 = document.querySelector(
    ".question_4"
  ) as HTMLElement | null;

  btn1?.addEventListener("click", () => {
    if (answer1) {
      answer1.classList.toggle("hidden");
      question_1.classList.toggle("bg-[#F7F7F8]");
      btn1.textContent = answer1.classList.contains("hidden") ? "+" : "−";
    }
  });
  btn2?.addEventListener("click", () => {
    if (answer2) {
      answer2.classList.toggle("hidden");
      question_2.classList.toggle("bg-[#F7F7F8]");
      btn2.textContent = answer2.classList.contains("hidden") ? "+" : "−";
    }
  });
  btn3?.addEventListener("click", () => {
    if (answer3) {
      answer3.classList.toggle("hidden");
      question_3.classList.toggle("bg-[#F7F7F8]");
      btn3.textContent = answer3.classList.contains("hidden") ? "+" : "−";
    }
  });
  btn4?.addEventListener("click", () => {
    if (answer4) {
      answer4.classList.toggle("hidden");
      question_4.classList.toggle("bg-[#F7F7F8]");
      btn4.textContent = answer4.classList.contains("hidden") ? "+" : "−";
    }
  });
});

</script>

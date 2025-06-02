<script setup lang="ts">
interface Card {
  img: string;
  description: string;
}

const cards: Card[] = [
  {
    img: "img/img_1.png",
    description:
      "Біздің мектеп – қазақ тілін үйренуге арналған керемет орын. Мұнда тәжірибелі ұстаздар заманауи әдістермен сабақ береді. Оқушылар тілдік дағдыларын жылдам дамытады. Сабақтар қызықты, тиімді және қолжетімді. Қазақ мәдениетін тереңірек түсінуге көмектесеміз. Бізбен бірге қазақ тілін оңай үйреніңіз! Біздің мектеп – қазақ тілін үйренуге арналған керемет орын. Мұнда тәжірибелі ұстаздар заманауи әдістермен сабақ береді. Оқушылар тілдік дағдыларын жылдам дамытады. Сабақтар қызықты, тиімді және қолжетімді. Қазақ мәдениетін тереңірек түсінуге көмектесеміз. Бізбен бірге қазақ тілін оңай үйреніңіз!",
  },
];
</script>

<template>
  <section
    class="youtube px-[20px] md:px-[140px] py-[100px] bg-[#00B5C0] bg-[url(/oiuGreen.png)] bg-no-repeat bg-position-[center] text-white"
  >
    <div class="nav flex justify-between">
      <h1 class="text-[24px] md:text-[40px]">БІЗ ТУРАЛЫ</h1>
    </div>

    <div class="w-[50%] h-[2px] bg-white mt-[50px]"></div>

    <div class="mt-[30px]">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="md:flex container md:space-x-[30px]"
      >
        <div class="py-[24px] grid space-y-[8px]">
          <p class="line text-[16px] md:text-[20px]">{{ card.description }}</p>
        </div>
        <img :src="card.img" width="751" height="438" alt="School image" />
      </div>

      <div class="grid py-[24px] space-x-[40px]">
        <h2 class="text-[24px] md:text-[40px] border-b-[2px] py-[20px]">
          ЖАЛПЫ АҚПАРАТ
        </h2>
        <p class="line text-[16px] md:text-[20px] mt-[40px]">
          Біздің мектеп – қазақ тілін үйренуге арналған керемет орын. Мұнда тәжірибелі ұстаздар заманауи әдістермен сабақ береді. Оқушылар тілдік дағдыларын жылдам дамытады. Сабақтар қызықты, тиімді және қолжетімді. Қазақ мәдениетін тереңірек түсінуге көмектесеміз. Бізбен бірге қазақ тілін оңай үйреніңіз!
        </p>
      </div>
    </div>
  </section>
</template>

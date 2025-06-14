<template>
  <div class="container mx-auto py-[40px] px-[20px] md:px-[100px] relative">
    <img
      src="../../assets/img/oyu_2.png"
      alt=""
      class="absolute w-[600px] h-[600px] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 -z-10"
    />

    <div class="grid md:grid-cols-[300px_1fr] grid-cols-1 gap-5 px-4">
      <img
        class="w-[300px] h-[300px] rounded-full object-cover mt-[20px] mx-auto"
        alt="example"
        src="../../assets/img/user.PNG"
      />
      <div class="mt-10">
        <p
          class="text-[20px] hover:text-gray-200 cursor-pointer transition-all duration-300 font-medium mb-1"
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

    <h3 class="text-[24px] font-bold mt-10 mb-5 px-4">Құрылым</h3>
    <div class="grid md:grid-cols-3 grid-cols-1 gap-5 justify-center px-4">
          <div
            v-for="user in jumyss.filter(user => user.place === 'БАСШЫ')"
            :key="user.id"
            class="grid grid-cols-[100px_1fr] gap-4 p-3 border-gray-300 rounded-lg border"
          >
            <img
              :src="API_URL + user.image.url"
              alt=""
              class="w-[100px] h-[100px] rounded-full object-cover"
            />
            <div class="mt-4">
              <p class="text-[16px] font-bold">{{ user.name }}</p>
              <p class="text-[14px] text-gray-500">
                {{ user.bolim ?? "Қызметкер" }}
              </p>
              <p class="text-[14px] text-gray-500">{{ user.tel }}</p>
              <p class="text-[14px] text-gray-500">{{ user.role }}</p>
            </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useNewsStore } from "../../stores/news";
import { storeToRefs } from "pinia";
import { API_URL } from "../../env";
const newsStore = useNewsStore();
const { jumyss } = storeToRefs(newsStore);


onMounted(async () => {
  await newsStore.getJumyss();
});

</script>

<template>
  <div
    class="flex justify-between text-gray-700 px-[20px] md:px-[120px] py-[40px] md:py-[80px] bg-[#F7F7F8]"
  >
    <img src="../assets/img/logo.png" alt="" class="h-9 md:h-10" />
    <div class="hidden md:flex gap-4 col-span-2">
      <p
        @click="$router.push('/news')"
        class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
      >
        Жаңалықтар
      </p>
      <a-dropdown placement="topCenter">
        <p
          class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
        >
          Кестелер
        </p>
        <template #overlay>
          <a-menu>
            <a-menu-item
              v-for="(item, index) in tables"
              :key="index"
              @click="$router.push(item.route)"
            >
              {{ item.title }}
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <p
        @click="$router.push('/achievements')"
        class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
      >
        Біздің жобалар
      </p>
      <p
        @click="$router.push('/youTubes')"
        class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
      >
        You-Tube
      </p>

      <a-dropdown placement="topCenter">
        <a class="ant-dropdown-link cursor-pointer" @click.prevent>
          Біз Туралы
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item
              v-for="(item, index) in aboutMenu"
              :key="index"
              @click="$router.push(item.route)"
            >
              {{ item.title }}
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
    <div class="flex text-gray-400 gap-4">
      <a
        v-for="(social, index) in socials"
        :key="index"
        :href="social.link"
        target="_blank"
      >
        <component
          :is="social.icon"
          class="text-[18px] cursor-pointer hover:!text-[#00B5C0] transition-all duration-300"
        />
      </a>
    </div>
  </div>

  <div
    class="text-center text-gray-400 h-16 border-t border-gray-200 flex items-center justify-center"
  >
    <p>Все права защищены. © {{ currentYear }}</p>
  </div>
</template>

<script setup lang="ts">
import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons-vue";

const tables = [
  {
    route: "/table1",
    title: "Мемлекеттік тілде өткізілген сабақтардың сағат саны",
  },
  {
    route: "/table2",
    title: "Мемлекеттік тіл курсына қатысушылар тізімі",
  },
  {
    route: "/table3",
    title: "Мемлекеттік тіл курсының сабақ кестесі",
  },
  {
    route: "/table4",
    title:
      "Мемлекеттік тілді оқыту бойынша таңдаушылардың сабаққа қатысу туралы мәлімет",
  },
];

const aboutMenu = [
  {
    route: "/about",
    title: "Жалпы Ақпарат",
  },
  {
    route: "/kurylym",
    title: "Құрылым",
  },
  {
    route: "/dirs",
    title: "Бөлімдер",
  },
  {
    route: "/map",
    title: "Байланыс",
  },
];

const socials = [
  {
    link: "https://www.instagram.com/ruhaniat.kz",
    icon: InstagramFilled,
  },
  {
    link: "https://www.youtube.com/@ruhaniatkz",
    icon: YoutubeFilled,
  },
  {
    link: "https://www.facebook.com/ruhaniatnursultan",
    icon: FacebookFilled,
  },
];

const currentYear = new Date().getFullYear();
</script>

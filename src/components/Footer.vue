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
            <a-menu-item @click="$router.push('/about')">
              Жалпы Ақпарат
            </a-menu-item>
            <a-menu-item @click="$router.push('/kurylym')">
              Құрылым
            </a-menu-item>
            <a-menu-item @click="$router.push('/dirs')"> Бөлімдер </a-menu-item>
            <a-menu-item @click="$router.push('/map')"> Байланыс </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
    <div class="flex text-gray-400 gap-4">
      <a href="https://www.instagram.com/ruhaniat.kz" target="_blank">
        <InstagramFilled
          class="text-[18px] cursor-pointer hover:!text-[#00B5C0] transition-all duration-300"
        />
      </a>
      <a href="https://www.youtube.com/@ruhaniatkz" target="_blank">
        <YoutubeFilled
          class="text-[18px] cursor-pointer hover:!text-[#00B5C0] transition-all duration-300"
        />
      </a>
      <a href="https://www.facebook.com/ruhaniatnursultan" target="_blank">
        <FacebookFilled
          class="text-[18px] cursor-pointer hover:!text-[#00B5C0] transition-all duration-300"
        />
      </a>
    </div>
  </div>

  <div
    class="text-center text-gray-400 h-16 border-t border-gray-200 flex items-center justify-center"
  >
    <p>Все права защищены. © 2025</p>
  </div>
</template>

<script setup lang="ts">
import {
  DownOutlined,
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
  YoutubeFilled,
} from "@ant-design/icons-vue";
import { ref } from "vue";

const lang = ref("EN");
</script>

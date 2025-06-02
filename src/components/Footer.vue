<template>
  
    <div class="flex justify-between   text-gray-700 px-[20px] md:px-[120px] py-[40px] md:py-[80px] bg-[#F7F7F8]">
      <img src="../assets/img/logo.png" alt="" class="h-9 md:h-10" />
      <div class="hidden md:flex gap-4 col-span-2">
        <p
          class="text-gray-400 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
          @click="$router.push('/news')"
        >
          Жаңалықтар
        </p>
        <p
          class="text-gray-400 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
          @click="$router.push('/tabl')"
        >
          Кестелер
        </p>
        <p
          class="text-gray-400 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
          @click="$router.push('/achievements')"
        >
          Біздің жетістіктер
        </p>
        <p
          class="text-gray-400 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
          @click="$router.push('/youTubes')"
        >
          You-Tube
        </p>
        <p
          class="text-gray-400 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
          @click="$router.push('/about')"
        >
          Біз Туралы
        </p>
        
        
      </div>
      <div class="flex text-gray-400 gap-4">
        <InstagramFilled
          class="text-xl md:text-2xl cursor-pointer hover:!text-[#00B5C0] transition-all duration-300"
        />
        <YoutubeFilled
          class="text-xl md:text-2xl cursor-pointer hover:!text-[#00B5C0] transition-all duration-300"
        />
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

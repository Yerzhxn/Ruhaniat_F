<template>
  <div class="container fixed z-40 backdrop-blur-sm inset-x-0 shadow-md  border-[1px] border-[#dedfe3] flex justify-between items-center h-16 w-[90%] mx-auto mt-[20px] px-[20px] border-1 rounded-[18px] ">
    <div class="flex items-center gap-10 text-gray-700">
      <img
        @click="$router.push('/')"
        src="../assets/img/logo.png"
        alt=""
        class="h-10 cursor-pointer"
      />
      <div class="flex items-center gap-7">
        <p
          @click="$router.push('/news')"
          class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
        >
          Жаңалықтар
        </p>
        <p
          @click="$router.push('/tabl')"
          class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
        >
          Kesteler
        </p>
        <p
          @click="$router.push('/jetistikter')"
          class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
        >
          Bizdin Jetistikter
        </p>
        <p
          @click="$router.push('/youtube')"
          class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
        >
          You-Tube
        </p>

        <p
          @click="$router.push('/about')"
          class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
        >
          Біз туралы
        </p>
      </div>
    </div>
    <a-dropdown>
      <p
        class="text-gray-700 text-[14px] flex items-center gap-2 cursor-pointer"
      >
        {{ lang }} <DownOutlined class="text-xs" />
      </p>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <p @click="lang = 'EN'">EN</p>
          </a-menu-item>
          <a-menu-item>
            <p @click="lang = 'KZ'">KZ</p>
          </a-menu-item>
          <a-menu-item>
            <p @click="lang = 'RU'">RU</p>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import { DownOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

const lang = ref("KK");
</script>

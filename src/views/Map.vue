<template>
  <div
    class=" md:grid absolute mt-[340px] md:mt-[120px] ml-[45px] md:ml-[120px] backdrop-blur-md p-[10px] md:p-[25px] rounded-xl space-y-[20px]"
  >
    <p class="text-[14px] md:text-[20px]">Бізбен байланыс</p>
    <div class="flex gap-3">
      <p class="flex items-center">Мекен жай:</p>
      <p>Астана қаласы, улица Бейбитшилик, 9</p>
    </div>
    <div class="flex gap-3">
      <p class="flex items-center">Instagram:</p>
      <a target="_blank" href="https://www.instagram.com/p/DGvOkhYIHW5"
        ><p>info@ruhaniat.kz</p></a
      >
    </div>
    <div class="flex gap-3">
      <p class="flex items-center">Телефон:</p>
      <a target="_blank" href="tel:87172249052"><p>87172249052</p></a>
    </div>
  </div>
  <div class="h-[800px]">
    <iframe
      src="https://api-maps.yandex.ru/frame/v1/-/CHGk6Nj9"
      name="d3d7ede6-0b49-43c4-a846-454afd30e0d1"
      class="lc-iframe__iframe"
      style="height: 800px; width: 100%"
      allowfullscreen="true"
      referrerpolicy="origin"
    ></iframe>
  </div>
</template>

<script setup>
import { AimOutlined } from "@ant-design/icons-vue";
</script>

<template>
  <div class="absolute mt-[120px] ml-[120px] backdrop-blur-md p-[25px] rounded-xl space-y-[20px]">
    <p class="text-[20px]">Бізбен байланыс</p>
    <p class="flex items-center"><AimOutlined class="mr-[10px] text-[20px]"/> Мекен жай</p>
    <p>Астана қаласы, Сауран көшесі, 7 А</p>
    <p class="flex items-center"><MailOutlined class="mr-[10px] text-[20px]"/>э-пошта:</p>
    <a href=""><p>info@ruhaniat.kz</p></a>

  </div>
  <div class="h-[800px]">
    <iframe
      src="https://api-maps.yandex.ru/frame/v1/-/CHGFJLOK"
      name="d3d7ede6-0b49-43c4-a846-454afd30e0d1"
      class="lc-iframe__iframe"
      style="height:800px; width: 100%;"
      allowfullscreen="true"
      referrerpolicy="origin"
    ></iframe>
  </div>
    
</template>

<script setup>
  import{AimOutlined,MailOutlined} from "@ant-design/icons-vue";
</script>

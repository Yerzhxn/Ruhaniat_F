<script setup lang="ts">

</script>

<template>
  <div class="bg-[#00B5C0] py-[60px] md:py-[100px] relative px-[20px] md:px-[100px]">
      <img
        src="../assets/img/oyu_1.png"
        alt="Background"
        class="absolute w-[300px] md:w-[600px] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2"
      />
      
      <div>
        <p
          class="text-[25px] md:text-[60px] font-bold mb-8 pb-8 border-b border-white text-white"
        >
          {{ $t('main.about')}}
        </p>
        <p class="text-[16px] md:text-[24px] text-white">
          <img src="../assets/img/img_1.png" alt="About" class="w-[500px] h-[300px] m-[20px] float-left" />
          {{ $t('about.text') }}
        </p>
      </div>
        
      
    </div>
</template>

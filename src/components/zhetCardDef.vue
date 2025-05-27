<script setup lang="ts">
  defineProps<{
    title: string,
    predef: string,
    image?: string
  }>()
</script>
<template>
  <div>
    <img
      class="w-full h-[300px] rounded-xl object-cover"
      alt="example"
      :src="image || 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'"
    />
    <p
      class="text-[24px] hover:text-gray-200 cursor-pointer transition-all duration-300 font-bold mb-3 py-3 border-b border-[#00B5C0]"
    >
      {{title}}
    </p>
    <p class="text-[16px] mt-[10px]">
      {{predef}}
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

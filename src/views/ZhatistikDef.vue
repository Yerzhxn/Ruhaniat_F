<script setup lang="ts">

import { useCardStore } from '/src/stores/cardStores1.js'

const cardStore = useCardStore()
const card = cardStore.selectedCard
</script>

<template>
     <div class="youtube px-[140px] py-[100px] bg-[#00B5C0] bg-[url(/oiuGreen.png)] bg-no-repeat bg-position-[center] text-[white]">
        <div class="nav flex justify-between  ">
        <span class="text-[30px]">{{card.title}}</span>
        </div>
        <div class="w-[50%] h-[2px] bg-[white] mt-[50px]"></div>

        <div class=" mt-[50px]">
        <div 
            class="flex container space-x-[30px] "
        >
            <img src="../assets/img/img_1.png" width="511" height="398" alt="">
            
            <div class="py-[24px] grid space-y-[8px] border-b-[2px]">
            <span class="text-[30px]">{{ card.title1 }}</span>
            <div class="line text-[20px]">{{ card.description }}</div>
            
            </div>
            
        </div>
            <div class=" flex py-[24px] space-x-[40px] mt-[30px] items-center">
                <span class="text-[30px] w-[200px] text-center">{{ card.title2 }}</span>
                <div class="line h-[180px] bg-[white] w-[10px]"></div>
                <div class="line text-[20px]">{{ card.description_2 }}</div>
                
            </div>
        </div>
    </div>
</template>
<template>
    <div class="youtube px-[140px] py-[100px] bg-[#00B5C0] bg-[url(/oiuGreen.png)] bg-no-repeat bg-position-[center] text-[white] mx-auto">
        <img
        src="../assets/img/oyu_1.png"
        alt=""
        class="absolute w-[600px] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2"
        />
        <div class="nav flex justify-between ">
        <span class="text-[30px]">YOU-TUBE</span>
        </div>
        <div class="w-[50%] h-[2px] bg-[white] mt-[50px]"></div>

        
        <div class="grid relative grid-cols-3 gap-20 pt-10 container ">
            <NewsCardDef v-for="(card, index) in cards" 
        :key="index"
        :title="card.title"
        :predef="card.predef"
        :img="card.img"/>
        </div>
        
    </div>
</template>
<script setup lang="ts">

import NewsCardDef from "../components/zhetCardDef.vue";
const cards = [
    {
            img: '/img1.png',
            title: 'You_tube1',
            predef:'asdLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            

    },
    {
            img: '/img1.png',
            title: 'You_tube16',
            predef:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            

    },
    {
            img: '/img1.png',
            title: 'You_tube15',
            predef:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            

    },
    {
            img: '/img1.png',
            title: 'You_tube14',
            predef:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            

    },
    {
            img: '/img1.png',
            title: 'You_tube13',
            predef:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            

    },
    {
            img: '/img1.png',
            title: 'You_tube12',
            predef:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            

    },
  
]
import { useRouter } from 'vue-router'
import { useCardStore } from '/src/stores/cardStores.js'

const router = useRouter()
const cardStore = useCardStore()


function goToDetails(card) {
  cardStore.setCard(card)
  router.push('/jan')
}
</script>
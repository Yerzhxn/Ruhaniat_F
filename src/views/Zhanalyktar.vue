<script setup>
const cards = [
  {
        img: '/img1.png',
        title: 'BASTAMA',
        description: 'cart 1 Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas',
        description_2: 'Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'

    },
  {
        img: '/img1.png',
        title: 'BASTAMA',
        description: ' cart 2 Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas',
        description_2: 'Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'

    },
  {
        img: '/img1.png',
        title: 'BASTAMA',
        description: 'cart 3 Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas',
        description_2: 'Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'

    },
  {
        img: '/img1.png',
        title: 'BASTAMA',
        description: 'cart 4 Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas',
        description_2: 'Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'

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

<template>
  <div class="janalyktar mx-auto px-[140px] py-[100px] bg-[url(/oiuGreen1.png)] bg-no-repeat bg-position-[center] text-[white]">
    <div class="nav flex justify-between  text-[#00B5C0]">
      <span class="text-[30px]">ZHANALYKTAR</span>
    </div>
    <div class="w-[50%] h-[2px] bg-[#00B5C0] mt-[50px]"></div>

    <div class="mt-[50px] space-y-[32px]  text-[#00B5C0]">
      <div 
        v-for="(card, index) in cards" 
        :key="index"
        class="flex container  space-x-[70px]"
      >
        <img src="../assets/img/img_1.png" width="467px" height="267px" alt="">
        
        <div class="grid space-y-[10px]">
          <span class="text-[24px]">{{ card.title }}</span>
          <div class="text-[#00B5C0]">2 MAMYR 2025</div>
          <span class="text-[#00B5C0]">{{ card.description }}</span>
          <button @click="goToDetails(card)" class="hover:bg-[#00B5C0] hover:text-[white] transition duration-300 cursor-pointer border-[2px] border-[#00B5C0] text-[#00B5C0] h-[30px] w-[40%] bg-inherit rounded-[4px] px-[4px]">TOLYQ AQPARAT</button>
        </div>
        
      </div>
    </div>
  </div>
</template>
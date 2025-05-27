<script setup lang="ts">
const cards = [
    {
        img: '../assets/img/img_1.png',
        description: ' Lorem24, iPraesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestasLorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'
    } 
]
</script>

<template>
    <div class="youtube px-[140px] py-[100px] bg-[#00B5C0] bg-[url(/oiuGreen.png)] bg-no-repeat bg-position-[center] text-[white]">
        <div class="nav flex justify-between  ">
        <span class="text-[40px]">BIZ TURALY</span>
        </div>
        <div class="w-[50%] h-[2px] bg-[white] mt-[50px]"></div>

        <div class=" mt-[30px]">
        <div 
            v-for="(card, index) in cards" 
            :key="index"
            class="flex container space-x-[30px] "
        >
            
            
            <div class="py-[24px] grid space-y-[8px]">
            <div class="line text-[20px]">{{ card.description }}</div>
        
            </div>
            <img src="../assets/img/img_1.png" width="751" height="438" alt="">
        </div>
            <div class="grid py-[24px] space-x-[40px] mt-[30px]">
                <span class="text-[40px] border-b-[2px] py-[20px]">ZHALPY AKPARAT</span>
                <div class="line text-[20px] mt-[40px]">Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</div>
                
            </div>
        </div>
    </div>
</template>
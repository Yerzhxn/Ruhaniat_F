<script setup lang="ts">
const cards = [
    {
        img: '../assets/img/img_1.png',
        description: 'Bizdiñ mektep – qazaq tilin úırenýge arnalǵan keremet oryn. Múnda tásirıibeli ustazdar zamanawy ádistermen sabaq beredi. Oqushylar tildik daǵdyların jylдам damytady. Sabaqtar qyzyqty, tíimdi jáne qoljetimdi. Qazaq mádenietin tereńirek túsinýge kómektesemiz. Bizben birge qazaq tilin ońai úirenińiz!  Bizdiñ mektep – qazaq tilin úırenýge arnalǵan keremet oryn. Múnda tásirıibeli ustazdar zamanawy ádistermen sabaq beredi. Oqushylar tildik daǵdyların jylдам damytady. Sabaqtar qyzyqty, tíimdi jáne qoljetimdi. Qazaq mádenietin tereńirek túsinýge kómektesemiz. Bizben birge qazaq tilin ońai úirenińiz!'
    } 
]
</script>

<template>
    <div class="youtube px-[20px] md:px-[140px] py-[100px] bg-[#00B5C0] bg-[url(/oiuGreen.png)] bg-no-repeat bg-position-[center] text-[white]">
        <div class="nav flex justify-between  ">
        <span class="text-[24px] md:text-[40px]">BIZ TURALY</span>
        </div>
        <div class="w-[50%] h-[2px] bg-[white] mt-[50px]"></div>

        <div class=" mt-[30px]">
            <div 
                    v-for="(card, index) in cards" 
                    :key="index"
                    class=" md:flex container md:space-x-[30px] "
                >
                
                
                <div class="py-[24px] grid space-y-[8px]">
                <div class="line text-[16px] md:text-[20px]">{{ card.description }}</div>
            
                </div>
                <img src="../assets/img/img_1.png" width="751" height="438" alt="">
            </div>
            <div class="grid py-[24px] space-x-[40px]">
                <span class="text-[24px] md:text-[40px] border-b-[2px] py-[20px]">ZHALPY AKPARAT</span>
                <div class="line text-[16px] md:text-[20px] mt-[40px]"> Bizdiñ mektep – qazaq tilin úırenýge arnalǵan keremet oryn. Múnda tásirıibeli ustazdar zamanawy ádistermen sabaq beredi. Oqushylar tildik daǵdyların jylдам damytady. Sabaqtar qyzyqty, tíimdi jáne qoljetimdi. Qazaq mádenietin tereńirek túsinýge kómektesemiz. Bizben birge qazaq tilin ońai úirenińiz!</div>
                
            </div>
        </div>
    </div>
</template>
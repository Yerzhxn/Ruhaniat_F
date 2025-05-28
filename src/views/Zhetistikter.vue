<template>
  <div
    class="jetistikter mx-auto px-[140px] py-[100px] bg-[white] bg-[url(/oiuGreen.png)] bg-no-repeat bg-position-[center] text-[#00B5C0] mx-auto"
  >
    <img
      src="../assets/img/oyu_1_green.png"
      alt=""
      class="absolute w-[600px] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2"
    />
    <div class="nav flex justify-between">
      <span class="text-[30px]">BYZDYN ZHETISTIKTER</span>
    </div>
    <div class="w-[50%] h-[2px] bg-[#00B5C0] mt-[50px]"></div>

    <div class="grid relative grid-cols-3 gap-20 pt-10 container">
      <NewsCardDef
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :predef="card.predef"
        :img="card.img"
        @click="goToDetails(card)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import NewsCardDef from "../components/zhetCardDef.vue";
const cards = [
  {
    img: "/img1.png",
    title: "1Zhetistik",
    predef:
      "asdLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    title1: "ZHALPY AKPARAT",
    title2: "ALGA APARAR ZHOL",
    description:
      "cart 1 Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
    description_2:
      "Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
  },
  {
    img: "/img1.png",
    title: "2Zhetistik",
    predef:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    title1: "ZHALPY AKPARAT",
    title2: "ALGA APARAR ZHOL",
    description:
      "cart 1 Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
    description_2:
      "Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
  },
  {
    img: "/img1.png",
    title: "3Zhetistik",
    predef:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    title1: "ZHALPY AKPARAT",
    title2: "ALGA APARAR ZHOL",
    description:
      "cart 1 Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
    description_2:
      "Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
  },
  {
    img: "/img1.png",
    title: "4Zhetistik",
    predef:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    title1: "ZHALPY AKPARAT",
    title2: "ALGA APARAR ZHOL",
    description:
      "cart 1 Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
    description_2:
      "Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
  },
  {
    img: "/img1.png",
    title: "5Zhetistik",
    predef:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    title1: "ZHALPY AKPARAT",
    title2: "ALGA APARAR ZHOL",
    description:
      "cart 1 Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
    description_2:
      "Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
  },
  {
    img: "/img1.png",
    title: "6Zhetistik",
    predef:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    title1: "ZHALPY AKPARAT",
    title2: "ALGA APARAR ZHOL",
    description:
      "cart 1 Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
    description_2:
      "Lorem24, ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum tortor id tortor cursus, vel lacinia odio sagittis. Curabitur efficitur, quam ac aliquet cursus, ligula est elementum turpis, et iaculis elit nulla ut eros. Nullam non malesuada nulla, a scelerisque nisi. Quisque fermentum, purus sed hendrerit vestibulum, ligula lacus auctor justo, vitae semper lacus lorem a arcu. Duis in orci neque. Etiam venenatis risus ut lectus malesuada, at facilisis ipsum ornare. Praesent vel turpis sit amet justo tincidunt iaculis sit amet et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
  },
];
import { useRouter } from "vue-router";
import { useCardStore } from "/src/stores/cardStores1.js";

const router = useRouter();
const cardStore = useCardStore();

function goToDetails(card) {
  cardStore.setCard(card);
  router.push("/jet");
}
</script>

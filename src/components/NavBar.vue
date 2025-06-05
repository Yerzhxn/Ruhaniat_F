<template>
  <div
    class="container fixed z-40 backdrop-blur-sm inset-x-0 shadow-md border-[1px] border-[#dedfe3] flex justify-between items-center h-12 md:h-16 w-[90%] mx-auto mt-[20px] px-[20px] border-1 rounded-[18px]"
  >
    <div class="flex items-center gap-10 text-gray-700">
      <img
        @click="$router.push('/')"
        src="../assets/img/logo.png"
        alt=""
        class="h-7 md:h-10 cursor-pointer"
      />
      <div class="hidden md:flex items-center gap-7">
        <p
          @click="$router.push('/news')"
          class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
        >
          Жаңалықтар
        </p>
        <a-dropdown>
          <p
            class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
          >
            Кестелер
          </p>
          <template #overlay>
            <a-menu>
              <a-menu-item @click="$router.push('/table1')">
                Мемлекеттік тілде өткізілген сабақтардың сағат саны
              </a-menu-item>
              <a-menu-item @click="$router.push('/table2')">
                Мемлекеттік тіл курсына қатысушылар тізімі
              </a-menu-item>
              <a-menu-item @click="$router.push('/table3')">
                Мемлекеттік тіл курсының сабақ кестесі
              </a-menu-item>
              <a-menu-item @click="$router.push('/table4')">
                Мемлекеттік тілді оқыту бойынша таңдаушылардың сабаққа қатысу
                туралы мәлімет
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
        <p
          @click="$router.push('/achievements')"
          class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
        >
          Біздің жобалар
        </p>
        <p
          @click="$router.push('/youTubes')"
          class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
        >
          You-Tube
        </p>

        <a-dropdown>
          <a class="ant-dropdown-link cursor-pointer" @click.prevent>
            Біз Туралы
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item @click="$router.push('/about')">
                Жалпы Ақпарат
              </a-menu-item>
              <a-menu-item @click="$router.push('/kurylym')">
                Құрылым
              </a-menu-item>
              <a-menu-item @click="$router.push('/dirs')">
                Бөлімдер
              </a-menu-item>
              <a-menu-item @click="$router.push('/map')">
                Байланыс
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
    <div class="flex items-center gap-4 justify-center">
      <div class="text-gray-400 gap-2 hidden md:flex -mt-2">
        <a href="https://www.instagram.com/ruhaniat.kz" target="_blank">
          <InstagramFilled
            class="text-[18px] cursor-pointer hover:!text-[#00B5C0] transition-all duration-300"
          />
        </a>
        <a href="https://www.youtube.com/@ruhaniatkz" target="_blank">
          <YoutubeFilled
            class="text-[18px] cursor-pointer hover:!text-[#00B5C0] transition-all duration-300"
          />
        </a>
        <a href="https://www.facebook.com/ruhaniatnursultan" target="_blank">
          <FacebookFilled
            class="text-[18px] cursor-pointer hover:!text-[#00B5C0] transition-all duration-300"
          />
        </a>
      </div>
      <a-dropdown class="hidden md:flex">
        <p
          class="text-gray-700 text-[14px] md:ml-0 ml-[60%] flex items-center gap-2 cursor-pointer"
        >
          {{ lang }} <DownOutlined class="text-xs" />
        </p>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <p @click="lang = 'EN'">EN</p>
            </a-menu-item>
            <a-menu-item>
              <p @click="lang = 'KZ'">KZ</p>
            </a-menu-item>
            <a-menu-item>
              <p @click="lang = 'RU'">RU</p>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
    <div class="md:hidden">
      <!-- Иконка меню -->
      <p
        class="text-gray-700 text-[14px] flex items-center gap-2 cursor-pointer"
        @click="visible = true"
      >
        <MenuOutlined class="text-xs" />
      </p>

      <!-- Drawer меню -->
      <a-drawer
        v-model:visible="visible"
        title="Мәзір"
        placement="right"
        :closable="true"
      >
        <div class="flex flex-col gap-4 text-[16px] text-gray-700">
          <p
            @click="$router.push('/news')"
            class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
          >
            Жаңалықтар
          </p>
          <a-dropdown>
            <p
              class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
            >
              Кестелер
            </p>
            <template #overlay>
              <a-menu>
                <a-menu-item @click="$router.push('/table1')">
                  Мемлекеттік тілде өткізілген сабақтардың сағат саны
                </a-menu-item>
                <a-menu-item @click="$router.push('/table2')">
                  Мемлекеттік тіл курсына қатысушылар тізімі
                </a-menu-item>
                <a-menu-item @click="$router.push('/table3')">
                  Мемлекеттік тіл курсының сабақ кестесі
                </a-menu-item>
                <a-menu-item @click="$router.push('/table4')">
                  Мемлекеттік тілді оқыту бойынша таңдаушылардың сабаққа қатысу
                  туралы мәлімет
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <p
            @click="$router.push('/achievements')"
            class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
          >
            Біздің жобалар
          </p>
          <p
            @click="$router.push('/youTubes')"
            class="text-gray-700 hover:text-[#00B5C0] transition-all duration-300 cursor-pointer"
          >
            You-Tube
          </p>

          <a-dropdown>
            <a class="ant-dropdown-link cursor-pointer" @click.prevent>
              Біз Туралы
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item @click="$router.push('/about')">
                  Жалпы Ақпарат
                </a-menu-item>
                <a-menu-item @click="$router.push('/kurylym')">
                  Құрылым
                </a-menu-item>
                <a-menu-item @click="$router.push('/dirs')">
                  Бөлімдер
                </a-menu-item>
                <a-menu-item @click="$router.push('/map')">
                  Байланыс
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <a-divider class="!my-2" />
          <a-dropdown>
            <p
              class="text-gray-700 text-[14px] flex items-center gap-2 cursor-pointer"
            >
              {{ lang }} <DownOutlined class="text-xs" />
            </p>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <p @click="lang = 'EN'">EN</p>
                </a-menu-item>
                <a-menu-item>
                  <p @click="lang = 'KZ'">KZ</p>
                </a-menu-item>
                <a-menu-item>
                  <p @click="lang = 'RU'">RU</p>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>

          <div class="text-gray-400 gap-2 flex -mt-2">
            <a href="https://www.instagram.com/ruhaniat.kz" target="_blank">
              <InstagramFilled
                class="text-[18px] cursor-pointer hover:!text-[#00B5C0] transition-all duration-300"
              />
            </a>
            <a href="https://www.youtube.com/@ruhaniatkz" target="_blank">
              <YoutubeFilled
                class="text-[18px] cursor-pointer hover:!text-[#00B5C0] transition-all duration-300"
              />
            </a>
            <a
              href="https://www.facebook.com/ruhaniatnursultan"
              target="_blank"
            >
              <FacebookFilled
                class="text-[18px] cursor-pointer hover:!text-[#00B5C0] transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </a-drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  DownOutlined,
  FacebookFilled,
  InstagramFilled,
  MenuOutlined,
  YoutubeFilled,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const lang = ref("KK");

const visible = ref(false);
const router = useRouter();

function navigate(path: string) {
  router.push(path);
  visible.value = false; // Закрыть drawer после перехода
}
</script>

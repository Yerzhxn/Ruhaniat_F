<template>
    
    <div class="pt-[100px] px-[20px] text-[#00B5C0]">
        <div>
          <p class="text-[24px] md:text-[30px] pt-[40px]">
            MEMLEKETTIK TILDE OTKIZILGEN SABAQTARDYN SAQAN SANDARY
          </p>

          <a-dropdown>
            <p
              class="text-gray-700 rounded-lg text-[24px] w-[120px] px-[20px] my-[20px] border-[2px] border-[#00B5C0] flex items-center gap-2 cursor-pointer"
            >
              {{ month }} <DownOutlined class="text-xs" />
            </p>
            <template #overlay>
              <a-menu>
                <a-menu-item v-for="m in months" :key="m">
                  <p @click="month = m">{{ m }}</p>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>

          <a-table
            v-if="groupedData[month] && groupedData[month].length"
            :columns="table1Columns"
            :data-source="groupedData[month]"
            :pagination="false"
            bordered
            row-key="adress"
          />
        </div>
        <div>
            <p class="text-[24px] md:text-[30px] pt-[40px]">MEMLEKETTIK TIL KURSYNA KATYSUSSYLAR TIZIMI</p>

            <a-dropdown>
              <p class="text-gray-700 rounded-lg text-[24px] w-[120px] px-[20px] my-[20px] border-[2px] border-[#00B5C0] flex items-center gap-2 cursor-pointer">
                {{ month2 }} <DownOutlined class="text-xs" />
              </p>
              <template #overlay>
                <a-menu>
                  <a-menu-item v-for="m in months2" :key="m">
                    <p @click="month2 = m">{{ m }}</p>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>

            <a-table
              v-if="filteredTable2s.length"
              :columns="columnsTable2s"
              :dataSource="filteredTable2s"
              :pagination="false"
              bordered
              rowKey="Adress"
            />
        </div>
        <div>
            <p class="text-[24px] md:text-[30px] py-[40px]">MEMLEKETTIK TIL KURSYNYN SABAQ KESTESI</p>

            <!-- Выбор месяца и имени -->
            <div class="flex gap-4 mb-4">
              <a-dropdown>
                <p class="cursor-pointer border border-[#00B5C0] rounded-lg px-4 py-1 text-[20px] text-gray-700">
                  {{ table3sMonth }} <DownOutlined class="text-xs" />
                </p>
                <template #overlay>
                  <a-menu>
                    <a-menu-item v-for="m in table3sMonths" :key="m">
                      <p @click="table3sMonth = m">{{ m }}</p>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>

              <a-dropdown>
                <p class="cursor-pointer border border-[#00B5C0] rounded-lg px-4 py-1 text-[20px] text-gray-700">
                  {{ table3sName }} <DownOutlined class="text-xs" />
                </p>
                <template #overlay>
                  <a-menu>
                    <a-menu-item v-for="n in table3sNames" :key="n">
                      <p @click="table3sName = n">{{ n }}</p>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>

            <!-- Таблица -->
            <a-table
              v-if="table3sSchedule.length"
              :columns="columnsTable3"
              :dataSource="table3sSchedule"
              :pagination="false"
              bordered
              rowKey="Adress"
            />
        </div>
        <div>
          <p class="text-[24px] md:text-[30px] py-[40px]">MEMLEKETTIK TILDI OQYTU BOIYNSA TANDAUSYLARDYN SABAQQA KATYSU TURALY MALIMET</p>

          <!-- Выбор месяца и преподавателя -->
          <div class="flex gap-4 mb-4">
            <a-dropdown>
              <p class="cursor-pointer border border-[#00B5C0] rounded-lg px-4 py-1 text-[20px] text-gray-700">
                {{ table4sMonth }} <DownOutlined class="text-xs" />
              </p>
              <template #overlay>
                <a-menu>
                  <a-menu-item v-for="m in table4sMonths" :key="m">
                    <p @click="table4sMonth = m">{{ m }}</p>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>

            <a-dropdown>
              <p class="cursor-pointer border border-[#00B5C0] rounded-lg px-4 py-1 text-[20px] text-gray-700">
                {{ table4sMugalim }} <DownOutlined class="text-xs" />
              </p>
              <template #overlay>
                <a-menu>
                  <a-menu-item v-for="t in table4sMugalimder" :key="t">
                    <p @click="table4sMugalim = t">{{ t }}</p>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>

          <!-- Таблица -->
          <a-table
            v-if="filteredTable4s.length"
            :columns="columnsTable4"
            :dataSource="formattedTable4s"
            :pagination="false"
            bordered
            scroll="{ x: 1500 }"
            rowKey="TAA"
          />
        </div>
    </div>
    
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { useNewsStore } from "../stores/news.js";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const newsStore = useNewsStore();
const { table1s,table2s,table3s,table4s } = storeToRefs(newsStore);


onMounted(async () => {
  await newsStore.getTable1();
  await newsStore.getTable2();
  await newsStore.getTable3();
  await newsStore.getTable4();
  console.log("table1s after fetch:", table1s.value);
  console.log("table1s after fetch:", table1s.list);
  console.log("table2s after fetch:", table2s.value);
  console.log("table3s after fetch:", table3s.value);
  console.log("table4s after fetch:", table4s.value);
});



//TABLE_1
const month = ref('Qantar');
const months = computed(() => {
  return [...new Set(table1s.value.map(item => item.month))];
});

const groupedData = computed(() => {
  const grouped = {};
  months.value.forEach(m => {
    grouped[m] = [];
  });

  table1s.value.forEach(item => {
    const fullDaysArray = Array(31).fill(0);

    if (Array.isArray(item.list1)) {
      item.list1.forEach(entry => {
        const dayIndex = parseInt(entry.day, 10) - 1;
        const hour = parseInt(entry.hour, 10);
        if (!isNaN(dayIndex) && dayIndex >= 0 && dayIndex < 31 && !isNaN(hour)) {
          fullDaysArray[dayIndex] = hour;
        }
      });
    }

    if (!grouped[item.month]) grouped[item.month] = [];

    grouped[item.month].push({
      ...item,
      daysArray: fullDaysArray
    });
  });

  return grouped;
});
const table1Columns = computed(() => {
  const dayColumns = Array.from({ length: 31 }, (_, i) => ({
    title: String(i + 1),
    dataIndex: `day${i + 1}`,
    key: `day${i + 1}`,
    align: 'center',
    customRender: ({ record }) => record.daysArray[i] || ''
  }));

  return [
    {
      title: 'MEKENZHAY',
      dataIndex: 'adress',
      key: 'adress',
      fixed: 'left',
    },
    ...dayColumns,
    {
      title: 'TOLTQ SAGAT',
      key: 'total',
      align: 'center',
      customRender: ({ record }) =>
        record.daysArray.reduce((sum, val) => sum + (isNaN(val) ? 0 : val), 0),
    },
  ];
});




//TABLE_2
const month2 = ref('Qantar');
const months2 = computed(() => {
  return [...new Set(table2s.value.map(item => item.month))];
});

const filteredTable2s = computed(() => {
  return table2s.value.filter(item => item.month?.toLowerCase() === month2.value.toLowerCase());
});

onMounted(async () => {
  await newsStore.getTable2(); // обязательно вызвать этот метод
});

const columnsTable2s = [
  {
    title: 'T.A.A.',
    dataIndex: 'TAA',
    key: 'TAA',
  },
  {
    title: 'LAUAZYMY',
    dataIndex: 'Lauazym',
    key: 'Lauazym',
  },
  {
    title: 'TUGAN ZHYLY',
    dataIndex: 'TuganJyly',
    key: 'TuganJyly',
  },
  {
    title: 'MEKEN ZHAY',
    dataIndex: 'Adress',
    key: 'Adress',
  },
  {
    title: 'BAILANYS TELEFONY',
    dataIndex: 'Tel',
    key: 'Tel',
  },
  {
    title: 'ULTY',
    dataIndex: 'Ulty',
    key: 'Ulty',
  },
  {
    title: 'DENGEIY',
    dataIndex: 'Dengei',
    key: 'Dengei',
  },
  {
    title: 'AZAMATTYGY',
    dataIndex: 'Azamat',
    key: 'Azamat',
  },
];
const columnsTable3 = [
  {
    title: 'MEKEN ZHAIY',
    dataIndex: 'Adress',
    key: 'Adress',
  },
  {
    title: 'SANY',
    dataIndex: 'Sany',
    key: 'Sany',
  },
  {
    title: 'DYISWNBI',
    dataIndex: 'pn',
    key: 'pn',
  },
  {
    title: 'SEISEMBI',
    dataIndex: 'vt',
    key: 'vt',
  },
  {
    title: 'SARSENBI',
    dataIndex: 'sr',
    key: 'sr',
  },
  {
    title: 'BEISENBI',
    dataIndex: 'cht',
    key: 'cht',
  },
  {
    title: 'ZUMA',
    dataIndex: 'pt',
    key: 'pt',
  },
  {
    title: 'SENBI',
    dataIndex: 'sb',
    key: 'sb',
  },
];















//TABLE_3
onMounted(async () => {
  await newsStore.getTable3();
});
const table3sMonth = ref('Qantar');
const table3sName = ref('Mugalim');


const table3sMonths = computed(() => {
  return [...new Set(table3s.value.map(item => item.month))];
});
const table3sNames = computed(() => {
  return [...new Set(table3s.value.map(item => item.mugalim))];
});

const table3sSchedule = computed(() =>
  newsStore.table3s.filter(
    item =>
      item.month === table3sMonth.value &&
      item.mugalim === table3sName.value
  )
);



//TABLE_4
onMounted(async () => {
  await newsStore.getTable4(); // получаем table4s
});

const table4sMonth = ref('Qantar');
const table4sMugalim = ref('Mugalim');

const table4sMonths = computed(() => {
  return [...new Set(table4s.value.map(item => item.month))];
});

const table4sMugalimder = computed(() => {
  return [...new Set(table4s.value.map(item => item.mugalim))];
});

const filteredTable4s = computed(() =>
  table4s.value.filter(
    item =>
      item.month === table4sMonth.value &&
      item.mugalim === table4sMugalim.value
  )
);


function parseDaysFromObject(daysArray) {
  const result = Array(31).fill('');

  if (!Array.isArray(daysArray)) return result;

  for (const entry of daysArray) {
    const dayIndex = Number(entry.day) - 1;
    if (dayIndex >= 0 && dayIndex < 31 && (entry.sign === '+' || entry.sign === '-')) {
      result[dayIndex] = entry.sign;
    }
  }

  return result;
}

function countMarkFromArray(arr, symbol) {
  if (!Array.isArray(arr)) return 0;
  return arr.filter(x => x === symbol).length;
}
const columnsTable4 = computed(() => {
  const baseColumns = [
    {
      title: 'TANDAUSYNYN T.A.A',
      dataIndex: 'TAA',
      key: 'TAA',
      fixed: 'left',
    },
  ]

  // 31 day columns
  const dayColumns = Array.from({ length: 31 }, (_, i) => ({
    title: `${i + 1}`,
    dataIndex: `day${i + 1}`,
    key: `day${i + 1}`,
    align: 'center',
  }))

  const summaryColumns = [
    {
      title: 'SEBEPTI',
      dataIndex: 'sebep',
      key: 'sebep',
      align: 'center',
    },
    {
      title: 'SEBEPSIZ',
      dataIndex: 'sebepsiz',
      key: 'sebepsiz',
      align: 'center',
    },
  ]

  return [...baseColumns, ...dayColumns, ...summaryColumns]
})

// Подготовка данных под Ant Design формат
const formattedTable4s = computed(() => {
  return filteredTable4s.value.map((row) => {
    const daysArray = parseDaysFromObject(row.days)
    const dayData = {}

    for (let i = 0; i < 31; i++) {
      dayData[`day${i + 1}`] = ['+', '-'].includes(daysArray[i]) ? daysArray[i] : ''
    }

    return {
      TAA: row.TAA,
      ...dayData,
      sebep: countMarkFromArray(daysArray, '+'),
      sebepsiz: countMarkFromArray(daysArray, '-'),
    }
  })
})
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}
th, td {
  border-top: 1px solid #00B5C0;
  border-bottom: 1px solid #00B5C0;
  padding: 5px;
}
thead th {
  background-color: #e0e0e0;
}
</style>

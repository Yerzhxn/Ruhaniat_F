<template>
  <div class="pt-[100px] px-[20px] text-[#00B5C0] container mx-auto py-[100px]">
    <!-- Table 1: MEMLEKETTIK TILDE OTKIZILGEN SABAQTARDYN SAQAN SANDARY -->
    <TableSection
      :title="'MEMLEKETTIK TILDE OTKIZILGEN SABAQTARDYN SAQAN SANDARY'"
      :month="selectedMonth1"
      :months="availableMonths1"
      :table-data="groupedData[selectedMonth1]"
      :columns="table1Columns"
      @month-change="selectedMonth1 = $event"
    />

    <!-- Table 2: MEMLEKETTIK TIL KURSYNA KATYSUSSYLAR TIZIMI -->
    <TableSection
      :title="'MEMLEKETTIK TIL KURSYNA KATYSUSSYLAR TIZIMI'"
      :month="selectedMonth2"
      :months="availableMonths2"
      :table-data="filteredTable2Data"
      :columns="table2Columns"
      @month-change="selectedMonth2 = $event"
    />

    <!-- Table 3: MEMLEKETTIK TIL KURSYNYN SABAQ KESTESI -->
    <DualFilterTableSection
      :title="'MEMLEKETTIK TIL KURSYNYN SABAQ KESTESI'"
      :month="selectedMonth3"
      :months="availableMonths3"
      :name="selectedName3"
      :names="availableNames3"
      :table-data="filteredTable3Data"
      :columns="table3Columns"
      @month-change="selectedMonth3 = $event"
      @name-change="selectedName3 = $event"
    />

    <!-- Table 4: MEMLEKETTIK TILDI OQYTU BOIYNSA TANDAUSYLARDYN SABAQQA KATYSU TURALY MALIMET -->
    <DualFilterTableSection
      :title="'MEMLEKETTIK TILDI OQYTU BOIYNSA TANDAUSYLARDYN SABAQQA KATYSU TURALY MALIMET'"
      :month="selectedMonth4"
      :months="availableMonths4"
      :name="selectedTeacher4"
      :names="availableTeachers4"
      :table-data="formattedTable4Data"
      :columns="table4Columns"
      :scroll="{ x: 1500 }"
      @month-change="selectedMonth4 = $event"
      @name-change="selectedTeacher4 = $event"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useNewsStore } from "../../stores/news.js";
import { storeToRefs } from "pinia";

// Components
import TableSection from "./TableSection.vue";
import DualFilterTableSection from "./DualFilterTableSection.vue";

// Constants
const DAYS_IN_MONTH = 31;
const DEFAULT_MONTH = "Qantar";
const DEFAULT_TEACHER = "Mugalim";

// Store setup
const newsStore = useNewsStore();
const { tables } = storeToRefs(newsStore);

// Reactive state
const selectedMonth1 = ref(DEFAULT_MONTH);
const selectedMonth2 = ref(DEFAULT_MONTH);
const selectedMonth3 = ref(DEFAULT_MONTH);
const selectedMonth4 = ref(DEFAULT_MONTH);
const selectedName3 = ref(DEFAULT_TEACHER);
const selectedTeacher4 = ref(DEFAULT_TEACHER);

// Utility functions
const createDayColumns = (
  customRender?: (record: any, index: number) => any
) => {
  return Array.from({ length: DAYS_IN_MONTH }, (_, i) => ({
    title: String(i + 1),
    dataIndex: `day${i + 1}`,
    key: `day${i + 1}`,
    align: "center" as const,
    width: 70,
    ...(customRender && {
      customRender: ({ record }) => customRender(record, i),
    }),
  }));
};

const getUniqueValues = (array: any[], key: string) => {
  return [...new Set(array.map((item) => item[key]))];
};

const parseDaysArray = (list: any[]): number[] => {
  const daysArray = Array(DAYS_IN_MONTH).fill(0);

  if (!Array.isArray(list)) return daysArray;

  list.forEach((entry) => {
    const dayIndex = parseInt(entry.day, 10) - 1;
    const hour = parseInt(entry.hour, 10);

    if (dayIndex >= 0 && dayIndex < DAYS_IN_MONTH && !isNaN(hour)) {
      daysArray[dayIndex] = hour;
    }
  });

  return daysArray;
};

const parseAttendanceDays = (daysArray: any[]): string[] => {
  const result = Array(DAYS_IN_MONTH).fill("");

  if (!Array.isArray(daysArray)) return result;

  daysArray.forEach((entry) => {
    const dayIndex = Number(entry.day) - 1;
    if (
      dayIndex >= 0 &&
      dayIndex < DAYS_IN_MONTH &&
      ["+", "-"].includes(entry.sign)
    ) {
      result[dayIndex] = entry.sign;
    }
  });

  return result;
};

const countSymbols = (array: string[], symbol: string): number => {
  return Array.isArray(array) ? array.filter((x) => x === symbol).length : 0;
};

// Table 1 computeds
const availableMonths1 = computed(() =>
  getUniqueValues(tables.value.table1, "month")
);

const groupedData = computed(() => {
  const grouped: Record<string, any[]> = {};

  availableMonths1.value.forEach((month) => {
    grouped[month] = tables.value.table1
      .filter((item) => item.month === month)
      .map((item) => ({
        ...item,
        daysArray: parseDaysArray(item.list1),
      }));
  });

  return grouped;
});

const table1Columns = computed(() => [
  {
    title: "MEKENZHAY",
    dataIndex: "adress",
    key: "adress",
    fixed: "left" as const,
    width: 150,
  },
  ...createDayColumns((record, index) => record.daysArray[index] || ""),
  {
    title: "TOLTQ SAGAT",
    key: "total",
    align: "center" as const,
    width: 150,
    customRender: ({ record }) =>
      record.daysArray.reduce(
        (sum: number, val: number) => sum + (isNaN(val) ? 0 : val),
        0
      ),
  },
]);

// Table 2 computeds
const availableMonths2 = computed(() =>
  getUniqueValues(tables.value.table2, "month")
);

const filteredTable2Data = computed(() =>
  tables.value.table2.filter(
    (item) => item.month?.toLowerCase() === selectedMonth2.value.toLowerCase()
  )
);

const table2Columns = [
  { title: "T.A.A.", dataIndex: "TAA", key: "TAA" },
  { title: "LAUAZYMY", dataIndex: "Lauazym", key: "Lauazym" },
  { title: "TUGAN ZHYLY", dataIndex: "TuganJyly", key: "TuganJyly" },
  { title: "MEKEN ZHAY", dataIndex: "Adress", key: "Adress" },
  { title: "BAILANYS TELEFONY", dataIndex: "Tel", key: "Tel" },
  { title: "ULTY", dataIndex: "Ulty", key: "Ulty" },
  { title: "DENGEIY", dataIndex: "Dengei", key: "Dengei" },
  { title: "AZAMATTYGY", dataIndex: "Azamat", key: "Azamat" },
];

// Table 3 computeds
const availableMonths3 = computed(() =>
  getUniqueValues(tables.value.table3, "month")
);
const availableNames3 = computed(() =>
  getUniqueValues(tables.value.table3, "mugalim")
);

const filteredTable3Data = computed(() =>
  tables.value.table3.filter(
    (item) =>
      item.month === selectedMonth3.value &&
      item.mugalim === selectedName3.value
  )
);

const table3Columns = [
  { title: "MEKEN ZHAIY", dataIndex: "Adress", key: "Adress" },
  { title: "SANY", dataIndex: "Sany", key: "Sany" },
  { title: "DYISWNBI", dataIndex: "pn", key: "pn" },
  { title: "SEISEMBI", dataIndex: "vt", key: "vt" },
  { title: "SARSENBI", dataIndex: "sr", key: "sr" },
  { title: "BEISENBI", dataIndex: "cht", key: "cht" },
  { title: "ZUMA", dataIndex: "pt", key: "pt" },
  { title: "SENBI", dataIndex: "sb", key: "sb" },
];

// Table 4 computeds
const availableMonths4 = computed(() =>
  getUniqueValues(tables.value.table4, "month")
);
const availableTeachers4 = computed(() =>
  getUniqueValues(tables.value.table4, "mugalim")
);

const filteredTable4Data = computed(() =>
  tables.value.table4.filter(
    (item) =>
      item.month === selectedMonth4.value &&
      item.mugalim === selectedTeacher4.value
  )
);

const table4Columns = computed(() => [
  {
    title: "TANDAUSYNYN T.A.A",
    dataIndex: "TAA",
    key: "TAA",
    fixed: "left" as const,
  },
  ...createDayColumns(),
  {
    title: "SEBEPTI",
    dataIndex: "sebep",
    key: "sebep",
    align: "center" as const,
  },
  {
    title: "SEBEPSIZ",
    dataIndex: "sebepsiz",
    key: "sebepsiz",
    align: "center" as const,
  },
]);

const formattedTable4Data = computed(() =>
  filteredTable4Data.value.map((row) => {
    const daysArray = parseAttendanceDays(row.days);
    const dayData: Record<string, string> = {};

    for (let i = 0; i < DAYS_IN_MONTH; i++) {
      dayData[`day${i + 1}`] = ["+", "-"].includes(daysArray[i])
        ? daysArray[i]
        : "";
    }

    return {
      TAA: row.TAA,
      ...dayData,
      sebep: countSymbols(daysArray, "+"),
      sebepsiz: countSymbols(daysArray, "-"),
    };
  })
);

// Lifecycle
onMounted(async () => {
  try {
    await Promise.all([
      newsStore.getTable(1),
      newsStore.getTable(2),
      newsStore.getTable(3),
      newsStore.getTable(4),
    ]);

    // Set default values based on available data
    if (availableMonths1.value.length > 0)
      selectedMonth1.value = availableMonths1.value[0];
    if (availableMonths2.value.length > 0)
      selectedMonth2.value = availableMonths2.value[0];
    if (availableMonths3.value.length > 0)
      selectedMonth3.value = availableMonths3.value[0];
    if (availableMonths4.value.length > 0)
      selectedMonth4.value = availableMonths4.value[0];
    if (availableNames3.value.length > 0)
      selectedName3.value = availableNames3.value[0];
    if (availableTeachers4.value.length > 0)
      selectedTeacher4.value = availableTeachers4.value[0];
  } catch (error) {
    console.error("Error loading table data:", error);
  }
});
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}

th,
td {
  border-top: 1px solid #00b5c0;
  border-bottom: 1px solid #00b5c0;
  padding: 5px;
}

thead th {
  background-color: #e0e0e0;
}
</style>

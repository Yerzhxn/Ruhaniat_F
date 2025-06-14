<template>
  <div class=" px-[20px] md:px-[100px] text-[#00B5C0] container mx-auto ">
    <!-- Table 1: MEMLEKETTIK TILDE OTKIZILGEN SABAQTARDYN SAQAN SANDARY -->
    <TableSection
      :title="'Мемлекеттік тілде өткізілген сабақтардың сағат саны'"
      :month="selectedMonth1"
      :months="availableMonths1"
      :table-data="groupedData[selectedMonth1]"
      :columns="table1Columns"
      @month-change="selectedMonth1 = $event"
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
    title: "Мекен жайы",
    dataIndex: "adress",
    key: "adress",
    fixed: "left" as const,
    width: 150,
  },
  ...createDayColumns((record, index) => record.daysArray[index] || ""),
  {
    title: "Толық сағат",
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

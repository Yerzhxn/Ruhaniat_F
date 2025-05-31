<template>
  <div>
    <p class="text-lg md:text-2xl pt-[40px] mb-2">
      {{ title }}
    </p>

    <!-- Filter Controls -->
    <div class="flex gap-4 mb-4">
      <a-dropdown v-if="months.length > 0" :trigger="['click']">
        <p
          class="cursor-pointer border border-[#00B5C0] rounded-lg px-4 py-1 text-[20px] text-gray-700 flex items-center gap-2"
        >
          {{ month }} <DownOutlined class="text-xs" />
        </p>
        <template #overlay>
          <a-menu>
            <a-menu-item v-for="m in months" :key="m">
              <p @click="$emit('monthChange', m)">{{ m }}</p>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>

      <a-dropdown v-if="names.length > 0" :trigger="['click']">
        <p
          class="cursor-pointer border border-[#00B5C0] rounded-lg px-4 py-1 text-[20px] text-gray-700 flex items-center gap-2"
        >
          {{ name }} <DownOutlined class="text-xs" />
        </p>
        <template #overlay>
          <a-menu>
            <a-menu-item v-for="n in names" :key="n">
              <p @click="$emit('nameChange', n)">{{ n }}</p>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>

    <!-- Table -->
    <a-table
      v-if="tableData && tableData.length > 0"
      :columns="columns"
      :data-source="tableData"
      :pagination="false"
      :scroll="{ x: { sm: 1000, md: 1200, lg: 1500 } }"
      bordered
      :row-key="rowKey"
    />

    <div
      v-else-if="months.length === 0 || names.length === 0"
      class="text-gray-500 my-4"
    >
      No data available
    </div>

    <div v-else class="text-gray-500 my-4">
      No records found for selected filters
    </div>
  </div>
</template>

<script setup lang="ts">
import { DownOutlined } from "@ant-design/icons-vue";

// Props
interface Props {
  title: string;
  month: string;
  months: string[];
  name: string;
  names: string[];
  tableData?: any[];
  columns: any[];
  scroll?: object;
  rowKey?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tableData: () => [],
  scroll: () => ({}),
  rowKey: "id",
});

// Emits
const emit = defineEmits<{
  monthChange: [month: string];
  nameChange: [name: string];
}>();
</script>

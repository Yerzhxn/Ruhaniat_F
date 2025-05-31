<template>
  <div>
    <p class="text-lg md:text-2xl pt-[40px] mb-2">
      {{ title }}
    </p>

    <a-dropdown v-if="months.length > 0" :trigger="['click']">
      <p
        class="cursor-pointer border border-[#00B5C0] rounded-lg px-4 py-1 text-[20px] text-gray-700 flex items-center gap-2 w-max mb-4"
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

    <a-table
      v-if="tableData && tableData.length > 0"
      :columns="columns"
      :data-source="tableData"
      :pagination="false"
      :scroll="{ x: { sm: 1000, md: 1200, lg: 1500 } }"
      bordered
      :row-key="rowKey"
    />

    <div v-else-if="months.length === 0" class="text-gray-500 my-4">
      No data available
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
  tableData?: any[];
  columns: any[];
  scroll?: object;
  rowKey?: string;
}

withDefaults(defineProps<Props>(), {
  tableData: () => [],
  scroll: () => ({}),
  rowKey: "id",
});

// Emits
const emit = defineEmits<{
  monthChange: [month: string];
}>();
</script>

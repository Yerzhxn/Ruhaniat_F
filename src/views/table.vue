<template>
    
    <div class="pt-[100px] px-[20px] text-[#00B5C0]">
        <div>
            <p class="text-[30px] py-[40px]">MEMLEKETTIK TILDE OTKIZILGEN SABAQTARDYN SAQAN SANDARY</p>
            <table>
                <thead>
                <tr>
                    <th>MEKENZHAY</th>
                    <th v-for="day in 31" :key="day">{{ day }}</th>
                    <th>TOLTQ SAGAT</th>
                </tr>
                </thead>
                <tbody>
                <!-- Основные строки -->
                <tr v-for="(row, index) in tableData" :key="index">
                    <td>{{ row.MEKENZHAY }}</td>
                    <td v-for="(val, i) in row.days" :key="i">{{ val }}</td>
                    <td>{{ row.days.reduce((sum, val) => sum + (isNaN(val) ? 0 : Number(val)), 0) }}</td>
                </tr>

                <!-- Строка BARLYGY -->
                <tr>
                    <td><strong>BARLYGY</strong></td>
                    <td v-for="(val, i) in totalPerDay" :key="i"><strong>{{ val }}</strong></td>
                    <td><strong>{{ totalPerDay.reduce((sum, val) => sum + val, 0) }}</strong></td>
                </tr>
                </tbody>
            </table>
        </div>
        <div>
            <p class="text-[30px] py-[40px]">MEMLEKETTIK TIL KURSYNA KATYSUSSYLAR TIZIMI</p>
            <table>
                <thead>
                <tr>
                    <th>T.A.A.</th>
                    <th>LAUAZYMY</th>
                    <th>TUGAN ZHYLY</th>
                    <th>MEKEN ZHAY</th>
                    <th>BAILANYS TELEFONY</th>
                    <th>ULTY</th>
                    <th>DENGEIY</th>
                    <th>AZAMATTYGY</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(person, index) in people" :key="index">
                    <td>{{ person.taa }}</td>
                    <td>{{ person.lauazymy }}</td>
                    <td>{{ person.tuganZhyly }}</td>
                    <td>{{ person.mekenZhay }}</td>
                    <td>{{ person.phone }}</td>
                    <td>{{ person.ulty }}</td>
                    <td>{{ person.dengeiy }}</td>
                    <td>{{ person.azamattygy }}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div>
            <p class="text-[30px] py-[40px]">MEMLEKETTIK TIL KURSYNYN SABAQ KESTESI</p>
            <table>
                <thead>
                <tr>
                    <th>MEKEN ZHAIY</th>
                    <th>SANY</th>
                    <th>DYISWNBI</th>
                    <th>SEISEMBI</th>
                    <th>SARSENBI</th>
                    <th>BEISENBI</th>
                    <th>ZUMA</th>
                    <th>SENBI</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(row, index) in schedule" :key="index">
                    <td>{{ row.mekenZhaiy }}</td>
                    <td>{{ row.sany }}</td>
                    <td>{{ row.dyiswnbi }}</td>
                    <td>{{ row.seisembi }}</td>
                    <td>{{ row.sarsenbi }}</td>
                    <td>{{ row.beisenbi }}</td>
                    <td>{{ row.zuma }}</td>
                    <td>{{ row.senbi }}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div>
            <p class="text-[30px] py-[40px]">MEMLEKETTIK TILDI OQYTU BOIYNSA TANDAUSYLARDYN SABAQQA KATYSU TURALY MALIMET</p>
            <table class="table-auto border-collapse w-full border border-gray-300">
                <thead class="bg-gray-100">
                    <tr>
                    <th class="border border-gray-300 px-2 py-1">TANDAUSYNYN T.A.A</th>
                    <th v-for="day in 31" :key="day" class="border border-gray-300 px-2 py-1">{{ day }}</th>
                    <th class="border border-gray-300 px-2 py-1">SEBEPTI</th>
                    <th class="border border-gray-300 px-2 py-1">SEBEPSIZ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in tableData2" :key="index">
                    <td class="border border-gray-300 px-2 py-1">{{ row.name }}</td>
                    <td
                        v-for="day in 31"
                        :key="day"
                        class="border border-gray-300 text-center px-2 py-1"
                    >
                        {{ getMark(row, day) }}
                    </td>
                    <td class="border border-gray-300 text-center px-2 py-1">
                        {{ countMarks(row, '+') }}
                    </td>
                    <td class="border border-gray-300 text-center px-2 py-1">
                        {{ countMarks(row, '-') }}
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
</template>

<script setup>
import { computed, ref } from 'vue';
const tableData2 = [
  {
    name: "ASPANOV ORALBEK",
    markedDays: {
      1: '+', 2: '-', 3: '+', 4: '-', 5: '+', 6: '+', 7: '-', 8: '+', 9: '-', 10: '+',
      11: '+', 12: '-', 13: '+', 14: '+', 15: '-', 16: '+', 17: '+', 18: '-', 19: '-', 20: '+',
      21: '-', 22: '+', 23: '-', 24: '+', 25: '+', 26: '+', 27: '-', 28: '+', 29: '+', 30: '-', 31: '+'
    }
  },
  {
    name: "ASPANOV ORALBEK",
    markedDays: {
      2: '+', 4: '+', 6: '+', 8: '-', 10: '+', 12: '-', 14: '+', 16: '-', 18: '+', 20: '+',
      22: '-', 24: '+', 26: '+', 28: '+', 30: '+'
    }
  },
  {
    name: "ASPANOV ORALBEK",
    markedDays: {
      3: '+', 5: '+', 7: '+', 9: '-', 11: '+', 13: '+', 15: '+', 17: '+', 19: '+', 21: '+',
      23: '+', 25: '+', 27: '-', 29: '+', 31: '+'
    }
  }
]

// Функция получения символа на конкретный день
const getMark = (row, day) => {
  return row.markedDays[day] || ''
}

// Подсчёт символов ('+' или '-')
const countMarks = (row, mark) => {
  return Object.values(row.markedDays).filter(val => val === mark).length
}
const schedule = [
  {
    mekenZhaiy: "ASPANOV ORALBEK",
    sany: 2,
    dyiswnbi: "12:00–14:00",
    seisembi: "12:00–14:00",
    sarsenbi: "",
    beisenbi: "12:00–14:00",
    zuma: "12:00–14:00",
    senbi: "12:00–14:00"
  },
  {
    mekenZhaiy: "ASPANOV ORALBEK",
    sany: 3,
    dyiswnbi: "12:00–14:00",
    seisembi: "12:00–14:00",
    sarsenbi: "",
    beisenbi: "12:00–14:00",
    zuma: "12:00–14:00",
    senbi: "12:00–14:00"
  },
  {
    mekenZhaiy: "ASPANOV ORALBEK",
    sany: 3,
    dyiswnbi: "12:00–14:00",
    seisembi: "12:00–14:00",
    sarsenbi: "",
    beisenbi: "12:00–14:00",
    zuma: "12:00–14:00",
    senbi: "12:00–14:00"
  },
  {
    mekenZhaiy: "ASPANOV ORALBEK",
    sany: 3,
    dyiswnbi: "12:00–14:00",
    seisembi: "12:00–14:00",
    sarsenbi: "12:00–14:00",
    beisenbi: "12:00–14:00",
    zuma: "12:00–14:00",
    senbi: "12:00–14:00"
  },
  {
    mekenZhaiy: "ASPANOV ORALBEK",
    sany: 3,
    dyiswnbi: "12:00–14:00",
    seisembi: "12:00–14:00",
    sarsenbi: "",
    beisenbi: "12:00–14:00",
    zuma: "12:00–14:00",
    senbi: "12:00–14:00"
  }
];

// Данные по дням (отмечено 1 / "" / 4)
const tableData = ref([
  {
    MEKENZHAY: "ASTANA ZHARNAMA1",
    days: [1, "", "", 4, 1, "", "", 1, 1, 1, "", 1, "", 1, 1, 1, 1, 1, "", 1, "", 1, "", 1, 1, 1, 1, 1, "", 1, 1]
  },
  {
    MEKENZHAY: "ASTANA ZHARNAMA1",
    days: [1, "", "", 4, 1, "", "", 1, 1, 1, "", 1, "", 1, 1, 1, 1, 1, "", 1, "", 1, "", 1, 1, 1, 1, 1, "", 1, 1]
  },
  {
    MEKENZHAY: "ASTANA ZHARNAMA1",
    days: [1, "", "", 4, 1, "", "", 1, 1, 1, "", 1, "", 1, 1, 1, 1, 1, "", 1, "", 1, "", 1, 1, 1, 1, 1, "", 1, 1]
  },
  {
    MEKENZHAY: "ASTANA ZHARNAMA1",
    days: [1, "", "", 4, 1, "", "", 1, 1, 1, "", 1, "", 1, 1, 1, 1, 1, "", 1, "", 1, "", 1, 1, 1, 1, 1, "", 1, 1]
  },
  {
    MEKENZHAY: "ASTANA ZHARNAMA1",
    days: [1, "", "", 4, 1, "", "", 1, 1, 1, "", 1, "", 1, 1, 1, 1, 1, "", 1, "", 1, "", 1, 1, 1, 1, 1, "", 1, 1]
  },
]);
const people = [
  {
    taa: "ASPANOV ORALBEK",
    lauazymy: "MUGALIM",
    tuganZhyly: "24.10.1996",
    mekenZhay: "ASTANA ULY ZHOL 3",
    phone: "8 777 777 77 77",
    ulty: "QAZAQ",
    dengeiy: "A1",
    azamattygy: "QAZAQ"
  },
  // Повторим 5 раз
  {
    taa: "ASPANOV ORALBEK",
    lauazymy: "MUGALIM",
    tuganZhyly: "24.10.1996",
    mekenZhay: "ASTANA ULY ZHOL 3",
    phone: "8 777 777 77 77",
    ulty: "QAZAQ",
    dengeiy: "A1",
    azamattygy: "QAZAQ"
  },
  {
    taa: "ASPANOV ORALBEK",
    lauazymy: "MUGALIM",
    tuganZhyly: "24.10.1996",
    mekenZhay: "ASTANA ULY ZHOL 3",
    phone: "8 777 777 77 77",
    ulty: "QAZAQ",
    dengeiy: "A1",
    azamattygy: "QAZAQ"
  },
  {
    taa: "ASPANOV ORALBEK",
    lauazymy: "MUGALIM",
    tuganZhyly: "24.10.1996",
    mekenZhay: "ASTANA ULY ZHOL 3",
    phone: "8 777 777 77 77",
    ulty: "QAZAQ",
    dengeiy: "A1",
    azamattygy: "QAZAQ"
  },
  {
    taa: "ASPANOV ORALBEK",
    lauazymy: "MUGALIM",
    tuganZhyly: "24.10.1996",
    mekenZhay: "ASTANA ULY ZHOL 3",
    phone: "8 777 777 77 77",
    ulty: "QAZAQ",
    dengeiy: "A1",
    azamattygy: "QAZAQ"
  }
];

// Считаем BARLYGY (по колонкам)
const totalPerDay = computed(() => {
  const totals = Array(31).fill(0);
  for (const row of tableData.value) {
    row.days.forEach((val, idx) => {
      totals[idx] += isNaN(val) ? 0 : Number(val);
    });
  }
  return totals;
});
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

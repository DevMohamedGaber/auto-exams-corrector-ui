<template>
  <v-app>
    <DefaultView/>
  </v-app>
</template>

<script setup lang="ts">
  import DefaultView from '@/layouts/default/Default.vue'
  import { provide, onMounted } from 'vue';
  import { useAppStore } from '@/store/app';
  import { School } from '@/Types/School'
  import { Grade } from '@/Types/Grade'
  import { Subject } from '@/Types/Subject'
  import { Department } from '@/Types/Department'

  const store = useAppStore();
  provide("store", store);

  onMounted(() => {
    // dummy data
    let schools:Array<School> = []
    let industry: School = {
      name: 'industry',
      departments: []
    }
    let industryIT: Department = {
      name: 'IT',
      grades: []
    }
    let industryIT_1st: Grade = {
      name: 'first grade',
      subjects: []
    }
    schools.push(industry)
    schools[0].departments.push(industryIT)
    schools[0].departments[0].grades.push(industryIT_1st)

    store.schools = schools
    console.log(store.schools)
  })
</script>

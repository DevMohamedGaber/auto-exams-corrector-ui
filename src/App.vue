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
    let schools:School[] = []
    // industry
    let industry: School = { id: 1, name: 'industry', departments: [] }
    industry.departments.push({ id: 1, name: 'IT', grades: [] })
    industry.departments[0].grades.push({ id: 1, name: 'first grade', subjects: [] })
    industry.departments[0].grades[0].subjects.push(
      { id: 1, name: 'Math' },
      { id: 2, name: 'Internet of things' }
    )
    schools.push(industry)
    // health
    let health: School = {
      id: 2,
      name: 'health',
      departments: []
    }
    schools.push(health)

    // save data
    store.schools = schools
  })
</script>

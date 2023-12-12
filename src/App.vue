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
    // industry
    let industry: School = {
      id: 1,
      name: 'industry',
      departments: []
    }
    let industryIT: Department = {
      id: 1,
      name: 'IT',
      grades: []
    }
    let industryIT_1st: Grade = {
      id: 1,
      name: 'first grade',
      subjects: []
    }
    let industryIT_1st_Math: Subject = {
      id: 1,
      name: 'Math'
    }
    let industryIT_1st_IOT: Subject = {
      id: 2,
      name: 'Internet of things'
    }

    schools.push(industry)
    schools[0].departments.push(industryIT)
    schools[0].departments[0].grades.push(industryIT_1st)
    schools[0].departments[0].grades[0].subjects.push(industryIT_1st_Math, industryIT_1st_IOT)

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

<template>
  <v-app>
    <DefaultView/>
  </v-app>
</template>

<script setup lang="ts">
  import DefaultView from '@/layouts/default/Default.vue'
  import { provide } from 'vue';
  import { useAppStore } from '@/store/app';

  const store = useAppStore();
  provide("store", store);

  
</script>

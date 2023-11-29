<template>
  <v-container>
    hello {{ store.username }}
  </v-container>
</template>

<script lang="ts" setup>

import router from '@/router';
import { onMounted, inject } from 'vue';

const store = inject("store");
onMounted(() => {
  if(!store.isLoggedIn()) {
    router.push('/login');
  }
});
</script>
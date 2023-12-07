<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar scroll-behavior="hide" class="d-flex pl-2 pr-2">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="navbar-logo d-sm-flex justify-end"></div>
      <v-app-bar-title class="d-none d-sm-flex justify-end text-subtitle-2 font-weight-bold text-grey-darken-2 pr-5">
        hello, {{ store.username }}
      </v-app-bar-title>
    </v-app-bar>

    <v-main class="d-flex justify-center mt-16 pt-5" style="min-height: 300px;">
      <CorrectExam />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>

import router from '@/router';
import { ref, onMounted, inject } from 'vue';

import CorrectExam from '@/components/Exams/Correct/index.vue'

const store = inject("store");
const axios = inject("axios");
const drawer = ref(false);
onMounted(() => {
  if(!store.isLoggedIn()) {
    router.push('/login');
  }
  
});
</script>

<style lang="scss">
.navbar-logo {
  width: 155px;
  height: 100%;
  background: url(/src/assets/logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  
  @media (min-width: 600px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 600px) {
    right: 0;
  }
}
</style>
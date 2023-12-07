<template>
  <v-container>
    <v-stepper :items="steps">
      <template v-slot:item.1>
        <v-card title="Step One" flat>...</v-card>
      </template>

      <template v-slot:item.2>
        <v-card title="Step Two" flat>...</v-card>
      </template>

      <template v-slot:item.3>
        <v-card title="Step Three" flat>...</v-card>
      </template>
    </v-stepper>
  </v-container>
</template>
<script lang="ts" setup>
import { ref, inject } from 'vue'

const store = inject('store')
const axios = inject('axios')

const steps = ref(["information", "model answers", "tests", "result"])
</script>
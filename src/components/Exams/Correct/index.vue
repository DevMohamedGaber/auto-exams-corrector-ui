<template>
  <v-container>
    <v-stepper v-model="step" :items="steps" hideActions rounded>

      <template v-slot:item.1>
        <InformationForm @NextStep="NextStep"/>
      </template>

      <template v-slot:item.2>
        <ModelAnswerForm @NextStep="NextStep"/>
      </template>

    </v-stepper>
  </v-container>
</template>
<script lang="ts" setup>
import { ref, inject } from 'vue'
// components
import InformationForm from './informations.vue'
import ModelAnswerForm from './ModelAnswer.vue'

const store = inject('store')

const steps = ref(["information", "model answers", "tests", "result"])
const step = ref(2);

function NextStep() {
  step.value++;
}
</script>
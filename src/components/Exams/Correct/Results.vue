<template>
  <v-card>
    <v-card-item>
      <v-tabs v-model="tab" color="primary" align-tabs="center" fixed-tabs>
        <v-tab :value="0">View</v-tab>
        <v-tab :value="1">Failed sheets</v-tab>
        <v-tab :value="2">Analysis</v-tab>
      </v-tabs>
    </v-card-item>

    <v-window v-model="tab">
      <v-window-item :value="0">
        <ResultsTableView :list="props['data']"/>
      </v-window-item>

      <v-window-item :value="1">
        <ResultsAnalysisView />
      </v-window-item>

      <v-window-item :value="2">
        <ResultsAnalysisView />
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from "vue"

import ResultsTableView from './ResultsTable.vue'
import ResultsAnalysisView from './ResultsAnalysis.vue'

const props = defineProps(['data']);
const tab = ref(0)
</script>
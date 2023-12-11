<template>
  <v-card>
    <v-card-subtitle>
      Please fill the following fields
    </v-card-subtitle>

    <v-card-item>
      <v-select :items="schools" v-model="grade" label="School">
        <template v-slot:selection="{ item, index }">
          
        </template>
      </v-select>
    </v-card-item>
    <v-divider></v-divider>

    <v-card-actions class="d-flex justify-end">
      <v-btn variant="elevated" @click="NextStep">Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { ref, inject, onMounted } from 'vue'

const store = inject('store')
const emit = defineEmits(['NextStep'])
const schools = ref()
const grade = ref(1)

function NextStep() { 
  emit("NextStep")
}

onMounted(() => {
  
})
</script>
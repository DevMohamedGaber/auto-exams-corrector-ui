<template>
  <v-card flat>
    <v-card-subtitle>
      Please select all answer sheets to be graded
    </v-card-subtitle>

    <v-card-item>
      <v-file-input 
        label="Answer sheets"
        placeholder="Select Answer sheets"
        accept="image/*"
        v-model="sheets"
        show-size
        counter
        multiple>
      </v-file-input>
    </v-card-item>

    <v-card-actions class="d-flex justify-end">
      <span class="text-red text-left w-100" v-if="error">Please fill all fields first</span>
      <v-btn variant="elevated" @click="emit('PrevStep')">Back</v-btn>
      <v-btn variant="elevated" @click="NextStep">Show Results</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits(['NextStep', 'PrevStep'])

const error = ref(false) 
const sheets = ref()

function ReadyForNextStep() {
  return true
}
function NextStep() {
  error.value = !ReadyForNextStep()
  if(error.value)
    return

  emit("NextStep")
}

defineExpose({
  sheets
})
</script>
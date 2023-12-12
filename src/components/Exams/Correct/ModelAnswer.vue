<template>
   <v-card flat>
    <v-card-subtitle>
      Please fill the following fields
    </v-card-subtitle>

    <v-card-item>
      <v-radio-group v-model="type">
        <v-radio label="Upload Image" :value="0"></v-radio>
        <v-radio label="Attach answers (one by one)" :value="1"></v-radio>
      </v-radio-group>
    </v-card-item>

    <v-card-item v-show="type == 0">
      <v-file-input 
        label="Model Answer image"
        prepend-icon="mdi-camera"
        accept="image/*"
        v-model="ma_img"
        show-size>
      </v-file-input>
    </v-card-item>

    <v-card-item v-show="type == 1" >
      <v-text-field
        label="Number of questions"
        v-model.number="numOfQuestions"
        variant="outlined"
        class="mt-3"
        type="number"
      ></v-text-field>
      
      <div v-if="numOfQuestions > 0 && numOfQuestions != null" 
          v-for="(num, index) in numOfQuestions" :key="index">
        <v-text-field
        v-model.number="answers[index]"
          :label="'Q' + (num)"
          variant="outlined"
          type="number"
        ></v-text-field>
      </div>

    </v-card-item>

    <v-card-actions class="d-flex justify-end">
      <span class="text-red text-left w-100" v-if="error">Please fill all fields first</span>
      <v-btn variant="elevated" @click="NextStep">Next</v-btn>
    </v-card-actions>
   </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits(['NextStep'])

const type = ref(1)
const error = ref(false)
const ma_img = ref()
const numOfQuestions = ref()
const answers = ref([])

function ReadyForNextStep() {
  return true
}
function NextStep() {
  error.value = !ReadyForNextStep()
  if(error.value)
    return

  emit("NextStep")
}
</script>
<template>
  <v-card flat>
    <v-card-subtitle>
      Please fill the following fields
    </v-card-subtitle>

    <v-card-item>
      <v-select 
        v-model="school"
        :items="store.schools"
        item-title="name"
        label="School"
        return-object
        @change="ResetFields"> 
      </v-select>
    </v-card-item>

    <v-card-item v-if="school != null">
      <v-select
        v-model="department"
        :items="school.departments"
        item-title="name"
        label="Department"
        return-object> 
      </v-select>
    </v-card-item>

    <v-card-item v-if="department != null">
      <v-select
        v-model="grade"
        :items="department.grades"
        item-title="name"
        label="Geade"
        return-object> 
      </v-select>
    </v-card-item>

    <v-card-item v-if="grade != null">
      <v-select
        v-model="subject"
        :items="grade.subjects"
        item-title="name"
        item-value="id"
        label="Subject"> 
      </v-select>
    </v-card-item>

    <v-divider></v-divider>

    <v-card-actions class="d-flex justify-end">
      <span class="text-red text-left w-100" v-if="error">Please fill all fields first</span>
      <v-btn variant="elevated" @click="NextStep">Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'

const store = inject('store')
const emit = defineEmits(['NextStep'])

const error = ref(false) 
const school = ref()
const department = ref()
const grade = ref()
const subject = ref()


function ResetFields() {
  department.value = null;
  grade.value = null;
  subject.value = null;
}
function ReadyForNextStep() {
  return  school.value != null &&
          department.value != null &&
          grade.value != null &&
          subject.value != null
}
function NextStep() {
  error.value = !ReadyForNextStep()
  if(error.value)
    return

  emit("NextStep")
}
</script>
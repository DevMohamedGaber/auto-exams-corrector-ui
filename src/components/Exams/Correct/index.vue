<template>
  <v-container>
    <v-stepper v-model="step" :items="steps" hideActions rounded>

      <template v-slot:item.1>
        <InformationForm ref="infoComp" @NextStep="step++"/>
      </template>

      <template v-slot:item.2>
        <ModelAnswerForm ref="answerComp" @NextStep="step++" @PrevStep="step--"/>
      </template>

      <template v-slot:item.3>
        <UploadSheetsForm ref="sheetsComp" @NextStep="SubmitToServer" @PrevStep="step--"/>
      </template>

    </v-stepper>
  </v-container>
</template>
<script lang="ts" setup>
import { ref, inject } from 'vue'
// components
import InformationForm from './informations.vue'
import ModelAnswerForm from './ModelAnswer.vue'
import UploadSheetsForm from './UploadSheets.vue'

const store = inject('store')

const steps = ref(["Information", "Model answers", "Upload sheets", "Results"])
const step = ref(1)

const infoComp = ref()
const answerComp = ref()
const sheetsComp = ref()

async function SubmitToServer() {
  const formData = new FormData();
  // info
  formData.append('schoolId', infoComp.value.school.id)
  formData.append('departmentId', infoComp.value.department.id)
  formData.append('gradeId', infoComp.value.grade.id)
  formData.append('subjectId', infoComp.value.subject)

  formData.append('answerImg', answerComp.value.ma_img)
  formData.append('answersList', answerComp.value.answers)

  for (let i = 0; i < sheetsComp.value.sheets.length; i++) {
    formData.append('sheets[]', answerComp.value.answers[i])
  }
  
  let req = await store.value.Post('upload', formData, 'multipart/form-data')

  console.log(req);
  
}
</script>
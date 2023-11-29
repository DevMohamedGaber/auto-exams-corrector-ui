<template>
  <v-container fill-height fluid class="x-ctn">
    <v-row class="h-screen" align="center" justify="space-around">
        <v-card width="35%" min-width="300" elevation="4" style="padding: 10px;">

          <v-card-item>
            <v-img src="@/assets/logo.png" height="150"/>
          </v-card-item>

          <v-card-item>
            <v-form>
              <v-text-field
                name="username"
                label="Username"
                v-model="username"
              ></v-text-field>

              <v-text-field
                name="password"
                label="Password"
                v-model="password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-item>
          <div class="mb-3" align="center">
            <v-btn class="center" width="100" color="primary" variant="elevated" @click="Login">
              Login
            </v-btn>
          </div>
        </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import { onMounted, ref, inject } from 'vue'
  import router from '@/router'
  const store = inject("store")
  const username = ref("")
  const password = ref("")

  function Login() {
    store.username = username.value
    router.push('/')
  }
  onMounted(() => {
    if(store.isLoggedIn()) {
      router.push('/')
    }
  })
</script>

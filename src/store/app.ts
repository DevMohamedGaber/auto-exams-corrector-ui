// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    username: ''
  }),
  actions: {
    isLoggedIn() : Boolean {
      return this.username != '';
    }
  }
})

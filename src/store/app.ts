// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    username: 'mohamed'
  }),
  actions: {
    isLoggedIn() : Boolean {
      return this.username != '';
    }
  }
})

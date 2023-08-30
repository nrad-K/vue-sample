import type { User } from '@/types/user'
import { defineStore } from 'pinia'

export const useStoreUser = defineStore('user', {
  state: () => ({
    isAuthenticated: false as boolean,
    user: {} as User
  }),
  persist: {
    storage: sessionStorage
  }
})

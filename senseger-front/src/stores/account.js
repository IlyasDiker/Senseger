import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', {
  state: () => {
    return { 
        account: null 
    }
  },
  actions: {
    setAccount(account) {
      this.account = account;
    },
  },
})
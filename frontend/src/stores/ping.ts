import { ref } from 'vue'
import { defineStore } from 'pinia'

import { API } from '@/lib/apis'

export const usePing = defineStore('ping', () => {
  const ping = ref<string>('')

  async function fetchPing() {
    try {
      ping.value = await API.PING_CLIENT.ping()
      return ping
    } catch (error) {
      return error
    }
  }

  return { ping, fetchPing }
})

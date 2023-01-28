import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const id = ref<number>()
  const username = ref<string>()
  const role_name = ref<string>()
  const role_id = ref<number>()
  const is_admin = ref<boolean>()

  return { id, username, role_name, role_id, is_admin }
})

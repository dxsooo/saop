import { defineStore } from "pinia";
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const id = ref()
    const username = ref()
    const role_name = ref()
    const role_id = ref()
    const is_admin = ref()

    return { id, username, role_name, role_id, is_admin }
})
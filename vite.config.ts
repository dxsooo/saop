import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import type { UserConfigExport, ConfigEnv } from 'vite'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mocks',
        localEnabled: process.env.USE_MOCK === 'true' ? true : false,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
}

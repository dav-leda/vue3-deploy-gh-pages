import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig( ({ mode }) => {

  let dev = mode === 'development'

  return {

    base: dev ? '/' : '/vue3-deploy-gh-pages/',

    esbuild: {
      drop: ['console', 'debugger'],
    },

    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    } 
    
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  base: './',

  server: {
    host: true,
    port: 8080,
  },

  preview: {
    port: 8080,
    host: true
  }
})

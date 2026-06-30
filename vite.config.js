import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GH Pages project site → served under /inb/
export default defineConfig({
  base: '/inb/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
  },
})

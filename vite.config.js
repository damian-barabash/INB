import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GH Pages project site → served under /INB/ (repo name is case-sensitive)
export default defineConfig({
  base: '/INB/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
  },
})

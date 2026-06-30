import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served at the ROOT of a custom domain (inb-draft.barabashflow.pl / inbi.pl) → base '/'.
// (The bare GitHub Pages URL damian-barabash.github.io/INB/ would need '/INB/', but the
//  site now lives on a custom domain served from the root, so '/' is correct.)
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
  },
})

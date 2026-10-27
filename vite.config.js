import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set `base` (e.g. '/portfolio/') when deploying under a sub-path.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
})

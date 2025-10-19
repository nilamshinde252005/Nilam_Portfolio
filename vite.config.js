import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Nilam_Portfolio/', // <-- EXACTLY this (case-sensitive)
})

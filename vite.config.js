import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// change 'your-repo-name' to your actual repo name
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
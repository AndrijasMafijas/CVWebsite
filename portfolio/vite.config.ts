import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // If you deploy to GitHub Pages under a repository subpath like
  // https://<user>.github.io/<repo>/, uncomment the line below and set base:
  // base: '/<repo>/',
})

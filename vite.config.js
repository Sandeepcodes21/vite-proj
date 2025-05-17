import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.xlsx'],
  server: {
    proxy: {
      '/generate': 'https://qgeni.onrender.com'
    }
  }
});
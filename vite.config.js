import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/products': {
        target: 'http://localhost:5173/', // Replace with your API server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/products/, '/api/products'), // Adjust the rewrite rule if needed
      },
    },
  },
})

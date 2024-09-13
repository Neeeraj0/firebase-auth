import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This binds the server to all network interfaces
    port: 5173,       // Optionally specify the port
    proxy: {
      '/api': {       // Proxy /api requests
        target: 'http://35.154.208.29:8080',  // Your backend API URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite the path if necessary
      }
    }
  }
})

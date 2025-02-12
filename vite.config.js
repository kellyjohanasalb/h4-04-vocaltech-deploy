import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias para acceder a src
    },
  },
  server: {
    port: 5173, // Puerto por defecto
  },
  build: {
    outDir: 'dist',
  },
  base: '/', // Asegura que las rutas funcionen correctamente en producción
})

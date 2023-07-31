import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/static/', // Ruta donde se generarán los archivos de construcción para Django
  server: {
    proxy: {
      '/api': 'http://localhost:8000', // URL de backend de Django - todas las solicitudes que comiencen por /api se redirigen a esa url
    },
  },
});

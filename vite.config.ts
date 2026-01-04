import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/cal': {
        target: 'https://api.cal.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/cal/, ''),
      },
    },
  },
});
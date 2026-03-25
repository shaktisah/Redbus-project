import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  define: {
    'process.env.REACT_APP_BACKEND_URL': JSON.stringify(process.env.VITE_BACKEND_URL || 'https://redbus-project-1.onrender.com')
  },
  server: {
    port: 3000,
    open: true
  }
});

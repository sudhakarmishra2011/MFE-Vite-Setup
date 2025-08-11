import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        app1: {
          type: "module",
          name: "app1",
          entry: "http://localhost:5174/remoteEntry.js", // points to app1
        },
        app2: {
          type: "module",
          name: "app2",
          entry: "http://localhost:5175/remoteEntry.js", // points to app2
        },
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5173,
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import reactRefresh from '@vitejs/plugin-react-refresh';

// console.log('process.env.PORT', process.env.PORT);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // plugins: [reactRefresh()],

  server: {
    host: true,
    port: process.env.PORT, // This is the port which we will use in docker
    // Thanks @sergiomoura for the window fix
    // add the next lines if you're using windows and hot reload doesn't work
    strictPort: true,
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: true,
      // host: 'realword-docker.local',
      // port: 80,
      // protocol: 'ws',
    },

    // hmr: {
    //   // clientPort: process.env.PORT,
    //   // host: process.env.PORT,
    //   port: process.env.PORT,
    // },
    // hmr: {
    //   port: 3101,
    // },
  },
  preview: {
    port: process.env.PORT,
  },
});

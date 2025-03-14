import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "index.html",
        suppressWarnings: true,
      },
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.js",
    }),
  ],
  build: {
    rollupOptions: {
      external: [
        "workbox-precaching",
        "workbox-core",
        "workbox-routing",
        "workbox-strategies",
      ],
    },
  },
})

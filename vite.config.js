import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? '/gifs-application/' : '/',
    logLevel: 'info',
    server: {
      port: 3000,
      strictPort: true,
      open: true,
    },
    preview: {
      port: 8080,
      strictPort: true,
      open: true,
    },
    clearScreen: false,
    css: {
      devSourcemap: true,
    },
  }
})

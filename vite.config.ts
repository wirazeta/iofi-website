import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

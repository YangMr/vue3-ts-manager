import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    host: '0.0.0.0',
    open: true
  },
  resolve : {
    alias : [
      {
        find : "@",
        replacement: resolve(__dirname,'src')
      }
    ]
  }
})

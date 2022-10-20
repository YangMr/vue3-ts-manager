import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        port: 8080,
        host: '0.0.0.0',
        open: true,
        proxy: {
            "/dev-api": {
                target: 'http://119.45.133.128:8098/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/dev-api/, '')
            }
        }
    },
    resolve: {
        alias: [
            {
                find: "@",
                replacement: resolve(__dirname, 'src')
            }
        ]
    }
})

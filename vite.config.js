const { join } = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const txtPlugin = require('vite-raw-plugin')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        txtPlugin({
            fileRegex: /\.txt$/
        })
    ],
    define: {
        __isBrowser__: true
    },
    resolve: {
        alias: {
            '@': join(process.cwd(), './web')
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    }
})
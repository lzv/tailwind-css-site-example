import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    input: {
        main: resolve(import.meta.dirname, 'index.html'),
        admin_main: resolve(import.meta.dirname, 'admin-main.html'),
        admin_table: resolve(import.meta.dirname, 'admin-table.html'),
        admin_detail: resolve(import.meta.dirname, 'admin-detail.html'),
        admin_edit: resolve(import.meta.dirname, 'admin-edit.html'),
    },
    build: {
        cssCodeSplit: true,
        chunkSizeWarningLimit: 2000,
    },
})
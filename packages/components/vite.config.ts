import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        dts({
            outputDir: './dist/types'
        }),
        vue()
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src', 'index.ts'),
            name: 'components',
            formats: ['es'],
            fileName: (format) => `components.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
});
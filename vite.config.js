import { fileURLToPath, URL } from 'node:url'
import vuetify ,{ transformAssetUrls } from 'vite-plugin-vuetify'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { nodePolyfills } from 'vite-plugin-node-polyfills'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ template: 
      { 
        transformAssetUrls,
      }
    }),
    nodePolyfills(),
    vuetify({
      autoImport: true,
      /*styles: {
        configFile: 'src/styles/settings.scss',
      },*/
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: [
      './src/**/*.vue',
    ],
  },

    server: {
      
      port: 8080,
    }

 
})

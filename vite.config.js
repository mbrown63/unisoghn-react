import react from '@vitejs/plugin-react'
import { defineConfig, transformWithOxc } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'transform-js-jsx',
      enforce: 'pre',
      async transform(code, id) {
        if (id.endsWith('/src/index.js')) {
          return transformWithOxc(code, id, {
            lang: 'jsx',
          })
        }
      },
    },
    react(),
  ],
  base: '/unisoghn-react/',
})
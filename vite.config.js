import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import tsconfigPlugin from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), svgrPlugin({ svgrOptions: { icon: true } }), tsconfigPlugin({ tsconfig: './tsconfig.json' })],
  server: {
    port: 3000,
    host: true,
  },
})

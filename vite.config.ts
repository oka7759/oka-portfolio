import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import dotenv from 'dotenv'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const envPath = path.resolve(new URL(import.meta.url).pathname, `.env.${mode}`)
  dotenv.config({ path: envPath })

  return {
    plugins: [react(), tailwindcss(), svgr()],
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') }, // 절대 경로로 변경
      ],
    },
  }
})

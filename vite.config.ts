import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dotenv from 'dotenv'
import { createHtmlPlugin } from 'vite-plugin-html' // createHtmlPlugin 임포트 추가
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const envPath = path.resolve(new URL(import.meta.url).pathname, `.env.${mode}`)
  dotenv.config({ path: envPath })
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    plugins: [
      react(),
      tailwindcss(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            naverClientId: env.VITE_NAVER_MAP_CLIENT_ID,
            url: env.VITE_APP_URL, // 동적으로 주입할 URL 추가
          },
        },
      }),
    ],
    server: {
      host: '0.0.0.0', // 외부에서 접근 가능하도록 설정
      port: 5173,
      strictPort: true,
      proxy: {
        '/api': {
          target: env.VITE_APP_SERVER,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
      hmr: {
        host: '20.41.118.254', // 원격 WebSocket 서버 설정 (Azure VM IP)
        clientPort: 5173, // 브라우저에서 접속하는 WebSocket 포트
      },
    },
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') }, // 절대 경로로 변경
      ],
    },
  }
})

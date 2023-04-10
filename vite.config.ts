import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from "path"; // 导入node的path模块

// 开发环境配置
export default defineConfig({
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue()],
  server: {
    port: 4000, // 设置启动端口
    hmr: {
      host: '127.0.0.1',
      port: 4000
    },
    // 设置https代理
    proxy: {
      '/api': {
        target: '192.168.10.22',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }

})

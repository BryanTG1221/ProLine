import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@landingPage": '/src/landingPage',
      "@routerApp": '/src/router',
      "@landingComponents": '/src/landingPage/components',
      "@stylesLanding": '/src/landingPage/styles',
      "@assets": '/src/assets',
      "@auth": '/src/auth',
      "@contexts": '/src/contexts'
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    compression({
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  // Optimize build process
  esbuild: {
    drop: ['console', 'debugger'], // Remove console logs and debugger statements
    legalComments: 'none'
  },
  build: {
    // Optimize bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          i18n: ['react-i18next', 'i18next'],
          utils: ['./src/components/TelegramContactWidget']
        },
        // Better file names for caching
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    // Enable compression and tree shaking
    minify: 'terser',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 800,
    target: 'esnext',
    sourcemap: false,
    // Optimize imports
    modulePreload: false
  },
  // Optimize dev server performance
  server: {
    hmr: {
      overlay: false
    }
  },
  // Optimize asset handling
  assetsInclude: ['**/*.avif', '**/*.webp']
})

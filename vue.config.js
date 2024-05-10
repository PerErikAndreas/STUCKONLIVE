module.exports = {
    // Base URL
    publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  
    // Output Directory
    outputDir: 'dist',
  
    // Disable source maps in production for enhanced security
    productionSourceMap: false,
  
    // Extend webpack configuration
    configureWebpack: {
      performance: {
        hints: false
      },
      optimization: {
        splitChunks: {
          chunks: 'all'
        }
      }
    },
  
    // Dev Server Configuration
    devServer: {
      proxy: {
        '/api': {
          target: 'http://example.com/api',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  };
  
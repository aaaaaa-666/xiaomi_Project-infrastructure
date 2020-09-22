module.exports = {
  lintOnSave: false,

  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/activity': {
        target: 'https://www.imooc.com',
        changeOrigin: true,
        pathRewrite: {
          '/activity': 'activity'
        }
      }
    }
  }
}
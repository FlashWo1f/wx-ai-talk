module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8088,
    https: false,
    proxy: {
      '/api': {
        target: 'https://openai.weixin.qq.com',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''//请求的时候使用这个api就可以
        }
      }
    }
  }
}
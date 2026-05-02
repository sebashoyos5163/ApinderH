module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ApinderH/'
    : '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true
  }
}


const path = require('path');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    publicPath: './',
    outputDir: process.env.outputDir,
    assetsDir: 'assets',
    lintOnSave: process.env.NODE_ENV === 'development',
    // 关闭source map。1、减少打包编译的时间。2、避免在生产环境中用F12开发者工具在Sources中看到源码。
    productionSourceMap: false,

    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            // 配置别名
            alias: {
                '@': resolve('src'),
                'api': resolve('src/api'),
                'assets': resolve('src/assets'),
                'scss': resolve('src/assets/scss'),
                'images': resolve('src/assets/images'),
                'components': resolve('src/components'),
                'mixins':resolve('src/mixins'),
                'service':resolve('src/service'),
                'store': resolve('src/store'),
                'view': resolve('src/views')
            }
        }
    },

    devServer: {
        // 开启热更新
        hot: true,
        // 固定打开浏览器
        open: 'Google Chrome',
        // disableHostCheck: true,
        // 配置代理
        proxy:{
            '/apis':{
                target: process.env.VUE_APP_API_URL,
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/apis': ''
                }
            }
        }
    }
}; 
  
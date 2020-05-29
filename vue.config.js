module.exports = {
    publicPath:'./',
    devServer: {
      // 设置主机地址
      host: 'localhost',
      // 设置默认端口
      port: 80,
      // 设置代理
      proxy: {
        '/mock': {
          // 设置目标API地址
          target: 'http://www.cart.com:80',
          // 如果要代理 websockets
          ws: false,
          // 将主机标头的原点改为目标URL
          changeOrigin: false
          /**
           * 为true时删除/api路径
           * changeOrigin:true
           * /api/test
           * http://localhost:5000/test
           * 为false时，保留/api路径
           * changeOrigin:false
           * /api/test
           * http://localhost:5000/api/test
           */
        }
      }
    }
  }
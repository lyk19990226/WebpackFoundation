const path = require("path")
//导出配置信息
module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js", //设置导出的js文件名
    path: path.resolve(__dirname, "./dist"),
    // assetModuleFilename: "img/[name]_[hash:6][ext]"//定义文件的输出路径和文件名 [写法一]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", 'css-loader', "less-loader", "postcss-loader"]
      },

      {
        test: /\.(png|jpe?g|svg|gif)$/,
        // 1.打包两张图片, 并且这两张图片有自己的地址, 将地址设置到img/bgi中
        // 缺点: 多图片加载的两次网络请求
        // type: "asset/resource",  //有文件输出；所以需要设置文件输出路径

        // 2.将图片进行base64的编码, 并且直接编码后的源码放到打包的js文件中
        // 缺点: 造成js文件非常大, 下载js文件本身消耗时间非常长, 造成js代码的下载和解析/执行时间过长
        // type: "asset/inline",  //无有文件输出，直接转成base64打包进js文件中；所以不需要设置文件输出路径，否则会报错

        // 3.合理的规范:
        // 3.1.对于小一点的图片, 可以进行base64编码
        // 3.2.对于大一点的图片, 单独的图片打包, 形成url地址, 单独的请求这个url图片
        type: "asset",  //根据限制资源的体积大小，来决定是否有文件输出；所以需要设置文件输出路径
        parser: {
          dataUrlCondition: {
            maxSize: 60 * 1024//小于60kb的直接转为base64打包进js文件中，大于60kb的生成对应图片
          }
        },

        generator: {//定义文件的输出路径和文件名 [写法二]
          // 占位符
          // name: 指向原来的图片名称
          // ext: 扩展名
          // hash: webpack生成的hash
          filename: "img/[name]_[hash:8][ext]"
        }
      },
      
    ]
  }
}
const path = require("path")
//导出配置信息
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js", //设置导出的js文件名
    path: path.resolve(__dirname, "./dist"),
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
        type: "asset",  
        parser: {
          dataUrlCondition: {
            maxSize: 60 * 1024//小于60kb的直接转为base64打包进js文件中，大于60kb的生成对应图片
          }
        },
        generator: {//定义文件的输出路径和文件名 [写法二]
          filename: "img/[name]_[hash:8][ext]"
        }
      },
      {
        test:/\.m?js$/,
        use:[
          {
            loader:"babel-loader",
            // options: {
            //   presets:[
            //     ["@babel/preset-env"]
            //   ]
            // }
          }
        ]
      }
    ]
  }
}
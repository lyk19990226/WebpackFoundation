const path = require("path")
const { VueLoaderPlugin } = require("vue-loader/dist/index")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin  = require("html-webpack-plugin")

//导出配置信息
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js", //设置导出的js文件名
    path: path.resolve(__dirname, "./dist"),
  },

  resolve: {
    extensions: [".js", ".json", ".vue", ".jsx", ".ts", ".tsx", ".less", ".css", ".png", ".jpg"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      utils: path.resolve(__dirname, "./src/utils")
    }
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
        test: /\.m?js$/,
        use: ["babel-loader"]
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }

    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack案例Demo",
    })

  ]

}
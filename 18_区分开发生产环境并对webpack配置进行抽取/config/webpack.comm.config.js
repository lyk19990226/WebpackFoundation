const path = require("path")
const { VueLoaderPlugin } = require("vue-loader/dist/index")
// const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

//DefinePlugin允许在编译时创建配置的全局常量，是一个webpack内置的插件（不需要单独安装）
const { DefinePlugin } = require("webpack")

//导出配置信息
module.exports = {
  mode: "development",//开发模式不会有警告；因为不像生产模式一样要上线展示给大量用户，默认webpack打包忽略性能警告；但是如果是生产模式，如果打包生成的包过大，会有性能警告
  entry: "./src/main.js",//入口文件解析，不用改成../；默认从webpack启动目录查找
  output: {
    filename: "bundle.js", //设置导出的js文件名
    path: path.resolve(__dirname, "../dist"),
    // clean:true
  },

  resolve: {
    extensions: [".js", ".json", ".vue", ".jsx", ".ts", ".tsx", ".less", ".css", ".png", ".jpg"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      utils: path.resolve(__dirname, "../src/utils")
    }
  },
  // devServer: {
  //   hot: true,
  //   // host: "0.0.0.0",
  //   // port: 8888,
  //   // open: true
  //   // compress: true
  // },
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
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "项目Demo",
      template: "./index_module.html"
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      lykName: "'kobe'",
      counter: "520"
    })

  ]

}
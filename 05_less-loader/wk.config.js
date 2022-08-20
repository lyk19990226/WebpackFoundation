const path = require("path")
//导出配置信息
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js", //设置导出的js文件名
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader",]
      },
      {
        test:/\.less$/,
        use: ["style-loader",'css-loader',"less-loader"]
      }
    ]
  }
}
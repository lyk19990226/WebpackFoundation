// const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.comm.config")

//导出配置信息
module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    clean: true//在发出之前清理输出目录。
  },
  plugins: [
    // new CleanWebpackPlugin(),//在发出之前清理输出目录。
  ]

})
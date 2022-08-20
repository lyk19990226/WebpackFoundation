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
        // 写法1: 如果loader只有一个
        // loader: "css-loader"

        //写法2：有多个loader时：
        use: [// use中多个loader的使用顺序是从后往前
          { loader: "style-loader" }, 
          { loader: "css-loader" }, 
        ]
        
        //写法2.1
        // use: [
        //   { loader: "style-loader" },   //-> 不需要设置其他属性可直接写 ： "style-loader"
        //   { loader: "css-loader" },  //-> 不需要设置其他属性可直接写 ： "css-loader"
        //   {
        //     loader: "postcss-loader",
        //     options: {
        //       postcssOptions: {
        //         plugins: [
        //           "autoprefixer"
        //         ]
        //       }
        //     }
        //   }
        // ],

        // 写法2.1优化: 多个loader不需要其他属性时, 可以直接写loader字符串形式
        // use: [
        //   "style-loader",
        //   "css-loader",
        //   {
        //     loader: "postcss-loader",
        //     options: {
        //       postcssOptions: {
        //         plugins: [
        //           "autoprefixer"
        //         ]
        //       }
        //     }
        //   }
        // ]

      }
    ]
  }
}
module.exports = {
  plugins: [
    //注意：我们在使用某些postcss插件时，也可以直接传入字符串：'postcss-preset-env';
    // require('postcss-preset-env')//直接写：'postcss-preset-env';同样可以
    'postcss-preset-env'
  ]
}
// px -> rem/vw
//假设该文件index.js的路径为：C:\Users\Lyka\Desktop\lyk_demo\04_webpack\01_node内置模块\index.js

const path = require('path')
console.log(__filename)//C:\Users\Lyka\Desktop\lyk_demo\04_webpack\01_node内置模块\index.js
console.log(__dirname)//C:\Users\Lyka\Desktop\lyk_demo\04_webpack\01_node内置模块

//path内置模块的一些api展示
console.log(path.dirname(__dirname))//C:\Users\Lyka\Desktop\lyk_demo\04_webpack
console.log(path.basename(__filename))//index.js
console.log(path.extname(__filename))//.js

console.log(path.join(__dirname,'views'))//C:\Users\Lyka\Desktop\lyk_demo\04_webpack\01_node内置模块\views
console.log(path.resolve())//C:\Users\Lyka\Desktop\lyk_demo\04_webpack\01_node内置模块

const resolve = dir => path.resolve(__dirname,dir)
console.log(resolve('src'))//C:\Users\Lyka\Desktop\lyk_demo\04_webpack\01_node内置模块\src
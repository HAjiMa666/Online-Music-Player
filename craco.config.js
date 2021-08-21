// 如果要想使用别名路径,就得先引入===@craco/craco====这个包
// 在package.json下将scripts改成这样
/**
 * "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
 */
// 然后在根目录下创建一个craco.config.js文件,如下文所示的,将你想取的别名写在下面,到时候就能找到了
// 然后在更改完配置之后，你需要重新跑一下这个程序，然后才能生效

const path = require("path");

// 定义一个函数,需要什么路径,直接传递参数进去,就能找到了
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    webpack: {
        alias: {
            "@": resolve("src"),
            "components": resolve("src/components"),
        }
    }
}
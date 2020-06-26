具体模块的使用方式


不需要babel把ES Module 转换成曾经的commonjs模块  ，用tree shaking的话，要关闭babel默认的模块转义 

```js
{
  "presets": [
    ["env", {
      "modules": false
      }
    }]
  ]
}
```


create-react-app ，打包项目，什么都没加进去，就接近500k了 


## 分离公共部分 

拆分文件是为了更好地利用缓存，分离公共类库很大程度上是为了让多页面利用缓存，从而减少下载的代码量，同时，也有代码变更时可以利用缓存减少下载代码量的好处
```js
module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: { 
        vendor: { // vendor 是我们第三方类库的公共代码的名称
          test: /react|angluar|lodash/, // 直接使用 test 来做路径匹配
          chunks: "initial",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
}

// 或者
module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: path.resolve(__dirname, "node_modules") // 路径在 node_modules 目录下的都作为公共部分
          name: "vendor", // 使用 vendor 入口作为公共部分
          enforce: true,
        },
      },
    },
  },
}
``` 

上述第一种做法利用了 test 来做模块路径的匹配，对应路径的都作为第三方类库，第二种做法则是把所有在 node_modules 下的模块，即作为依赖安装的，都作为公共部分。你可以针对项目情况，选择最合适的做法。 


require 引入的模块 webpack 能做 Tree Shaking 吗
不能，Tree Shaking 需要静态分析（编译时分析），只有 ES6 的模块才支持。

import 不能再对它修改

tree shaking 永远不会执行的代码不会被打包。
```js
if(false){
  ...
}
``` 

### scope hoisting 
每个模块都是一个函数，模块多了，函数，闭包也就多了 
import导入的模块会被转换为__webpack_require  

原理：scope hoisting 将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突

对比：通过scope hoisting 可以减少函数声明代码和内存开销 

mode为production默认开启 ,必须ES6语法，commonJS不支持 

### 动态import
@babel/plugin-syntax-dynamic-import  

### 动态polyfill （polyfill.io）

promise不支持的浏览器大概3%,为了少部分而引入一个大文件，得不偿失 
原理：识别user agent ，下发不同的polyfill 

```js
<script src="..."></script>
```

缺点： 有些浏览器厂商（小米，华为等）会对useragent做一个魔改，这样的话就返回不了最合适的polyfill，针对这一情况，只能加载所有 



## webpack源码 

启动过程：命令行运行命令，npm会让命令行工具进入node_modules\.bin目录查找是否存在webpack.sh或webapack.cmd文件，存在就执行，不存在就抛错。
实际入口文件是：node_modules\webpack\bin\webpack.js 


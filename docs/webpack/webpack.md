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
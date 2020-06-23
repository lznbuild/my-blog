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
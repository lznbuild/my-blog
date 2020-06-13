https://juejin.im/book/5b936540f265da0a9624b04b/section/5b97cd22e51d450e8f5f6375  


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



稳定性，可维护性，安全性，攻击性测试用例
架构设计，接口设计，文档，注释，代码风格

压缩代码
sourcemap
polyfill
typescript 类型
浏览器，环境兼容
按需引入

## 模块化 多入口
- AMD 异步模块加载规范，转为浏览器设计的。浏览器不支持，需要借助RequireJS
- commonjs
- UMD 通用模块整合了以上多种方式，可在任何环境下工作
- es module

提供两个入口
index.js 原始模块，AMD,UMD,commonjs
index.esm.js es module


## package.json
main  主要入口文件
module esmodule入口
jsnext esmodule入口

module和jsnext 历史原因

webpack打包产物有些冗余代码，对库来说，不友好

dist/index.js             config/rollup.config.js               node.js        commonjs
dist/index.esm.js         config/rollup.config.esm.js           webpack        es module
dist/index.aio.js         config/rollup.config.aio.js           浏览器          UMD

file:[/dist, ] // npm发布只会上传这些内容

```js
const nodeResolve = require(
  'rollup-plugin-node-resolve'
)
// 为了将依赖也打包进来

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs' // es, umd
  },
  plugin: [
    nodeResolve({
      main: true,
      extensions： ['.js']
    })
  ]
}
```


### 按需加载
- 依赖按需加载
- 当前库按需加载
sideEffects: false 无副作用

## 发布
npm pack --dry-run 检查哪些文件会发布

npm publish --tag=beta 测试包发布

npm run preinstall
npm install
npm run postinstall

scripts: {
  postinstall: 'node postinstall.js'
}

## 维护
.github/ISSUE_TEMPLATE.md  issue模版

git commit -m '测试 fixed #[id]' 将提交信息和issue产生联系,关闭issue

husky会将git hooksPath 配置从.git/hook修改为.husky , 通过cat .git/config 查看hooksPath配置。
pretty-quick包， 执行npx pretty-quick --staged ，执行代码格式化任务，只在未提交的代码中应用。

pretty 代码格式化工具。
eslint 代码校验工具。
两者在代码风格上会有冲突规则，可借用eslint-plugin-prettier等插件，关闭eslint的冲突规则。原理是先使用prettier格式化，再与格式化之前的代码对比，不一致就报错。

lint-staged对指定文件运行指定命令

_count 私有属性

linux 系统，每个文件都有读，写，执 这3种权限。
ll ./index.js 查看权限

-rw-r-r 读写

chmod 755 [path] 更改可执行权限

-rwxr 可执行

package.json文件中修改
{
  bin: {
    jslibook: './bin/index.js'
  }
}
可以通过npm link 建立软连接。jslibook成为了全局命令。

yargs 工具包，封装了process.argv 读取参数的方法，和缩写。--help的查看内容，也可以处理。

inquirer.js ， node命令行界面
对于高并发的解决方
案，
传统的架构是多线程模型，也就是为每个业务逻辑提供一个系统线程，通过系统线程切
换来弥补同步式
I/O
调用时的时间开销。
Node.js
使用的是单线程模型，对于所有
I/O
都采用
异步式的请求方式，
避免了频繁的上下文切换。
Node.js
在执行的过程中会维护一个事件队
列，
程序在执行时进入事件循环等待下一个事件到来，每个异步式
I/O
请求完成后会被推送
到事件队列，
等待程序进程进行处理。


## process
process.argv命令行参数获取

shell 输入流
```js
process.stdin.resume();

process.stdin.on('data', function(data) {
  process.stdout.write('read from console: ' + data.toString());
});
```

下次事件循环响应时调用
process.nextTick(callback);
Node.js
适合
I/O
密集型的应用，而不是计算密集型的应用，
因为一个
Node.js
进程只有一个线程，
因此在任何时刻都只有一个事件在执行。如果这个事
件占用大量的
CPU
时间，
执行事件循环中的下一个事件就需要等待很久，
因此
Node.js
的一
个编程原则就是尽量缩短每个事件的执行时间。
process.nextTick()
提供了一个这样的
工具，
可以把复杂的工作拆散，
变成一个个较小的事件。

减少每个事件的执行时间，提高事
件响应速度。


## utils
```js
const util = require("util")
// 将任意对象转换为字符串
util.inspect()
```
util.inspect 和JSON.strinnify的区别
前者会解析不可枚举的属性和非json的内容，循环结构后者会报错
{fn: Function}   {}
[2, [length]:1]  [2]



## node模块
核心模块，fs这种，有模块命名冲突，会加载核心模块.
模块查找规则，先找核心模块，再找node_modules下，再找上级目录的node_modules，知道根目录.



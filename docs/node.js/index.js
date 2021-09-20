console.log(__filename); // 当前文件的路径
console.log(__dirname); // 当前文件的所在目录
console.log(process); // 进程信息

console.log(process.argv[process.argv.length - 1]); // 最后一项就是node执行命令的后缀参数

// commonJs模块化规范输出的是引用
exports.hello = 'hello'

module.exports = ... 
// 直接把exports重写掉

// 进程一直存在，输入内容打Log
process.stdin.on("data", e => {
  console.log(e.toString().trim());
});

process.exit()
// 杀死进程



// node.js         阻塞和非阻塞I/O的区别就在于系统接受输入再到输出期间，能不能接受其他输入 排队打饭 餐厅点餐


// 阻塞是用来形容什么的？答案自然是进程。进程的五大状态：创建、就绪、运行、阻塞、终止

//express 的洋葱模型在处理异步的时候不友好，next()实现中间件的调用，可以向res上挂载属性,实现不同中间件的属性传递

// koa 的中间件可以被await修饰，koa-mount实现路由

// RPC调用   （remote procedure call）远程过程调用，服务端与服务端之间
// 和ajax的相同点   都是两个计算机之间的网络通信，需要双方约定一个数据格式
// 和ajax的不同点   不一定适用DNS作为寻址服务（大多情况在内网使用）  应用层协议一般不使用HTTP（使用二进制协议，更小的数据包体积，更快的编解码速率）   基于TCP或UDP协议（）  
//TCP的优化机制，同一时间发送的包，自动合并为一个大的包，粘包了

// Bugger 二进制编解码 
// net模块 ，通信通道搭建
//nodemon 热更新代码

// 性能调优
// ab 性能压测  ab -c200  -n1600 -t10  [url] 
// 200并发量  1600次访问  10秒持续访问

// node --prof  [url]   
// chrome devTool     ==》      node --inspect-brk [url]  ==》chrome://inspect 

// node有个问题，错误一旦没有捕获，全局错误报错很严重，这也是为啥异步的回调函数参数是错误优先的原因

// try catch 捕获不到异步错误，想想事件循环

// buffer 缓冲区 描述二进制 
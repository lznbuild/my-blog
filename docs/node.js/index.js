console.log(__filename); // 当前文件的路径
console.log(__dirname); // 当前文件的所在目录
console.log(process); // 进程信息

console.log(process.argv[process.argv.length - 1]); // 最后一项就是node执行命令的后缀参数

// commonJs模块化规范输出的是引用

process.stdin.on("data", e => {
  console.log(e.toString().trim());
});

// node.js         阻塞和非阻塞I/O的区别就在于系统接受输入再到输出期间，能不能接受其他输入

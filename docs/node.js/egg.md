
rz；上传文件
unzip xx解压文件


egg部署
最好保留上一个版本的文件，用于回滚
netstat -tlunp 查看占用端口
删除node_modules 上传文件
npm install --production安装
npm run start启动
或者pm2启动
// server.js
const egg = require('egg');

const workers = Number(process.argv[2] || require('os').cpus().length);
egg.startCluster({
  workers,
  baseDir: __dirname,
});
pm2 start server.js --name test


## 项目不足总结
- 入库的时间应该是数据库当前系统时间 (app.mysql.literals.now)
- 接口参数是需要校验的 ctx.validate
- ts使用
- 没有监控，没有日志
- 性能分析
- redis
- graphql



## egg不足
typescript支持不够
报错信息太抽象了
pm2是可以用于生产环境的Nodejs的进程管理工具，并且它内置一个负载均衡。它不仅可以保证服务不会中断一直在线，并且提供0秒reload功能，还有其他一系列进程管理、监控功能。并且使用起来非常简单。
嗯嗯，最好的用处就是监控我们的生产环境下的node程序运行状态，让它给我们日以继日的处于工作状态。

pm2 start [app.js]

pm2 start [app.js] --name [name]


pm2 start [app.js] --watch

pm2 ls

pm2 delete [id or appname]

pm2 delete all

pm2 stop [id or appname]

pm2 describe app 查看某个进程具体情况

pm2 monit 监控各个应用进程cpu和内存的使用情况

pm2 reload [app.js]

pm2 logs [id or name] 查看应用日志

pm2 startup centos 开机自动启动

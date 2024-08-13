Service Worker本质上是一个Web Worker，它独立于Javascript主线程，因此它不能直接访问DOM，也不能直接访问window对象，但是可以访问navigator对象，也可以通过消息传递的方式（如postMessage）与Javascript主线程进行通信。

Service Worker独立于Javascript主线程，所以不会造成阻塞。它设计为完全异步，同步API（如XHR和localStorage不能在Service Worker中使用。

Service Worker是基于 HTTPS 的，因为Service Worker中涉及到请求拦截，所以必须使用HTTPS协议来保障安全。如果是本地调试的话，localhost是可以的。

Service Worker拥有独立的生命周期，与页面无关(关联页面未关闭时，它也可以退出，没有关联页面时，它也可以启动）。注册Service Worker后，浏览器会默默地在背后安装Service Worker。

Service Worker 的生命周期可以分为6个阶段：解析(parsed)、安装(installing)、安装完成(installed)、激活(activating)、激活完成(activated)、闲置(redundant)。

https://mp.weixin.qq.com/s/nMnNrFSW2L3UfHBfWyxBMQ

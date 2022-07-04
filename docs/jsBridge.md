混合开发按照渲染可分为下类：

Web渲染的混合App（Codova、NativeScript）
原生渲染的混合App（ReactNative、Weex）
小程序

其中的原生、Web相互通信都离不开JSBridge，这里面小程序比较特殊，对于UI渲染和JS的执行环境做了隔离，基于前两种方式之间。

Native端调用Web端，这个比较简单，JavaScript作为解释性语言，最大的一个特性就是可以随时随地地通过解释器执行一段JS代码，所以可以将拼接的JavaScript代码字符串，传入JS解析器执行就可以，JS解析器在这里就是webView。


Web调用Native端主要有两种方式
- 拦截Webview请求的URL Schema

URL Schema是类URL的一种请求格式，格式如下：

<protocol>://<host>/<path>?<qeury>#fragment

我们可以自定义JSBridge通信的URL Schema，比如：jsbridge://showToast?text=hello

Native加载WebView之后，Web发送的所有请求都会经过WebView组件，所以Native可以重写WebView里的方法，从来拦截Web发起的请求，我们对请求的格式进行判断：

如果符合我们自定义的URL Schema，对URL进行解析，拿到相关操作、操作，进而调用原生Native的方法
如果不符合我们自定义的URL Schema，我们直接转发，请求真正的服务

兼容性很好，但是由于是基于URL的方式，长度受到限制而且不太直观，数据格式有限制，而且建立请求有时间耗时。

- 向Webview中注入

这个方法会通过webView提供的接口，App将Native的相关接口注入到JS的Context（window）的对象中，一般来说这个对象内的方法名与Native相关方法名是相同的，Web端就可以直接在全局window下使用这个暴露的全局JS对象，进而调用原生端的方法。


## 离线包
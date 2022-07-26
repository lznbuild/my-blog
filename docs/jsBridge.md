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

### 离线包
预置包：将页面需要的静态资源打包并预先加载到客户端的安装包中，当用户安装时，再将资源解压到本地存储中，当 WebView 加载某个 H5 页面时，拦截发出的所有 http 请求，查看请求的资源是否在本地存在，如果存在则直接返回资源。
离线包：通过网络下发离线包到用户app

全局离线包：包含公共的资源，可供多个应用共同使用。
私有离线包：只可以被某个应用单独使用。

## WebView 初始化到 H5 页面白屏问题
- 针对 WebView 初始化：该过程大体需耗费 70~700ms。当客户端刚启动时，能够先提早初始化一个全局的 WebView 待用并隐藏。当用户访问了 WebView 时，直接使用这个 WebView 加载对应网页并展现
- 针对向后端发送接口请求：在客户端初始化 WebView 的同时，直接由 Native 开始网络请求数据，当页面初始化完成后，向 Native 获取其代理请求的数据。
- 离线包


web页面上线频度满足快速迭代的业务需求，不受客户端审核和发版的时间限制，也可以将各个业务线的开发工作分摊到各个业务的fe团队上，使得个业务线可以并行开发。
web应用的性能和体验，是肯定不及客户端

service worker等利用web api 来实现pwa的离线缓存方案，但目前xx的app使用的还是系统原生的webview。暂时不兼容pwa特性

### 离线系统设计指南
- 采用腾讯alloy团队出品的webpack离线包插件：ak-webpack-plugin，其可以根据配置，将webpack的构建出的静态资源，压缩成映射了静态资源在cdn路径url的zip压缩包
- jenkins代替fe工程师构建与部署前端项目。使前端项目也像传统的app与后端项目一样做到了开发与构建部署分离，提高了团队的效率。 而我们生成和部署离线包的操作，也交由jenkins替我们完成。
gitlab=>jenkins=>静态资源文件上传==>生成离线包上传>如果是不是首个离线包，计算差分离线包上传
- 在客户端内，预制了一份最新的各业务线的离线包与版本号的配置表。app安装后首次启动时，会将压缩包解压到手机rom中。 各业务线配置中包含app访问线上的静态资源时需拦截的url规则map
···js
 {

                "bizid": 13,

                "date": "1513681326579",

                "ver": "20171219185710",

                "offlinePath": [

                    "c.58cdn.com.cn/youpin/activities"

                ]

            },
···
当app访问到与规则map相匹配的地址时，就转为使用本地的资源，达到离线访问的目的
首次打开app==》解压离线包到本地==》访问h5页面时，拦截，与本地离线包配置对比==》url匹配配置中内容==》使用本地缓存文件
                                                                    不匹配==>访问线上

- 客户端启动后，向离线系统查询最新的各个业务的离线包版本号，依次跟本地配置中的对应业务线比较。 如果需要更新，则再次向离线系统查询此业务线的离线包信息，离线系统会提供此业务线的离线包的信息（包括基础包，更新包的信息）。

https://mp.weixin.qq.com/s/r5J5fgjeJkloSGv2BWNRow?


### webView加载过程
点击h5的入口==>判断要启动的url，基础参数检查，初始化webView(复用或者新建)==> 校验权限，注入cookie（依赖客户端注入cookie保证鉴权和跨端场景）==> 加载url ==》 页面资源加载==》api请求

新建webview太耗时（提前创建），前端跨域时依赖的全量cookie注入, jsBridge等js注入耗时
低端安卓机新建webview太耗时，甚至会因为卡顿被安卓系统强杀。

cookie太多，种cookie整体时间几百毫秒，每个cookie注入调用耗时大于1ms
当前打开的url不一定需要所有cookie，维护白名单注入。网络请求，页面跳转前拦截并往请求url命中的域名注入cookie 。

jsBridge等js注入优化

数据请求和webview初始化可以并行进行，总体加载时间就缩短了。

cdn预热。将资源主动从源站推送到cdn节点，避免cdn回源，提升cdn真实命中率。

nginx开启GZIP， 使网站的静态资源在传输过程时进行压缩，提高访问速度。

动态import导入资源。

长任务手动分割。

移动端300ms延迟问题，在 WKwebview 中得到了完美适配。过渡方案fastclick, 有副作用，聚焦困难，偶现的响应失灵，input光标错位。


当App首次打开时，默认是并不初始化浏览器内核的；只有当创建WebView实例的时候，才会创建WebView的基础框架。

所以与浏览器不同，App中打开WebView的第一步并不是建立连接，而是启动浏览器内核。

https://tech.meituan.com/2017/06/09/webviewperf.html

全局webview容易内存泄漏

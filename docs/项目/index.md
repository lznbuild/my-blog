Test

===============================================
如何监控资源加载失败
我们可以给 script 标签添加上 onerror 属性，这样在加载失败时触发事件回调，从而捕捉到异常。







1 <script onerror="onError(this)"></script>
并且，借助构建工具 ( 如 webpack 的 script-ext-html-webpack-plugin 插件) ，我们可以轻易地完成对所有 script 标签自动化注入 onerror 标签属性，不费吹灰之力。


7 new ScriptExtHtmlWebpackPlugin({
    custom: {
      test: /\.js$/,
      attribute: 'onerror',
      value: 'onError(this)'
    }
})
第二种
window.addEventListener('error', (event) => {
  if (!(event instanceof ErrorEvent)) {
    // todo
  }
}, true);



@ks/weblogger

FPSMonitor 每隔一段时间，会上报当前页面帧率计算，用于辅助业务判断页面是否有卡顿发生

visibilitychange 指的是页面的可见与不可见，pageshow/pagehide 指的是页面的进入与离开。

pagehide beforeunload unload 事件在手机上可能不会触发
document.addEventListener('visibilitychange'

刷新和关闭页面都会触发
window.addEventListener('beforeunload', function (event) {
if (pageHasUnsavedChanges()) {
event.preventDefault();
return event.returnValue = '您写的内容尚未保存，是否退出？';
}
});


AutoShow 元素可见
IntersectionObserver

接入需要做什么？ 对比两端
New WebLogger实例，给配置
封装上报信息的函数
<div data-track={params} > vue指令
接口拦截上报
weblog.plugins?.radar?.fmp?.();


sdk支持环境，pc&mobile，ssr,rn，electron,小程序
配置
projectId:
env: test or production
plugin
urlMap 自动收集页面访问情况的信息，通过监听路由变化自动收集页面进入、离开的信息，通过监听浏览器标签页切换自动收集显示、隐藏的信息，并根据这些信息计算页面的停留时长。
监听浏览器 window 对象的 popstate hashchange 和 document 对象的 visibilitychange 事件来触发 weblog.collect 动作

logger.sendImmediately(type, options) 立即上报
Logger.collect() 收集上报，根据配置wait时间间隔，延时批量上报(维护异步队列)
flush() 立即批量上报
updateOptions 更新配置
上报url https://log-sdk.ksapisrv.com
关闭页面发送数据， 可延时跳转
监听了浏览器的 beforeunload 事件，会在页面跳转或关闭时将未发送的埋点信息上报上去



Yoda yoda的设计思路, 拥有哪些功能
addListener
invoke
invoke("pay.startKspayOrderPrepay”)


@ks/zt-pay-sdk
orderPayWechatOfficialAccount,
invokeWeixinJSBridgeOfPay,


github内容整理
可以来使用CommonJS, AMD, script tag这三种不同的方式来测试你的UMD包
webpack umd
Output: {filename: xx, libraryTarget: ‘umd’}
=====================================================
自己项目里有哪些好的点。



离线包基本思路都是通过 webview 统一拦截 url，将资源映射到本地离线包，更新的时候对版本资源检测，下载和维护本地缓存目录中的资源

csr对fmp的影响，怎么解决的？离线包
混合式开发有哪些坑？？？考虑安卓和ios的系统
pbsa-x的这种东西
双端逻辑复用是怎么做的，monorepo,
流水线都做了什么？指定分支，git repo拉代码，build编译，sourcemap提取，产品库，cdn
static 文件下内容上传can， axis.min.js vue-router.min.js, vue.min.js
明水印，暗水印，sdk怎么设计
创编的难度在那里，只是一个联动表单？ 逻辑分支太多，一改影响面很大，白名单控制各种功能的放量，稳定性怎么保证，日志洞察和分析能力（排障归因，产品下一步的决策等），如何复盘操作链路，跨端的复用？

App store跳转(微信)
window.open('itms-apps://apps.apple.com/cn/app/414478124')


看看充值的逻辑
接口拿参数payCode
@ks/zt-pay-sdk
orderPayWechatOfficialAccount,
invokeWeixinJSBridgeOfPay,

invoke("pay.startKspayOrderPrepay”)


kwai://post/live? (Web=> App Store)
baseSchema: "kwai://live/play/“,协议跳转

金牛拍档
项目介绍
partner.e.kuaishou.com/home

内容结构配置化，降低开发的迭代成本,
后续新加板块，直接在对应categaryId下新建板块，创建内容到相应板块。
后续下线部分板块，直接删除对应categaryId
样式方面，定义枚举，分别对应一套样式，
dompurify实现原理 防止xss攻击

金牛拍档，半配置化页面，先拉页面结构，通过结构分别获取对应内容。基础组件封装。监控引入与治理，sql编写
金牛拍档是磁力金牛旗下集信息交流、社区交互、营销服务、市场撮合为一体的一站式服务平台， 为客户提供最新投流快讯、营销动态与服务合作，助力客户生意新增长。
新功能介绍，优秀广告投放的案例教学


图文展示怎么做的 后端下发html嵌入
图文编辑器 https://rain120.github.io/athena/zh/slate/SlateStart.html


随心推 加速包引入，加量包，优惠券，新人活动，埋点上报，报表，
Esp 图表，多指标数值差距过大，归一化处理, 任务中心的动画，结合贝塞尔曲线，代码分层，考虑复用性和可维护性的冲突，消息通知，避免网络问题造成的失误提示或者不提示。
websockt 使用，


面包屑封装，路由管理(已经抽离)
mock数据方案（已完成）
监控，case 群 oncall



https://school.corp.kuaishou.com/school/web/play/KC2019127#section=2647
transitionend函数
*zoom: 1; 作用

组件库的开发 https://git.corp.kuaishou.com/ks-ad/ad-fe/magnet-design/m-ui/-/blob/master/package.json



动态js引入
createElement(‘’script)

像pc和M站的这种项目，代码组织怎么做，参考磁力学
x-m
X-pc
X-shared ts,components, utils, hooks, Swet generate content, vue or mobx

对标 plop的代码生成工具，模版。cli工具
生成基本文件 .ts .less .tsx等
生成基本组件 components index.tsx+index.less
生成 service.ts
Mobx store



监控了哪些指标项，这些指标项是怎么收集数据的，要加密
fmp 性能相关， dom ready， 页面完全加载完毕，webView加载完毕
api请求成功率,整体请求次数，耗时，日志，
js异常
静态资源体积，
pv, uv
设备信息
自定义上报
app版本，设备信息，操作系统，机型分布，安卓ios版本
页面访问次数

server {
listen 8443;
server_name xxx.xxx.com;

location / {
...
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Real-IP $remote_addr;
proxy_pass your Node.js serve
...
}
}


var ip = req.headers['x-forwarded-for'] ||
req.ip ||
req.connection.remoteAddress ||
req.socket.remoteAddress ||
req.connection.socket.remoteAddress || '';

ip+地理位置


cdn 容灾


数据管理
- 函数式，不可变，redux
- 响应式，依赖追踪，mobx
- 响应式，流，pipe， rxjs

redux,带保护（dispatch reducer）的全局使用的useContext。只dispatch更改，保证可回溯性。reducer容易膨胀，写法冗余。大型项目拆分设计不够，容易逻辑修改困难。

mobx自动订阅发布，面向对象

rxjs 强大，大量api，纯函数式，逻辑拆分容易，可读性强，好维护。学习理解成本高。

在抽象能力上，面向对象和函数式编程都有其独特的优势。
面向对象编程的优势在于其能够将复杂的问题抽象成对象，并通过对象之间的交互来解决问题。面向对象编程提供了封装、继承、多态等机制，可以将代码分解成多个独立的模块，使得代码更加易于维护和修改，减少了代码的耦合，提高了代码的灵活性和可维护性

函数式编程的优势在于其强调函数的纯度和不可变性，可以将函数看作是数学中的函数，而不是过程式编程中的函数。函数式编程提供了高阶函数、闭包、柯里化等机制，可以将函数看作是一等公民，可以进行组合、抽象和重用，从而实现了高度的抽象能力。在函数式编程中，函数是程序的基本组成单元，函数之间通过函数调用来实现交互，从而实现了高度的模块化和组合能力。函数式编程还提供了丰富的函数组合和递归等技术，可以帮助开发人员更好地组织和管理代码，提高代码的可读性、可维护性和可扩展性。

面向对象 函数式
抽象单位 对象 函数
行为和数据的关系 数据和行为合并。强调现实世界问题的抽象还原。 数据和行为分离。强调数据不可变性、行为无副作用
机制 封装、继承、多态等 高阶函数、闭包、柯里化、递归等
抽象能力实现 对象之间的交互、引用 函数组合



/mobx-state-tree 和 mobx-keystone


滚动穿透+帖子
有复层时，body里加overflow:hidden，没有再删除。
overscroll-behavior: contain; 兼容性，没发解决所有场景



锚点跟渲染的延时问题。



esp


功能梳理

首页： 顶部消息提示
账户总览 总花费， GMV ROI 等数据，支持时间筛选
账户信息，虚拟金
广告状态，审核中有多少，审核通过多少，未通过多少

直播 & 短视频
直播观看数，平均观看时长，下单率， 商品数，粉丝增长率，销售额
花费，曝光数，直播观看数， GMV, ROI
学习链接，到磁力学

推广列表

报表

创编
专业版（计划，组，创意）
搜索广告
经营版
极简版

短视频带货，选 商品点击率 订单成交量 卖货ROI
直播卖货， 直播前预热：播放量，点赞评论量，涨粉数，直播预约点击。直播中提人气，极速进人，直播中提高销量，商品点击率，商品点击率 订单成交量 卖货ROI。


充血和贫血？
贫血 （事物脚本）watch各自触发修改state。 领域对象没有业务逻辑，只有对state的 get set.面向过程
充血 （领域模型） watch收敛到store 有get set 行为，也是业务逻辑，面向对象

web worker 创建的线程完全受主线程控制，不能操作Dom，可以用web socket,indexDB，和主线程通过postMessage通信，onmessage事件接受响应。适合处理复杂计算，不适合滥用，创建worker线程和postMessage通信都需要损耗性能和时间。图片通过cavas批量压缩。
Ctx.drawImage()
Canvas.toDataurl()

document、window这些对象。但是，Worker 线程可以使用navigator，location,XMLHttpRequest。除此之外，Worker 线程不能执行alert()、confirm()等方法. Worker线程任务需要等待主线程任务结束才能进行。可以主动关闭Worker线程。如果是多页应用的话，离开了Worker页面，Worker 也不会工作。


微内核架构
https://mp.weixin.qq.com/s/rf-onLvIVIFP6XGGuIVG9Q

核心代码保持逻辑单一，只负责程序的启动销毁，功能模块的加载、执行、卸载。软件的功能叠加由不同的插件来实现，并挂载到核心上实现功能的扩展。这样允许软件的功能可以被动态地扩展和定制，在增强现有软件的功能或添加新功能的同时，无需修改核心程序代码。

内核功能与各个功能模块耦合在一起，不符合软件设计的开闭原则，不仅增加了软件开发的维护难度，同时也大大提升软件扩展的难度，从而使软件本身不具备有良好的扩展性。
￼
每个功能都成为插件，独立维护开发，不与内核耦合。每个插件需要定制，可以独立修改、发布，不影响其他插件及内核，同时也可以添加新的插件。相比宏内核，软件的维护难度大大降低，同时只要遵循插件的接口定义，就可以为软件开发新的功能，降低了软件扩展的难度，使得软件获得了很好的灵活性和扩展性。

灵活性和可扩展性： 插件系统允许软件在运行时加载和卸载插件，从而实现灵活的功能扩展和定制化。通过插件，可以根据用户需求添加、移除或替换特定功能，而不需要修改核心代码，使得软件更易于扩展，易于适应变化的需求。
代码重用和模块化： 插件可以看作是独立的模块，它们可以在不同的应用中重复使用。这种模块化的设计使得代码更加可维护，减少了代码冗余，提高了代码重用率。
社区参与和共享： 插件系统鼓励社区的参与和贡献，第三方开发者可以开发自己的插件并与软件进行集成。这样，软件的功能得到了大大丰富，社区成员可以共享自己的扩展，促进了软件生态系统的发展。
解耦合和维护性： 插件系统帮助将软件的功能划分为独立的部分，降低了模块之间的耦合度。这使得软件更易于维护，当需要修改或升级某个功能时，只需关注相应的插件而不会影响整个系统。
性能和资源优化： 插件的动态加载和卸载使得软件可以根据需要来选择加载特定的功能，从而节约了内存和计算资源，提高了软件的性能。
定制化和个性化： 插件系统允许用户根据自己的需求来定制软件的功能和外观。用户可以选择安装和启用特定的插件，以满足个人喜好和工作流程。


定义插件接口：首先，需要定义插件与主程序之间的接口，包括插件的初始化方法、执行方法、事件监听等。这样可以确保插件与主程序之间的交互是规范的。
插件的加载方式：确定插件的加载形式，比如通过 npm 包，通过文件，通过 git 仓库等等，好的插件的组织形式使整个系统足够灵活。设计好插件的加载时机，比如惰性加载，按依赖加载等，好的加载时机把控，可以让大型系统的性能得到提升。
插件注册和管理：主程序需要提供插件注册和管理的功能，用于管理已加载的插件列表。当插件加载完成后，将其注册到主程序中，这样主程序就可以调用插件的能力。
事件通信机制：主程序和插件之间需要建立事件通信机制，以便在需要的时候进行交互。可以使用自定义事件、发布订阅模式或观察者模式等方式来实现事件的监听和触发。
插件配置：可以为插件提供一些配置选项，使得插件的行为可以根据用户需求进行定制化。
安全性考虑：插件系统涉及动态加载代码，因此安全性是一个重要考虑因素。确保只加载受信任的插件，并对插件的代码进行安全性检查，以防止潜在的恶意代码注入。

业界关于插件设计模式有很多种，但是经过归纳总结，我们认为最常用的主要是以下三种插件模式：管道式、洋葱式和事件式，

￼
解耦，环节独立开发测试维护
灵活
需要考虑插件的执行顺序，增加难度。中间出问题，流程走不通了(CI/CD，gulp)

￼
层次分明， 洋葱式插件保留了洋葱架构的内部核心和外部依赖的层次结构。插件通常被视为外部依赖，而宿主应用程序的核心逻辑位于内部。可复用，洋葱式插件允许插件在请求处理过程中先后执行，可以按需添加或删除插件，并且每个插件可以根据需要决定是否继续执行或终止执行，这使得洋葱式插件非常适合承当服务拦截器的角色。
 
与管道式插件相比，洋葱式插件对数据干涉的时机更加完备，不仅仅可以对自身的数据输入环节进行干涉和处理，在数据输出环节还能对其他插件的输出进行干涉和处理。
相比管道式插件复杂性更高，洋葱式插件模式需要插件之间的协作和数据传递，即处理输入流和处理输出流，在处理复杂逻辑时可能导致代码变得复杂难以理解。
 
洋葱架构中的层次嵌套可能会增加函数调用的次数和层次，进而导致一定的性能损耗。 （中间件，koa, express）
￼
灵活度最高
Webpack 当中，其通过 Tapable 实现了一种发布订阅者模式的插件机制，提供同步/异步钩子，串行/并行钩子，按照执行类型分为瀑布/保险/循环钩子，并且可以进行灵活组合来满足 Webpack 编译打包的所有功能扩展需求。

执行时机异步化，提升整体性能。可插拔。
更复杂，容易引入未知问题。


隔离插件，执行环境隔离，避免带崩主程序。 web worker 通过 Webworker 的 onMessage 和 postMessage 来维护一个消息通道



材料准备

晋升准备
- 项目维度，做了什么，沉淀了什么，哪些数据指标提现
- 工作成果，方案对比，解决了什么问题，思路，成果，后续规划(后续思考，对未来)，要突出重点
- 影响力&贡献 业务贡献，团队建设，技术影响，分享沉淀 荣誉认可。
- 有战功，有能力，具备下个职级的能力

竞品对比，分析，技术选型 项目拆解、进度管控、风险应对 立项书？
业务收益
组件化的灵魂五问：架构设计的创新性、组件拆分原则、组件间通信方式、防劣化措施、项目效果。以上几部分缺一不可，否则无法成为合格的组件化方案


文档思路
背景，现状，存在问题
业界调研
目标，短期，长期
方案，解决了哪些问题，如何解决，有没有引入新的问题，如何衡量收益，风险？如何规避？渐进式？
切入点？架构，技术痛点，梳理现有逻辑。



随心推汇总


复杂度来自不被约束的业务逻辑。其实不光是技术问题，不要觉得代码的复杂度或者裂化，只能通过技术方式去解决，改一下交互就能简单很多，协作方之间不合理的划分，产品，后端，前端之间的博弈，让每一方都干该干的事，最终目的是实现需求，服务客户，且稳定持久的运行。大大降低复杂度。业务发展的好，一定是用户体验好，用户觉得好，业务方平时工作流畅，稳定发展。而不是推一个事强势推，不给缓冲时间，开发没有方案设计，导致代码裂化，人员变动频繁，形成屎山。

业务发展迅速，以及各自都不知道对方在做什么，导致前期野蛮生长，代码copy的情况多，复用性差，重复而枯燥的工作。无法精准判断哪些业务组件、数据model需要封装抽离。在业务发展一段时间后，逐渐清晰，产品也有了更稳定清晰的规划（不频繁更改），业务发展逐渐进入平稳期，这个时候，做一些技术改造是很合适的。之前的复用不合适，导致太多if else 的逻辑，效率没提高多少，反而复杂度上升了。


表单 输入=》交互=〉输出


longtask可以通过PerformanceObserver获取到。 但不知道怎么操作的。
网络请求也可以通过PerformanceObserver收集到。这样就可以在longtask之前知道请求了什么。
Const po = new PerformanceObserver((list)=> { console.log(list.getEntries())})
Po.oberve({type: ‘resource’, buffered: true})

如何实现网络请求拦截？ajax-hooks, 原理是重写了XMLHttpRequest ,侵入性太强了。无法拦截fetch 以及静态资源的加载。
https://mp.weixin.qq.com/s/CBeh7DVCneDEnWGFDpg8dg
https://fed.taobao.org/blog/2016/04/26/performance-composite/

patch-package 给package打补丁

Click event ==> e: MouseEvent

setTimeout ==> ReturnType<typeof setTimeout>;

viewport-units-buggyfill 在移动端safari和旧安卓 支持vw vh calc


Font 字体支持。 Font-face

小键盘可能覆盖内容？ scrollIntoView 到当前视口

Input 无伪元素


<meta name="viewport"
content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no,viewport-fit=cover">
设置此标签后，把html,boby高度设置成100% 发现底部出现空白没有填满，这主要是这里的100%，只是安全区域的高度，是不包含非安全区域的
使用前提，H5网页设置viewport-fit=cover的时候才生效
constant和env函数是ios为了解决自身安全距离问题而生的, IOS11新增特性
```js
Padding-bottom: constant(safe-area-insert-bottom);
Padding-bottom: env(safe-area-inset-bottom);
```
constant, env ios11新增属性，用于设定安全区域与边界距离。


输入中文搜索问题 compositionstart（输入中文时触发，在input事件之前）和compositionend（结束输入中文时触发），切换中文使用会触发input事件，解决方式是在start中修改一个开关。


Navigator.sendBeacon
页面刷新或者关闭之前上报信息，axios可能会没发送到服务器就被cancel， 可以修改ajax请求为同步方法(axios不支持)，但阻塞页面关闭或者重新加载。sendBeacon就没这个问题
const syncReport = (url, { data = {}, headers = {} } = {}) => {
const xhr = new XMLHttpRequest();
xhr.open('POST', url, false); // false or true 确定同步还是异步
xhr.withCredentials = true;
Object.keys(headers).forEach((key) => {
xhr.setRequestHeader(key, headers[key]);
});
xhr.send(JSON.stringify(data));
};


向当前url上修改参数且不刷新页面
useHistory.replace(xx)
history.pushState(state, title[, url])

Fetch API 支持一个 keepalive 选项，当设置为 true 时，保证不管发送请求的页面关闭与否，请求都会持续到结束。
window.addEventListener('unload', {
fetch('/siteAnalytics', {
method: 'POST',
body: getStatistics(),
keepalive: true
});
}

form表单有经验，monorepo方式新项目工程搭建，监控，线上问题跟进，

轻量级的投放工具，日活xw, 日消耗xkw，人均千元
大客户专业化，要不用户也可简单用, 一键智投，只输入投放金额，默认推广直播观看数，支付。
推广==》数据查看==〉投放建议==》再次下单
直播推广 进入直播间，直播间停留
短视频推广 涨粉数，播放量，点赞评论数
商品推广。商品点击量，订单成交量， 选择商品+关联视频
投放时长可选择
观众类型可选择（性别，年龄，地域，粉丝？）
投放金额+优惠券==》下单


安卓 yoda跳转
iOS 使用schema直接跳转



由于 ES5 的限制，Proxy 功能特性无法用 ES5的语法写出来


离线包解决了资源请求耗时的问题,解决了WebView初始化、数据预拉取、js执行（app初始化）耗时的问题。用Service Worker也能达到离线包的效果，同时也是Web标准。首次渲染优化一般需要结合客户端配置预启动脚本来达到缓存资源的效果。


稳定性保障
防止服务流量突增，打垮集群，采用域名隔离
线上监控报警
关键交互的自定义埋点
图片兜底+懒加载+压缩+雪碧图
离线包，首开
api预加载，创建webview时提前进行api请求

kswebview 定制内核
webView memory
GPU memory
Native memory


@yoda/bridge. jsBridge. 动态配置webView. 打包页面资源加载到客户端（离线包？）
离线包加载 预加载，wifi加载，点击加载。发布当前版本离线包时，会自动将该版本之前的所有离线包（包括灰度、全量的）做下线处理

invoke("webview.setPageTitle”xx）
支付能力
invoke("webview.backOrClose");
invoke("webview.open", { url });
webview.setTopRightBtn
拍视频页面（ks内部）
跳转到客户端页面
客户端日历的能力，读写

nativeListen("native_reentry", () => {
xx
});


开多个webView有什么优势？手势回退, 避免h5刷新页面
document.addEventListener(‘visibilitychange’,function(){})是可以做到监听回到H5 A的事件，但是有些手机会无效

半屏幕和充满屏幕，沉浸式屏幕 url带参数，客户端处理。

微信，支付宝 支付在ios的审核。


useEffect多次调用问题
1. 中间态，引入一个新的state，监听。
2. 合并状态，{x, x2} 监听合并后的状态
3. 防抖处理
4.


我可以在线上监控，问题追踪方面多花点时间。
全埋点？如何设计？
灰度？

防盗链的原理，判断域名来源，做不同处理.可以伪造referer头信息，或者关闭referer实现。
<meta name=“”referer” content=‘’never >


队列工具的实现



轻松


性能优化
fmp    3s内，离线包策略      破晓检测==lighthouse
html初始化(加载执行) 110ms =》 js初始化400ms =〉登录owner/info处理+radar+ 1000ms => 初始化表单数据+算价格

破晓检测项：https2，首评请求大小，css，js代码覆盖率，js解析时长，未压缩内容，fp,fmp, 最大dom层级。内存占用

那些接口需要阻塞渲染，那些优先级高，先调用。接口并发数量太多

swr缓存策略
service work 缓存


磁力金牛移动端性能优化拆解
金牛电商-C端落地页性能优化
https://github.com/FuncJin/React-IM

磁力学的价值点更偏向于「培训学习」的基建平台，无法构建一个内容、社区、营销为主的客户营销生态，而金牛拍档的定位侧重于业务营销，以内容触达的同时通过营销活动拉动客户的增长；
所以希望通过单独的「金牛拍档」这样一个整合的统一平台来完成这个能力。


https://mp.weixin.qq.com/s/S0U4l1-L8_Qhj4EI1wu4kQ

https://mp.weixin.qq.com/s/s2tgfZ3PJ-2HTciTmWg8pA


「微前端」与「Web Components」的爱恨情仇

做短视频达人变现的经验复盘(求个赞)

【报告】小红书用户调研

同比跟去年比，环比跟临近时间比。


MPA 的项目应该如何管理代码和工程。

react-query & useEffect
swr

https://kdev.corp.kuaishou.com/web/workbench/mergeRequest/detail?mrId=81&repoId=36491&tabKey=changedFiles&position=&from=

监控mysql 下面各种情况的sql语句补充。
我要接手线上的问题处理+群oncall !




==============================================


=====================================

我们自己项目的性能分析
破晓+devtools+radar
1. 打包文件体积大，轻量包替换，cdn,code split, compression-webpack-plugin,gzip压缩
2. http2，接口keep-alive
3. 请求数量，时间长。
4. 图片，小尺寸，webp格式，，懒加载

node 获取下html内容，爬虫处理下数据。
https://gitee.com/CrimsonHu/rxjs-cross-component-communication
https://gitee.com/ecitlm/splider
https://github.com/wangweianger/zanePerfor
https://github.com/ecomfe/react-hooks/tree/master

=================================================
https://school.corp.kuaishou.com/school/web/play/KC2019127

Kim Meeting_20230216_矫志宇的会议.mp4
视频


umijs modernjs这些工具的设计思路


看下and ad form考量，解决了什么问题，对比antd form
Value, onchange封装
样式布局
校验
错误滚动
watch
数据流约束
页面层=》模块层=〉组件层
antd watch处理不好。group分组处理不好。

总结创编的难点，业务复杂在哪里。 100+字段
难点：场景多，（表单页面动态化，系统需要千人千面的能力。只能上层设计一套json协议驱动渲染）
各种深层嵌套、表单联动、动态表单（商品规格）、自增对象（SKU）
业务复杂，交互多样，逻辑分枝多，联动多导致代码逻辑非线形。可能有资损，稳定性要求高。
第一版的代码设计非常重要，后续可能会劣化。

干净的架构，代码需要分层隔离，底层实现复用，不被业务代码侵入。得扩展性高一些
UI层=》 业务层 =〉 通用组件层

灰度
KFX 百分比策略的实现原理是当一个请求分配了流量之后，会下发一个 cookie 标志，下次请求的过程将会优先使用该标志，并返回之前分配的版本。在一定程度上可以避免只基于随机的百分比策略中可能出现的同一客户端内多次请求随机命中了多个版本的情况。

百分比策略是一个基于随机的百分比方案，支持多版本并存，客户端一旦确定百分比版本后之后的请求将稳定命中该版本。
指定白名单 为需要匹配的 cookie 中的 key
可以发布多个百分比策略，所有百分比同时生效，当合计所有百分比超过 100% 时，最后配置的超过 100% 的部分将不会生效。（相当于去抢占默认上线版本的范围用户）


<script src="xxxx" crossorigin="anonymous"></script>
设置 crossorigin属性后，script标签去请求资源的时候，request会带上origin头，然后会要求服务器进行 cors校验，跨域的时候如果response header 没有 ‘Access-Control-Allow-Origin’ 是不会拿到资源的。cors验证通过后，拿到的script运行内部报错的话，，window.onerror 捕获的时候，内部的error.message可以看到完整的错误信息。
crossorigin的属性值分为 anonymous和use-credentials。如果设置了crossorigin属性，但是属性值不正确的话，默认是anonymous。
anonymous代表同域会带上cookie，跨域则不带上cookie，相当于 fecth请求的credentials: 'same-origin'。
use-credentials跨域也会带上cookie，相当于fetch请求的 credentials: 'include'，这种情况下跨域的response header 需要设置'Access-Control-Allow-Credentials' = true，否则cors失败。


带报警组的sql查询需要带project_id


“电商平台商业化，强调的是‘内循环’，即为主经营阵地在该平台的商家提供电商营销服务，实现高效的交易闭环；社交平台、搜索平台的商业化，强调的是‘外循环’，通过卖流量、导流量实现创收。”曹世博说，“快手商业化的推动力，正是在于‘内循环+外循环’的双向增长，这是国内乃至全球互联网广告平台都少有的一种模式。”


内循环行业更多是指快手小店的服务（直接在快手开店做生意）

自助户说明：一个快手小店，只能开一个自助户
渠道户说明：一个快手小店可以找多家代理合作


账户定位：
自助户：
客户自己进行移动订单的创编、充值
渠道户：
代理商进行移动订单的创编、充值
代理商只充值，客户自己创编

cdn逃生
不能写死域名。 动态域名，使用占位符var—xx—ali.com
在nginx， 使用lua脚本将占位符域名动态替换为线上域名。从容量调度服务里读取cdn域名配置
{‘ali’: id: xx, host: [{domain: ali.xx.com, ‘weight’: 1}]}
、可以在Nginx中使用JavaScript进行动态配置一些变量和动态脚本执行；而目前市面上用的非常成熟的扩展是由章亦春将Lua和Nginx粘合的ngx_lua模块


水印实现
背景图 canvas实现
dom实现
防止代码篡改？
把水印元素放在shadow dom中。 Mutation Observer监听dom变更
暗水印，防止P图修改，暗水印根本感知不到，也无法外部处理。
方案算法安全，性能可以，潜入提取方便，对内容质量内容无影响，防止压缩，旋转，裁剪磨坏。
将图片信息 绘制到canvas ， getImageData 获取像素数据，数据导入绘制，然后渲染图片



gitlab公司项目学习
docs 里 很多内容可以学习


应该有一个 form + table + 分页的逻辑汇总，组件or 自定义hooks


提高开发效率的最有效方式之一：支持页面的配置化


静态资源优化，资源分为首屏内容，次屏，操作后。

如果你的页面和页面中引用的 JavaScript 文件不同源（协议、域名、端口不一致），那么这些脚本抛出的错误都属于跨域错误。那么我们在做前端监控捕获这些错误的时候，应该怎么避免采集到 Script Error 呢？

答案是 crossorigin 属性。这是一个应用在 <script> 标签上的属性，添加之后即可保证即使是跨域错误也能捕获到完整的错误信息
crossorigin 生效需要服务器端和浏览器端同时支持。服务器端支持比较简单，即返回跨域脚本的服务器（一般为 CDN 服务器）正确的带上 CORS 响应头 —— Access-Control-Allow-Origin: * —— 即可，目前常见的 CDN 服务均支持这一特性。而浏览器端的支持情况就没有这么乐观了。
可以看到，crossorigin 前端支持问题的重灾区发生在 IE 和 Safari 上。IE 这个拖油瓶出现问题是情理之中，Safari 在 9.0 之前的版本也不支持 crossorigin 就说不过去了。这也直接导致了许多运行在 iOS Webview 中的业务无法正确捕获到错误。
try catch 捕获上报，不通过window.onerror的方式, componentDidCatch。



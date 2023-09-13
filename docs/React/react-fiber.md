<!--
 * @Author: Jeffrey
 * @Date: 2021-08-30 23:08:59
 * @LastEditors: Jeffrey
 * @LastEditTime: 2023-09-03 10:49:48
 * @Description: Do not edit
-->
本质是将渲染工作分成多个块，并将其分布到多个帧中。

很多人还分不清React渲染和diff的界限。virtual dom是对象树，是用来表示组件树的内存对象；fiber是在virtual dom的前提下，为每一个节点附加的任务机制对象；diff是对新老两个virtual dom（内存对象）进行对比，对比过程中使用了fiber提供的任务机制，可以被中断，中断之后，要从头来过；diff得到的结果是patch，用来表示哪些virtual dom节点发生了何种变化；更新渲染是实施patch过程，fiber上记录了每一个virtual dom节点对应的真实DOM节点，每一个patch针对对应的DOM节点进行操作；diff过程可以中断重来，patch渲染过程不能被中断。

React在第一次渲染到界面时跟virtual dom的更新机制没有半毛钱关系，根本没法享受它带来的性能优势。相反，由于第一次渲染需要创建原始的virtual dom以及fiber体系，反而会浪费一定的性能，当需要进行大列表数据渲染时，这种浪费体现的更加明显。

virtual dom宣称的对立面是，对一整块DOM进行全部替换的更新方式，一次性更新整块DOM需要消耗大量资源删除原有DOM，创建新DOM，实施Reaint/Reflow过程，所以理论上virtual dom性能更好。但是，并不排除有的情况下，一次性替换整块DOM会比用virtual dom的形式更新性能更好。当patch数量超过一定数额时，除了需要进行遍历之外，每一次对小量的DOM进行操作，都可能带来重绘过程，数量一多，那么浏览器就需要完成n次重绘，造成卡顿，虽然一次性整块替换DOM也会存在同样问题。diff算法本身也存在性能损耗，fiber机制就是为了解决这个问题，但是实际上，fiber并没有强化virtual dom的优势，因为js是单线程的，即使异步操作，所以该做的计算一秒都少不了，在diff过程中，如果被中断，就要从来一次，反而增加了时间，不过好在fiber的调度机制，可以在空闲的时候把能干的先干，但是，该卡顿的还是会卡顿，这和fiber本身没有关系，是js单线程决定的。


### 讲讲react16中的fiber  

将任务细化为不同优先级，利用浏览器的空闲时间进行任务的执行以保证 UI 操作的流畅。浏览器的调度 API 主要分为两种，分别是高优先级的 requestAnimationFrame 与低优先级的 requestIdleCallback

react初次render或协调后所生成的一个对象，react16前是通过组件递归遍历而来，react16是以fiber为节点构建成的单链表结构树，其作为真实dom的映射。
之前，React并没有充分利用调度的优势。更新导致立即重新渲染整个子树。彻底革新React的核心算法以利用调度是Fiber背后的驱动思想

计算机通常使用调用堆栈来跟踪程序执行的方式
在处理UI时，问题在于如果一次执行太多工作，可能会导致动画掉帧并显得断断续续
较新的浏览器（和React Native）实现了有助于解决此确切问题的API：requestIdleCallback安排在空闲期间调用的低优先级函数，并requestAnimationFrame安排在下一个动画帧上调用的高优先级函数
如果我们可以自定义调用堆栈的行为来优化呈现UI，那不是很好吗？如果我们可以随意中断调用堆栈并手动操作堆栈帧，那不是很好吗？这就是React Fiber的目的。fiber是堆栈的重新实现，专门用于React组件

重新实现堆栈的优点是，您可以将堆栈帧保留在内存中，并根据需要（以及在任何时候）执行它们
除了调度之外，手动处理堆栈帧还可以释放并发和错误边界等功能



https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247484802&idx=1&sn=4b9f618ddbdf483101bbe942e23b08ca&chksm=fa2be56bcd5c6c7d4a9b384625ed88a917bfd841e41eccb7369301c037712c1993cb430efa1a&mpshare=1&&srcid=&sharer_sharetime=1572533493883&sharer_shareid=c2e4bd2a7749c57364e37417427f8b4f&from=timeline&scene=2&subscene=1&clicktime=1572591786&enterid=1572591786#rd 



### fiber的执行阶段 

阶段一： 生成fiber树，得出需要更新的节点信息。这一步是一个渐进的过程，可以被打断。基于vdom树生成Fiber树，本质是链表。

阶段二： 将需要更新的节点一次批量更新，这个过程不能被打断。 


fiber 协程，语言层面，控制程序的中断和执行

之前的vdom是一个树形结构，diff过程无法中断，修改为双向链表，容易恢复遍历状态


Fiber 可以理解为一个执行单元，每次执行完一个执行单元，react 就会检查现在还剩多少时间，如果没有时间则将控制权让出去

React Fiber 是一种基于浏览器的单线程调度算法


### $$typeof 

目的是为了防止 XSS 攻击。因为 Symbol 无法被序列化，所以 React 可以通过有没有 $$typeof 属性来断出当前的 element 对象是从数据库来的还是自己生成的。

如果没有 $$typeof 这个属性，react 会拒绝处理该元素。


encodeURIComponent比encodeURI有什么区别
encodeURI用作对一个完整的 URI 进行编码，不会对网址中的 ASCII 字母和数字及标点符号进行编码。
!#&dollar;&'()*+,/:;=?@-.\_~0-9a-zA-Z 不会被编码

区别就是encodeURIComponent编码范围更广，适合给参数编码，encodeURI适合给URL本身（locaion.origin）编码,当然项目里一般都是用qs库去处理

当需要获取一个可用的 URL 地址时，使用此方法进行编码。
```js
encodeURI('http://xuedingmiao.com/My first/');
// http://xuedingmiao.com/My%20first/
```

当需要对 URL 的参数进行编码时，使用 encodeURIComponent。
!'()*-.\_~0-9a-zA-Z 不会被编码
```js
encodeURIComponent('http://xuedingmiao.com/?a=1&b=2');
// "http%3A%2F%2Fxuedingmiao.com%2F%3Fa%3D1%26b%3D2"
```
https://blog.csdn.net/halations/article/details/109284050
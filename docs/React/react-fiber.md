本质是将渲染工作分成多个块，并将其分布到多个帧中。

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
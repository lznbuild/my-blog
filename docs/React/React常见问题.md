### setState

setState不是真正意义上的异步，react内部实现了一个批量更新，把需要更新的nextState push到pendingStates数组中，通过isPending判断有没有在工作，如果工作了，就更新，否则不更新，循环调用updater中的函数时，isPending为true

### 虚拟dom有什么特点

React 厉害的地方并不是说它比 DOM 快，而是说不管你数据怎么变化，我都可以以最小的代价来进行更新 DOM。方法就是我在内存里面用新的数据刷新一个虚拟 DOM 树，然后新旧 DOM 进行比较，找出差异，再更新到 DOM 树上。

框架的意义在于为你掩盖底层的 DOM 操作，让你用更声明式的方式来描述你的目的，从而让你的代码更容易维护。没有任何框架可以比纯手动的优化 DOM 操作更快，因为框架的 DOM 操作层需要应对任何上层 API 可能产生的操作，它的实现必须是普适的。

优点：

数据和UI的进一步分离

抽象了原本的渲染过程，实现了跨平台的能力，不局限于浏览器的dom，可以是安卓和ios的原生组件
（因为react的Reconciliation（协调，调度）和render(渲染)是独立的阶段，reconciler（协调器）负责计算树的哪些部分已更改；然后，renderer（渲染器）使用该信息来实际更新渲染的应用程序，
这种分离意味着React DOM和React Native可以使用自己的渲染器，同时共享由React core提供的相同协调器，react 16版本中的fiber重新实现了协调器,尽管渲染器将需要更改以支持（并利用）新体系结构，但它基本上与渲染无关。）

vdom牺牲了部分性能，增加了可维护性，也实现了对dom的集中化操作，在数据改变时先对vdom进行修改，再统一反映到真实dom中，用
最小的代价来更新dom，在这个阶段是提升了效率

缺点：

首次渲染大量dom时，由于多了一层vdom的计算，会比innerHTML插入的慢

vdom在内存中维护了一份dom的副本，占用部分内存

如果vdom大量更改，是合适的，但是单一的，频繁更新的话，vdom会花费更多的时间去处理计算的工作，所以，如果有一个dom节点相对较少的
页面，用vdom可能会更慢


### 讲讲react16中的fiber

首先我们了解一下 React 的工作过程，当我们通过render()和 setState() 进行组件渲染和更新的时候，React 主要有两个阶段： 

调和阶段(Reconciler)：官方解释。React 会自顶向下通过递归，遍历新数据生成新的 Virtual DOM，然后通过 Diff 算法，找到需要变更的元素(Patch)，放到更新队列里面去。

渲染阶段(Renderer)：遍历更新队列，通过调用宿主环境的API，实际更新渲染对应元素。宿主环境，比如 DOM、Native、WebGL 等。

在协调阶段阶段，由于是采用的递归的遍历方式，这种也被成为 Stack Reconciler，主要是为了区别 Fiber Reconciler 取的一个名字。这种方式有一个特点：一旦任务开始进行，就无法中断，那么 js 将一直占用主线程， 一直要等到整棵 Virtual DOM 树计算完成之后，才能把执行权交给渲染引擎，那么这就会导致一些用户交互、动画等任务无法立即得到处理，就会有卡顿，非常的影响用户体验。

把渲染更新过程拆分成多个子任务，每次只做一小部分，做完看是否还有剩余时间，如果有继续下一个任务；如果没有，挂起当前任务，将时间控制权交给主线程，等主线程不忙的时候在继续执行。这种策略叫做 Cooperative Scheduling（合作式调度），操作系统常用任务调度策略之一。

合作式调度主要就是用来分配任务的，当有更新任务来的时候，不会马上去做 Diff 操作，而是先把当前的更新送入一个 Update Queue 中，然后交给 Scheduler 去处理，Scheduler 会根据当前主线程的使用情况去处理这次 Update。为了实现这种特性，使用了requestIdelCallbackAPI。对于不支持这个API 的浏览器，React 会加上 pollyfill。

在上面我们已经知道浏览器是一帧一帧执行的，在两个执行帧之间，主线程通常会有一小段空闲时间，requestIdleCallback可以在这个空闲期（Idle Period）调用空闲期回调（Idle Callback），执行一些任务。

react初次render或协调后所生成的一个对象，react16前是通过组件递归遍历而来，react16是以fiber为节点构建成的单链表结构树，其作为真实dom的映射。
之前，React并没有充分利用调度的优势。更新导致立即重新渲染整个子树。彻底革新React的核心算法以利用调度是Fiber背后的驱动思想

计算机通常使用调用堆栈来跟踪程序执行的方式
在处理UI时，问题在于如果一次执行太多工作，可能会导致动画掉帧并显得断断续续
较新的浏览器（和React Native）实现了有助于解决此确切问题的API：requestIdleCallback安排在空闲期间调用的低优先级函数，并requestAnimationFrame安排在下一个动画帧上调用的高优先级函数
如果我们可以自定义调用堆栈的行为来优化呈现UI，那不是很好吗？如果我们可以随意中断调用堆栈并手动操作堆栈帧，那不是很好吗？这就是React Fiber的目的。fiber是堆栈的重新实现，专门用于React组件

重新实现堆栈的优点是，您可以将堆栈帧保留在内存中，并根据需要（以及在任何时候）执行它们
除了调度之外，手动处理堆栈帧还可以释放并发和错误边界等功能


https://mp.weixin.qq.com/s?__biz=MzI1ODk2Mjk0Nw==&mid=2247484469&idx=1&sn=f68d044f1b0e4e2eb981e3878427b75b&scene=21#wechat_redirect

https://mp.weixin.qq.com/s?__biz=MzI1ODk2Mjk0Nw==&mid=2247484536&idx=1&sn=94777b8c1aab80dffe1fc224bec02c72&scene=21#wechat_redirect
### setState详解  

React内部实现了一个批量更新，当执行setState时，会将需要更新的state合并后放入状态队列, 把需要更新的nextState push到 pendingStates 队列中，通过 isPending 判断有没有在工作，如果工作了，就更新，否则不更新。 

setState在原生事件中，可以在下面直接拿到修改后的值，是同步的。在原生事件中调用setState并不会触发react的批处理机制，所以立即能拿到最新的结果。

在setTimeout，也是同步的。setTimeout回调中使用setState，根据js的异步机制，会将异步代码先暂存，等所有同步代码执行完毕后再执行，这时React的批处理机制已经走完，处理标志isPending被设置为false，这时再调用setState即可立即执行更新，拿到更新后的结果。


### 虚拟dom有什么特点（优点，缺点）  
看到很多人都说，React渲染比操作DOM快，连官网都没这么说过。 


React 厉害的地方并不是说它比 操作DOM 快，而是说不管数据怎么变化，都可以以最小的代价来进行更新 DOM。方法就是在内存里用新的数据刷新一个虚拟 DOM 树，然后新旧 DOM 进行比较，找出差异，再更新到 DOM 树上，是只重新渲染差异部分，不是全部更新。

React可真不一定比操作DOM要快。比如只频繁修改一个状态，原生js只需要每次都修改一下改变的内容，而React需要每次都生成新的vdom,跟旧的vdom做对比，再修改差异的部分。

框架的意义在于掩盖底层的 DOM 操作，让开发者用更声明式的方式来描述目的，从而让代码更容易维护。没有任何框架可以比纯手动的优化 DOM 操作更快，因为框架的 DOM 操作层需要应对任何上层 API 可能产生的操作，它的实现必须是普适的。

优点：

- 数据和UI的进一步分离

- 抽象了原本的渲染过程，实现了跨平台的能力，不局限于浏览器的dom，可以是安卓和ios的原生组件。


    （因为react的Reconciliation（调度阶段）和render（渲染阶段）是独立的阶段，reconciler负责计算树的哪些部分已更改。然后，render使用该信息来实际更新渲染的应用程序，这种分离意味着React DOM和React Native可以使用自己的渲染器，同时共享由React core提供的相同调度器，react 16版本中的fiber重新实现了调度器,尽管渲染器将需要更改以支持（并利用）新体系结构，但它基本上与渲染无关。）




- vdom牺牲了部分性能，增加了可维护性，也实现了对dom的集中化操作，在数据改变时先对vdom进行修改，再统一反映到真实dom中，用
最小的代价来更新dom，**在这个阶段是提升了效率**

当 State 发生改变时，React 会先进行调和（Reconciliation）阶段，调和阶段结束后立刻进入提交（Commit）阶段，提交阶段结束后，新 State 对应的页面才被展示出来。

React 的调和阶段需要做两件事。1、计算出目标 State 对应的虚拟 DOM 结构。2、寻找「将虚拟 DOM 结构修改为目标虚拟 DOM 结构」的最优更新方案。 React 按照深度优先遍历虚拟 DOM 树的方式，在一个虚拟 DOM 上完成两件事的计算后，再计算下一个虚拟 DOM。第一件事主要是调用类组件的 render 方法或函数组件自身。第二件事为 React 内部实现的 Diff 算法，Diff 算法会记录虚拟 DOM 的更新方式（如：Update、Mount、Unmount），为提交阶段做准备。
React 的提交阶段也需要做两件事。1、将调和阶段记录的更新方案应用到 DOM 中。2、调用暴露给开发者的钩子方法，如：componentDidUpdate、useLayoutEffect 等。 提交阶段中这两件事的执行时机与调和阶段不同，在提交阶段 React 会先执行 1，等 1 完成后再执行 2。因此在子组件的 componentDidMount 方法中，可以执行 document.querySelector('.parentClass') ，拿到父组件渲染的 .parentClass DOM 节点，尽管这时候父组件的 componentDidMount 方法还没有被执行。useLayoutEffect 的执行时机与 componentDidMount 相同，可参考线上代码进行验证。


由于调和阶段的「Diff 过程」和提交阶段的「应用更新方案到 DOM」都属于 React 的内部实现，开发者能提供的优化能力有限，本文仅有一条优化技巧（列表项使用 key 属性[1])与它们有关。实际工程中大部分优化方式都集中在调和阶段的「计算目标虚拟 DOM 结构」过程，该过程是优化的重点，React 内部的 Fiber 架构和并发模式也是在减少该过程的耗时阻塞。对于提交阶段的「执行钩子函数」过程，开发者应保证钩子函数中的代码尽量轻量，避免耗时阻塞

缺点：

- 首次渲染大量dom时，由于多了一层vdom的计算，会比innerHTML插入的慢  

- vdom在内存中维护了一份所有dom的副本，占用部分内存  


- 优化需要开发者来处理

- 如果vdom大量更改，是合适的，但是单一的，频繁更新的话，vdom会花费更多的时间去处理计算的工作，所以，如果有一个dom节点相对较少的
页面，用vdom可能会更慢  

比如我在最顶层组件setState一个简单的数据，react就要对整棵树遍历，对比一遍，而用原生操作dom可能一句代码就搞定了，所有就有了shouldComponentUpdate

###  React 的工作过程  

当我们通过render()和 setState() 进行组件渲染和更新的时候，React 主要有两个阶段： 

- 调度阶段(Reconciler)：官方解释。React 会自顶向下通过递归，遍历新数据生成新的 Virtual DOM，然后通过 Diff 算法，找到需要变更的元素(Patch)，放到更新队列里面去。

- 渲染阶段(Renderer)：遍历更新队列，通过调用宿主环境的API，实际更新渲染对应元素。宿主环境，比如 DOM、Native、WebGL 等。

在调度阶段，由于是采用的递归的遍历方式，这种也被成为 Stack Reconciler，主要是为了区别 Fiber Reconciler 取的一个名字。这种方式有一个特点：一旦任务开始进行，就无法中断，那么 js 将一直占用主线程， 一直要等到整棵 Virtual DOM 树计算完成之后，才能把执行权交给渲染引擎，那么这就会导致一些用户交互、动画等任务无法立即得到处理，就会有卡顿，非常的影响用户体验。

把渲染更新过程拆分成多个子任务，每次只做一小部分，做完看是否还有剩余时间，如果有继续下一个任务；如果没有，挂起当前任务，将时间控制权交给主线程，等主线程不忙的时候在继续执行。这种策略叫做 Cooperative Scheduling（合作式调度），操作系统常用任务调度策略之一。

合作式调度主要就是用来分配任务的，当有更新任务来的时候，不会马上去做 Diff 操作，而是先把当前的更新送入一个 Update Queue 中，然后交给 Scheduler 去处理，Scheduler 会根据当前主线程的使用情况去处理这次 Update。为了实现这种特性，使用了requestIdelCallbackAPI。对于不支持这个API 的浏览器，React 会加上 pollyfill。

在上面我们已经知道浏览器是一帧一帧执行的，在两个执行帧之间，主线程通常会有一小段空闲时间，requestIdleCallback可以在这个空闲期（Idle Period）调用空闲期回调（Idle Callback），执行一些任务。

react初次render或协调后所生成的一个对象，react16前是通过组件递归遍历而来，react16是以fiber为节点构建成的单链表结构树，其作为真实dom的映射。
之前，React并没有充分利用调度的优势。更新导致立即重新渲染整个子树。彻底革新React的核心算法以利用调度是Fiber背后的驱动思想 


### React fiber 的讲解  
https://mp.weixin.qq.com/s?__biz=MzI1ODk2Mjk0Nw==&mid=2247484469&idx=1&sn=f68d044f1b0e4e2eb981e3878427b75b&scene=21#wechat_redirect 

https://mp.weixin.qq.com/s?__biz=MzI1ODk2Mjk0Nw==&mid=2247484536&idx=1&sn=94777b8c1aab80dffe1fc224bec02c72&scene=21#wechat_redirect 


### diff算法的策略
- web UI 中DOM节点跨层级的移动操作特别少，可以忽略不计。（diff对比过程中当发现之前的节点不存在时，该节点及其子节点完全删除掉，不会用于进一步的比较。这样只需要对树进行一次遍历，便能完成整个DOM树的比较）


- 拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。  
- 对于同一层级的一组子节点，可以通过唯一的id进行区分。



### react中的自定义组件都要大写？
jsx通过babel的解析，最终都会成为React.createElement()，这里面有个判断，小写开头的是原生html的标签，大写是变量  


### props不包括ref,key  

其他属性会被React添加到子组件的props中，ref,key不会   





## react的缺点 
- 不是一个完整的框架，需要配合react-router,redux等库。 

- 需要开发者处理多余的render处理  

- 会吃一些内存 

- 可读性稍微差一些  


## react优点 
- 指明了未来前端的发展方向，将开发者的精力放到state上，而不是dom操作上，声明式编程代替命令时编程。
- 不管如何修改数据，总是会最小的代价去更新dom
- 浏览器兼容 
- 模块化，组件化，可复用
- 单向数据流 
- 跨平台 


## forceUpdate直接render，跳过shouldComponentUpdate 




## React16的变化 

hooks的自定义hooks比HOC和render props更优雅的逻辑复用方式  

useEffect取代了复杂的声明周期  

shouldcomponentupdate检查 this.props和nextProps的变动太麻烦 

## react点击事件放在settimeout拿不到event对象  

SyntheticEvent 是合并而来。这意味着 SyntheticEvent 对象可能会被重用，而且在事件回调函数被调用后，所有的属性都会无效。出于性能考虑，你不能通过异步访问事件。

如果你想异步访问事件属性，你需在事件上调用 event.persist()，此方法会从池中移除合成事件，允许用户代码保留对事件的引用。



## react 如何判断当前组件是函数组件还是类组件
```js
F.prototype instanceof React.Component // true为class组件

``` 

### React和Vue的区别 
React没有slot支持，不灵活(可以自己实现)，没有keep-alive 
api的设计风格上差异极大  
React的render不如Vue的依赖追踪，不重新render子组件  
React setState 引起局部重新刷新。为了达到更好的性能，React 暴漏给开发者 shouldComponentUpdate 这个生命周期 ，来避免不需要的重新渲染（相比之下，Vue 由于采用依赖追踪，默认就是优化状态：你动了多少数据，就触发多少更新，不多也不少，而 React 对数据变化毫无感知，它就提供 React.createElement 调用已生成 virtual dom）。另外 React 为了弥补不必要的更新，会对 setState 的行为进行合并操作。

React不对数据进行监听，不知道那个数据变了，只能通过diff，子组件也更新了。 react在往运行时优化（diff），filber 

vue可以更快的计算出vdom的差异，跟踪每一个组件的依赖关系，不需要重新渲染组件数。

vue有数据劫持，知道那个数据变了，只diff当前组件就好。

react 通过import导入的组件在render中可以直接使用，在vue中，由于模板中使用的数据都必须挂在this上进行一次中转，所以需要在components中再次声明。

vue使用的是模板渲染，react是jsx，纯js。

vue在编译时优化，react在运行时优化 

vue在diff对比时，只对比动态内容部分，静态内容不再diff，需要在编译阶段做标记，vue ast中有一个static属性。
vue1是每一个动态属性都建立watcher, 不需要diff.
vue2在每一个组件上建立一个watcher, 拦截set后，不知道具体哪里需要修改，所以要diff当前组件，数据直接定向到组件。
object.defineProperty可以监听数组 , 修改数组会造成多次的set拦截。 

## react context 的理解 

context提供一种在组件之间共享state的方法，不必显式的通过组件树的逐层传递props。

对比js作用域链去理解。

## React中的key 


vue3 
往这些方向优化
模板编译
数据监听 

https://react.iamkasong.com/

## React 的生命周期怎么实现的 

React 通过三种状态：MOUNTING、RECEIVE_PROPS、UNMOUNTING，管理整个生命周期的执行顺序；

### 状态1 mounting 
mountComponent 负责管理生命周期中的 getInitialState、componentWillMount、render 和 componentDidMount。

getDefaultProps 是通过 Constructor 进行管理，因此也是整个生命周期中最先开始执行，而 mountComponent 只能望洋兴叹，无法调用到 getDefaultProps。这就解释了为何 getDefaultProps 只执行1次的原因

首先通过 mountComponent 装载组件，此时，将状态设置为 MOUNTING，利用 getInitialState 获取初始化 state，初始化更新队列。

若存在 componentWillMount，则执行；如果此时在 componentWillMount 中调用 setState，是不会触发 reRender，而是进行 state 合并。

到此时，已经完成 MOUNTING 的工作，更新状态为 NULL，同时 state 也将执行更新操作，此刻在 render 中可以获取更新后的 this.state 数据。 


mountComponent 本质上是通过 递归渲染 内容的 


当渲染完成之后，若存在 componentDidMount 则触发 


### 状态2 receive-props 

updateComponent 负责管理生命周期中的 componentWillReceiveProps、shouldComponentUpdate、componentWillUpdate、render 和 componentDidUpdate。

首先通过 updateComponent 更新组件，如果前后元素不一致说明需要进行组件更新，此时将状态设置为RECEIVING_PROPS。 

若存在 componentWillReceiveProps，则执行；如果此时在 componentWillReceiveProps 中调用 setState，是不会触发 reRender，而是进行 state 合并。

到此时，已经完成 RECEIVING_PROPS 工作，更新状态为 NULL

调用 shouldComponentUpdate 判断是否需要进行组件更新，如果存在 componentWillUpdate，则执行。

updateComponent 本质上也是通过 递归渲染 内容的.

当渲染完成之后，若存在 componentDidUpdate，则触发 


### 状态3 unmounting 
unmountComponent 负责管理生命周期中的 componentWillUnmount。

首先将状态设置为 UNMOUNTING，若存在 componentWillUnmount，则执行；如果此时在 componentWillUnmount 中调用 setState，是不会触发 reRender。更新状态为 NULL，完成组件卸载操作。


当调用 setState 时，会对 state 以及 _pendingState 更新队列进行合并操作，但其实真正更新 state 的幕后黑手是replaceState。

replaceState 会先判断当前状态是否为 MOUNTING，如果不是即会调用 ReactUpdates.enqueueUpdate 执行更新。

当状态不为 MOUNTING 或 RECEIVING_PROPS 时，performUpdateIfNecessary 会获取 _pendingElement、_pendingState、_pendingForceUpdate，并调用 updateComponent 进行组件更新。



https://zhuanlan.zhihu.com/p/20312691
fakeTeamWork
show solution



1 react暴露的api有哪些，该如何使用？
2 react提供了哪些自测性能的手段？
3  ref既然不能用在函数组件中，那么父组件如何控制函数子组件内的state和方法？
4 createElement和cloneElement有什么区别，应用场景是什么？
5 react内置的children遍历方法，和数组方法,有什么区别？（children不一定为数组）
6 react怎么将子元素渲染到父元素之外的指定容器中？
7 useEffect componentDidMount 有什么差异
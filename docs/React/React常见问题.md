### setState

setState不是真正意义上的异步，react内部实现了一个批量更新，把需要更新的nextState push到pendingStates数组中，通过isPending判断有没有在工作，如果工作了，就更新，否则不更新，循环调用updater中的函数时，isPending为true

### 虚拟dom有什么特点

优点：

数据和UI的进一步分离

抽象了原本的渲染过程，实现了跨平台的能力，不局限于浏览器的dom，可以是安卓和ios的原生组件

vdom牺牲了部分性能，增加了可维护性，也实现了对dom的集中化操作，在数据改变时先对vdom进行修改，再统一反映到真实dom中，用
最小的代价来更新dom，在这个阶段是提升了效率

缺点：

首次渲染大量dom时，由于多了一层vdom的计算，会比innerHTML插入的慢

vdom在内存中维护了一份dom的副本，占用部分内存

如果vdom大量更改，是合适的，但是单一的，频繁更新的话，vdom会花费更多的时间去处理计算的工作，所以，如果有一个dom节点相对较少的
页面，用vdom可能会更慢


### 讲讲react16中的fiber

react初次render或协调后所生成的一个对象，react16前是通过组件递归遍历而来，react16是以fiber为节点构建成的单链表结构树，其作为真实dom的映射。
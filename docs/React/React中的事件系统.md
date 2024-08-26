## 事件系统
在复杂页面中，如果DOM上绑定了过多的事件处理函数，整个页面响应以及内存占用可能都会受到影响。React为了避免这类DOM事件滥用，同时屏蔽底层不同浏览器之间的事件系统差异，基于 Virtual DOM 实现了一个中间层——SyntheticEvent合成事件层）。


React 合成事件规范化了一些在各个浏览器间行为不一致，甚至是在不同元素上行为不一致的事件，其中有代表性的是 onChange 。在 Chrome 或 Firefox 中，一个文本框 <input type="text" /> 的 change 事件发生在文本框内容被改变、然后失去焦点的时候。不过，对一个下拉框<select> 的change 事件，Chrome 和老版本 Firefox（v63 以前）就有分歧了，前者每次按下键盘箭头键都会触发 change 事件，但后者只有下拉框失去焦点时才会触发。除了 onChange ，合成事件也规范化了 onBeforeInput 、 onMouseEnter 、 onMouseLeave 、 onSelect 。



React合成的 SyntheticEvent采用了事件池，这样做可以大大节省内存，而不会频繁的创建和销毁事件对象。

开发者所定义的事件，处理器会接到一个 SyntheticEvent 对象的实例，它完全符合 W3C标准 ，不会存在 IE 的兼容性问题。与原生的浏览器事件一样拥有同样的接口，同样支持事件的冒泡机制，我们可以使用 stopPropagation() 和 preventDefault() 等方法。

所有React合成事件都自动绑定到最外层上（注册在document上）。如果需要访问原生事件对象，可以使用 nativeEvent 属性。

React的合成事件层做了两件事：
- 事件委派
- 自动绑定

### 事件委派
在使用 React 事件前，一定要熟悉它的事件代理机制。它不会把事件处理函数直接绑定到真实的节点上，而是把所有事件绑定到结构的最外层，使用一个统一的事件监听器，这个事件监听器上维持了一个映射来保存所有组件内部的事件监听和处理函数。当组件挂载或卸载时，只是在这个统一的事件监听器上插入或删除一些对象；当事件发生时，首先被这个统一的事件监听器处理，然后在映射里找到真正的事件处理函数并调用。这样做简化了时间处理和回收机制，效率也有很大的提升。

### 自动绑定
在React组件中，每个方法的上下文都会指向该组件的实例，即自动绑定this为当前组件。而且React还会对这种引用进行缓存，以达到CPU和内存的最优化。在使用class组件时，这种自动绑定就不复存在了，需要我们手动实现this绑定。



在React中只能绑定一个同类型的事件监听器，重复定义时，后面的会覆盖之前的，所以合成事件甚至都不去封装event.stopImmediatePropagation。


上面说到，合成事件的监听器统一注册在document上，只有冒泡阶段，注意，React的合成事件并没有实现事件捕获，仅仅支持了事件冒泡。所以同一节点上的原生事件的监听器相应总是比合成事件的监听器早触发 (原生事件在dom节点上，合成事件在document上)，阻止原生事件的冒泡后，会阻止合成事件的监听器执行。相反， 合成事件没法阻止原生事件的冒泡。合成事件之间可以用e.stopPropagation阻止事件冒泡。在document上的原生事件，在合成事件之后执行。且在合成事件中只能用e.nativeEvent.stopImmediatePropagation()来阻止document上原生事件的执行。

 React 给合成事件封装的 stopPropagation 函数在调用时给自己加了个 isPropagationStopped 的标记位来确定后续监听器是否执行。而父级可以用stop阻止子级事件的执行。由于DOM事件被阻止冒泡了，无法到达document，所以合成事件不会被触发。

如需注册捕获阶段的事件处理函数，则应为事件名添加 Capture。例如，处理捕获阶段的点击事件请使用 onClickCapture，而不是 onClick。(建议不要使用这种事件，巨坑！！！)

React没有实现包括所有的原生js事件，比如，合成事件不在window上，所有跟window有关的事件都要用原生事件，onload，resize等事件。


由于event对象是复用的，事件处理函数执行完后，属性会被清空, 这也是出于性能考虑，这样的话就会有一个问题，不能通过异步访问合成event,如果想要访问，需要在事件上调用event.persist() 此方法会从事件池中移除合成事件，允许用户代码保留对事件的引用。



在React中使用DOM原生事件时，一定要在组件卸载时手动移出，否则很可能出现内存泄漏的问题。而使用合成事件系统则不需要，因为React内部已经处理了。


### react 17 和16 的区别 ???
主要侧重于升级简化React本身。
渐进式增强，不需要一次性升级整个应用
事件代理更改，把事件添加到rootNode上，非document,
Jsx转换不会将jsx转换为createElement , 而是自动从react的package中引入新的入口函数并调用
移除事件池，异步使用event，需要e.persist() ，现在不需要


### 参考
https://juejin.im/post/59db6e7af265da431f4a02ef


https://toutiao.io/posts/28of14w/preview

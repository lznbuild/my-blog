脏检查：脏检查其实就是存储所有变量的值，每当可能有变量发生变化需要检查时，就将所有变量的旧值跟新值进行比较，不相等就说明检测到变化，需要更新对应视图。因为它定时检查，而不是直接监听属性变化。脏检查可以实现批处理完数据之后，再去统一更新view。低效的，效率取决于开发者绑定的观察者的数量。

脏数据： 产生了变化的数据 

createStore返回4个函数，dispatch调用时，执行reducer，依次执行subscribe的listener（回调）这其中state的不可变或者是可变全部由使用者来控制，Redux并不知道state有没有发生变化，更不知道state具体哪里发生了变化。 如果在短时间内发生了多次修改（例如用户输入），不可变的开销，加上redux用字符串匹配action的开销，脏检测的开销，再加上view层的开销，整个性能表现会非常糟糕。

再看react-redux做了什么，在store.subscribe上挂回调函数，每次发生subscribe就调用connect传进去 mapStateProps  和  mapDispatchToProps ，然后脏检查props的每一项。

## mobx  
不与任何view层框架相互依赖





Mobx利用getter和setter来收集组件的数据依赖关系，从而在数据发生变化的时候精确知道哪些组件需要重绘，在界面的规模变大的时候，往往会有很多细粒度更新，虽然响应式设计会有额外的开销，在界面规模大的时候，这种开销是远比对每一个组件做脏检查小的，因此在这种情况下Mobx会很容易得到比Redux更好的性能。而在数据全部发生改变时，基于脏检查的实现会比Mobx这类响应式有更好的性能，但这类情况很少  


redux将数据保存在单⼀的store中，mobx将数据保存在分散的多个store中 

redux使⽤plain object保存数据，需要⼿动处理变化后的操作；mobx适⽤observable保存数据，数据变化后⾃动处理响应的操作 


edux使⽤不可变状态，这意味着状态是只读的，不能直接去修改它，⽽是应该返回⼀个新的状态，同时使⽤纯函数；mobx中的状态是可变的，可以直接对其进⾏修改 


mobx相对来说⽐较简单，在其中有很多的抽象，mobx更多的使⽤⾯向对象的编程思维；redux会⽐较复杂，因为其中的函数式编程思想掌握起来不是那么容易，同时需要借助⼀系列的中间件来处理异步和副作⽤


mobx中有更多的抽象和封装，调试会⽐较困难，同时结果也难以预测；⽽redux提供能够进⾏时间回溯的开发⼯具，同时其纯函数以及更少的抽象，让调试变得更加的容易 

redux跟踪数据变化(每次返回新的store,不修改原有store)，mobx不行 

redux是函数式编程的思路，可以添加中间件（redux-thunk），mobx是面向对象编程和响应式编程。


### 总结 
- redux本身是纯函数思想，单向数据流，只能通过dispatch一个action去修改store，mobx 有一层监听数据的变化，响应式。使用Mobx的组件可以做到精确更新，这一点得益于Mobx的observable
- redux store不可修改，返回新的store， mobx直接修改 ，redux可以做时间旅行，调试方便。redux对state的概念进行强约束。然而对于一些项目来说，太过强，便失去了灵活性
- redux将数据保存在单⼀的store中，mobx将数据保存在分散的多个store中，可以进行更细粒度更新，mobx可能会有更好的性能（监听也有性能损耗）。 
- redux 有中间件


### mobx的实现demo
https://www.jianshu.com/p/ead32d9449bc?utm_source=desktop&utm_medium=timeline
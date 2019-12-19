### 1.变量声明的几种方式
  var function let const class import 


### promise A和promise A+ 有什么区别

### focus、blur、load、unload等事件，不会冒泡

### 弹性布局的属性总结
  容器设置为flex布局，子元素的float,clear,vertical-align失效
  定义在容器元素上的：
  flex-direction
  flex-wrap
  flex-flow: flex-direction flex-wrap
  justify-content
  align-items
  align-content  多个轴线的侧轴对齐方式


  定义在子元素上的：
    order: 根据数值展示主轴上的排列顺序,数值越大越往后
    flex-grow: 当主轴方向子元素没有撑满父元素，按照这个比例分配剩余空间
    flex-shrink: 当空间不足时，都将等比例缩小
    flex-basis: 在分配多余空间之前，占据的主轴空间 写法：400px
    flex: flex-grow flex-shrink flex-basis   flex:1 其实就是flex-grow: 1
    align-self: 侧轴对齐方式，覆盖父元素的align-items

### promise
promise有三个状态：pending,fulfilled,rejected

旦异步操作执行完毕(可能成功/失败)，要么调用resolve函数来将promise状态改成fulfilled，要么调用reject 函数将promise的状态改为rejected。如果在executor函数中抛出一个错误，那么该promise 状态为rejected。executor函数的返回值被忽略。

.then()和.catch()都返回promise对象，便于链式调用。

多个.catch只会运行第一个




### 数字类型number
数字都是以64位浮点数形式储存，即使整数也是如此。所以，1与1.0是相同的,这就是说，JavaScript 语言的底层根本没有整数，所有数字都是小数（64位浮点数）。



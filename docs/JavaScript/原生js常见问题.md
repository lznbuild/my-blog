## 变量声明的几种方式
  var function let const class import 


## promise A和promise A+ 有什么区别

## focus、blur、load、unload等事件，不会冒泡

## 弹性布局的属性总结
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
    flex: flex-grow flex-shrink flex-basis     
    flex:1 其实就是flex-grow: 1  
    align-self: 侧轴对齐方式，覆盖父元素的align-items  

## promise
promise有三个状态：pending,fulfilled,rejected

旦异步操作执行完毕(可能成功/失败)，要么调用resolve函数来将promise状态改成fulfilled，要么调用reject 函数将promise的状态改为rejected。如果在executor函数中抛出一个错误，那么该promise 状态为rejected。executor函数的返回值被忽略。

.then()和.catch()都返回promise对象，便于链式调用。

多个.catch只会运行第一个




## 关于数字类型
数字都是以64位浮点数形式储存，即使整数也是如此。所以，1与1.0是相同的,这就是说，JavaScript 语言的底层根本没有整数，所有数字都是小数（64位浮点数）。


## class 中的static,privite,protect

static,静态方法被设计为只能被创建它们的构造器使用


## 关于对象
  所有对象的键（不包括 Symbol）在底层都是字符串
  obj.hasOwnProperty('1') 也返回 true。

  #### 问题1
  ```js
  const a = {}
  const b = { key: 'b' }
  const c = { key: 'c' }

  a[b] = 123
  a[c] = 456

  console.log(a[b]) // 456

  // 对象的键被自动转换为字符串。我们试图将一个对象 b 设置为对象 a 的键，且相应的值为 123。

  // 然而，当字符串化一个对象时，它会变成 "[object Object]"。因此这里说的是，a["[object Object]"] = 123。然后，我们再一次做了同样的事情，c 是另外一个对象，这里也有隐式字符串化，于是，a["[object Object]"] = 456。

  // 然后，我们打印 a[b]，也就是 a["[object Object]"]。之前刚设置为 456，因此返回的是 456。
  ```
  
## 浏览器部分

在浏览器中，我们不仅有运行时引擎，还有一个叫做 WebAPI 的东西。WebAPI 提供了 setTimeout 函数，也包含其他的，例如 DOM。

## 6 种 falsy 值

undefined  
null  
NaN  
0  
'' (empty string)  
false  

## 问题
```js
(() => {
  let x, y
  try {
    throw new Error()
  } catch (x) {
    (x = 1), (y = 2)
    console.log(x)
  }
  console.log(x)
  console.log(y)
})()
// 1 undefined 2
```

## setInterval 返回一个唯一的 id。此 id 可被用于 clearInterval 函数来取消定时


## 问题
```js
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
```

## 函数传参都是值传递????

## class也是有原型链的

## 全局对象的属性可以被删除，用var,const,let声明的变量不能被删除

## 问题
```js
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log(x.number *= 2);
};

multiply();
multiply();
multiply(value);
multiply(value);

// 20, 20, 20, 40
```

## 问题
```js
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
// 1 2  undefined 3  undefined 4
```
## 箭头函数没有prototype属性

## 问题
```js
let name = 'Lydia'

function getName() {
  console.log(name)
  let name = 'Sarah'
}

getName()
```
每个函数都有其自己的执行上下文。 getName函数首先在其自身的上下文（范围）内查找，以查看其是否包含我们尝试访问的变量name。 上述情况，getName函数包含其自己的name变量：我们用let关键字和Sarah的值声明变量name。

带有let关键字（和const）的变量被提升，但是与var不同，它不会被初始化。 在我们声明（初始化）它们之前，无法访问它们。 这称为“暂时性死区”。 当我们尝试在声明变量之前访问变量时，JavaScript会抛出ReferenceError: Cannot access 'name' before initialization。

如果我们不在getName函数中声明name变量，则javascript引擎会查看原型练。会找到其外部作用域有一个名为name的变量，其值为Lydia。 在这种情况下，它将打印Lydia：
```
let name = 'Lydia'

function getName() {
  console.log(name)
}

getName() // Lydia
```
    
## 变量声明的几种方式
  var function let const class import 

## 如何将浮点数点左边的数每三位添加一个逗号，如 12000000.11 转化为12,000,000.11?

```js
function format(number) {
  return number && number.replace(/(?!^)(?=(\d{3})+\.)/g, ",");
}
```
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

带有let关键字（和const，class）的变量被提升，但是与var不同，它不会被初始化。 在我们声明（初始化）它们之前，无法访问它们。 这称为“暂时性死区”。 当我们尝试在声明变量之前访问变量时，JavaScript会抛出ReferenceError: Cannot access 'name' before initialization。

如果我们不在getName函数中声明name变量，则javascript引擎会查看原型练。会找到其外部作用域有一个名为name的变量，其值为Lydia。 在这种情况下，它将打印Lydia：
```
let name = 'Lydia'

function getName() {
  console.log(name)
}

getName() // Lydia
```


## 实现一个new 关键字
```js
function create(Con, ...args) {
	let obj = {}
	Object.setPrototypeOf(obj, Con.prototype)
	let result = Con.apply(obj, args)
	return result instanceof Object ? result : obj
}
```

```js
改进一下 new 的自实现:

function create(Con, ...args) {
  // 某些函数未必有 `prototype` 属性，比如箭头函数
  if (! Con.prototype) throw new Error('First argument is not a constructor.');

  const obj = {};
  Object.setPrototypeOf(obj, Con.prototype);
  
  const result = Con.apply(obj, args);
  // 避免 `null` 的情况，另外所有 reference type 都会覆写 `new` 的返回值，包括 `function`
  if (result && (typeof result === 'object' || typeof result === 'function')) {
    return result;
  }
  return obj;
}
```


  ```js
  // 查询url参数,包括对中文的解码  ?name=''&age=''
  GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = location.search.slice(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
  }
  ```




实现一下 instanceof
function instanceof(left, right) {
 // 获得类型的原型
 let prototype = right.prototype
 // 获得对象的原型
 left = left.__proto__
 // 判断对象的类型是否等于类型的原型
 while (true) {
 if (left === null)
 return false
 if (prototype === left)
 return true
 left = left.__proto__
 }
}


## js浮点数的问题
双精度是怎么存储的？

因为计算机中都是由0和1整的二进制数字表示的，所以十进制的小数转换成二进制是采用对阶运算求和，例如8是2的3次方，0.5(1/2)就是2的-1次方，0.75(3/4)是2的-1加2的-2，可是0.2呢？就是1/5，通过对阶运算求和只能无限接近，不能相等

console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON); 


## call的实现
```js
Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this
  const args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}
```

## apply的实现
```js
Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this
  let result
  // 处理参数和 call 有区别
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}
```

## bind的实现(多次bind，只生效第一次??????)
```js
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const _this = this
  const args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
```

## instanceof 的实现
```JS
function myInstanceof(left, right) {
  let prototype = right.prototype
  left = left.__proto__
  while (true) {
    if (left === null || left === undefined)
      return false
    if (prototype === left)
      return true
    left = left.__proto__
  }
}
```

## 占内存和堆内存的比较  

栈内存：存储基本数据类型  按值访问  存储的值大小固定   空间小，运行效率高

堆内存：存储引用数据类型  按引用访问  值的大小不固定   空间大，运行效率低

## 参考博客
https://juejin.im/post/5c64d15d6fb9a049d37f9c20#heading-33
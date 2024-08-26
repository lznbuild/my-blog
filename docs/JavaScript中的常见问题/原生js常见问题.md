## 变量声明的几种方式
  var let const  function class import

## 如何将浮点数点左边的数每三位添加一个逗号，如 12000000.11 转化为12,000,000.11?

```js
function format(number) {
  return number && number.replace(/(?!^)(?=(\d{3})+\.)/g, ",");
}
```


## focus、blur、load、unload, scroll等事件，不会冒泡



## promise
promise有三个状态：pending,fulfilled,rejected

旦异步操作执行完毕(可能成功/失败)，要么调用resolve函数来将promise状态改成fulfilled，要么调用reject 函数将promise的状态改为rejected。如果在executor函数中抛出一个错误，那么该promise 状态为rejected。executor函数的返回值被忽略。

.then()和.catch()都返回promise对象，便于链式调用。

多个.catch只会运行第一个

```js
  new Promise(resolve => {
    resolve()
  }).then(()=>{
    console.log('promise1');

    new Promise(resolve =>{
      resolve()
    }).then(()=>{
      console.log('promise2');
    }).then(()=>{
      console.log('promise3');
    })

  }).then(()=>{
    console.log('promise4');
  })


  // 1  2 4 3
```



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

console.log(members); // [{...}]
```



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
// 1 2
// undefined 3
// undefined 4
```

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






  ```js
  // 查询url参数,包括对中文的解码  ?name=''&age=''     URLSearchParams代替
  GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = location.search.slice(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
  }
  ```


## js浮点数的问题
双精度是怎么存储的？浮点数精度问题

**JS 采用的浮点数标准的问题，很多十进制小数用二进制表示都是无限循环的**

因为计算机中都是由0和1整的二进制数字表示的，所以十进制的小数转换成二进制是采用对阶运算求和，例如8是2的3次方，0.5(1/2)就是2的-1次方，0.75(3/4)是2的-1加2的-2，可是0.2呢？就是1/5，通过对阶运算求和只能无限接近，不能相等

console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);



## 占内存和堆内存的比较

栈内存：存储基本数据类型  按值访问  存储的值大小固定   空间小，运行效率高

堆内存：存储引用数据类型  按引用访问  值的大小不固定   空间大，运行效率低


## 连等问题
```js
var A = B = C;
```
连等赋值真正的运算规则是  B = C; A = B;  即连续赋值是从右至左永远只取等号右边的表达式结果赋值到等号左侧。
```js
// 连等
var a = {n: 1};
var b = a;
a.x = a = {n: 2};
console.log(a.x)
console.log(b.x)
// 关键在于第三行，.的优先级高于=，所以a.x后，a和b同时指向{n:1,x:undefined},接着第3行从右向左执行，a.x(原对象)={n:2},也就是a和b指向{n:1,x:{n:2}}，a的引用指向新对象{n:2},
// a.x // undefined
// b.x  // {n:2}
```


## var,let,const 的区别
var 声明的变量在变量环境 ， let ,const 声明的变量在词法环境，对应执行上下文。

变量提升

let const 和var三者其实会存在变量提升。
let只是创建过程提升，初始化过程并没有提升，所以会产生暂时性死区。
var的创建和初始化过程都提升了，所以在赋值前访问会得到undefined function 的创建、初始化、赋值都被提升了。

JavaScript 是允许访问还没有绑定值的var所声明的标识符的。这种标识符后来统一约定称为“变量声明（varDelcs）”，而“let/const”则称为“词法声明（lexicalDecls）”。JavaScript 环境在创建一个“变量名（varName in varDecls）”后，会为它初始化绑定一个 undefined 值，而”词法名字（lexicalNames）”在创建之后就没有这项待遇


## DOM操作影响性能
浏览器的js引擎和DOM引擎共享一个主线程，多次DOM操作导致DOM引擎占
用主线程过久，造成卡顿的感觉。任何 DOM API 调用都要先将 JS 数据结构转为 DOM 数据结构，再挂起 JS 引擎并启动 DOM 引擎，执行过后再把可能的返回值反转数据结构，重启 JS 引擎继续执行。这种上下文切换很耗性能。性能消耗在JS对象和DOM对象的转换和同步
很多DOM操作都会触发回流，消耗性能。


for in 可以用于对象，for of不能，因为普通对象没有遍历器iterable,用于数组，前者遍历下表，后者遍历值



使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果
///  [102, 15, 22, 29, 3, 8]
根据MDN上对Array.sort()的解释，默认的排序方法会将数组元素转换为字符串，然后比较字符串中字符的UTF-16编码顺序来进行排序。所以'102' 会排在 '15' 前面。



## 箭头函数和普通函数的区别
- 箭头函数没有 this，它会从自己的作用域链的上一层继承 this（因此无法使用 apply / call / bind 进行绑定 this 值）；

- 不绑定 arguments，当在箭头函数中调用 aruguments 时同样会向作用域链中查询结果；

- 不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数

- 没有 prototype 属性，即指向 undefined；

- 无法使用 new 实例化对象，因为普通构造函数通过 new 实例化对象时 this 指向实例对象，而箭头函数没有 this 值，同时 箭头函数也没有 prototype。使用new需要把函数的prototype赋值给新对象的__proto__


## 函数的变量提升
- 允许在块级作用域内声明函数
- 函数声明(函数名称) 类似于 var，即会提升到全局作用域或函数作用域的头部
- 同时，函数声明(函数整体) 还会提升到所在的块级作用域的头部

也就是说函数声明的初始化赋值在定义的块级作用域顶部，变量提升到最顶部的环境。

```js
console.log(fn); // undefined
{
  function fn(){}
}
```

```js
console.log(fn); // function fn(){}

function fn(){}
```

```js
  console.log(a) // undefined
  var a = 0;

  if (true) {
    console.log(a) // function a {}
    a = 1;
    console.log(a) // 1
    function a() { }
    console.log(a) // 1
    a = 21;
    console.log('in =>', a) // 21
  }

  console.log('out =>', a) // 1?????
```


## Map 和 Object

|     | Map  |Object|
|  ----  | ----  | ---- |
| 默认值  | 没有 |有原型，原型属性和实例属性可能冲突|
| 长度  | .size属性获取 |循环统计|
| 性能  | 频繁增删键值对，性能友好 |无优化|

Map key值可以是any , Object 只能是string , symbol

Object没迭代器，不能用for of循环 , Map可以直接forEach ,for of

存储值的读取顺序问题

## Set 和 WeakSet, Map 和 WeakMap

WeakSet 成员只能是对象（或数组），不能是其他类型的值。对象都是弱引用，即GC不考虑WeakSet对该对象的引用 ，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中
WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。

由于上面这个特点，WeakSet 的成员是不适合引用的，因为它会随时消失。另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakSet 不可遍历。


WeakMap只接受对象作为键名，不接受其他类型的值作为键名。 弱引用


## Reflect存在意义
- 将object对象一些内部的方法，放到Reflect对象上，现阶段这些方法存在于object和Reflect对象上，未来只存在于Reflect对象上。也就是说，从Reflect对象上可以拿到语言内部的方法。

- 操作对象时出现报错返回false
```js
 try {
  Object.defineProperty(target, property, attributes);
  // success
} catch (e) {
  // failure
}

// 新写法
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

- 让操作对象的编程变为函数式编程

- 保持和proxy对象的方法一一对应, Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。设计目标之一是与 Proxy handlers 的方法保持一致性。例如，Reflect.get(target, property, receiver) 与 get 方法具有相同的参数。这使得我们在编写 Proxy 时，可以很方便地调用对应的 Reflect 方法来保留默认行为。


### async await

async定义的函数内部会默认返回一个promise对象，如果函数内部抛出异常或者是返回reject，都会使函数的promise状态为失败reject。

Generator函数暂停恢复执行原理

一个线程（或函数）执行到一半，可以暂停执行，将执行权交给另一个线程（或函数），等到稍后收回执行权的时候，再恢复执行。这种可以并行执行、交换执行权的线程（或函数），就称为协程。

协程是一种比线程更加轻量级的存在。普通线程是抢先式的，会争夺cpu资源，而协程是合作的，可以把协程看成是跑在线程上的任务，一个线程上可以存在多个协程，但是在线程上同时只能执行一个协程。它的运行流程大致如下：

协程A开始执行
协程A执行到某个阶段，进入暂停，执行权转移到协程B
协程B执行完成或暂停，将执行权交还A
协程A恢复执行

协程遇到yield命令就暂停，等到执行权返回，再从暂停的地方继续往后执行。它的最大优点，就是代码的写法非常像同步操作，如果去除yield命令，简直一模一样。

Async/Await 能够使用 try...catch... 这种符合同步习惯的方式进行异常捕获

## 参考博客
https://juejin.im/post/5c64d15d6fb9a049d37f9c20#heading-33

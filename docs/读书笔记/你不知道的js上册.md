## 第一部分
### 第一章作用域  
> 主要写了作用域，编译器，js引擎3者之间的关系，是怎么协作的

#### JS引擎的编译步骤：  

 - 分词 / 词法分析。  
 
   会将由字符组成的字符串分解成（对编程语言来说）有意义的代码块，这些代码块被称为词法单元。

- 解析 / 语法分析。  

    是将词法单元流（数组）转换成抽象语法树（AST）。
- 代码生成。  

    将 AST 转换为可执行代码，简单来说就是有某种方法可以将上一步的 AST 转化为一组机器指令。


大体就这3部分，语法分析和代码生成阶段有特定的步骤来对运行性能进行优化，包括对冗余元素进行优化。

  对于 JavaScript 来说，大部分情况下编译发生在代码执行前的几微秒（甚至更短！）的时间内。
  JavaScript 引擎用尽了各种办法（比如 JIT（即时编译器），可以延迟编译甚至实施重编译）来保证性能最佳。

#### 作用域是什么
> 负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。  

真的是太官方的解释了，可惜从没记住过。。。  

下面看一个问题。
```js
var a=2;
```

这句代码，编译器做了什么？
- 遇到 var a，编译器会查询作用域是否已经有一个该名称的变量存在于同一个作用域的集合中。如果是，编译器会忽略该声明，继续进行编译；否则它会要求作用域在当前作用域的集合中声明一个新的变量，并命名为 a。  

- 接下来编译器会为引擎生成运行时所需的代码，这些代码被用来处理 a = 2这个赋值操作。引擎运行时会首先查询作用域，在当前的作用域集合中是否存在一个叫作 a 的
变量。如果是，引擎就会使用这个变量；如果否，引擎会继续查找该变量。
如果引擎最终找到了 a 变量，就会将 2 赋值给它。否则引擎就会举手示意并抛出一个异常！


总结：
 变量的赋值操作会执行两个动作，首先编译器会在当前作用域中声明一个变量（如果之前没有声明过），然后在运行时引擎会在作用域中查找该变量，如果能够找到就会对它赋值。

第1，2步都有一个查询作用域的步骤，实际上它们不一样，有LHS,RHS查询。

RHS查询与简单地查找某个变量的值别无二致，而 LHS 查询则是试图找到变量的容器本身，从而可以对其赋值。

**下面看一个例子，了解一下LHS和RHS查询。**

```js
console.log(a)
```
其中对 a 的引用是一个 RHS 引用，因为这里 a 并没有赋予任何值。相应地，**需要查找并取得 a 的值**，这样才能将值传递给 console.log()。  

相比之下，例如：
```js
a = 2;
```
这里对 a 的引用则是 LHS 引用，因为实际上我们并不关心a之前的值是什么，**只是想要为 =2 这个赋值操作找到一个目标**。

**在变量还没有声明（在任何作用域中都无法找到该变量）的情况下，这两种查询的行为是不一样的。**

考虑如下代码：
```js
function foo(a) {
  console.log( a + b ); // 这里分别对a,b做了一次RHS查询，查找它们的值
  b = a;
}
foo( 2 );// 对foo进行一次RHS查询（找到foo对应的值，调用）
```
第一次对 b 进行 RHS 查询时是无法找到该变量的。也就是说，这是一个“未声明”的变量，因为在任何相关的作用域中都无法找到它。  

如果 RHS 查询在所有嵌套的作用域中遍寻不到所需的变量，引擎就会抛出 ReferenceError
异常。

相较之下，当引擎执行 LHS 查询时，如果在顶层（全局作用域）中也无法找到目标变量，全局作用域中就会创建一个具有该名称的变量，并将其返还给引擎，前提是程序运行在非“严格模式”下。

这也很好的说明了之前很困扰我的一个问题
```js
function fn(){
  a=1;// LHS查询，a成为全局变量
}

fn()
console.log(a) //1 a竟然成为了全局变量,LHS查询不会报错，RHS查询会报错
```

来一个例子练习一下
```js
function foo(a) {
  var b = a;
  return a + b;
}
var c = foo( 2 );
```

1. 找出所有的 LHS 查询（这里有 3 处！）  
c = foo(2)  对c有一次  
a = 2（隐式变量分配）  对a有一次  
var b = a  对b有一次
2. 找出所有的 RHS 查询（这里有 4 处！）  
foo(2）  对foo有一次  
 b = a  对a有一次  
 a+b  对a,b分别有一次  




## 第二章 词法作用域和动态作用域
> 词法作用域就是定义在词法阶段（编译步骤的第一步：词法分析）的作用域。

作用域查找会在找到第一个匹配的标识符时停止。在多层的嵌套作用域中可以定义同名的
标识符，这叫作“遮蔽效应”，JS中不止在作用域这部分有这种特性，在原型链上仍有。找到实例上的属性就不会再去找原型上的属性。

无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定。

eval(..) 和 with 会在运行时修改或创建新的作用域，以此来欺骗其他在书写时定义的词法作用域。我看到的所有资料都不建议在开发中使用eval 和 with，所以不看这块的说明了。


## 第三章 函数作用域和块作用域

有很多原因促成了这种基于作用域的隐藏方法。它们大都是从最小特权原则中引申出来
的，也叫最小授权或最小暴露原则。这个原则是指在软件设计中，应该最小限度地暴露必
要内容，而将其他内容都“隐藏”起来，比如某个模块或对象的 API 设计。


```js
var a = 2;
(function IIFE( global ) {
  // 立即执行函数将变量私有化
  var a = 3;
  console.log( a ); // 3
})();
console.log( a ); // 2
```
如果想在函数内部访问a，可以这样修改
```js
var a = 2;
(function IIFE( global ) {
  var a = 3;
  console.log( a ); // 3
  console.log( global.a ); // 2
})( window );
console.log( a ); // 2
```


## 第四章 提升
之前看的资料中说代码在执行之前会有一个预解析的过程（变量声明提升），其实就是引擎会在解释 JavaScript 代码之前首先对其进行编译。

编译阶段中的一部分工作就是找到所有的声明，并用合适的作用域将它们关联起来。第 2 章中展示了这个机制，也正是词法作用域的核心内容。

## 第五章 作用域闭包

当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用
域之外执行。


下面我们来看一段代码，清晰地展示了闭包：
```js
function foo() {
  var a = 2;

  function bar() {
    console.log( a );
  }

  return bar;
}

var baz = foo();

baz(); // 2 —— 朋友，这就是闭包的效果。
```

在 foo() 执行后，通常会期待 foo() 的整个内部作用域都被销毁，因为我们知道引擎有垃圾回收器用来释放不再使用的内存空间。由于看上去 foo() 的内容不会再被使用，所以很自然地会考虑对其进行回收。


而闭包的“神奇”之处正是可以阻止这件事情的发生。事实上内部作用域依然存在，因此
没有被回收。谁在使用这个内部作用域？原来是 bar() 本身在使用。

拜 bar() 所声明的位置所赐，它拥有涵盖 foo() 内部作用域的闭包，使得该作用域能够一
直存活，以供 bar() 在之后任何时间进行引用。
bar() 依然持有对该作用域的引用，而这个引用就叫作闭包。


词法作用域是在写代码或者说定义时确定的，而动态作用域是在运行时确定的。（this 也是！）词法作用域关注函数在何处声明，而动态作用域关注函数从何处调用。

## 实现ES5之前能用的块级作用域

```js
{
  let a = 2;
  console.log( a ); // 2
}

console.log( a ); // ReferenceError
```

```js
try{
  throw 2;
}catch(a){
  console.log( a ); // 2
}

console.log( a ); // ReferenceError
```

## 第二部分   关于this




this是在运行时绑定的，取决于函数的调用方式。而不是编译阶段的绑定。

当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包
含函数在哪里被调用（调用栈）、函数的调用方法、传入的参数等信息。this 就是记录的
其中一个属性，会在函数执行的过程中用到。

## 第二章 this全面解析

1. 默认绑定 window  
2. 隐式绑定，可能会丢失this
```js
function foo() {
  console.log( this.a );
}

var obj = {
  a: 2,
  foo: foo
};

var bar = obj.foo; // 函数别名！
var a = "oops, global"; // a 是全局对象的属性
bar(); // "oops, global"
```
虽然 bar 是 obj.foo 的一个引用，但是实际上，它引用的是 foo 函数本身，因此此时的
bar() 其实是一个不带任何修饰的函数调用，因此应用了默认绑定。


一种更微妙、更常见并且更出乎意料的情况发生在传入回调函数时：
```js
function foo() {
  console.log( this.a );
}

function doFoo(fn) {
  // fn 其实引用的是 foo
  fn(); // <-- 调用位置！
}
var obj = {
  a: 2,
  foo: foo
};

var a = "oops, global"; // a 是全局对象的属性
doFoo( obj.foo ); // "oops, global"
```
参数传递其实就是一种隐式赋值，因此我们传入函数时也会被隐式赋值，所以结果和上一
个例子一样。

3. 显示绑定，bind,call,apply  
4. new绑定，优先级高


箭头函数根据外层作用域来决定this



## 第三章 对象

writable，configable，value，enumable 是对象的属性描述符。


尝试修改一个不可配置的属性描述符都会出错。  


注意： configurable 修改成false是单向操作，无法撤销！表示不可配置，不可删除，要注意有一个小小的例外：即便属性是 configurable:false，我们还是可以
把 writable 的状态由 true 改为 false，但是无法由 false 改为 true。

Object.preventExtensions(); 阻止对象拓展新的属性

Object.seal()  不能添加新属性，不能重新配置或者删除现有属性，可以修改属性的值

Object.freeze()   完全不可变



for..of 循环首先会向被访问对象请求一个迭代器对象，然后通过调用迭代器对象的
next() 方法来遍历所有返回值。  

数组有内置的 iterator，因此 for..of 可以直接应用在数组上。我们使用内置的 
iterator 来手动遍历数组，看看它是怎么工作的：
```js
var myArray = [ 1, 2, 3 ];
var it = myArray[Symbol.iterator]();
it.next(); // { value:1, done:false }
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { done:true }
```


可以给任何想遍历的对象定义 iterator，举例来说：
```js
var myObject = {
  a: 2,
  b: 3
};
Object.defineProperty( myObject, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function() {
    var o = this;
    var idx = 0;
    var ks = Object.keys( o );
    return {
      next: function() {
        return {
          value: o[ks[idx++]],
          done: (idx > ks.length)
        };
      }
    };
  }
} );
// 手动遍历 myObject
var it = myObject[Symbol.iterator]();
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { value:undefined, done:true }
// 用 for..of 遍历 myObject
for (var v of myObject) {
console.log( v );
}
// 2
// 3
```

## 第五章 原型
有些情况下会隐式产生屏蔽，一定要当心。思考下面的代码：
```js
var anotherObject = {
  a:2
};
var myObject = Object.create( anotherObject );
anotherObject.a; // 2
myObject.a; // 2

anotherObject.hasOwnProperty( "a" ); // true
myObject.hasOwnProperty( "a" ); // false
myObject.a++; // 隐式屏蔽！
anotherObject.a; // 2
myObject.a; // 3
myObject.hasOwnProperty( "a" ); // true
```
尽管 myObject.a++ 看起来应该（通过委托）查找并增加 anotherObject.a 属性，但是别忘
了 ++ 操作相当于 myObject.a = myObject.a + 1。

因此 ++ 操作首先会通过 [[Prototype]]
查找属性 a 并从 anotherObject.a 获取当前属性值 2，然后给这个值加 1，接着用 [[Put]]
将值 3 赋给 myObject 中新建的屏蔽属性 a，天呐！
修改委托属性时一定要小心。如果想让 anotherObject.a 的值增加，唯一的办法是
anotherObject.a++。



在 ES6 之前，
我们只能通过设置__proto__ 属性来实现，但是这个方法并不是标准并且无法兼容所有浏
览器。ES6 添加了辅助函数 Object.setPrototypeOf(..)，可以用标准并且可靠的方法来修
改关联。

Object.create()的polyfill代码
```js
if (!Object.create) {
  Object.create = function(o) {
    function F(){}
    F.prototype = o;
    return new F();
  };
}
```



## 第六章  行为委托
[[Prototype]] 机制就是指对象中的一个内部链接引用
另一个对象

JavaScript 中这个机制的本质就是对象之间的关联关系。






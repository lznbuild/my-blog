在学校学东西的时候，总会发现书上有些知识点其实很好理解，但用很学术的语言去描述，就懵逼了，而《你不知道的JavaScript》这系列书中会有很多偏学术的东西和概念，我会穿插一些自己的理解在里面，有错误的地方欢迎指出。一些容易理解的东西不会记录。


## 第一章作用域

JS引擎的编译步骤：
  1.分词/词法分析，会将由字符组成的字符串分解成（对  编程语言来说）有意义的代码块，这些代码块被称为词法单元。
  2.解析/语法分析，是将词法单元流（数组）转换成抽象语法树（AST）。
  3.代码生成。将 AST 转换为可执行代码，简单来说就是有某种方法可以将上一步的 AST 转化为一组机器指令

  语法分析和代码生成阶段有特定的步骤来对运行性能进行优化，包括对冗余元素进行优化。

  对于 JavaScript 来说，大部分情况下编译发生在代码执行前的几微秒（甚至更短！）的时间内。


## 作用域
负责收集并维护由所有声明的标识符（变量）组成的一系列查
询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。

var a=2;

这句代码，编译器做了什么？
1. 遇到 var a，编译器会 **查询作用域** 是否已经有一个该名称的变量存在于同一个作用域的
集合中。如果是，编译器会忽略该声明，继续进行编译；否则它会要求作用域在当前作
用域的集合中声明一个新的变量，并命名为 a。
2. 接下来编译器会为引擎生成运行时所需的代码，这些代码被用来处理 a = 2 这个赋值
操作。引擎运行时会首先**查询作用域**，在当前的作用域集合中是否存在一个叫作 a 的
变量。如果是，引擎就会使用这个变量；如果否，引擎会继续查找该变量。
如果引擎最终找到了 a 变量，就会将 2 赋值给它。否则引擎就会举手示意并抛出一个异常！
总结：
变量的赋值操作会执行两个动作，首先编译器会在当前作用域中声明一个变量（如
果之前没有声明过），然后在运行时引擎会在作用域中查找该变量，如果能够找到就会对
它赋值。

第1，2步都有一个查询作用域的步骤，实际上它们不一样，有LHS,RHS查询，RHS 查询与简单地查找某个变量的值别无二致，而 LHS 查询则是试图
找到变量的容器本身，从而可以对其赋值。

例子：

console.log(a)

其中对 a 的引用是一个 RHS 引用，因为这里 a 并没有赋予任何值。相应地，需要查找并取
得 a 的值，这样才能将值传递给 console.log(..)。
相比之下，例如：
a = 2;
这里对 a 的引用则是 LHS 引用，因为实际上我们并不关心当前的值是什么，只是想要为 =
2 这个赋值操作找到一个目标。

为在变量还没有声明（在任何作用域中都无法找到该变量）的情况下，这两种查询的行
为是不一样的

考虑如下代码：

function foo(a) {
  console.log( a + b );
  b = a;
}
foo( 2 );

第一次对 b 进行 RHS 查询时是无法找到该变量的。也就是说，这是一个“未声明”的变
量，因为在任何相关的作用域中都无法找到它。
如果 RHS 查询在所有嵌套的作用域中遍寻不到所需的变量，引擎就会抛出 ReferenceError
异常。

相较之下，当引擎执行 LHS 查询时，如果在顶层（全局作用域）中也无法找到目标变量，
全局作用域中就会创建一个具有该名称的变量，并将其返还给引擎，前提是程序运行在非
“严格模式”下。
function foo(){
  a=1; // LHS查询，a成为全局变量
}

再来一个例子
```js
function foo(a) {
var b = a;
return a + b;
}
var c = foo( 2 );
```

1. 找出所有的 LHS 查询（这里有 3 处！）
c = ..;、a = 2（隐式变量分配）、b = ..
2. 找出所有的 RHS 查询（这里有 4 处！）
foo(2..、= a;、a ..、.. b


## 第二章 词法作用域
词法作用域就是定义在词法阶段（编译步骤的第一步：词法分析）的作用域。

作用域查找会在找到第一个匹配的标识符时停止。在多层的嵌套作用域中可以定义同名的
标识符，这叫作“遮蔽效应”，JS中不止在作用域这部分有这种特性，在原型链上仍有。找到实例上的属性就不会再去找原型上的属性。

无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处
的位置决定。

eval(..) 和 with 会在运行时修改或创建新的作用域，以此来欺骗其他在书写时定义的词
法作用域。


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

引擎会
在解释 JavaScript 代码之前首先对其进行编译。编译阶段中的一部分工作就是找到所有的
声明，并用合适的作用域将它们关联起来。第 2 章中展示了这个机制，也正是词法作用域
的核心内容。

## 第五章 作用域闭包






this是在运行时绑定的，至于取决于函数的调用方式。

当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包
含函数在哪里被调用（调用栈）、函数的调用方法、传入的参数等信息。this 就是记录的
其中一个属性，会在函数执行的过程中用到。

## 第二章 this全面解析

1.默认绑定
2.隐式绑定，可能会丢失this
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
3.显示绑定
4.new绑定，优先级高


箭头函数根据外层作用域来决定this


## 第三章 对象
尝
试修改一个不可配置的属性描述符都会出错。注意：如你所见，把 configurable 修改成
false 是单向操作，无法撤销！表示不可配置，不可删除，要注意有一个小小的例外：即便属性是 configurable:false，我们还是可以
把 writable 的状态由 true 改为 false，但是无法由 false 改为 true。

Object.preventExtensions(); 阻止对象拓展属性

## get,set 访问描述符、

```js
var myObject = {
// 给 a 定义一个 getter
get a() {
return this._a_;
},
// 给 a 定义一个 setter
set a(val) {
this._a_ = val * 2;
}
};
myObject.a = 2;
myObject.a; // 4
```


for..of 循环首先会向被访问对象请求一个迭代器对象，然后通过调用迭代器对象的
next() 方法来遍历所有返回值。
数组有内置的 @@iterator，因此 for..of 可以直接应用在数组上。我们使用内置的 @@
iterator 来手动遍历数组，看看它是怎么工作的：
```js
var myArray = [ 1, 2, 3 ];
var it = myArray[Symbol.iterator]();
it.next(); // { value:1, done:false }
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { done:true }
```


可以给任何想遍历的对象定义 @@iterator，举例来说：
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
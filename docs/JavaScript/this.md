## this的作用
JavaScript 允许在函数体内部，引用当前环境的其他变量。

```js
var f = function () {
  console.log(x);
};
```
上面代码中，函数体里面使用了变量x。该变量由运行环境提供。

现在问题就来了，由于函数可以在不同的运行环境执行，所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以，this就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。
```js
var f = function () {
  console.log(this.x);
}
```
上面代码中，函数体里面的this.x就是指当前运行环境的x。

this说白了就是找拥有当前上下文（context）的对象（context object）,也就是说this指向调用位置的执行上下文，跟调用位置，怎样调用有关。跟函数在哪里定义没有半毛钱关系，而且会随着函数调用方式的变化而变化,这就给函数提供了非常大的灵活性。

用栗子说明
```js
function baz() {
    // 当前调用栈是：baz
    console.log( "baz" );
    bar(); // <-- bar的调用位置，当前调用位置在baz中
}

function bar() {
    // 当前调用栈是：baz --> bar
    console.log( "bar" );
    foo(); // <-- foo的调用位置，当前调用位置在bar中
}

function foo() {
    // 当前调用栈是：baz --> bar --> foo
    console.log( "foo" );
}

baz(); // <-- baz的调用位置，当前调用位置是全局作用域
```  
不清楚执行上下文的可以观看上篇博客[JavaScript执行上下文](https://github.com/lznbuild/my-blog/issues/7)




在了解this调用方式之前，先来看一道题   

```js
var a = 5;
var obj = {
  a : 10,
  foo: function(){
    console.log(this.a)
  }
}

var bar = obj.foo
obj.foo() // 5
bar() // 10
```

通过查阅资料（最下方有原文链接），JavaScript中函数的调用方式有3种  

```js
func(p1, p2) 
obj.child.method(p1, p2)
func.call(context, p1, p2) // 用call来代表一类的显示调用，apply
```
好多初学者都只用到过前两种情况，而且认为前两者优于第三者。但其实第三种形式才是正常的调用形式。
```js
func.call(context,p1,p2)
```
其它两种都是语法糖，可以等价的变为call形式。  

func(p1, p2)等价于 func.call(undefined, p1, p2);  

obj.child.method(p1, p2) 等价于 obj.child.method.call(obj.child, p1, p2);

这么看我们的函数调用只有一种形式:
```js
func.call(context,p1,p2)
```
这时候是不是就知道this是什么了，就是上面的context。  

 回到刚才的那个题。
```js
var a = 5;
var obj = {
  a : 10,
  foo: function(){
    console.log(this.a)
  }
}

var bar = obj.foo
obj.foo() 
bar()
```

obj.foo() 转化为call的形式就是obj.foo.call(obj)，所以this指向了obj

bar() 转化为call的形式就是bar.call()，由于没有传 context，所以 this 就是 window，本文的所有分析，不考虑node环境。



下面正式开始汇总this的调用方式  
## 5种this绑定
1、默认绑定  
2、隐式绑定   
3、显式绑定  
4、new绑定  
5、箭头函数绑定  

### 默认绑定  
独立函数调用，可以把默认绑定看作是无法应用其他规则时的默认规则，this指向全局对象。  
严格模式下，不能将全局对象用于默认绑定，this会绑定到undefined。只有函数运行在非严格模式下，默认绑定才能绑定到全局对象。  
```
var a = 'hello'

var obj = {
    a: 'koala',
    foo: function() {
        console.log(this.a)
    }
}

var bar = obj.foo

bar()              // 浏览器中输出: "hello"
```
bar()就是默认绑定，非下面要说明的的隐式绑定，函数调用的时候，前面没有任何修饰调用，也可以用之前的 call函数调用形式理解，bar.call(),所以输出结果是hello。

注意，有坑
```js
var name = 'koala';
var person = {
    name: '程序员成长指北',
    sayHi: sayHi
}
function sayHi(){
    setTimeout(function(){
        console.log('Hello,', this.name);
    })
}
person.sayHi();
setTimeout(function(){
    person.sayHi();
},200);
// 输出结果 Hello,koala
// 输出结果 Hello,koala
```
setTimeOut和setInterval中的回调函数，是延时多少秒后，直接在执行队列中调用这个回调函数，这些函数中传递的函数中的this指向，在非严格模式指向的是全局对象，也是默认绑定


### 隐式绑定
当函数引用有上下文对象时，隐式绑定规则会把函数中的this绑定到这个上下文对象。对象属性引用链中只有上一层或者说最后一层在调用中起作用。　隐式调用的意思是，函数调用时拥有一个上下文对象，就好像这个函数是属于该对象的一样。  

隐式绑定也是坑最多的一种绑定，非常容易让人迷惑。

需要说明的一点是，最后一个调用该函数的对象是传到函数的上下文对象。
```js
  function fn() {
      console.log( this.a );
  }
  var obj2 = {
      a: 42,
      fn: fn
  };
  var obj1 = {
      a: 2,
     obj2: obj2
 };
    obj1.obj2.fn(); // 42 -- this引用的是obj2.
```

还有一种方式，在间接引用下，调用这个函数会应用默认绑定规则。间接引用最容易在赋值时发生。
```js
// p.foo = o.foo的返回值是目标函数的引用，所以调用位置是foo()而不是p.foo()或者o.foo()
function foo() {
    console.log( this.a );
}

var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4};

o.foo(); // 3
(p.foo = o.foo)(); // 2
```

### 显式绑定  
通过call(..) 或者 apply(..)方法。第一个参数是一个对象，在调用函数时将这个对象绑定到this。因为直接指定this的绑定对象，称之为显示绑定。
```js
function foo() {
    console.log( this.a );
}

var a = 2;
var o = { a: 3};

foo() // 2
foo.call(o); // 3
```

### new绑定  
在JS中，构造函数只是使用new操作符时被调用的普通函数，他们不属于某个类，也不会实例化一个类。
包括内置对象函数（比如Number(..)）在内的所有函数都可以用new来调用，这种函数调用被称为构造函数调用。  
实际上并不存在所谓的“构造函数”，只有对于函数的“构造调用”。 关于new，不再赘述，在[《JavaScript原型原型链》](https://github.com/lznbuild/my-blog/issues/2)中有了详细实现过程。


使用new来调用foo(..)时，会构造一个新对象并把它（bar）绑定到foo(..)调用中的this。
```js
function foo(a) {
    this.a = a;
}

var bar = new foo(2); // bar和foo(..)调用中的this进行绑定
console.log( bar.a ); // 2
```

### 箭头函数绑定
ES6新增一种特殊函数类型：箭头函数，箭头函数无法使用上述四条规则，在箭头函数自己的作用域中没有this,而是根据外层（函数或者全局）作用域（词法作用域）来决定this。 也就是说，箭头函数里的this不再有迷惑性，被永远封印到当前词法作用域之中，称作 Lexical this ，在代码运行前就可以确定。

这样的好处就是方便让回调函数的this使用当前的作用域，不怕引起混淆。  


所以对于箭头函数，只要看它在哪里创建的就行。


```js
function foo() {
    // 返回一个箭头函数
    return (a) => {
        // this继承自foo()
        console.log( this.a );
    };
}

var obj1 = {
    a: 2
};

var obj2 = {
    a: 3
}

var bar = foo.call( obj1 );
bar.call( obj2 ); // 2，不是3！
```
foo()内部创建的箭头函数会捕获调用时foo()的this。由于foo()的this绑定到obj1，bar(引用箭头函数)的this也会绑定到obj1，箭头函数的绑定无法被修改(new也不行)，也可以理解为箭头函数无法显式使用call，apply修改this

再来一个题巩固一下
```js
function callback (cb) {
  cb()
}

callback(() => { console.log(this) }) // window

var boss1 = {
  name: 'boss1',
  callback: callback,
  callback2 () {
    callback(() => { console.log(this) })
  }
}

boss1.callback(() => { console.log(this) }) // window
boss1.callback2(() => { console.log(this) }) // boss1
```
如果这题没做对，建议再看一下上面的讲解  

说完了这几种this绑定方式，再说说这几种方式的优先级

new绑定 > 显式绑定 > 隐式绑定 > 默认绑定

## bind，call的优先级
```js
function returnThis () {
  return this
}

var boss1 = { name: 'boss1'}

var boss1returnThis = returnThis.bind(boss1)

boss1returnThis() // boss1

var boss2 = { name: 'boss2' }
boss1returnThis.call(boss2) // boss1,不是boss2,说明bind比call优先级高
```

## new 的优先级最高
```
function showThis () {
  console.log(this)
}

showThis() // window
new showThis() // showThis

var boss1 = { name: 'boss1' }
showThis.call(boss1) // boss1
new showThis.call(boss1) // TypeError

var boss1showThis = showThis.bind(boss1)
boss1showThis() // boss1
new boss1showThis() // showThis，不是boss1，说明new的优先级高
```

再来做题巩固  
```js
var length = 10;
function fn() {
    console.log(this.length);
}
 
var obj = {
  length: 5,
  method: function(fn) {
    fn(); // 10
    arguments[0](); // 2 ，指向method方法的实参的个数
  }
};
 
obj.method(fn, 1); // 这里传递了2个实参

```
这里要拓展一个知识点， 
函数中arguments.length表示实参的数量，arguments.callee.length表示形参的数量。

```js
function fn(a,b) {
    console.log(fn.length); // 2   相当于arguments.callee.length,表示形参的数量
    console.log(arguments.length); // 3,表示实参的数量
}

fn(1,2,3)
```


再来一个比较难的
```js
var boss1 = {
  name: 'boss1',
  returnThis () {
    return this
  }
}

var boss2 = {
  name: 'boss2',
  returnThis () {
    return boss1.returnThis()
  }
}

var boss3 = {
  name: 'boss3',
  returnThis () {
    var returnThis = boss1.returnThis
    return returnThis()
  }
}

boss1.returnThis() // boss1
boss2.returnThis() // boss1
boss3.returnThis() // window
```

在boss2.returnThis里，使用this的函数是boss1.returnThis，所以this绑定到boss1；

在boss3.returnThis里，使用this的函数是returnThis，returnThis直接调用，this属于方式1默认绑定。

那么，要想把this绑定到boss2怎么做呢？
```js
var boss1 = {
  name: 'boss1',
  returnThis () {
    return this
  }
}

var boss2 = {
  name: 'boss2',
  returnThis: boss1.returnThis
}

boss2.returnThis() //boss2
```
没错，只要让使用this的函数是属于boss2就行。


最后, 回顾一下call，apply函数的作用和调用方式，
call,apply的第一个实参是要调用函数的母对象，他就是调用上下文，在函数体内通过this来获取对他的引用。

fn.call(window)
功能类似
在window上绑定一个属性，保留对fn函数的引用，调用这个属性，将临时方法再去掉。
思路有了，就可以实现call，apply了


因为《高程》，《犀牛书》，《你不知道的js》中给出的联系题太少了，所以这篇文章借鉴了很多大佬们的博客，这里给出原文链接  

https://juejin.im/post/5d6e5f77f265da03e05b2fd9#heading-19

https://juejin.im/post/5ba24761e51d450e735e51f0

https://zhuanlan.zhihu.com/p/23804247
http://www.ruanyifeng.com/blog/2018/06/javascript-this.html

https://www.cnblogs.com/front-Thinking/p/4364337.html（摘自《你不知道的JavaScript》）

https://blog.crimx.com/2016/05/12/understanding-this/





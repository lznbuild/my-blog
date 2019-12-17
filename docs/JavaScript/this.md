## 5种this绑定全面解析  
1、默认绑定（严格/非严格模式）  
2、隐式绑定   
3、显式绑定  
4、new绑定  
5、箭头函数绑定  

1 调用位置    
调用位置就是函数在代码中被调用的位置（而不是声明的位置）。

查找方法：

分析调用栈：调用位置就是当前正在执行的函数的前一个调用中  

```js
function baz() {
    // 当前调用栈是：baz
    // 因此，当前调用位置是全局作用域
    
    console.log( "baz" );
    bar(); // <-- bar的调用位置
}

function bar() {
    // 当前调用栈是：baz --> bar
    // 因此，当前调用位置在baz中
    
    console.log( "bar" );
    foo(); // <-- foo的调用位置
}

function foo() {
    // 当前调用栈是：baz --> bar --> foo
    // 因此，当前调用位置在bar中
    
    console.log( "foo" );
}

baz(); // <-- baz的调用位置
```  
2 绑定规则  
#2.1 默认绑定  
独立函数调用，可以把默认绑定看作是无法应用其他规则时的默认规则，this指向全局对象。  
严格模式下，不能将全局对象用于默认绑定，this会绑定到undefined。只有函数运行在非严格模式下，默认绑定才能绑定到全局对象。在严格模式下调用函数则不影响默认绑定。  


2.2 隐式绑定
当函数引用有上下文对象时，隐式绑定规则会把函数中的this绑定到这个上下文对象。对象属性引用链中只有上一层或者说最后一层在调用中起作用。
```js
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo(); // 2
```


2.3 显式绑定  
通过call(..) 或者 apply(..)方法。第一个参数是一个对象，在调用函数时将这个对象绑定到this。因为直接指定this的绑定对象，称之为显示绑定。

2.4 new绑定  
在JS中，构造函数只是使用new操作符时被调用的普通函数，他们不属于某个类，也不会实例化一个类。
包括内置对象函数（比如Number(..)）在内的所有函数都可以用new来调用，这种函数调用被称为构造函数调用。  
实际上并不存在所谓的“构造函数”，只有对于函数的“构造调用”。
使用new来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。

1、创建（或者说构造）一个新对象。
2、这个新对象会被执行[[Prototype]]连接。
3、这个新对象会绑定到函数调用的this。
4、如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象。  
使用new来调用foo(..)时，会构造一个新对象并把它（bar）绑定到foo(..)调用中的this。
```js
function foo(a) {
    this.a = a;
}

var bar = new foo(2); // bar和foo(..)调用中的this进行绑定
console.log( bar.a ); // 2
手写一个new实现

function create() {
	// 创建一个空的对象
    var obj = new Object(),
	// 获得构造函数，arguments中去除第一个参数
    Con = [].shift.call(arguments);
	// 链接到原型，obj 可以访问到构造函数原型中的属性
    obj.__proto__ = Con.prototype;
	// 绑定 this 实现继承，obj 可以访问到构造函数中的属性
    var ret = Con.apply(obj, arguments);
	// 优先返回构造函数返回的对象
	return ret instanceof Object ? ret : obj;
};
使用这个手写的new

function Person() {...}

// 使用内置函数new
var person = new Person(...)
                        
// 使用手写的new，即create
var person = create(Person, ...)
```
代码原理解析：  

1、用new Object()的方式新建了一个对象obj

2、取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments会被去除第一个参数

3、将 obj的原型指向构造函数，这样obj就可以访问到构造函数原型中的属性

4、使用apply，改变构造函数this 的指向到新建的对象，这样 obj就可以访问到构造函数中的属性

5、返回 obj

#3 优先级
new 绑定
显示绑定
隐式绑定
默认绑定  

4.2 间接引用  
间接引用下，调用这个函数会应用默认绑定规则。间接引用最容易在赋值时发生。
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
5,ES6新增一种特殊函数类型：箭头函数，箭头函数无法使用上述四条规则，而是根据外层（函数或者全局）作用域（词法作用域）来决定this。
```js
foo()内部创建的箭头函数会捕获调用时foo()的this。由于foo()的this绑定到obj1，bar(引用箭头函数)的this也会绑定到obj1，箭头函数的绑定无法被修改(new也不行)。
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
箭头函数无法修改this。
ES6之前和箭头函数类似的模式，采用的是词法作用域取代了传统的this机制。

上期思考题解
代码1：
```js
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}

checkscope()();                  ```
代码2：
```js
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}

var foo = checkscope(); 
foo(); 
```
上面的两个代码中，checkscope()执行完成后，闭包f所引用的自由变量scope会被垃圾回收吗？为什么？

解答：

checkscope()执行完成后，代码1中自由变量特定时间之后回收，代码2中自由变量不回收。

首先要说明的是，现在主流浏览器的垃圾回收算法是标记清除，标记清除并非是标记执行栈的进出，而是从根开始遍历，也是一个找引用关系的过程，但是因为从根开始，相互引用的情况不会被计入。所以当垃圾回收开始时，从Root（全局对象）开始寻找这个对象的引用是否可达，如果引用链断裂，那么这个对象就会回收。

闭包中的作用域链中 parentContext.vo 是对象，被放在堆中，栈中的变量会随着执行环境进出而销毁，堆中需要垃圾回收，闭包内的自由变量会被分配到堆上，所以当外部方法执行完毕后，对其的引用并没有丢。

每次进入函数执行时，会重新创建可执行环境和活动对象，但函数的[[Scope]]是函数定义时就已经定义好的（词法作用域规则），不可更改。

对于代码1：
checkscope()执行时,将checkscope对象指针压入栈中，其执行环境变量如下
```js
checkscopeContext:{
    AO:{
        arguments:
        scope:
        f:
    },
    this,
    [[Scope]]:[AO, globalContext.VO]
}
```
执行完毕后出栈，该对象没有绑定给谁，从Root开始查找无法可达，此活动对象一段时间后会被回收

对于代码2：
checkscope()执行后，返回的是f对象，其执行环境变量如下
```js
fContext:{
    AO:{
        arguments:
    },
    this,
    [[Scope]]:[AO, checkscopeContext.AO, globalContext.VO]
}
```
此对象赋值给var foo = checkscope();，将foo压入栈中，foo指向堆中的f活动对象,对于Root来说可达，不会被回收。

如果一定要自由变量scope回收，那么该怎么办？？？

很简单，foo = null;，把引用断开就可以了。

依次给出console.log输出的数值。
```js
var num = 1;
var myObject = {
    num: 2,
    add: function() {
        this.num = 3;
        (function() {
            console.log(this.num);
            this.num = 4;
        })();
        console.log(this.num);
    },
    sub: function() {
        console.log(this.num)
    }
}
myObject.add();
console.log(myObject.num);
console.log(num);
var sub = myObject.sub;
sub();
// 1 3 3 4 4
```
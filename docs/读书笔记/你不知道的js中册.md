中册的内容太基础了，没记多少

## 第一章
大多数开发者倾向于将 undefined 等同于 undeclared（未声明），但在 JavaScript 中它们完全是两回事。  

已在作用域中声明但还没有赋值的变量，是 undefined 的。相反，还没有在作用域中声明过的变量，是 undeclared 的。
```js
var a;
a; // undefined
b; // ReferenceError: b is not defined
```

浏览器对这类情况的处理很让人抓狂。  

上例中，“b is not defined”容易让人误以为是“b isundefined”。这里再强调一遍，“undefined”和“is not defined”是两码事。

此时如果浏览器报错成“b is not found”或者“b is not declared”会更准确。
更让人抓狂的是 typeof 处理 undeclared 变量的方式。

```js
var a;
typeof a; // "undefined"
typeof b; // "undefined"
```

对于 undeclared（或者 not defined）变量，typeof 照样返回 "undefined"。请注意虽然 b 是一个 undeclared 变量，但 typeof b 并没有报错。这是因为 typeof 有一个特殊的安全防范
机制。  

此时 typeof 如果能返回 undeclared（而非 undefined）的话，情况会好很多

## 第二章
二进制浮点数最大的问题：精度丢失

解决方案：
```js
function numbersCloseEnoughToEqual(n1,n2) {
 return Math.abs( n1 - n2 ) < Number.EPSILON; //是否在指定的误差范围内 epsilon
}
var a = 0.1 + 0.2;
var b = 0.3;
numbersCloseEnoughToEqual( a, b ); // true
numbersCloseEnoughToEqual( 0.0000001, 0.0000002 ); // false
```

检测一个值是否是整数
```js
Number.isInteger( 42 ); // true
Number.isInteger( 42.000 ); // true
Number.isInteger( 42.3 ); // false
```

Object.is()  判断两个值是否相同
```js
var a = 2 / "foo";
var b = -3 * 0;
Object.is( a, NaN ); // true
Object.is( b, -0 ); // true
Object.is( b, 0 ); // false

```

## 第四章 类型转换
所有 typeof 返回值为 "object" 的对象（如数组）都包含一个内部属性 [[Class]]
这个属性无法直接访问，一般通过 Object.prototype.toString(..) 来查看

```js
var a = {
 val: [1,2,3],
 // 可能是我们想要的结果！
 toJSON: function(){
 return this.val.slice( 1 );
 }
};
var b = {
 val: [1,2,3],
 // 可能不是我们想要的结果！
 toJSON: function(){
 return "[" +
 this.val.slice( 1 ).join() +
 "]";
 }
};
JSON.stringify( a ); // "[2,3]"
JSON.stringify( b ); // ""[2,3]""
```


```js
var a = {
 valueOf: function(){
 return "42";
 }
};
var b = {
 toString: function(){
 return "42";
 }
};
var c = [4,2];
c.toString = function(){
 return this.join( "" ); // "42"
};
Number( a ); // 42
Number( b ); // 42
Number( c ); // 42
Number( "" ); // 0
Number( [] ); // 0
Number( [ "abc" ] ); // NaN
```

宽松相等（loose equals）== 和严格相等（strict equals）=== 都用来判断两个值是否“相
等”，但是它们之间有一个很重要的区别，特别是在判断条件上。  

常见的误区是“== 检查值是否相等，=== 检查值和类型是否相等”。听起来蛮有道理，然而
还不够准确。很多 JavaScript 的书籍和博客也是这样来解释的，但是很遗憾他们都错了。
正确的解释是：“== 允许在相等比较中进行强制类型转换，而 === 不允许。”


我们来看一看两种解释的区别。  

根据第一种解释（不准确的版本），=== 似乎比 == 做的事情更多，因为它还要检查值的
类型。

第二种解释中 == 的工作量更大一些，因为如果值的类型不同还需要进行强制类型
转换。
有人觉得 == 会比 === 慢，实际上虽然强制类型转换确实要多花点时间，但仅仅是微秒级
（百万分之一秒）的差别而已。


如果进行比较的两个值类型相同，则 == 和 === 使用相同的算法，所以除了 JavaScript 引擎
实现上的细微差别之外，它们之间并没有什么不同。如果两个值的类型不同，我们就需要考虑有没有强制类型转换的必要，有就用 ==，没有就
 ===，不用在乎性能。


### 隐式类型转换的规则
```js
var a = 42;
var b = "42";
a === b; // false
a == b; // true
```

- 如果 Type(x) 是数字，Type(y) 是字符串，则返回 x == ToNumber(y) 的结果。
- 如果 Type(x) 是字符串，Type(y) 是数字，则返回 ToNumber(x) == y 的结果。


```js
var a = "42";
var b = true;
a == b; // false
```

- 如果 Type(x) 是布尔类型，则返回 ToNumber(x) == y 的结果；
- 如果 Type(y) 是布尔类型，则返回 x == ToNumber(y) 的结果。


```js
var a = null;
var b;

a == b; // true
a == null; // true
b == null; // true

a == false; // false   !!!
b == false; // false   !!!
a == ""; // false
b == ""; // false
a == 0; // false
b == 0; // false
```
很奇怪，但是规范就是这样定义的  


- 如果 x 为 null，y 为 undefined，则结果为 true。
-  如果 x 为 undefined，y 为 null，则结果为 true。  
- undefined和null不会涉及到任何类型转换


- 如果 Type(x) 是字符串或数字，Type(y) 是对象，则返回 x == ToPrimitive(y) 的结果；
-  如果 Type(x) 是对象，Type(y) 是字符串或数字，则返回 ToPromitive(x) == y 的结果。

```js
var a = "abc";
var b = Object( a ); // 和new String( a )一样
a === b; // false
a == b; // true
```

```js
var a = null;
var b = Object( a ); // 和Object()一样
a == b; // false
var c = undefined;
var d = Object( c ); // 和Object()一样
c == d; // false
var e = NaN;
var f = Object( e ); // 和new Number( e )一样
e == f; // false
```
因为没有对应的封装对象，所以 null 和 undefined 不能够被封装（boxed），Object(null)
和 Object() 均返回一个常规对象。


NaN 能够被封装为数字封装对象，但拆封之后 NaN == NaN 返回 false，因为 NaN 不等于 NaN


```js
"0" == null; // false
"0" == undefined; // false
"0" == false; // true
"0" == NaN; // false
"0" == 0; // true
"0" == ""; // false 相同类型，没有转换了
false == null; // false
false == undefined; // false
false == NaN; // false
false == 0; // true 
false == ""; // true 
false == []; // true 
false == {}; // false
"" == null; // false
"" == undefined; // false
"" == NaN; // false
"" == 0; // true 
"" == []; // true 
"" == {}; // false
0 == null; // false
0 == undefined; // false
0 == NaN; // false
0 == []; // true 
0 == {}; // false
```
## < >的隐式类型类型
< >涉及到的类型转换,这部分有点无聊，开发中用到的概率挺小的，不可能有数组和数组比较大小，对象和对象比较大小，了解就好

```js
var a = [ 42 ];
var b = [ "43" ];

a < b; // true
b < a; // false   
//比较双方首先调用 ToPrimitive，如果结果出现非字符串，就根据 ToNumber 规则将双方强
// 制类型转换为数字来进行比较。

var a = [ "42" ];
var b = [ "043" ];
a < b; // false
```
a 和 b 并没有被转换为数字，因为 ToPrimitive 返回的是字符串，所以这里比较的是 "42"
和 "043" 两个字符串，它们分别以 "4" 和 "0" 开头。因为 "0" 在字母顺序上小于 "4"，所以
最后结果为 false。

```js
var a = [ 4, 2 ];
var b = [ 0, 4, 3 ];
a < b; // false
```
a 转换为 "4, 2"，b 转换为 "0, 4, 3"，同样是按字母顺序进行比较

```js
var a = { b: 42 };
var b = { b: 43 };
a < b; // ??
```
结果还是 false，因为 a 是 [object Object]，b 也是 [object Object]，所以按照字母顺序
a < b 并不成立。


下面的例子就有些奇怪了：
```js
var a = { b: 42 };
var b = { b: 43 };
a < b; // false
a == b; // false
a > b; // false
a <= b; // true
a >= b; // true
```

为什么 a == b 的结果不是 true ？  

它们的字符串值相同（同为 "[object Object]"），按道理应该相等才对？

实际上不是这样，你可以回忆一下前面讲过的对象的相等比较。  

但是如果 a < b 和 a == b 结果为 false，为什么 a <= b 和 a >= b 的结果会是 true 呢？ 


因为根据规范 a <= b 被处理为 b < a，然后将结果反转。因为 b < a 的结果是 false，所
以 a <= b 的结果是 true。
这可能与我们设想的大相径庭，即 <= 应该是“小于或者等于”。实际上 JavaScript 中 <= 是
“不大于”的意思（即 !(a > b)，处理为 !(b < a)）。同理 a >= b 处理为 b <= a。


## 第二部分 第一章  异步：现在与未来  
## 第二章 回调
## 第三章
## 第四章

关于异步的部分，这里写的太好了！建议直接看书

### 下面把关于异步的理解摘出来

 
我非常确定大多数人都听到过别人自称“能一心多用”。人们试图让自己成为多任务执行
者的努力有各种方式，包括从搞笑（比如小孩玩的拍脑袋然后揉肚子这样声东击西的游戏
招数）到日常生活（边走路边嚼口香糖），再到十分危险的行为（边开车边发短信）。
但是，我们真的能一心多用吗？我们真的能同时执行两个有意识的、故意的动作，并对二
者进行思考或推理吗？我们最高级的大脑功能是以并行多线程的形式运行的吗？
答案可能出乎你的意料：很可能并不是这样。
看起来我们的大脑并不是以这样的方式构建起来的。很多人（特别是 A 型人）可能不愿意
承认，但我们更多是单任务执行者。实际上，在任何特定的时刻，我们只能思考一件事情。
我这里所说的并不是所有我们不自觉、无意识地自动完成的脑功能，比如心跳、呼吸和眨
眼等。对维持生命来说，这些是至关重要的，但我们并不需要有意识地分配脑力来执行这
些任务。谢天谢地，当我们忙于在 3 分钟内第 15 次查看社交网络更新时，我们的大脑在
后台（多线程！）执行了所有这些重要任务。
我们在讨论的是此时处于意识前端的那些任务。对我来说，此时此刻的任务就是编写本
书。就在此刻，我还在执行任何其他更高级的脑功能吗？不，并没有。我很容易分心，并
且频繁地分心——写前面几段的时候就分心了几十次！
我们在假装并行执行多个任务时，实际上极有可能是在进行快速的上下文切换，比如与朋
友或家人电话聊天的同时还试图打字。换句话说，我们是在两个或更多任务之间快速连续
地来回切换，同时处理每个任务的微小片段。我们切换得如此之快，以至于对外界来说，
我们就像是在并行地执行所有任务。

这听起来是不是和异步事件并发机制（比如 JavaScript 中的形式）很相似呢？！如果你还
没意识到的话，就回头把第 1 章再读一遍吧！
实际上，把广博复杂的神经学简化（即误用）为一种这里我足以讨论的形式就是，我们大
脑的工作方式有点类似于事件循环队列。
如果把我打出来的每个字母（或单词）看作一个异步事件，那么在这一句中我的大脑就有
几十次机会被其他某个事件打断，比如因为我的感官甚至随机思绪。
我不会在每次可能被打断的时候都转而投入到其他“进程”中（这值得庆幸，否则我根本
没法写完本书！）。但是，中断的发生经常频繁到让我觉得我的大脑几乎是不停地切换到
不同的上下文（即“进程”）中。很可能 JavaScript 引擎也是这种感觉。

### js异步解决方案的发展历程以及优缺点

1.回调函数
```js
setTimeout(()=> {
  // callback函数
},1000)
```

缺点： 没法try catch捕获错误，还有回调地狱的问题，和人的大脑的思维方式不符



2.promise

优点：实现了链式调用，解决了回调地狱的问题  

缺点： 无法终止promise，状态一旦更改为resolve,reject,无法再次改变  

Promise.all([]).then()  必须所有Promise都是resolve状态，才会执行then回调函数(Promise.allsettled正在提案中)。

Promise.race()  

```js
var p1 = new Promise((resolve,reject)=> {
    setTimeout(()=> {
      resolve()
    },2000)
  }).then(res => {
    console.log('p1执行');
  })

  var p2 = new Promise((resolve,reject)=> {
    setTimeout(()=> {
      resolve()
    },3000)
  }).then(res=> {
    console.log('p2执行');
  })

  Promise.all([p1,p2]).then(res=> {
    console.log('执行完毕');
  })

  // p1执行
  // p2执行  
  // 执行完毕
```

```js
 var p1 = new Promise((resolve,reject)=> {
    setTimeout(()=> {
      resolve()
    },2000)
  }).then(res => {
    console.log('p1执行');
  })

  var p2 = new Promise((resolve,reject)=> {
    setTimeout(()=> {
      resolve()
    },3000)
  }).then(res=> {
    console.log('p2执行');
  })

  Promise.race([p1,p2]).then(res=> {
    console.log('执行完毕');
  })

// p1执行
// 执行完毕

// p2执行
```

```js
 var p1 = new Promise((resolve,reject)=> {
    setTimeout(()=> {
      reject()
    },2000)
  }).then(res => {
    console.log('p1执行');
  })

  var p2 = new Promise((resolve,reject)=> {
    setTimeout(()=> {
      resolve()
    },3000)
  }).then(res=> {
    console.log('p2执行');
  })

  Promise.race([p1,p2]).then(res=> {
    console.log('执行完毕');
  })

// p1报错

// p2执行
```

3.generator  精准控制函数执行


4.async，await  

优点：代码清晰，不用像promise写一堆then，处理了回调地狱  

缺点：await 将异步代码改造成同步代码，如果多个异步操作没有依赖性而使用 await 会导致性能上的降低。

```js
async function test() {
  // 以下代码没有依赖性的话，完全可以使用 Promise.all 的方式
  // 如果有依赖性的话，其实就是解决回调地狱的例子了
  await fetch('XXX1')
  await fetch('XXX2')
  await fetch('XXX3')
}
```


## 第五章
web worker
这种类型的并行化被称为任务并行，因为其重点在于把
程序划分为多个块来并发运行,这是真正意义上的并发执行，非异步的上下文跳转。

```js
var w1 = new Worker( "http://some.url.1/mycoolworker.js" ); 
```

这个 URL 应该指向一个 JavaScript 文件的位置（而不是一个 HTML 页面！），这个文件将
被加载到一个 Worker 中。然后浏览器启动一个独立的线程，让这个文件在这个线程中作
为独立的程序运行。
Worker 之间以及它们和主程序之间，不会共享任何作用域或资源
是通过一个基本的事件消息机制相互联系

Worker w1 对象是一个事件侦听者和触发者，可以通过订阅它来获得这个 Worker 发出的事
件以及发送事件给这个 Worker。

以下是如何侦听事件（其实就是固定的 "message" 事件）：
```js
w1.addEventListener( "message", function(evt){
 // evt.data 监听w1发送过来的数据
} );
```

也可以发送 "message" 事件给这个 Worker：
```js
w1.postMessage( "something cool to say" ); // 发送给w1的数据
```

在这个 Worker 内部，收发消息是完全对称的：
```js
// "mycoolworker.js"
addEventListener( "message", function(evt){
 // w1监听发送过来的数据
} );
postMessage( "a really cool reply" ); // w1主动发出数据
```

要在创建 Worker 的程序中终止 Worker，可以调用 Worker 对象（就像前面代码中的 w1）
上的 terminate()。突然终止 Worker 线程不会给它任何机会完成它的工作或者清理任何资
源。这就类似于通过关闭浏览器标签页来关闭页面。

在 Worker 内部是无法访问主程序的任何资源的。这意味着你不能访问它的任何全局变量，
也不能访问页面的 DOM 或者其他资源。记住，这是一个完全独立的线程。
但是，你可以执行网络操作（Ajax、WebSockets）以及设定定时器。还有，Worker 可
以访问几个重要的全局变量和功能的本地复本，包括 navigator、location、JSON 和
applicationCache

Web Worker 通常应用于哪些方面呢？  

• 处理密集型数学计算  
• 大数据集排序  
• 数据处理（压缩、音频分析、图像处理等）  
• 高流量网络通信  
 


## 性能优化部分  选读吧
感觉这部分知识有点老了，用到的不多了

## 你不知道的js下册 
知识过于基础 不做记录了
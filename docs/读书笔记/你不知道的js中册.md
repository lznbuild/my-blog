中册的内容太基础了，没记多少

## 第一章
大多数开发者倾向于将 undefined 等同于 undeclared（未声明），但在 JavaScript 中它们完全
是两回事。
已在作用域中声明但还没有赋值的变量，是 undefined 的。相反，还没有在作用域中声明
过的变量，是 undeclared 的。

var a;
a; // undefined
b; // ReferenceError: b is not defined
浏览器对这类情况的处理很让人抓狂。上例中，“b is not defined”容易让人误以为是“b is
undefined”。这里再强调一遍，“undefined”和“is not defined”是两码事。此时如果浏览器
报错成“b is not found”或者“b is not declared”会更准确。
更让人抓狂的是 typeof 处理 undeclared 变量的方式

var a;
typeof a; // "undefined"
typeof b; // "undefined"
对于 undeclared（或者 not defined）变量，typeof 照样返回 "undefined"。请注意虽然 b 是
一个 undeclared 变量，但 typeof b 并没有报错。这是因为 typeof 有一个特殊的安全防范
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
类型。第二种解释中 == 的工作量更大一些，因为如果值的类型不同还需要进行强制类型
转换。
有人觉得 == 会比 === 慢，实际上虽然强制类型转换确实要多花点时间，但仅仅是微秒级
（百万分之一秒）的差别而已。
如果进行比较的两个值类型相同，则 == 和 === 使用相同的算法，所以除了 JavaScript 引擎
实现上的细微差别之外，它们之间并没有什么不同。如果两个值的类型不同，我们就需要考虑有没有强制类型转换的必要，有就用 ==，没有就
 ===，不用在乎性能。

```js
var a = 42;
var b = "42";
a === b; // false
a == b; // true
```

(1) 如果 Type(x) 是数字，Type(y) 是字符串，则返回 x == ToNumber(y) 的结果。
(2) 如果 Type(x) 是字符串，Type(y) 是数字，则返回 ToNumber(x) == y 的结果。


```js
var a = "42";
var b = true;
a == b; // false
```

(1) 如果 Type(x) 是布尔类型，则返回 ToNumber(x) == y 的结果；
(2) 如果 Type(y) 是布尔类型，则返回 x == ToNumber(y) 的结果。


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
// 很奇怪，但是规范就是这样定义的
(1) 如果 x 为 null，y 为 undefined，则结果为 true。
(2) 如果 x 为 undefined，y 为 null，则结果为 true。
undefined和null不会涉及到任何类型转换


(1) 如果 Type(x) 是字符串或数字，Type(y) 是对象，则返回 x == ToPrimitive(y) 的结果；
(2) 如果 Type(x) 是对象，Type(y) 是字符串或数字，则返回 ToPromitive(x) == y 的结果。

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


var a = [ 4, 2 ];
var b = [ 0, 4, 3 ];
a < b; // false
a 转换为 "4, 2"，b 转换为 "0, 4, 3"，同样是按字母顺序进行比较


var a = { b: 42 };
var b = { b: 43 };
a < b; // ??
结果还是 false，因为 a 是 [object Object]，b 也是 [object Object]，所以按照字母顺序
a < b 并不成立。


下面的例子就有些奇怪了：
var a = { b: 42 };
var b = { b: 43 };
a < b; // false
a == b; // false
a > b; // false
a <= b; // true
a >= b; // true


为什么 a == b 的结果不是 true ？它们的字符串值相同（同为 "[object Object]"），按道
理应该相等才对？实际上不是这样，你可以回忆一下前面讲过的对象的相等比较。
但是如果 a < b 和 a == b 结果为 false，为什么 a <= b 和 a >= b 的结果会是 true 呢？
因为根据规范 a <= b 被处理为 b < a，然后将结果反转。因为 b < a 的结果是 false，所
以 a <= b 的结果是 true。
这可能与我们设想的大相径庭，即 <= 应该是“小于或者等于”。实际上 JavaScript 中 <= 是
“不大于”的意思（即 !(a > b)，处理为 !(b < a)）。同理 a >= b 处理为 b <= a。


## 第二部分 第一章  异步：现在与未来  
## 第二章 回调

关于异步的部分，这里写的太好了！建议直接看书


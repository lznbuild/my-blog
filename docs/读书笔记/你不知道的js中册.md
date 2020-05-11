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

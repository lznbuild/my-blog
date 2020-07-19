
## ES6的模块化

export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错，下一节的import命令也是如此。  

export 导出的变量不能在import的文件中修改，必须通过export导出的方法修改，多文件共享export导出的状态。动态引用。
export deafult 导出不能通过export导出的方法修改,可以在import中的文件中直接修改。静态变量。

import引入多次同一文件，此文件只会执行一次。

ES6 模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量(这段话有点抽象，下面会有具体的说明)。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。
```js
// CommonJS模块
let { stat, exists, readFile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat, exists = _fs.exists, readfile = _fs.readfile;
```
上面代码的实质是整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs），然后再从这个对象上面读取3个方法。这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。

## import export
ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。
```js
// ES6模块
import { stat, exists, readFile } from 'fs';
```
上面代码的实质是从fs模块加载3个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。当然，这也导致了没法引用 ES6 模块本身，因为它不是对象


模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。


一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。下面是一个 JS 文件，里面使用export命令输出变量。

```js
// 当前文件名：test.js
export var str1='暴露的内容1';
export var str2='暴露的内容2';
export var str3='暴露的内容3';
// ES6将其视为一个模块，里面用export命令对外部输出了三个变量。


// 当前文件名：app.js
import * as obj from './test.js';

console.log(obj, 'obj');
console.log(obj.str1);
console.log(obj.str2);
console.log(obj.str3);
```

![](https://user-gold-cdn.xitu.io/2019/12/19/16f1c25051580d91?w=591&h=270&f=png&s=17691)


可以看出,export 默认返回一个接口（对象），这个’接口‘，可以对应typeScript的interface去理解。  
export的导出，必须与模块内部的变量建立一一对应关系  
```js
// 报错
export 1;

// 报错
var m = 1;
export m
```
因为没有提供对外的接口。第一种写法直接输出1，第二种写法通过变量m，还是直接输出1。1只是一个值，不是接口。  

正确的写法是下面这样。
```js
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
// 导出
var n = 1;
export {n as m}; // 修改暴露的n的名字
//导入
import {m} from '...'

// 报错
function f() {}
export f;

// 正确
export function f() {};

// 正确
function f() {}
export {f};
```


import是声明变量的方式之一，存在变量声明提升。
```js
foo();

import { foo } from 'my_module';
```
上面的代码不会报错，因为import的执行早于foo的调用。这种行为的本质是，import命令是编译阶段执行的，在代码运行之前。

由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。（解释开头的那段话）
```js
// 报错
import { 'f' + 'oo' } from 'my_module';

// 报错
let module = 'my_module';
import { foo } from module;

// 报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
}
```

另外，export 语句输出的接口，与其对应的值是动态绑定关系，通过该接口，可以获取到模块内部实时的值
```js
// 导出
export var foo='bar';
setTimeout(()=>foo = 'baz',1000)

// 导入
import {foo} from '...'
console.log(foo);
setTimeout(()=>console.log(foo), 1000) 

```
上面代码输出bar,1s后输出baz

## export default 


从前面的例子可以看出，使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。

为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。
```js
// test.js
export default function () {
  console.log('foo');
}
```

上面代码是一个模块文件test.js，它的默认输出是一个函数。

其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。
```js
// app.js
import customName from './test.js';
customName(); // 'foo'
```
上面代码的import命令，可以用任意名称指向test.js输出的方法，这时就不需要知道原模块输出的函数名。

export default命令用在非匿名函数前，也是可以的。
```js
// test.js
export default function foo() {
  console.log('foo');
}


// 或者写成

function foo() {
  console.log('foo');
}

export default foo;
// 这种写法export 不支持
```


下面比较一下默认输出和正常输出。
```js
// 第一组
export default function crc32() { // 输出
  // ...
}

import crc32 from 'crc32'; // 输入

// 第二组
export function crc32() { // 输出
  // ...
};

import {crc32} from 'crc32'; // 输入
```

export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用去解构导出的变量，因为只可能对应一个方法。


```js
var str1='暴露的内容1';
var str2='暴露的内容2';
var str3='暴露的内容3';
// 修改部分
export default {
  str1,
  str2,
  str3
}
console.log(123) // 并不是说export default后的代码就不执行了，只是放到最下面比较直观
```

![](https://user-gold-cdn.xitu.io/2019/12/19/16f1c30bdff93879?w=591&h=163&f=png&s=12500)

本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。
```js
// test.js
function add(x, y) {
  return x * y;
}
export {add as default};
// 等同于
// export default add;

// app.js
import { default as xxx } from './test.js';
// 等同于
// import xxx from 'modules';
```

正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句，function特殊。
```js
// 正确
export var a = 1;

// 正确
var a = 1;
export default a;


// 正确
export default function(){...}

// 错误
export default var a = 1;



```
上面代码中，export default a的含义是将变量a的值赋给变量default，export只是单纯的导出，没有赋值这一步，所以，最后一种写法会报错。

有了export default命令，输入模块时就非常直观了，以输入 lodash 模块为例。
```js
import _ from 'lodash';
// 如果想在一条import语句中，同时输入默认方法和其他变量，可以写成下面这样。
import _, { each } from 'lodash';


// 对应上面代码的export语句如下。
export default function (obj) {
  // ···
}
export function each(obj, iterator, context) {
  // ···
}
export { each as forEach };
```

上面代码的最后一行的意思是，暴露出forEach接口，默认指向each接口，即forEach和each指向同一个方法。


export 与 import 的复合写法
如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起。
```js
export { foo, bar } from 'my_module';

// 等同于
import { foo, bar } from 'my_module';
export { foo, boo};
```

跟export 最后的例子比较
```js
var foo='bar';
setTimeout(()=>foo= 'baz',1000)
export default foo


// 导入
import foo from '...';
console.log(foo)
setTimeout(()=>console.log(foo),1000)
```
两次都是输出bar

```js
// 导出
let counter = 3;
function incCounter() {
  counter++;
}


export default {
  counter,
  incCounter
}

//导入
import obj from './test.js';
console.log(obj.counter);

// 直接结构不行,报错,这里也好理解，如果能直接结构的话，导出跟export{counter}有什么区别呢
import {counter} from './test.js'
```

## ES6模块加载的实质  
ES6模块加载的机制，与CommonJS模块完全不同。CommonJS模块输出的是一个值的拷贝，而ES6模块输出的是值的引用。

CommonJS模块输出的是被输出值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。请看下面这个模块文件lib.js的例子。
```js
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};
```
上面代码输出内部变量counter和改写这个变量的内部方法incCounter。然后，在main.js里面加载这个模块。
```js
// main.js
var mod = require('./lib');

console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3
```


上面代码说明，lib.js模块加载以后，它的内部变化就影响不到输出的mod.counter了。这是因为mod.counter是一个原始类型的值，会被缓存。除非写成一个函数，才能得到内部变动后的值。
```js
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  get counter() {
    return counter
  },
  incCounter: incCounter,
};
```
上面代码中，输出的counter属性实际上是一个取值器函数。现在再执行main.js，就可以正确读取内部变量counter的变动了。
```
$ node main.js
3
4
```

还有一种解决方式
```js
// lib.js
var counter = 3;
function incCounter() {
  this.counter++;
}
module.exports = {
    counter,
  incCounter: incCounter
};
```
```js
$ node main.js
3
4
```

CommonJS的require导入包，会立即执行,ES6模块的运行机制与CommonJS不一样，它遇到模块加载命令import时，不会去执行模块，而是只生成一个动态的只读引用。等到真的需要用到时，再到模块里面去取值，换句话说，ES6的输入有点像Unix系统的“符号连接”，原始值变了，import输入的值也会跟着变。因此，ES6模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

还是举上面的例子。
```js
// lib.js
export let counter = 3;
export function incCounter() {
  counter++;
}

// main.js
import { counter, incCounter } from './lib';
console.log(counter); // 3
incCounter();
console.log(counter); // 4
```
上面代码说明，ES6模块输入的变量counter是活的，完全反应其所在模块lib.js内部的变化。


```js
// counter.js
let counter = 10;
export default counter;
// index.js
import myCounter from "./counter";

myCounter += 1;

console.log(myCounter); // 报错啊,只有导入的方法可以修改导入的值
```

```js
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
//  running sum.js, running index.js, 3

//import命令是编译阶段执行的，在代码运行之前。因此这意味着被导入的模块会先运行，而导入模块的文件会后执行。

// 这是CommonJS中require（）和import之间的区别。使用require()，您可以在运行代码时根据需要加载依赖项。 如果我们使用require而不是import，running index.js，running sum.js，3会被依次打印。
```


```js

// module.js 
export default () => "Hello world"
export const name = "Lydia"

// index.js 
import * as data from "./module"

console.log(data) // 导出的所有
```

module.export[  ]的导出 


ES6 的模块化 
值的引用 
静态分析：指不需要执行代码，只从字面量上对代码进行分析，方便优化代码体积，比如通过 Tree-shaking 操作消除模块中没有被引用或者执行结果不会被用到的无用代码

commonJS 
值的拷贝 
动态声明 



```js
// CommonJS模块
let { stat, exists, readfile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
```
即使语法结构，加载的仍然是整个fs模块。
上面代码的实质是整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs），然后再从这个对象上面读取 3 个方法。这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。
 
```js
// ES6模块
import { stat, exists, readFile } from 'fs';
```
上面代码的实质是从fs模块加载 3 个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。当然，这也导致了没法引用 ES6 模块本身，因为它不是对象。


import不能在if else中引入，必须在文件首部引用，不能使用表达式。为了对代码进行静态分析。静态分析是指不需要执行代码，只从字面量上对代码进行分析。这样做的好处是方便优化代码体积，比如通过 Tree-shaking 操作消除模块中没有被引用或者执行结果不会被用到的无用代码。



### 对比总结 
- ES6模块在编译时，就能确定模块的依赖关系，以及输入和输出的变量。
CommonJS 模块，运行时加载。

- ES6 模块自动采用严格模式，无论模块头部是否写了 "use strict";  

- require 可以做动态加载，import 语句做不到，import 语句必须位于顶层作用域中。 


- ES6 模块中顶层的 this 指向 undefined，CommonJS 模块的顶层 this 指向当前模块。  

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。 


[参考内容](http://caibaojian.com/es6/module.html)
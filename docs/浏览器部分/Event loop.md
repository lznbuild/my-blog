渲染进程中都有一个主线程，并且主线程非常繁忙，既要处理 DOM，又要计算样式，还要处理布局，同时还需要处理 JavaScript 任务以及各种输入事件。要让这么多不同类型的任务在主线程中有条不紊地执行，这就需要一个系统来统筹调度这些任务，这个统筹调度系统就是消息队列和事件循环系统。

首先，JS分为同步任务和异步任务。
同步任务都在主线程上执行，会形成一个执行栈。

主线程之外，事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放一个事件回调.一旦执行栈中的所有同步任务执行完毕，系统就会读取任务队列，将可运行的异步任务(任务队列中的事件回调，只要任务队列中有事件回调，就说明可以执行)添加到执行栈中，开始执行。

要比较同步和异步，可以将调用函数的过程分成两部分：执行操作和返回结果 

程序在同步调用函数的时候，会立即执行操作并等待得到返回结果后再继续运行，也就是说同步执行是阻塞的。

而异步会将操作和结果在时间上分隔开来，在当下执行操作，在未来某个时刻返回结果，在这个等待返回结果的过程中，程序将继续执行后面的代码。也就是说异步执行是非阻塞的。

```js
async function fn(){
	await console.log(1)
  console.log(2)
}

new Promise((resolve,reject)=>{
  console.log(3)
  resolve(4)
}).then(res=>console.log(res))



fn()

// 3 1 4 2
```



浏览器渲染进程中所有运行在主线程上的任务都需要先添加到消息队列，然后事件循环系统再按照顺序执行消息队列中的任务。


### 常见的宏任务

- 主代码块  
- setTimeout  
- setInterval  
- setImmediate   (Node环境）  


### 常见微任务

process.nextTick (Node)  
Promise.then()  


在宏观任务中，JavaScript 的 Promise 还会产生异步代码，**JavaScript 必须保证这些异步代码在一个宏观任务中完成，因此，每个宏观任务中又包含了一个微观任务队列。**

```js
setTimeout(() => { console.log(1) },0);

new Promise((resolve,reject)=> {
  console.log(2);
  resolve()
  console.log(55)
}).then(()=>{
  new Promise((resolve,reject)=> {
      console.log(3);
      resolve()
  }).then(()=> {
      console.log(44);
  })
})
    // 2 55  3 44 1
```

我们现在要实现一个红绿灯，把一个圆形 div 按照绿色 3 秒，黄色 1 秒，红色 2 秒循环改变背景色，你会怎样编写这个代码呢  
```js
function sleep(duration){
  return new Promise(function(resolve){
      setTimeout(resolve, duration);
  })
}
async function changeColor(duration,color){
  document.getElementById("traffic-light").style.background = color;
  await sleep(duration);
}
async function main(){
  while(true){
      await changeColor(3000,"green");
      await changeColor(1000, "yellow");
      await changeColor(2000, "red");
  }
}
main()
```

总结，当我们执行 JS 代码的时候其实就是往执行栈中放入函数，那么遇到异步代码的时候该怎么办？其实当遇到异步的代码时，会被挂起并在需要执行的时候加入到 Task（有多种 Task） 队列中。一旦执行栈为空，Event Loop 就会从 Task 队列中拿出需要执行的代码并放入执行栈中执行，所以本质上来说 JS 中的异步还是同步行为。
```js
console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')
// script start => async2 end => Promise => script end =>async1 end => promise1 => promise2 => setTimeout
```
把 await 看成是让出线程的标志

Promise.resolve(返回值).then()，然后 await 后的代码全部被包裹进了 then 的回调中，所以 console.log('async1 end') 会优先执行于 console.log('promise1'),console.log('promise2')


```js
async function asyncFn() {
    console.log('asyncFn')
    let res = await asyncFn2()
    console.log(res)
}

async function asyncFn2() {
    console.log('asyncFn2')
    let res = await fn3()
    console.log(res)
    return 'asyncFn2 return'
}

function fn3() {
    console.log('fn3')
}

setTimeout(() => {
    console.log('setTimeout')
}, 0)

console.log('script start')

asyncFn()

let promise = new Promise(resolve => {
    console.log('promise')
    resolve('promise resolved')
    console.log('after promise resolved')
}).then(res => {
    console.log(res)
})

console.log('script end');

```


```js
   function fn1() {
      console.log("fn1");
    }

    async function fn2() {
      console.log("fn2");
      await new Promise(resolve => resolve());
      console.log("fn end");
    }

    setTimeout(() => {
      console.log("set");
    });

    new Promise(resolve => {
      resolve(10);
    }).then(ret => {
      console.log(ret);
    });

    function data() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(20);
        }, 0);
      });
    }

    async function fn3() {
      console.log("fn3");
      const result = await data();
      console.log(result);
      console.log("fn3 end");
    }

    fn1();
    fn2();
    fn3();
    // fn1  fn2  fn3  10  fn end  set  20   fn3 end
``` 


浏览器为了能够使宏任务和DOM任务有序的进行，会在一个宏任务执行结果后，在下一个宏任务执行前，GUI渲染线程开始工作，对页面进行渲染。 

```js
document.body.style = "background:red"
document.body.style = "background:green"
document.body.style = "background:blue"
document.body.style = "background:gray"
```
以上代码属于同一个宏任务，所以只会看到gray颜色  

```js
document.body.style = 'background:blue';
setTimeout(function(){
    document.body.style = 'background:black'
},0)
```

颜色一闪而过  

### 每一帧要做的事
宏任务===> 微任务==> requestanimationframe ==> 渲染(html解析，样式计算，布局，更新图层树，paint绘制，Composite合成，栅格化) ==> （还有空闲时间）requestIdleVallback  



浏览器需要时间将每一帧绘制到屏幕上，大约10ms用来执行js代码。




```js
let a = 0;

let b = async () => {
  a = a + (await 10); // a= await 10 +a 就是不一样的结果了
  console.log("2", a); // -> '2' 10
};

b();

a++;

console.log("1", a); // -> '1' 1
```  

冻结函数作用域，往协程上想，

## setTimeout 是准时的吗




异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。
## 参考


https://juejin.im/post/5a6547d0f265da3e283a1df7#heading-11


https://juejin.im/post/5e0adffbe51d4541013f0bf4?utm_source=gold_browser_extension


https://juejin.im/post/5e58c618e51d4526ed66b5cf?utm_source=gold_browser_extension

https://juejin.im/post/5ec73026f265da76da29cb25?utm_source=gold_browser_extension 



## node 运行机制 

（1）V8引擎解析JavaScript脚本。

（2）解析后的代码，调用Node API。

（3）libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎。

（4）V8引擎再将结果返回给用户。

除了setTimeout和setInterval这两个方法，Node.js还提供了另外两个与"任务队列"有关的方法：process.nextTick和setImmediate。


process.nextTick方法可以在当前"执行栈"的尾部----下一次Event Loop（主线程读取"任务队列"）之前----触发回调函数。也就是说，它指定的任务总是发生在所有异步任务之前。

setImmediate方法则是在当前"任务队列"的尾部添加事件，也就是说，它指定的任务总是在下一次Event Loop之前执行，这与setTimeout(fn, 0)很像

setImmediate指定的回调函数，总是排在setTimeout前面



由于process.nextTick指定的回调函数是在本次"事件循环"触发，而setImmediate指定的是在下次"事件循环"触发，所以很显然，前者总是比后者发生得早，而且执行效率也高 


```js
setImmediate(function (){
  setImmediate(function A() {
    console.log(1);
    setImmediate(function B(){console.log(2);});
  });

  setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
  }, 0);
});
// 1
// TIMEOUT FIRED
// 2
```
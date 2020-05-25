渲染进程都有一个主线程，并且主线程非常繁忙，既要处理 DOM，又要计算样式，还要处理布局，同时还需要处理 JavaScript 任务以及各种输入事件。要让这么多不同类型的任务在主线程中有条不紊地执行，这就需要一个系统来统筹调度这些任务，这个统筹调度系统就是我们今天要讲的消息队列和事件循环系统

首先要知道，JS分为同步任务和异步任务
同步任务都在主线程(这里的主线程就是JS引擎线程)上执行，会形成一个执行栈

主线程之外，事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放一个事件回调.一旦执行栈中的所有同步任务执行完毕(也就是JS引擎线程空闲了)，系统就会读取任务队列，将可运行的异步任务(任务队列中的事件回调，只要任务队列中有事件回调，就说明可以执行)添加到执行栈中，开始执行

async function fn(){
	await console.log(1)
  	console.log(2)
}

new Promise((res)=>{
  console.log(3)
  res(4)
}).then(res=>console.log(res))
fn()

// 3 1 4 2




浏览器渲染进程中所有运行在主线程上的任务都需要先添加到消息队列，然后事件循环系统再按照顺序执行消息队列中的任务


常见的宏任务

主代码块
setTimeout
setInterval
setImmediate ()-Node
requestAnimationFrame ()-浏览器


常见微任务

process.nextTick ()-Node
Promise.then()
catch
finally
Object.observe
MutationObserver


宿主发起的任务称为宏观任务，把 JavaScript 引擎发起的任务称为微观任务

宏观任务的队列就相当于事件循环。在宏观任务中，JavaScript 的 Promise 还会产生异步代码，JavaScript 必须保证这些异步代码在一个宏观任务中完成，因此，每个宏观任务中又包含了一个微观任务队列
![](https://user-gold-cdn.xitu.io/2019/12/29/16f51edcd71c3918?w=1398&h=1636&f=png&s=283093)
有了宏观任务和微观任务机制，我们就可以实现 JavaScript 引擎级和宿主级的任务了，例如：Promise 永远在队列尾部添加微观任务。setTimeout 等宿主 API，则会添加宏观任务。


Promise 的 then 回调是一个异步的执行过程

Promise 产生的是 JavaScript 引擎内部的微任务，而 setTimeout 是浏览器 API，它产生宏任务


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
    <!-- 微任务的优先级比宏任务要高 -->


我们现在要实现一个红绿灯，把一个圆形 div 按照绿色 3 秒，黄色 1 秒，红色 2 秒循环改变背景色，你会怎样编写这个代码呢
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


大家也知道了当我们执行 JS 代码的时候其实就是往执行栈中放入函数，那么遇到异步代码的时候该怎么办？其实当遇到异步的代码时，会被挂起并在需要执行的时候加入到 Task（有多种 Task） 队列中。一旦执行栈为空，Event Loop 就会从 Task 队列中拿出需要执行的代码并放入执行栈中执行，所以本质上来说 JS 中的异步还是同步行为。

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
// script start => async2 end => Promise => script end => promise1 => promise2 => async1 end => setTimeout

把 await 看成是让出线程的标志

Promise.resolve(返回值).then()，然后 await 后的代码全部被包裹进了 then 的回调中，所以 console.log('async1 end') 会优先执行于 setTimeout


微任务包括 process.nextTick ，promise ，MutationObserver，其中 process.nextTick 为 Node 独有。

宏任务包括 script ， setTimeout ，setInterval ，setImmediate ，I/O ，UI rendering。


单线程语言：JavaScript 的设计就是为了处理浏览器网页的交互（DOM操作的处理、UI动画等），决定了它是一门单线程语言。

如果有多个线程，它们同时在操作 DOM，那网页将会一团糟。

JavaScript 是单线程的，那么处理任务是一件接着一件处理，从上往下顺序执行

那如果一个任务的处理耗时（或者是等待）很久的话，如：网络请求、定时器、等待鼠标点击等，后面的任务也就会被阻塞，也就是说会阻塞所有的用户交互（按钮、滚动条等），会带来极不友好的体验。


定时器触发线程也只是为 setTimeout(..., 1000) 定时而已，时间一到，还会把它对应的回调函数(callback)交给 消息队列 去维护，JS引擎线程会在适当的时候去消息队列取出消息并执行

JS引擎线程遇到异步（DOM事件监听、网络请求、setTimeout计时器等...），会交给相应的线程单独去维护异步任务，等待某个时机（计时器结束、网络请求成功、用户点击DOM），然后由 事件触发线程 将异步对应的 回调函数 加入到消息队列中，消息队列中的回调函数等待被执行。
同时，JS引擎线程会维护一个 执行栈，同步代码会依次加入执行栈然后执行，结束会退出执行栈。

如果执行栈里的任务执行完成，即执行栈为空的时候（即JS引擎线程空闲），事件触发线程才会从消息队列取出一个任务（即异步的回调函数）放入执行栈中执行

执行机制：


执行一个宏任务（栈中没有就从事件队列中获取）


执行过程中如果遇到微任务，就将它添加到微任务的任务队列中


宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）


当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染


渲染完毕后，JS引擎线程继续，开始下一个宏任务（从宏任务队列中获取）

在某一个macrotask执行完后，就会将在它执行期间产生的所有microtask都执行完毕（在渲染前）

从宏任务的头部取出一个任务执行；
执行过程中若遇到微任务则将其添加到微任务的队列中；
宏任务执行完毕后，微任务的队列中是否存在任务，若存在，则挨个儿出去执行，直到执行完毕；
GUI 渲染；
回到步骤 1，直到宏任务执行完毕；


使用 requestAnimationFrame 不需要设置具体的时间，由系统来决定回调函数的执行时间，requestAnimationFrame 里面的回调函数是在页面刷新之前执行，它跟着屏幕的刷新频率走，保证每个刷新间隔只执行一次，内如果页面未激活的话，requestAnimationFrame 也会停止渲染，这样既可以保证页面的流畅性，又能节省主线程执行函数的开销

## 参考
https://juejin.im/post/5be5a0b96fb9a049d518febc


https://juejin.im/post/5a6547d0f265da3e283a1df7#heading-11


https://juejin.im/post/5e0adffbe51d4541013f0bf4?utm_source=gold_browser_extension


https://juejin.im/post/5e58c618e51d4526ed66b5cf?utm_source=gold_browser_extension

https://juejin.im/post/5ec73026f265da76da29cb25?utm_source=gold_browser_extension
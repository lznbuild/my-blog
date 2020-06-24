渲染进程中都有一个主线程，并且主线程非常繁忙，既要处理 DOM，又要计算样式，还要处理布局，同时还需要处理 JavaScript 任务以及各种输入事件。要让这么多不同类型的任务在主线程中有条不紊地执行，这就需要一个系统来统筹调度这些任务，这个统筹调度系统就是消息队列和事件循环系统。

首先，JS分为同步任务和异步任务。
同步任务都在主线程上执行，会形成一个执行栈。

主线程之外，事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放一个事件回调.一旦执行栈中的所有同步任务执行完毕，系统就会读取任务队列，将可运行的异步任务(任务队列中的事件回调，只要任务队列中有事件回调，就说明可以执行)添加到执行栈中，开始执行。

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

每一帧要做的事
宏任务===》 微任务==》 requestanimationframe ==> 渲染 ==》 （还有空闲时间）requestIdleVallback

## 参考


https://juejin.im/post/5a6547d0f265da3e283a1df7#heading-11


https://juejin.im/post/5e0adffbe51d4541013f0bf4?utm_source=gold_browser_extension


https://juejin.im/post/5e58c618e51d4526ed66b5cf?utm_source=gold_browser_extension

https://juejin.im/post/5ec73026f265da76da29cb25?utm_source=gold_browser_extension
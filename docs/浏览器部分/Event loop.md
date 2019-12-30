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
    }).then(()=>{
        new Promise((resolve,reject)=> {
            console.log(3);
            resolve()
        }).then(()=> {
            console.log(44);
        })
    })
    // 2 3 44 1
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
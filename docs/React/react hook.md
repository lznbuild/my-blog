## React hooks缺点 


### 状态不同步 
```js
import React, { useState } from "react";
​
const Counter = () => {
  const [counter, setCounter] = useState(0);
​
  const onAlertButtonClick = () => {
    setTimeout(() => {
      alert("Value: " + counter);
    }, 3000);
  };
​
  return (
    <div>
      <p>You clicked {counter} times.</p>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <button onClick={onAlertButtonClick}>
        Show me the value in 3 seconds
      </button>
    </div>
  );
};
​
export default Counter;
``` 
拿到的是旧值。 class组件不会。 


```js
import React, { useState, useRef, useEffect } from "react";
​
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(counter);
​
  const onAlertButtonClick = () => {
    setTimeout(() => {
      alert("Value: " + counterRef.current);
    }, 3000);
  };
​
  useEffect(() => {
    counterRef.current = counter;
  });
​
  return (
    <div>
      <p>You clicked {counter} times.</p>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <button onClick={onAlertButtonClick}>
        Show me the value in 3 seconds
      </button>
    </div>
  );
};
​
export default Counter;
``` 



## 闭包变量太坑 

```js
  useEffect(() => {
    document.querySelector('#dom').addEventListener('click', () => {
      setNum((prevState) => prevState + 1); // 没问题 
      setNum(num+1) // num 只是初始值
    });
  }, []);
```


## 只能在函数组件顶层作用域去使用hooks 


## 需要缓存值,用useRef  

## 自定义hooks使用第三方的组件,react-use或者umi


### 理念，实现，源码
函数式编程与React hook 的结合，就是把所有的副作用抽离。代数效应。
suspense 组件可以单独使用？不可以

hooksDispatcherOnMount, hooksDispatcherOnUpdate mount和update阶段调用的不是同一个useState，对应练习中的isMount的作用

react hooks 有哪些优缺点

### useLayoutEffect 和 useEffect 区别 
useLayoutEffect 先于useEffect执行, 会在绘制之前运行完成。useLayoutEffect 会阻塞渲染.
默认情况下，effect 将在每轮渲染结束后执行。
会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新.

useEffect 在第二个参数有值的情况下，第一次不执行return ，后续先执行return 函数，再执行本身的函数.

前端项目主要用的是ES版本是多少 

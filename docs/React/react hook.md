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
      setNum(num+1) // 只会执行一次 
    });
  }, []);
```


## 只能在函数组件顶层作用域去使用hooks 


## 需要缓存值,用useRef  


## 自定义hooks使用第三方的组件,react-use或者umi
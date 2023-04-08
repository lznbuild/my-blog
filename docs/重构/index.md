### 基础
命名，拼写错误，缩写，

### 渐进式重构
避免新逻辑对旧逻辑的侵入性
高内聚，低耦合

### 合理冗余
避免更多的if else 面条式代码

```js
const Item = ({ title, content }) => (
  <div>
    <h4>{title}</h4>
    <p>{content}</p>
  </div>
);

const Item = ({ title, content }, index) => (
  <div>
    <h4>
      {title}
      {index === 0 && <span>hot</span>}
      {index === 1 && <a href="xxx">去看看</a>}
    </h4>
    {index === 1 && <h5>副标题</h5>}
    <p>
      {index !== 0 && content}
      {index === 0 && <button>领福利<button>}
    </p>
  </div>
);

// 第一个展位
if (index === 0) {
  return (
    <div>
      <h4>标题一<span>hot</span></h4>
      <p><button>领福利<button></p>
    </div>
  );
}
// 第二个展位
if (index === 1) {
  return (
    <div>
      <h4>标题二<a href="xxx">去看看</a></h4>
      <h5>副标题</h5>
      <p>内容</p>
    </div>
  );
}

```


### 过度抽象
普通object + function 能解决，不需要写class 封装


### 逻辑改变
```js
function fn(score) {
  if(score >= 90) {
    return 'A'
  }
    if(score >= 80) {
    return 'B'
  }
    if(score >= 70) {
    return 'C'
  }
}

function fn2() {
  const table = {
    100: 'A',
    90: 'A'
    80:'B'
    70: 'C'
  }

  return table[Math.floor(score/10)*10]
}
```


只关注眼前的一个功能，没有好好思考，这个功能如何与整个系统整合。后续迭代可能会导致严重的问题。
- 开发团队不清楚技术实现背后的原因，项目长远的设计是怎样的
- 某些地方偷工减料，钻空子，各自为战，没有统一代码标准
- 对整个系统只有片面的认知
import { createStore, applyMiddleware } from "./index.js";
import React from 'react';


const counterReducer = function (state = 0, action) {
  let num = action.payload || 1;
  switch (action.type) {
    case 'add':
      return state + num
    default:
      return state;
  }
}

// 自定义中间件
function logger({ dispatch, getState }) {
  //返回真正中间件任务执行函数
  return dispatch => action => {
    // 执行中间件任务
    console.log(action.type + '执行');
    // 执行下一个中间件
    return dispatch(action)
  }
}

// thunk的实现
const thunk = ({ dispatch, getState }) => dispatch => action => {
  if (typeof action == 'function') {
    return action(dispatch, getState)
  }
  return dispatch(action)
}


const store = createStore(counterReducer, applyMiddleware(logger, thunk));


export default class MyText extends React.Component {

  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <>
        <div>{store.getState()}</div>
        <button onClick={() => store.dispatch({ type: 'add' })}>+</button>
        <button onClick={() => store.dispatch(function () {
          setTimeout(() => {
            store.dispatch({ type: 'add' })
          }, 1000)
        })}>async +</button>
      </>
    );
  }
}
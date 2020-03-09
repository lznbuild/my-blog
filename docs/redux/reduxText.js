/// 

import { createStore, applyMiddleware } from "./index.js";
import React from "react";

const counterReducer = function(state = 0, action) {
  let num = action.payload || 1;
  switch (action.type) {
    case "add":
      return state + num;
    default:
      return state;
  }
};

// 自定义中间件
function logger({ dispatch, getState }) {
  //返回真正中间件任务执行函数
  return dispatch => action => {
    // 执行中间件任务
    console.log(action.type + "执行");
    // 执行下一个中间件
    return dispatch(action);
  };
}

// thunk的实现
const thunk = ({ dispatch, getState }) => dispatch => action => {
  if (typeof action == "function") {
    return action(dispatch, getState);
  }
  return dispatch(action);
};

const store = createStore(counterReducer, applyMiddleware(logger, thunk));

export default class MyText extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }
  render() {
    return (
      <>
        <div>{store.getState()}</div>
        <button onClick={() => store.dispatch({ type: "add" })}>+</button>
        <button
          onClick={() =>
            store.dispatch(function() {
              setTimeout(() => {
                store.dispatch({ type: "add" });
              }, 1000);
            })
          }
        >
          async +
        </button>
      </>
    );
  }
}


/// index.js
export function createStore(reducer, enhancer) {
  // 如果存在enhancer
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }

  let currentState = undefined;
  const currentListeners = []; // 回调函数数组

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    // 修改
    currentState = reducer(currentState, action);

    //变更通知
    currentListeners.forEach(v => v());
    return action;
  }

  function subscribe(cb) {
    currentListeners.push(cb);
  }

  // 初始化状态
  dispatch({ type: "@@@@/ABC" });

  return {
    getState,
    dispatch,
    subscribe
  };
}

export function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    // 完成之前createStore工作
    const store = createStore(...args);
    let dispatch = store.dispatch;
    //强化dispatch
    const midApi = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    };

    // chain是所有中间件执行完后的返回值所组成的数组
    const chain = middlewares.map(mw => mw(midApi));
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch
    };
  };
}

export function compose(...funcs) {
  // 聚合函数数组为一个函数 [fn1,fn2] => fn2(fn1())
  return funcs.reduce((left, right) => (...args) => right(left(...args)));
}
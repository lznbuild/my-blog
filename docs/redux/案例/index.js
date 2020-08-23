export function createStore(reducer, enhancer) {
  /*
  (...args) => {
    // 完成之前createStore工作
    const store = createStore(...args);
    let dispatch = store.dispatch;
    //强化dispatch
    const midApi = {
      getState: store.getState,
      dispatch: (...args)=> dispatch(...args)
    }

    // chain是所有中间件执行完后的返回值所组成的数组
    const chain = [logger,thunk].map(mw => mw(midApi));
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch
    }
  }
  */

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

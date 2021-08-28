let isMount = true;
let workInProjressHook = null; // 指针


const fiber = {
  stateNode: App,
  memoizedState:null
}


function useState(initialState) {
  let hook;

  if (isMount) {
    // 首次渲染？
    hook = {
      memoizedState: initialState,
      next: null,
      queue: {
        pending: null
      }
    }

    if (!fiber.memoizedState) {
      fiber.memoizedState = hook;
    } else {
      // 新hook 连接
      workInProjressHook.next = hook;
    }

    workInProjressHook = hook;

  } else {
    hook = workInProjressHook;
    workInProjressHook = workInProjressHook.next;
  }

  // 旧状态
  let baseState = hook.memoizedState;

  if (hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next;
    do {
      const action = firstUpdate.action;
      baseState = action(baseState);
      firstUpdate = firstUpdate.next;
    } while (firstUpdate !== hook.queue.pending.next)
    
    hook.queue.pending = null;
  }

  hook.memoizedState = baseState;
  return [baseState, dispatchAction.bind(null, hook.queue)]

}

function dispatchAction(queue, action) {
  // 环状链表，为了优先级 
  const update = {
    action,
    next:null
  }

  if (queue.pending === null) {
    // u0 - u0 - u0
    update.next = update;
  } else {
    // u1 - u0 - u1
    update.next = queue.pending.next;
    queue.pending.next = update;
  }

  queue.pending = update;
  schedule();
}


function schedule() {
  workInProjressHook = fiber.memoizedState; // 复位
  const app = fiber.stateNode();
  isMount = false;
  return app;
}


function App() {
  const [num, updateNum] = useState(0);
  const [num1, updateNum1] = useState(10);

  console.log(isMount, num);
  console.log(isMount, num1);

  return {
    onClick() {
      updateNum(num => num + 1);
    },
    onFocus() {
      updateNum1(num1 => num1 +10)
    }
  }
}


window.app = schedule();
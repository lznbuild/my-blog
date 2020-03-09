// 一以下内容的构建过程没问题，但是patch更新过程有问题，目前还没有发现

const vnodeType = {
  HTML: "HTML",
  TEXT: "TEXT",
  COMPONENT: "COMPONENT",
  CLASS_COMPONENT: "CLASS_COMPONENT"
};

const childType = {
  EMPTY: "EMPRY",
  SINGLE: "SINGLE",
  MULTIPLE: "MULTIPLE"
}; 

// 新建虚拟dom
// 名字，属性，子元素
function createElement(tag, data, children=null) {
  let flag;

  if (typeof tag == "string") {
    // 普通的html标签
    flag = vnodeType.HTML;
  } else if (typeof tag == "function") {
    // 函数类型的组件
    flag = vnodeType.COMPONENT;
  } else {
    // 普通文本
    flag = vnodeType.TEXT;
  }

  let childrenFlag;

  if (children == null) {
    childrenFlag = childType.EMPTY;
  } else if (Array.isArray(children)) {
    // 只要是数组，都是多个的类型MULTIPLE
    let length = children.length;
    if (length === 0) {
      childrenFlag = childType.EMPTY;
    } else {
      childrenFlag = childType.MULTIPLE;
    }
  } else {
    //其他情况是文本
    childrenFlag = childType.SINGLE;
    children = createTextVnode(children + "");
  }

  // 返回vnode,这个就是dom节点对应的虚拟dom，js对象
  return {
    flag, // vnode类型
    tag, // 标签
    data,// 相当于react中的props
    key:data&&data.key,
    children,
    childrenFlag,
    el:null //存储对应的真实dom节点
  };
}

// 渲染
function render(vnode, container) {
  //区分首次渲染和再次渲染
  if (container.vnode) {
    // 更新，老的vnode，新的vnode
    patch(container.vnode,vnode,container)
  } else {
    mount(vnode,container)
  }
  
  container.vnode =vnode
}


function patch(prev,next,container) {
  let nextFlag = next.flag;
  let prevFlag = prev.flag;
  if (nextFlag !== prevFlag) {
    // 最顶层的dom类型不一样，直接全部替换掉，没有优化空间
    replaceVnode(prev,next,container)
  } else if (nextFlag == vnodeType.HTML) {
    patchElement(prev,next,container) //TODO:
  } else if (nextFlag == vnodeType.TEXT) {
    patchText(prev,next)
  }
}


function patchElement(prev, next, container) {
  // 最顶层的dom标签不一样，直接全部替换，还是没有优化空间
  if (prev.tag !== next.tag) {
    replaceVnode(prev,next,container)
    return
  }
  let el = (next.el = prev.el);
  let prevData = prev.data;
  let nextData = next.data;
  if (nextData) {
    for (let key in nextData) {
      let prevVal = prevData[key];
      let nextVal = nextData[key];
      patchData(el,key,prevVal,nextVal)
    }
  }
  if (prevData) {
    for (let key in prevData) {
      let prevVal = prevData[key];
      if (prevVal && !nextData.hasOwnProperty(key)) {
       patchData(el,key,prevVal,null)
     }
    }
  }


  // data更新完毕，下面更新子元素
  // patchChildren(
  //   prev.childrenFlag,
  //   next.childrenFlag,
  //   prev.children,
  //   next.children,
  //   el
  // )
}


function patchChildren(
    prevChildrenFlag,
    nextChildrenFlag,
    prevChildren,
    nextChildren,
    container
) {
  //更新子元素
  // 1.老的是单独地
  // 老的是空的
  // 老的是多个
  // 2.新的是单独的
  // 新的是空的
  // 新的是多个
  // switch (prevChildrenFlag) {
    // case childType.SINGLE:
    //   switch (nextChildrenFlag) {
    //     case childType.SINGLE:
    //       patch(prevChildren,nextChildren,container)
    //       break;
    //     case childType.EMPTY:
    //       container.removeChild(prevChildren.el)
    //       break;
    //     case childType.MULTIPLE:
    //       container.removeChild(prevChildren.el)
    //       for (let i = 0; i < nextChildren.length; i++){
    //         mount(nextChildren[i],container)
    //       }
    //       break;
    //   }
    //   break;
    // case childType.EMPTY:
    //    switch (nextChildrenFlag) {
    //      case childType.SINGLE:
    //        mount(nextChildren,container)
    //        break;
    //      case childType.EMPTY:
           
    //        break;
    //      case childType.MULTIPLE:
    //         for (let i = 0; i < nextChildren.length; i++) {
    //           mount(nextChildren[i], container);
    //         }
    //        break;
    //    }
    //   break;
    // case childType.MULTIPLE:
    //   switch (nextChildrenFlag) {
        //  case childType.SINGLE:
        //     for (let i = 0; i < prevChildren.length; i++) {
        //       container.removeChild(prevChildren[i].el)
        //    }
        //    mount(nextChildren,container)
        //    break;
        //  case childType.EMPTY:
        //     for (let i = 0; i < prevChildren.length; i++) {
        //       container.removeChild(prevChildren.el);
        //     }
        //    break;
        //  case childType.MULTIPLE:

           //TODO:只看这里就可以了
          //  console.log('走');
           // 众多虚拟dom,就在这里进行区分，每家优化策略不一样
          //  // 老的是数组，新的也是数组
          //  let lastIndex = 0;
          //  for (let i = 0; i < nextChildren.length; i++){
          //   let nextVnode = nextChildren[i]
          //   let j;
          //   let find = false;
          //   for (j=0; j < prevChildren.length; i++){
          //     let preVnode = prevChildren[j];
          //      if (preVnode.key === nextVnode.key) {
          //        find = true;
          //         // key相同，我们认为是同一个元素
          //        console.log('相同元素');
          //         patch(preVnode, nextVnode, container)
          //         if (j < lastIndex) {
          //           // 需要移动
          //           let flagNode = nextChildren[i].el.nextSibling;
          //           container.insertBefore(preVnode.el, flagNode)
          //           break;
          //         } else {
          //           lastIndex = j
          //         }
          //      }

          //   }

        //      if (!find) {
        //        //需要新增的
        //        let flagNode = i == 0 ? prevChildren[0].el : nextChildren[i - 1].el.nextSibling;
        //        mount(nextVnode,container,flagNode)
        //      }

        //    }
        //   //  移除不需要的元素
        //    for (let i = 0; i < prevChildren.length; i++){
        //      const prevVnode = prevChildren[i];
        //      const has = nextChildren.find(next => next.key == prevVnode.key)
        //      if (!has) {
        //        container.removeChild(prevVnode.el)
        //      }
        //    }
        //   break;
        // default:
        //   console.log(2);
        //   break;
      // }
      //=======到底==========
  //     break;
  //   default:
  //     break;
  // }
}

function patchText(prev, next) {
  let el = (next.el = prev.el)
  if (next.children !== prev.children) {
    el.nodeValue=next.children
  }
  
}

function replaceVnode(prev, next, container) {
  container.removeChild(prev.el);
  mount(next,container)
}

 
// 挂载元素
function mount(vnode, container,flagNode) {
  let { flag } = vnode;
  if (flag == vnodeType.HTML) {
    mountElement(vnode,container,flagNode)
  } else if (flag == vnodeType.TEXT) {
    mountText(vnode, container)
  }
} 


function mountElement(vnode,container,flagNode) {
  let dom = document.createElement(vnode.tag);
  vnode.el = dom;
  let { data, children, childrenFlag } = vnode;
  // 挂载data属性
  if (data) {
    for (let key in data) {
      // 节点，名字，老值，新值
      patchData(dom,key,null,data[key])
    }
  }
  if (childrenFlag!==childType.EMPTY) {
    if (childrenFlag==childType.SINGLE) {
      mount(children,dom)
    } else if (childrenFlag==childType.MULTIPLE) {
      for (let i = 0; i < children.length; i++) {
        mount(children[i],dom)
      }
    }
  }


  flagNode?container.insertBefore(dom,flagNode):container.appendChild(dom)
}

function mountText(vnode,container) {
  let dom = document.createTextNode(vnode.children);
  vnode.el = dom;
  container.appendChild(dom)
}


function patchData(el, key, prev, next) {
  switch (key) {
    case 'style':
      for (let k in next) {
        el.style[k] = next[k]
      }
      for (let k in prev) {
        if (!next.hasOwnProperty(k)) {
          el.style[k] = ''
        }
      }
      break;
    case 'class':
      el.className = next
      break;
    default:
      if (key[0] === '@') {
         if (prev) {
           el.removeEventListener(key.slice(1), prev);
         }
        if (next) {
          el.addEventListener(key.slice(1), next)
        }
      } else {
        el&&el.setAttribute(key, next)
      }
      break;
  }
}


// 新建文本类型的vnode
function createTextVnode(text) {
  return {
    flag: vnodeType.TEXT,
    tag: null,
    data: null,
    children: text,
    childrenFlag: childType.EMPTY,
  };
}

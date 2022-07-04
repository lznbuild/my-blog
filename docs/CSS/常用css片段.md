```css
div {
  width: 100px;
  border: 1px solid red;
  /* 单行 */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  /* 多行 */
  /* display : -webkit-box;  跟flex 类似，是一种过时的写法
  -webkit-line-clamp : 4; 限制在一个块元素显示的文本的行数
  overflow: hidden;
  -webkit-box-orient : vertical; */  设置flex的子元素的排列方式
}




/* 1px像素线 */
/* .borderRound(@color: #eee) {

  // 4边框
  &::after {
    content         : '';
    width           : 200%;
    height          : 200%;
    position        : absolute;
    top             : 0;
    left            : 0;
    border          : 1px solid @color;
    border-radius   : .5rem;
    transform       : scale(0.5, 0.5);
    transform-origin: top left;
  }
} */


less-loader.options.modifyVars可以定义全局less变量


// 对input placeholder的修改
.search-input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #fff;
}

```

进度条
      body {
        background: linear-gradient(to right top, #0089f2 50%, #ddd 50%);
        /* 通过 calc 函数配合 100vh 就可以从总长中删除一屏的高度 */
        /* 100vh 浏览器视口的高度 */
        background-size: 100% calc(100% - 100vh + 4px);
        background-repeat: no-repeat;
      }
      body:before {
        content: "";
        position: fixed;
        top: 3px;
        bottom: 0;
        width: 100%;
        z-index: -1;
        background: white;
      }

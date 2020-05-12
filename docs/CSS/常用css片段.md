div {
  width: 100px;
  border: 1px solid red;
  /* 单行 */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  /* 多行 */
  /* display : -webkit-box;
  -webkit-line-clamp : 4;
  -webkit-box-orient : vertical; */
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

font-size 各种大小的 12 14 16 18 
主题色,包括一些线的颜色，公共盒子阴影

less-loader.options.modifyVars可以定义全局变量

统一的padding 

// 对input placeholder的修改
.search-input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #fff;
}


文本不可被选中

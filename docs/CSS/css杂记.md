
### 怎么禁止iframe插入自己的页面？？
```js
<script type="text/javascript">  
if(top.window.location.href!=window.location.href){
    top.window.location.href=window.location.href;
}
</script>

// 判断当前路径和父级路径是否相同 ，不相同就是被插入了页面。
```



### meta标签有哪些作用？？？？
```js
  // 指定编码方式
  <meta charset="UTF-8" /> 
  // 指定缩放比例 
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <meta name="description" content="" /> 
  <meta name="keywords" content="" />
  <meta name="author" content="" />
```




### 解决inline-block元素的间隔问题
```css
ul{letter-spacing: -5px}
li{letter-spacing: normal}
```


### css层叠顺序  (层叠上下文)
一个三维概念。
background/border==> z-index:-1 ==> block盒子 ==> float盒子==> inline/inline-block盒子==> z-index:auto==>z-index:0 ==> transform ==> z-index:1;==>filter==>opacity



z-index:0和z-index:auto是有区别的。
0会创建一个新的层叠上下文。auto不会，0在auto上面。
z-index的默认值是auto，堆叠顺序与父元素相等。
z-index:auto在z-index: -1 上面。

relative定位，top，z-index等值都有效.

### 如何产生层叠上下文？
- z-index 值不为 "auto"的 position非static值
- opacity 属性值⼩于 1 的元素
- transform 属性值不为 "none"的元素，
- filter值不为“none"的元素




### 选择器权重

！important

行内样式 1000

ID  100

class，属性选择器，伪类选择器  10 

标签选择器，伪元素选择器 1 


### 选择器的优先级
```html
.x {    background-color:lightblue;}.
z {    background-color:lightblue;}
.y {    background-color:lightgreen;}

<div id="my" class="x y z">text<div>

最终y会生效,跟写css的位置有关

 .z, .y {
      color: yellow;
    }

并列不会加权重
```


## 伪元素
::first-line  

::first-letter  

排版后的第一行和第一个字符，跟HTML中的位置无关

::before  

::after


## dom.getClientRects(),dom.getBoundingClientRect()  x,y,width,height获取位置和尺寸 
他俩对块级元素的返回值一样，对行内元素不一样

var offsetX = 
document.documentElement.getBoundingClientRect().x - 
element.getBoundingClientRect().x;


dom.offsetParent 指向position非默认值的祖元素。本身或祖元素display:none 指向null 


em更习惯用于字体大小，行高，text-indent首行缩进
em作为fontsize时，相对于父元素的fontsize计算，em作为其他样式（行高，首行缩进）时，相对于自身字体大小 


Vertical-align只能应用于inline-block,inline元素 


在css里面，padding-top,padding-bottom,margin-top,margin-bottom取值为百分比的时候，参照的是父元素的宽度

## 弹性布局的属性总结
  容器设置为flex布局，子元素的float,clear,vertical-align失效  
  定义在容器元素上的：  
  flex-direction  
  flex-wrap  
  flex-flow: flex-direction flex-wrap  
  justify-content  
  align-items  
  align-content  多个轴线的侧轴对齐方式  


  定义在子元素上的：  
    order: 根据数值展示主轴上的排列顺序,数值越大越往后  
    flex-grow: 当主轴方向子元素没有撑满父元素，按照这个比例分配剩余空间  
    flex-shrink: 当空间不足时，都将等比例缩小,为0就是不缩小，默认为1
    flex-basis: 在分配多余空间之前，占据的主轴空间 写法：400px  
    flex: flex-grow flex-shrink flex-basis     
    flex:1 其实就是flex-grow: 1  默认 0 1 auto
    align-self: 侧轴对齐方式，覆盖父元素的align-items  



## @import 引入css和link有什么区别 

- 本质的区别，link属于HTML标签，而@import是CSS提供的  

- 加载顺序，页面被加载时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载  


- 兼容性问题，import只在IE 5以上才能识别，而link是HTML标签，无兼容问题。 

- 权重， link方式的样式权重高于@import的权重。 

- 使用dom控制样式时的差别。当使用javascript控制dom去改变样式的时候，只能使用link标签，因为@import不是dom可以控制的。



IntersectionObserver  

```js
  const img = document.querySelector('#box')

  const observer = new IntersectionObserver((changes) => {
    // changes: 目标元素集合
    changes.forEach((change) => {
      // intersectionRatio
      if (change.isIntersecting) {
        const img = change.target
        img.src = img.dataset.src
        observer.unobserve(img)
      }
    })
  })

  observer.observe(img) 
  // observer.observe(img1)  // 观察多个元素

  ``` 


  ## 获取浏览器的唯一标识 
  由于不同的系统显卡绘制 canvas 时渲染参数、抗锯齿等算法不同，因此绘制成图片数据的 CRC 校验也不一样。 
  ```js
  function getCanvasFp () {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    ctx.font = '14px Arial'
    ctx.fillStyle = '#ccc'
    ctx.fillText('hello, shanyue', 2, 2)
    return canvas.toDataURL('image/jpeg')
  }
  ``` 

### a标签的定义顺序
  link→visited→hover→active    lv ha 


### bfc触发条件 
- float 不为none
- position 为absolute 或fixed 
- display 为inline-block, inline-flex, flex, table-cell
- overflow 不为visible  

##  bfc解决问题
1. 容器高度塌陷，清除浮动
2. margin边距重叠 
3. 防止浮动的字体环绕


### css垂直居中 
1. 子元素行高等于父元素高度。 

2. position:absolute; top: 50%; left: 50%; margin-left: -width*50%;margin-top:-height*50%;

3. ... translate(-50%,-50%) 

4. ... top:0;left:0;right:0;bottom:0;margin:auto;

5. flex    margin: auto

6. flex jusify-content:center; align-items: center;

7. 父元素 display: table-cell; vertical-align: middle


8.
```css
  div {
    width: 300px;
    height: 300px;
    border: 1px solid red;
  }
  div::after {
    content:'';
    display:inline-block;
    vertical-align: middle;
    height: 100%;
  }

  span {
 
    display: inline-block;
    vertical-align: middle;
  }
``` 

## css自定义变量 
```css
:root{
  --testColor: red;
}
```

```js
  var rootStyles = document.styleSheets[0].cssRules[0].style;
  rootStyles.setProperty('--testColor', 'green');
``` 


## <img src='xx' style='width:400px!important'/> 修改图片的width为300 

max-width 

transform:scale() 

box-sizing: border-box; padding:xx; 
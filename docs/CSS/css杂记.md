## html标签
怎么禁止iframe插入自己的页面？？


iframe怎么优化加载速度？？？？



有哪些语义化标签？？？？语义化标签的意义？？？？
利于seo


meta标签有哪些作用？？？？


em标签强调词，strong强调读的重音


解决inline-block元素的间隔问题
ul{letter-spacing: -5px}
li{letter-spacing: normal}



user-select: none; auto() all 控制文本选中


vertical-align: middle;
display: inline-block;  只能用在inline和inline-block元素上



clear:both; 只能用于块元素




### css层叠顺序  

background/border==> z-index: -1 ==> block盒子 ==> float盒子==> inline/inline-block盒子==> z-index:auto,0 ==> z-index:1;


### 选择器权重

！important

行内样式 1000

ID  100

class，属性选择器，伪类选择器  10 

标签选择器，伪元素选择器 1 


### 选择器的优先级
```js
.x {    background-color:lightblue;}.z {    background-color:lightblue;}.y {    background-color:lightgreen;}
<div id="my" class="x y z">text<div>

//最终y会生效,跟写css的位置有关

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


## dom.getClientRects() x,y,width,height获取位置和尺寸 


var offsetX = document.documentElement.getBoundingClientRect().x - element.getBoundingClientRect().x;

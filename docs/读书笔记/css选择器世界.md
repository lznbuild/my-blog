### 选择器优先级计算值 

!important 


行内样式


id选择器  100


class选择器  属性选择器   伪类选择器   10

伪元素选择器 标签选择器 1 

*


选择器 | 计算值 | 计算细则
---------|----------|---------
 *{} | 0 | 0
 p{} | 1 | 1
 .foo{} | 10 | 10
 #foo{} | 100 | 100
 a:not([rel=nofollow]){} | 11 | 1+10
 a:hover{} | 11 | 1+10
 ul>li{} | 2 | 1+1
 li>ol+ol{} | 3 | 1+1+1
 ol li.foo | 12 | 1+1+10
 li .foo .bar | 21 | 1+10+10
 #foo .bar p{} | 111 | 100+10+1 



 后渲染优先级更高的规则是相对于整个页面文档而言的，而不仅仅是在一个单独的CSS文件中。 


 ### 提高选择器优先级（不增加耦合）

 .foo.foo{}   
 .foo[class]
 #foo[id] 


 10个标签选择器的优先级就和1个类选择器齐平了？NO，不同等级的选择器之间的差距无法跨越 

 不要嵌套太多层的选择器，不要使用太多的标签选择器（选择器匹配从右到左）， 渲染性能糟糕，优先级混乱，锁死的HTML的结构 

 class控制css, id用于JS获取DOM  


 ```html
 <div class="lightblue">
  <div class="darkblue">
    <p>1.颜色？</p>
  </div>
 </div>
 <div class="darkblue">
  <div class="lightblue">
    <p>2.颜色？</p>
  </div>
 </div>


 .lightblue p {color: lightblue;}
 .darkblue p {color: darkblue;}
 ```
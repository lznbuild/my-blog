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

 ## 后代选择符的错误认识  

 ```html
 <div id="myId">
  <div class="lonely">123</div>
  <div class="outer">
    <div class="inner">456</div>
  </div>
 </div>
 ```

```js
document.querySelectorAll('#myId div div').length   // 1
document.querySelector('#myId').querySelectorAll('div div').length  // 3  查询#myId元素的子元素，选择所有同事满足整个页面下div div选择器条件的DOM元素 
document.querySelector('#myId').querySelectorAll(':scope div div').length 
```

querySelectorAll里面的选择器是全局属性。
 

 使用子选择符（>）的主要目的是为了避免冲突。滥用相当于固定了HTML的结构，不好维护。 

相邻兄弟选择符（+） 只选中一个 ，忽略文本节点 

### 为什么没有前面兄弟选择符 
没有前面兄弟选择符和没有父元素选择符的原因是一样的，它们都受制于DOM渲染规则。浏览器解析HTML文档是从前往后，由外到里进行的，所以我们时常会看到页面先出现头部然后再出现主体内容的情况。但是，如果css支持了这种选择符，那就必须要等页面所有子元素加载完毕才能渲染css，因为这些选择符就是后面的DOM元素影响前面的DOM元素，如果后面的元素还没被加载，又怎么影响前面的元素样式呢，如果要支持这样的选择符，网页呈现速度必然会大大减慢，白屏时间加长，体验差。
如果强制采取加载到哪里就渲染到哪里的策略呢？这样做会导致更大的问题，因为会出现加载到后面的元素的时候，前面的元素已经渲染好的样式会突然变成另一个样式，体验不好，多次的重排和重绘，性能很差。 



:hover伪类选择器不是只能通过父子选择器控制的。 
 a:hover + #content 


 transition属性对display无过渡效果，对visibility有过渡效果 

 :active伪类，普通元素也可以使用，点击触发。 


普通元素可以获取焦点
 <div contenteditable="true">123</div>
 <div tabindex="1">123</div>
width 的默认值是auto  

如果父级height 为auto等非有效值，自己的height:100% 无效  

绝对定位元素的百分比计算和非绝对定位元素的百分比计算是有区别的，区别
在于绝对定位的宽高百分比计算是相对于 padding box 的，也就是说会把 padding 大小值计算
在内，但是，非绝对定位元素则是相对于 content box 计算的。 


max-width优先级高于width+important , min-width优先级高于max-width 

height从数值到auto，transition是没有效果的。可以使用最大高度 



空白节点 
  span {
      display: inline-block;
    }
  <div><span></span></div> 



替换元素， 内容可以被替换。内容的外观不受页面上的 CSS 的影响（受自身内容或者浏览器的影响）。  img, video, audio, iframe, input, textarea 


块级元素 padding 百分比值无论是水平方向还是垂直方向均是相对于宽度计算的

margin 的百分比值无论是水平方向还是垂直方向都是相对于宽度计算 


border-width 不支持百分比 


line-height 是相对于 font-size 计算的
使用数字值时，其所有后代元素的line-height为后代元素自身的font-size乘以该父元素设置的line-height数值；

而当使用百分比时，其所有后代元素的line-height的具体高度与该父元素的line-height相等（即都为该父元素的font-size乘以该父元素的line-height）


vertical-align 的属性值支持数值，也支持负值。百分比基于line-height去计算的,用的不多。  


vertical-align只能应用于内联元素以及 display 值为 table-cell 的元素  


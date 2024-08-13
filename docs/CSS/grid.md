display: grid;
grid-template-columns: 200px 200px 200px;

// fr 单位代表网格容器中可用空间的一部分
grid-template-columns: 1fr 1fr 1fr;
等价于
grid-template-columns: repeat(3, 1fr);

// 第一个列是 500 像素，因此从可用空间中扣除了固定宽度。剩下的空间被一分为三，并按比例分配给两个列。
grid-template-columns: 500px 1fr 2fr;

网格将有共计 10 个轨道，为 1 个 1fr 轨道后面跟着 1 个 2fr 轨道，该模式重复 5 次
grid-template-columns: repeat(5, 1fr 2fr);

网格中创建的轨道是 200 像素高
grid-auto-rows: 200px;


最小为 100 像素，最大为 auto
grid-auto-rows: minmax(100px, auto);

row 行
column 列


grid-template-columns 列宽
grid-template-rows 行高

// 间距
  grid-row-gap: 20px;
  grid-column-gap: 20px;

简写
grid-gap: <grid-row-gap> <grid-column-gap>;


  grid-column-start: 1;
  grid-column-end: 3;



先行后列，排序规则
grid-auto-flow: column;

grid-area: 2 / 3 / 4 / 4;

单元格内容的位置
justify-items 属性，
align-items 属性，
place-items 属性

整个内容的位置
justify-content 属性，
align-content 属性，
place-content 属性

grid-column-start 属性，
grid-column-end 属性，
grid-row-start 属性，
grid-row-end 属性

grid-column属性是grid-column-start和grid-column-end的合并简写形式，grid-row属性是grid-row-start属性和grid-row-end的合并简写形式。


.item {
  grid-column: <start-line> / <end-line>;
  grid-row: <start-line> / <end-line>;
}


grid-area属性还可用作grid-row-start、grid-column-start、grid-row-end、grid-column-end的合并简写形式，直接指定项目的位置。


.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
下面是一个例子。


.item-1 {
  grid-area: 1 / 1 / 3 / 3;
}

grid-auto-columns属性和grid-auto-rows属性用来设置，浏览器自动创建的多余网格的列宽和行高。它们的写法与grid-template-columns和grid-template-rows完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小


单个项目
justify-self 属性，
align-self 属性，
place-self 属性

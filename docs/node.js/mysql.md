主键：一列，其值能够唯一区分表中每个行

## 数据类型

- 文本

- 数字

- 日期

## 启动
mysql -u root -p
mysql.server start

exit; 退出

## 查看db
show databases

## 添加db
Create database []

## 删除
Drop database []

## 使用库
use [];

## 查看所有表
show tables;

## 创建table
CREATE TABLE [] (
[key] [type]
);


## 查看表结构
describe [tablename];
show columns from [tablename];

## 删除表
drop table [tablename]

## 增加列
alter table [tablename] add [columnname] [datatype] [not null] [default]

## 删除列
alter table [tablename] drop [columnname]

## 修改列信息
alter table [tablename] change [old_column_name] [new_column_name] [data_type]

## 修改表名
alter table [table_name] rename [new_table_name]

## 查看表数据
select * from [table_name]
select [col_name1],[col_name2] from [table_name]

### where语法
select * form [table_name] where [binary] col_name 运算符 val

WHERE 子句的字符串比较是不区分大小写的。 你可以使用 BINARY 关键字来设定 WHERE 子句的字符串比较是区分大小写的

#### 运算符
=
!=
<
>
>=
<=

#### where 组合
where id = 1 and price < 10
where id = 1 or price < 10
and 优先级大于 or
where (id = 2 or id = 3) and price < 10

#### null的判断
select * from [table_name] where col_name is null
select * from [table_name] where col_name is not null

#### 关键字
between 两个值范围内查找  eg: where price between 5 and 10
like 按照某个模式查找
!= 等价于 <>

#### in语法
select * from [table_name] where [col_name] in (val1,val2)
select * from [table_name] where [col_name] in (select [col_name] from [table_name])

eg: where id in (1, 2)  ==> where id = 1 or id = 2;

#### not否定
where id not in (1, 2)  取反

#### between语法
select * from [table_name] where [col_name] between val1 and val2
select * from [table_name] where [col_name] not between val1 and val2

#### like语法
select * from [table_name] where [col_name] [not] like '[pattern]'
eg: where name like 'jac%'   查询jac开头的name
eg: where name like '%li%'  查询包含li的name
%还可以匹配0个字符
_匹配一个字符 eg: where name like '_li'

#### 匹配正则
where name regexp '1000'
正则不区分大小写，需要分区的话要加关键字
eg: where name regexp binary 'xx'

### distinct 精确的 (去重)
select distinct [col_name] form [table_name]

### order by
select * from [table_name] [where] order by col_name [asc/desc]
select * from [table_name] [where] order by col_name [asc/desc],col_name [asc/desc]

### limit
select * from [table_name] [where] [order by] limit [offset], rowCount
offset: 查询结果的起始位置
rowCount: 从offset位置开始，获取的记录条数


### 计算字段
Concat
select Concat(name, ' (', country, ")")
form xxx
order by name

RTrim 去掉右边的所有空格

as 别名
eg: select name as title
title在表中没有，是一个计算字段
eg: select quantiry, price, quantity*price as totalPrice



out:
ACME（USA）

Upper() 大写
eg: select name,  Upper(name) as name_alias

常用日期，时间处理函数
自由查询

AVG 返回某列的平均值
COUNT 返回某列的行数
MAX 返回某列的最大值
MIN 返回某列的最小值
SUM 返回某列值的和

eg: select COUNT(*) as cust 返回表中数据条数
eg: select SUM(price*quantity) as total_price
eg: select AVG(distinct price) as avg_price 只计算不同价格的平均值


### 分组
可指定多个分组
在select中使用，在group by中使用的名称一直
select中的每个列都必须在group by中给出
group by在where之后，在order by之前
eg:
select id, COUNT(*) as num_prods,
from xxx
group by id;

通过id分组，计算每个分组的数量.

eg:
select id, COUNT(*) as orders
from xxxx
group by id
having COUNT(*) >=2

having跟where类似，查询满足条件的数据，having是查询满足条件的分组


select 字句顺序
select
from
where
group by
having
order by
limit

### 子查询（嵌套查询）
eg:
select cust_id
from xxxx
where order_num in (

  select order_num
  from xxxx
  where prod_id = '2'
)

查询含有id=2的产品的订单，再查询其中的顾客id

select cus_name, (
  select COUNT(*)
  from orders
  where orders.cust_id = customers.cust_id
) as orders
from customers
order by cust_name


从customers表中查询客户列表，再对于列表中的每一个客户，统计其在orders表中的订单数量。


### 联结（表连接）
供应商和产品分别在两张表中，如何查询供应商对应的生产产品以及价格。

eg:
select vend_name, prod_name, prod_price
from vendors, products
where vendors.vend_id = products.vend_id
order by vend_name, prod_name

如果没有where子句，则返回数据用每个供应商匹配了每一个产品，包括了供应商不正确的产品，实际上有的供应商根本没有产出对应商品


### 合并
需要查询价格小于等于5的商品，包括供应商1，2生产的所有物品
select vend_id, prod_id,prod_price
from products
where prod_price <=5
union
select vend_id, prod_id, prod_price
from products
where vend_id in (1,2)

重复行会被union自动取消，不需要的话，可以加关键字
xxx
union all
xxx

用union只能用一个order by， 在最后.

## 插入数据
insert into [table_name] values(val1,val2)
insert into [table_name](col1,col2) values(val1,val2)


# insert 和 select组合
insert into [table_name] select * from [table_name]

## 更新数据
update [table_name] set [col_name] = xxx [where]
update [table_name] set [col_name] = xxx,[col_name] = xxx [where]




## 删除表中所有数据
delete from [table_name];
## 删除指定行
delete from [table_name] where username ='Tom';


## 触发器
show triggers

create trigger [triggername] [triggertime(before, after)] [triggerevent(insert update delete)] on [databasename] for each row [sql语句]
eg: create trigger tg_ponfo after insert

## 锁
lock table [tablename] [type]

eg: lock table table1 read;
其他线程可查询，但无法更新数据

解锁：
unlock tables;
在解锁完成前，进行更新的线程会一直等待，直到解锁完成后，才会进行更新。我们可以看一下更新线程的结果。


https://mp.weixin.qq.com/s?__biz=MzkwMDE1MzkwNQ==&mid=2247495882&idx=1&sn=488a147b3bf3c710806ce7031e6186b5&chksm=c04ae794f73d6e829f59b76657db17c50daab3633cc488629efbf05b675209a23ff96bab9f90&token=268423844&lang=zh_CN#rd


https://mp.weixin.qq.com/s?__biz=MzkwMDE1MzkwNQ==&mid=2247499423&idx=1&sn=0046d4facf4f10416388465c85d8f7b3&chksm=c04ae9c1f73d60d76064cf4ec339a31866671f5d35343852b4cd00405f289f2a664dc8b1e55f&token=268423844&lang=zh_CN#rd


## 分库分表

数据量变大后会增加对数据进行分库分表的设计诉求，从而导致数据查询变得的复杂性

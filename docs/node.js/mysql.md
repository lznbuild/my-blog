

## 数据类型

- 文本

- 数字

- 日期

mysql -u root -p
mysql.server start

查看db
show databases

添加db
Create database []
Drop database []

使用库
use [];


show tables;

创建table 
CREATE TABLE [] (
[key] [type] 
);


查看表结构
describe [tablename];

删除表
drop table [tablename]

增加列
alter table [tablename] add [columnname] [datatype] [not null] [default]

删除列
alter table [tablename] drop [columnname]

修改列信息
alter table [tablename] change [old_column_name] [new_column_name] [data_type]

修改表名
alter table [table_name] rename [new_table_name]

查看表数据
select * from [table_name]
select [col_name1],[col_name2] from [table_name]

插入数据
insert into [table_name] values(val1,val2)
insert into [table_name](col1,col2) values(val1,val2)

where语法
select * form [table_name] where [binary] col_name 运算符 val

WHERE 子句的字符串比较是不区分大小写的。 你可以使用 BINARY 关键字来设定 WHERE 子句的字符串比较是区分大小写的

运算符
=
!=
<
>
>=
<=
between 两个值范围内查找
like 按照某个模式查找


null的判断
select * from [table_name] where col_name is null 
select * from [table_name] where col_name is not null 


distinct 精确的 (去重)
select distinct [col_name] form [table_name]

order by
select * from [table_name] [where] order by col_name [asc/desc]
select * from [table_name] [where] order by col_name [asc/desc],col_name [asc/desc]

limit
select * from [table_name] [where] [order by] limit [offset], rowCount
offset: 查询结果的起始位置
rowCount: 从offset位置开始，获取的记录条数

insert 和 select组合
insert into [table_name] select * from [table_name]

update语法
update [table_name] set [col_name] = xxx [where]
update [table_name] set [col_name] = xxx,[col_name] = xxx [where]

in语法
select * from [table_name] where [col_name] in (val1,val2)
select * from [table_name] where [col_name] in (select [col_name] from [table_name])

between语法
select * from [table_name] where [col_name] between val1 and val2
select * from [table_name] where [col_name] not between val1 and val2

like语法
select * from [table_name] where [col_name] [not] like '[pattern]'

pattern: '%abc'

-- 删除表中所有数据
delete from [table_name];
-- 删除指定行
delete from [table_name] where username ='Tom';

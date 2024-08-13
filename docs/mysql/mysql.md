
## 关系型数据库
不同的表可以通过某种关系联系起来(例子中学生成绩表通过学号和学生基本信息表联系起来)，我们把这种数据库管理系统称为关系型数据库。

主键：一列，其值能够唯一区分表中每个行

默认对命令的大小写并没有限制

## 外键
插入到学生成绩表student_score中的number(学号)列中的值必须能在学生基本信息表student_info中的number列中找到，否则如果一个学号只在成绩表里出现，而在基本信息表里找不到相应的记录的话，就相当于插入了不知道是哪个学生的成绩，这显然是荒谬的。为了防止这样荒谬的情况出现，MySQL给我们提供了外键约束机制。

如果A表中的某个列或者某些列依赖与B表中的某个列或者某些列，那么就称A表为子表，B表为父表。子表和父表可以使用外键来关联起来，上边例子中student_score表的number列依赖于student_info的number列，所以student_info就是一个父表，student_score就是子表。我们可以在student_score的建表语句中来定义一个外键：

CREATE TABLE student_score (
    number INT,
    subject VARCHAR(30),
    score TINYINT,
    PRIMARY KEY (number, subject),
    CONSTRAINT FOREIGN KEY(number) REFERENCES student_info(number)
);
这样，在对student_score表插入数据的时候，MySQL都会为我们检查一下插入的学号是否能在student_info表中找到，如果找不到则会报错。

## 数据类型

- 字符串
  类型	最大长度	存储空间要求	含义
  CHAR(M)	M个字符	M×W个字节	固定长度的字符串，存储定长的字符串，不够的自动在末尾填充空格,比如「身份证号、手机号、邮箱等」；
  VARCHAR(M)	M个字符	L+1 或 L+2 个字节	可变长度的字符串
  TINYTEXT	2⁸-1 个字节	L+1个字节	非常小型的字符串
  TEXT	2¹⁶-1 个字节	L+2 个字节	小型的字符串
  MEDIUMTEXT	2²⁴-1 个字节	L+3个字节	中等大小的字符串
  LONGTEXT	2³²-1 个字节	L+4个字节	大型的字符串

- 数字
  tinyint
  smallint
  mediumint
  int
  bigint

  类型	占用的存储空间（单位：字节）	无符号数取值范围	有符号数取值范围	含义
  TINYINT	1	0 ~ 2⁸-1	-2⁷ ~ 2⁷-1	非常小的整数
  SMALLINT	2	0 ~ 2¹⁶-1	-2¹⁵ ~ 2¹⁵-1	小的整数
  MEDIUMINT	3	0 ~ 2²⁴-1	-2²³ ~ 2²³-1	中等大小的整数
  INT（别名：INTEGER）	4	0 ~ 2³²-1	-2³¹ ~ 2³¹-1	标准的整数
  BIGINT	8	0 ~ 2⁶⁴-1	-2⁶³ ~ 2⁶³-1	大整数
  FLOAT	4	±1.175494351E-38	±3.402823466E+38	单精度浮点数
  DOUBLE	8	±2.2250738585072014E-308	±1.7976931348623157E+308	双精度浮点数

- 日期
  类型	存储空间要求	取值范围	含义
  YEAR	1字节	1901~2155	年份值
  DATE	3字节	'1000-01-01' ~ '9999-12-31'	日期值
  TIME	3字节	'-838:59:59' ~ '838:59:59'	时间值
  DATETIME	8字节	'1000-01-01 00:00:00' ～ '9999-12-31 23:59:59'	日期加时间值
  TIMESTAMP	4字节	'1970-01-01 00:00:01' ～ '2038-01-19 03:14:07'	时间戳

ENUM('男', '女')
SET('打球', '跑步', '跳远')
BLOB

对于比较大的二进制数据，比方说图片、音频、压缩文件什么的，通常情况下都不直接存储到数据库管理系统中，而是将它们保存到文件系统中，然后在数据库中之存放一个文件路径即可

## 启动c dx 1b vv       
mysql.server start

mysql -h主机名 -u用户名 -p密码
mysql -u root -p

exit; 退出

## 查看db
show databases

## 添加db
Create database []

CREATE DATABASE IF NOT EXISTS 数据库名;
如果已经存在，不会报错

## 删除
Drop database []

DROP DATABASE IF EXISTS 数据库名;

## 使用库
use [];

## 查看所有表
show tables;

## 创建table
CREATE TABLE [] (
[key] [type]
);

eq:
CREATE TABLE student_info (
    number INT UNIQUE,
    name VARCHAR(5),
    sex ENUM('男', '女'),
    id_number CHAR(18) PRIMARY KEY,
    department VARCHAR(30),
    major VARCHAR(30),
    enrollment_time DATE
) COMMENT '学生基本信息表';

UNIQUE 不允许重复
PRIMARY KEY 主键


指定默认值
CREATE TABLE first_table (
    first_column INT DEFAULT NULL,
    second_column VARCHAR(100) DEFAULT 'abc'
);


## 查看表结构
describe [tablename];
show columns from [tablename];

## 删除表
drop table [tablename]

## 增加列
alter table [tablename] add [columnname] [datatype] [not null] [default]

ALTER TABLE first_table ADD COLUMN third_column CHAR(4) ;

添加到第一列
ALTER TABLE first_table ADD COLUMN fourth_column CHAR(4) FIRST;

添加到指定列
ALTER TABLE first_table ADD COLUMN fifth_column CHAR(4) AFTER first_column;

## 删除列
alter table [tablename] drop [columnname]

## 修改列信息
alter table [tablename] change [old_column_name] [new_column_name] [data_type]

## 修改表名
alter table [table_name] rename [new_table_name]

把first_table1表转移到这个dahaizi数据库下
ALTER TABLE first_table1 RENAME TO dahaizi.first_table1;

把second_column1再放到first_column后边
ALTER TABLE first_table MODIFY second_column1 VARCHAR(2) AFTER first_column;

## 插入数据
insert into [table_name] values(val1,val2)
insert into [table_name](col1,col2) values(val1,val2)

批量插入
INSERT INTO first_table(first_column, second_column) VALUES(4, 'ddd'), (5, 'eee'), (6, 'fff');

插入检索出来的数据
INSERT INTO mytable1(col1, col2)
SELECT col1, col2
FROM mytable2;

将一个表的内容插入到一个新表
CREATE TABLE newtable AS
SELECT * FROM mytable;

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


https://www.zhihu.com/question/485701420/answer/2882596938
https://mp.weixin.qq.com/s/qHJiTjpvDikFcdl9SRL97Q

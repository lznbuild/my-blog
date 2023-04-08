
## 锁
lock table [tablename] [type]
设计的初衷是处理并发问题，保证数据安全



eg: lock table table1 read;
其他线程可查询，但无法更新数据
eg: lock table table1 write;


解锁：
unlock tables;
在解锁完成前，进行更新的线程会一直等待，直到解锁完成后，才会进行更新。

按照锁的使用方式，MySQL 锁可以分成共享锁、排它锁两种；
根据加锁的范围，MySQL 锁大致可以分成全局锁、表级锁和行锁三类；
从思想层面上看，MySQL 锁可以分为悲观锁、乐观锁两种


修改数据库表结构，会自动加表级别的锁。
更新数据未使用索引，行级锁上升到表级锁
更新数据使用索引，使用行级锁
select .. for update 行级锁

### 共享锁
共享锁，Share lock，也叫读锁。它是指当对象被锁定时，允许其它事务读取该对象，也允许其它事务从该对象上再次获取共享锁，但不能对该对象进行写入。
#对user整张表加共享锁
select * from user lock in share mode;

#给user表id=3的行加共享锁
select * from user
where id = 3 lock in share mode;
### 排它锁
排它锁，Exclusive Lock，也叫写锁或者独占锁，主要是防止其它事务和当前加锁事务锁定同一对象。同一对象主要有两层含义： - 当排他锁加在表上，则其它事务无法对该表进行insert,update,delete,alter,drop等更新操作； - 当排他锁加在表的行上，则其它事务无法对该行进行insert,update,delete,alter,drop等更新操作；
#对user整张表加排他锁
select * from user for update;

### 全局锁
对整个数据库实例加锁。它是粒度最大的锁。
flush tables with read lock

指令执行完，整个数据库就处于只读状态了，其他线程执行以下操作，都会被阻塞： - 数据更新语句被阻塞，包括 insert, update, delete语句； - 数据定义语句被阻塞，包括建表 create table,alter table、drop table 语句； - 更新操作事务commit语句被阻塞；

unlock tables
加锁的会话断开，全局锁也会被自动释放

使用场景是做全库逻辑备份，在备份过程中整个库完全处于只读状态

### 表锁
就是对整张表加锁，包含读锁和写锁
# 给表加写锁
lock tables tablename write;

# 给表加读锁
lock tables tablename read;

# 释放锁
unlock tables;

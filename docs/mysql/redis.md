主流NoSql数据库， 一般用于缓存热点数据加快查询速度

字典存储，内存存储和持久化都可以,单线程

客户端通过tcp协议连接redis

redis 1s可读写超过10w个键值对。给每个key设置过期时间，自动删除。限定数据占的最大空间。C语言开发。


传统的关系型数据库如Mysql已经不能适用所有的场景了，比如秒杀的库存扣减，APP首页的访问流量高峰等等，都很容易把数据库打崩，所以引入了缓存中间件，

用于缓存，事件发布，订阅，读写性能好，支持事务，有效保证数据一致性。限制接口调用频次等，排序快（sortedset）,集合求交集，并集，差集等，好实现两个人共同好友等功能。

作为缓存使用时，一般有两种方式保存数据：
- 读取前，先去读Redis，如果没有数据，读取数据库，将数据拉入Redis。
- 插入数据时，同时写入Redis。
方案一：实施起来简单，但是有两个需要注意的地方：避免缓存击穿。（数据库没有就需要命中的数据，导致Redis一直没有数据，而一直命中数据库。）
数据的实时性相对会差一点。
方案二：数据实时性强，但是开发时不便于统一处理。当然，两种方式根据实际情况来适用。如：方案一适用于对于数据实时性要求不是特别高的场景。方案二适用于字典表、数据量不大的数据存储。#

redis cpu不是它的性能瓶颈，机器内存和网络带宽。

不支持对每一个数据库设置不同密码, 默认16个数据库，默认用第0个。
select 3 使用第三个
dbsize 查看大小
flushdb 清除当前数据库
flushall 清除所有数据库


启动
redis-server --port xx

配置文件
/usr/local/etc/redis.conf

redis-cli命令式交互模式
redis-cli
redis-cli --raw 避免中文乱码
redis-cli -h host -p port -a password
redis-cli -h 127.0.0.1 -p 6379
不给参数默认读取配置文件

可处理高并发，主从复制

## 数据类型
字符串(string)
字典（hash）
列表（list）
集合(set)
有序集合sortedSet（zset）

### 字符串
string or number

incr [key]
将 key 中储存的数字值增一。如果 key 不存在，那么 key 的值会先被初始化为 0 ，然后再执行 INCR 操作。

decr
将 key 中储存的数字值减一

keys *

get [key]

set [key] [value]

exists [key]
判断一个键是否存在

del [key]

type [key]

incrby [key] [value]
数字类型加 value

incrbyfloat[key] [value]

append [key] [value]
字符串 加

decrby[key] [value]
减 value

strlen [key]
获取字符串字节数

mset [key1] [value1] [key2] [value2]
多set

mget [key1] [key2]
多get

缓存： 经典使用场景，把常用信息，字符串，图片或者视频等信息放到redis中，redis作为缓存层，mysql做持久化层，降低mysql的读写压力。
计数器：redis是单线程模型，一个命令执行完才会执行下一个，同时数据可以一步落地到其他的数据源。
session：常见方案spring session + redis实现session共享



### 字典,散列（hash）
hset car:1 price 500  不存在自动创建
hget car:1 price

hgetall car:1

hexists car:1 name 是否存在 0 || 1

hincrby car:1 price 5

hdel car:1  price

散列类型没有类似字符串的mget命令，可以同时获得多个键值，所以要请求多次数据库，也就回产生一次往返时延


### 列表(List)
双向链表实现。
通过索引访问元素较慢，向列表两端添加元素的时间复杂度O(1),获取两端的元素速度快

lpush key value

rpush key value

lpop key

rpop

llen key

lrange key start end
lrange key 0 -1 所有

lrem key count value
删除

获取/设置指定索引的元素值
lindex key index
lset key index value

ltrim
删除除指定元素外的其他值


### 集合（Set）
 string 类型的无序集合。集合成员是唯一的，这就意味着集合中不能出现重复的数据。
 通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)。

scard key
获取集合的成员数量

 sadd key value
 smembers [key]
 查看所有内容

 sismember key memberKey
 判断 member 元素是否是集合 key 的成员

### 有序集合(zSet)
不同的是每个元素都会关联一个double类型的分数。redis正是通过分数来为集合中的成员进行从小到大的排序。
  zset 和 set 一样也是string类型元素的集合,且不允许重复的成员。

  zadd key score member

  zadd test 0 redis
  zadd test 0 mongodb
  ZRANGEBYSCORE runoob 0 1000 查看所有


### geo
geoadd china:city 1 2 bejing 1 2 shanghai
geopos china:city beijing  查询

geodist china:city beijing shanghai km
两点之间的直线距离km

georadius china:city 1 2 1000 km
1 2 中心点1000km以内的集合中的数据

### hyperloglog
比如数据集 {1, 3, 5, 7, 5, 7, 8}， 那么这个数据集的基数集为 {1, 3, 5 ,7, 8}, 基数(不重复元素)为5。 基数估计就是在误差可接受的范围内，快速计算基数。

统计网页的UV。适合数据量大的情况，跟set对比，不需要保护用户Id,只需要一个总数

pfadd mykey xxxx x x x
pfcount mykey 总数
pfmerge mykey3 mykey mykey2 并集

### bitmaps
位存储
登陆，不登陆，打卡场景，true or false 节省内存

## 事务
多个命令集合，出错误可回退
multi 开启
命令入队列
discard 取消当前事务， 没有执行
EXEC 退出，执行队列任务

语法错误可解决（所有都不执行），运行时错误没法解决（执行没问题的）

watch 当所有命令执行后，才能得到每个结果，有些情况下，需要获取某个结果，根据结果执行下一个命令。watch可以监控一个或多个值，一旦有被修改或者删除，之后的事务不会执行。(解决多线程的竞态关系) 乐观锁。

watch [key]

watch后的事务执行失败后，可以unwatch， 重新watch，执行事务。


过期时间
有时效性的数据，限时优惠活动，到期需要删除数据。

expire [key] [time]
time单位是秒

ttl [key]
查看过期时间
已经过期 -2
没有设置过期时间 -1

persist [key]
永久存在，取消过期时间

set重新赋值，也会取消过期时间

## config
config get x 查看x配置项

includes 包含其他配置文件
port
bind 127.0.0.1
daemonize yes 以守护进程的方式运行，后台运行
loglevel 日志级别
save 持久化，快照
设置使用密码
maxclients 最大客户端链接数量
maxmemory 最大内存占用
缓存策略，内存满了的删除策略


### 限制访问次数
```js
const redis = require('redis')
const client = new redis()

const isExists = client.exists('rate:limit:$ip')

if(isExists) {
  const times = client.incr('rate:limit:$ip')
  if(times > 10) {
    console.log('访问太多次了')
  }
}else {
  client.multi()
  client.incr('rate:limit:$ip')
  client.expire('rate:limit:$ip')
  client.exec()
}
```


```js
const redis = require('redis')
const client = new redis()

const listLength = client.llen('rate:limit:$ip')

if(lsitLength<10) {
  client.lpush(`rate:limit:$ip ${new Date().valueOf()}`)
}else {
  const time = client.lindex('rate:limit:$ip -1')
  if(Date.now - time < 60) {
    console.log('不能访问')
  }else {
    // 正常访问
    client.lpush(`rate:limit:$ip ${Date.now()}`)
    client.ltrim(`rate:limit:$ip 0 9`)
  }
}
```


### 缓存
```js
const rank = client.get('cache:rank')

if(rank) {
  // 返回
}else {
  const $rank = jisuan()
  client.multi()
  client.set(xx)
  client.exprice('cache:rank 7200')
  client.exec()
}
```

### 排序
lpush mylist 4 6 8 3 0 5
sort mylist
默认从小到大
sort 搞有序集合，忽略分数，用值排序

sort xx alpha 根据字符串编码排序

sort xx desc 从大到小

sort xx desc limit 0 2

### 缓存问题

缓存穿透
指缓存和数据库中都没有的数据，而用户不断发起请求。如果从存储层查不到数据则不写入缓存，这将导致这个不存在的数据每次请求都要到存储层去查询，失去了缓存的意义。（在流量大时，可能DB就挂掉了，要是有人利用不存在的key频繁攻击我们的应用，这就是漏洞。）
如发起为id为“-1”的数据或id为特别大不存在的数据。这时的用户很可能是攻击者，攻击会导致数据库压力过大。
- 接口层增加校验，如用户鉴权校验，id做基础校验，id<=0的直接拦截；
- 布隆过滤器。
- 缓存空对象，不走到db。

缓存击穿
指缓存中没有但数据库中有的数据（一般是缓存时间到期），这时由于并发用户特别多，同时读缓存没读到数据，又同时去数据库去取数据，引起数据库压力瞬间增大，造成过大压力。
- 设置热点数据永远不过期。
- 接口限流
- mysql加锁，同时间只有一个能访问，其余等待。


缓存雪崩
redis宕机，双十一到12点，商品时间到期，请求都打到db。双十一，停掉一些服务，为了主要链路，比如退款。



缓存污染
一些只会被访问一次或者几次的的数据，被访问完后，再也不会被访问到，但这部分数据依然留存在缓存中，消耗缓存空间。
会随着数据的持续增加而逐渐显露
写的时候判断淘汰策略，根据淘汰策略去选择要淘汰的数据，然后进行删除操作。
建议把缓存容量设置为总数据量的 15% 到 30%，兼顾访问性能和内存空间开销。
CONFIG SET maxmemory 4gb
设置缓存大小


缓存淘汰策略
不淘汰
noeviction （默认的，一旦缓存被写满了，再有写请求来时，Redis 不再提供服务，而是直接返回错误）
对设置了过期时间的数据中进行淘汰
  随机：volatile-random
  ttl：volatile-ttl （越早过期的数据越优先被选择）
  lru：volatile-lru （最近最少使用的原则）
  lfu：volatile-lfu （首先会根据数据的访问次数进行筛选，把访问次数最低的数据淘汰出缓存。如果两个数据的访问次数相同，LFU 策略再比较这两个数据的访问时效性，把距离上一次访问时间更久的数据淘汰出缓存）
全部数据进行淘汰
  随机：allkeys-random （从所有键值对中随机选择并删除数据）
  lru：allkeys-lru
  lfu：allkeys-lfu


数据库和redis一致性
读取缓存步骤一般没有什么问题，但是一旦涉及到数据更新：数据库和缓存更新，就容易出现缓存(Redis)和数据库（MySQL）间的数据一致性问题。


#### 持久化
Redis是个基于内存的数据库。那服务一旦宕机，内存中的数据将全部丢失。通常的解决方案是从后端数据库恢复这些数据，但后端数据库有性能瓶颈，如果是大数据量的恢复，1、会对数据库带来巨大的压力，2、数据库的性能不如Redis。导致程序响应慢。所以对Redis来说，实现数据的持久化，避免从后端数据库中恢复数据，是至关重要的。

RDB  Redis DataBase 的缩写，中文名为快照/内存快照，RDB持久化是把当前进程数据生成快照保存到磁盘上的过程，由于是某一时刻的快照，那么快照中的值要早于或者等于内存中的值。
可将快照复制到其他服务器，从而创建相同数据的服务器副本，可留在原地，方便重启服务器时使用。

手动触发分别对应save和bgsave命令
save命令：阻塞当前Redis服务器，直到RDB过程完成为止，对于内存 比较大的实例会造成长时间阻塞，线上环境不建议使用
bgsave命令：Redis进程执行fork操作创建子进程，RDB持久化过程由子 进程负责，完成后自动结束。阻塞只发生在fork阶段，一般时间很短

save 60 100
从Redis最近一次创建快照之后开始算起，当“60秒之内有10 000次写入”这个条件被满足时，Redis就会自动触发BGSAVE命令。
多个save配置，任意配置生效就会触发。

自动生成rdb文件的时机
- flushall 自动生成rdb文件
- save 执行命令
- 退出redis

怎么恢复rdb文件
把这个文件放到redis启动目录就可以，redis启动时自己执行。

优点
适合大数据恢复。对数据的完整性要求不高

缺点
redis宕机后，最后没存的数据没有了


AOF 只追加文件，执行写命令时，“将被执行的写命令复制到硬盘里面”，恢复时，执行这些命令。
.aof文件生成。
默认不开启
aof文件有错误，redis启动不起来，可以使用redis-check-aof修复文件，丢弃错误数据。

优点
每次修改都同步，文件完整性高
每秒同步

确定
aof文件很大，修复速度慢

rdb只做后备用途，save 900 1 保留一条规则就行



### 主从复制，读写分离
数据的复制是单向的，只能从master到slave, master写为主，slave读为主
redis集群，起码一主二从

作用
- 数据备份
- 故障恢复
- 负载均衡

单个redis服务器太不稳定，会故障，宕机。

info replication 查看当前库信息

从库 需要修改
端口
log文件名称
dbfilename

ps -ef|grep redis
查看redis占用端口

slaveof 127.0.0.1 6379 认老大澳分
命令配置是暂时的，直接改配置文件是永久的。

主机挂了，从机还是从机，连接仍然有效，没有写操作。
从机挂了，重启后，也能拿到挂之间的数据。（全量复制和增量复制）


如果主机挂了，可以手动改从机为主机
slaveof no one
之前的主机回来了，仍然要改配置。

slaveof 127.0.0.1:80 从机


### 哨兵模式
主机挂了后，需要手动切换主机，很麻烦。
可以监控主机，挂了自动将从库改为主库。

可以多个哨兵。

多个哨兵都监测到主机挂了，才确定。投票选主机。
哨兵配置文件修改sentinel.conf
sentinel monitor myredis 127.0.0.1 1(投票)
启动哨兵
redis-sentinel [config]

主机回来了，成为从机了。

优点：
- 基于主从复制模式，其优点它都有
- 主从可切换，系统可用性更好
- 主从模式的升级，自动切换，健壮

缺点
- 很复杂

https://mp.weixin.qq.com/s?__biz=MzkxNTE3ODU0NA==&mid=2247507228&idx=1&sn=a21ba8bf3cb47c319092847c3fd9f168&chksm=c1618843f616015569d373a0c986715c1fde7a94fcf6a4ad3b25b7b31eacfb9db71476cfede8&scene=126#rd

https://zhuanlan.zhihu.com/p/586115488

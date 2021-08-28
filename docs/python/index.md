### 基本数据类型
- 字符串
- 数字 type()方法查看，分为int 和float 类型
- 布尔值 逻辑运算符 ang or not 
- 空值 None


### 变量赋值
```py
a, b, c = 1, 2, "liangdianshui"
# 以上实例，两个整型对象 1 和 2 的分配给变量 a 和 b，字符串对象 "liangdianshui" 分配给变量 c。
```

list 列表 tuple 元组
```py
name = ['一点水', '两点水', '三点水', '四点水', '五点水']

# 通过索引来访问列表
print(name[2])
# 通过方括号的形式来截取列表中的数据
print(name[0:2])
```

### list 常用方法
[].append(x) //  push

del name[3] // 删除

len() // arr.length

[1, 2, 3] + [4, 5, 6] // 	[1, 2, 3, 4, 5, 6]

['Hi!'] * 4 // 	['Hi!', 'Hi!', 'Hi!', 'Hi!']

3 in [1, 2, 3]	// True

for x in [1, 2, 3]: print x // 	1 2 3

len(list)	列表元素个数
max(list)	返回列表元素最大值
min(list)	返回列表元素最小值
list(seq)	将元组转换为列表
list.append(obj)	在列表末尾添加新的对象
list.count(obj)	统计某个元素在列表中出现的次数
list.extend(seq)	在列表末尾一次性追加另一个序列中的多个值（用新列表扩展原来的列表）
list.index(obj)	从列表中找出某个值第一个匹配项的索引位置
list.insert(index, obj)	将对象插入列表
list.pop(obj=list[-1])	移除列表中的一个元素（默认最后一个元素），并且返回该元素的值
list.remove(obj)	移除列表中的一个元素（参数是列表中元素），并且不返回任何值
list.reverse()	反向列表中元素
list.sort([func])	对原列表进行排序

#### tuple

tuple 一旦初始化就不能修改, 元组的每一项都是指针==> 内存地址 ==> 内存

tuple4=(123,)

del tuple1  // 可删除整个元组，无法删除某一项

len(tuple)	计算元组元素个数
max(tuple)	返回元组中元素最大值
min(tuple)	返回元组中元素最小值
tuple(seq)	将列表转换为元组

#### 字典
del dict1['twowater']

dict1.clear() 

len(dict)	计算字典元素个数
str(dict)	输出字典可打印的字符串表示
type(variable)	返回输入的变量类型，如果变量是字典就返回字典类型
dict.clear()	删除字典内所有元素
dict.copy()	返回一个字典的浅复制
dict.values()	以列表返回字典中的所有值
popitem()	随机返回并删除字典中的一对键和值
dict.items()	以列表返回可遍历的(键, 值) 元组数组
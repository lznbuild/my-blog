https://github.com/yygmind/blog/issues/24


new Foo和new Foo()看起来差不多？？


function Foo() {
 return this;
}

Foo.getName = function () {
 console.log('1');
};
Foo.prototype.getName = function () {
 console.log('2');
};
new Foo.getName(); // -> 1
new Foo().getName(); // -> 2 


new Foo() 的优先级大于 new Foo ，所以对于上述代码来说可
以这样划分执行顺序
new (Foo.getName());
(new Foo()).getName();
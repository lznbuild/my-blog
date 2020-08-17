### class  

类的所有方法都定义在prototype上，不可枚举，这点和es5不一样



子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。 


class是会变量声明提升的，但不会初始化赋值 


```js
 class Parent{};

 class Child extends Parent{}

 console.log(Child.__proto__ == Parent); // true
``` 


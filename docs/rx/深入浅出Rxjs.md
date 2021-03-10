假设有这样的场景，一个Observable对象有两个Observer对象来订阅，而且这两个Observer对象并不是同时订阅，第一个Observer对象订阅N秒钟之后，第二个Observer对象才订阅同一个Observable对象，而且，在这N秒钟之内，Observable对象已经吐出了一些数据。现在问题来了，后订阅上的Observer，是不是应该接收到“错过”的那些数据呢？

选择A：错过就错过了，只需要接受从订阅那一刻开始Observable产生的数据就行。

选择B：不能错过，需要获取Observable之前产生的数据

hot observable : A

cold observable : B


每一个操作符都是创造一个新的Observable对象，不会对上游的Observable对象做任何修改，这完全符合我们在第1章提到的函数式编程的“数据不可变”要求。
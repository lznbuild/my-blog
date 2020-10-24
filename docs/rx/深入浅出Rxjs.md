假设有这样的场景，一个Observable对象有两个Observer对象来订阅，而且这两个Observer对象并不是同时订阅，第一个Observer对象订阅N秒钟之后，第二个Observer对象才订阅同一个Observable对象，而且，在这N秒钟之内，Observable对象已经吐出了一些数据。现在问题来了，后订阅上的Observer，是不是应该接收到“错过”的那些数据呢？

选择A：错过就错过了，只需要接受从订阅那一刻开始Observable产生的数据就行。

选择B：不能错过，需要获取Observable之前产生的数据

hot observable : A

cold observable : B


每一个操作符都是创造一个新的Observable对象，不会对上游的Observable对象做任何修改，这完全符合我们在第1章提到的函数式编程的“数据不可变”要求。
## 创建类操作符
- create
- of
- range 
- generate 
- repeat
- empty 
- throw
- never 
- interval timer
- from
  from 可把一切转化为 observable 
- fromPromise
- fromEvent
- ajax
- defer


每一个操作符都是创造一个新的Observable对象，不会对上游的Observable对象做任何修改，这完全符合我们在第1章提到的函数式编程的“数据不可变”要求。


range, of 推送最后的数据后，会自己调用complete方法

range(1,5, 3)   推送3个数据，是数量 


generate 
```js
const result = [];
for (let i=2; i<10; i+=2) {
  result.push(i*i);
}

const source$ = Observable.generate(
  2, // 初始值, 相当于for循环中的i=2
  value => value < 10, //继续的条件, 相当于for中的条件判断
  value => value + 2, //每次值的递增
  value => value * value // 产生的结果
);
```

repeat 操作符, 重复一个数据流多次推送，必须等上一个流结束，再重复一下个，切上一个流complete后再重复。 



### 合并类操作符 
- concat 
  concat(source1$, source2$).subscribe  source1$完结，才能轮到source2

- merge 同步推送和concat一样，异步推送才有意义 ，最后一个参数为merge的observable的数量

- zip 
  拉链，一一对应， 任何一个上游observable完结，就整体完结

- combineLatest 
  任何一个上游Observable产生数据时，从所有输入Observable对象中拿最后一次产生的数据（最新数据），然后把这些数据组合起来传给下游

- withLatestFrom  前个observable 主导数据产生时机，后者 observable只能提供数据 
所有输入Observable的地位并不相同，调用withLatestFrom的那个Observable对象起到主导数据产生节奏的作用，作为参数的Observable对象只能贡献数据，不能控制产生数据的时机


如果要合并完全独立的Observable对象，使用combineLatest。
如何要把一个Observable对象“映射”成新的数据流，同时要从其他Observable对象获取“最新数据”，就是用withLatestFrom

- race 

- forkJoin 

### 高阶observable 操作符 

- concatAll 
    只有当第一个Observable对象完结的时候，才会去订阅第二个内部Observable对象
- mergeAll d
- combineAll

## 辅助类 
- count 
  统计数据流中产生的数据个数
- max 
  获得数据流中最大的值
- min 
- reduce 

  这些操作符必定会遍历上游Observable对象中吐出的所有数据才给下游传递数据，也就是说，它们只有在上游完结的时候，才给下游传递唯一数据。

- every 
- find 
- findIndex  


## 过滤类
- take 
- takeWhile
- takeUntil  
- filter
- skip  跳过
- skipWhile  
- skipUntil  


## 高阶map 
高阶map的函数参数project把一个数据映射为一个Observable对象

- concatMap 

- mergeMap 

- switchMap 

- exhaustMap 

## 多播

单播（一对一交流） 

广播 （一对多交流）rx不支持

多播 （一对指定的几个交流）（微信拉群交流）

一个Subject对象是不能被重复使用的，只要complete函数被调用，它的生命周期也就结束了

把一个Cold Observable对象转换成一个Hot Observable对象，并不是去改变这个Cold Observable对象本身，而是产生一个新的Observable对象，包装之前Cold Observable对象，这样在数据流管道中，新的Observable对象就成为了下游，想要Hot数据源的Observer要订阅的是这个作为下游的Observable对象。
要实现这个转化，很明显需要一个“中间人”做串接的事情，这个中间人有两个职责：
·中间人要提供subscribe方法，让其他人能够订阅自己的数据源。
·中间人要能够有办法接受推送的数据，包括Cold Observable推送的数据


上面所说的第一个职责，相当于一个Observable，第二个工作，相当于一个Observer。
在RxJS中，提供了名为Subject的类型，一个Subject既有Observable的接口，也具有Observer的接口，一个Subject就具备上述的两个职责。

```js
const subject = new Subject();

const subscription1 = subject.subscribe(
  value => console.log('on observer 1 data: ' + value),
  err => console.log('on observer 1 error: ' + err.message),
  () => console.log('on observer 1 complete')
);

subject.next(1);

subject.subscribe(
  value => console.log('on observer 2 data: ' + value),
  err => console.log('on observer 2 error: ' + err.message),
  () => console.log('on observer 2 complete')
);

subject.next(2);
subscription1.unsubscribe();
subject.complete();

const subject = new Subject();

const subscription1 = subject.subscribe(
  value => console.log('on observer 1 data: ' + value),
  err => console.log('on observer 1 error: ' + err.message),
  () => console.log('on observer 1 complete')
);

subject.next(1);

subject.subscribe(
  value => console.log('on observer 2 data: ' + value),
  err => console.log('on observer 2 error: ' + err.message),
  () => console.log('on observer 2 complete')
);

subject.next(2);
subscription1.unsubscribe();
subject.complete();

/*
on observer 1 data: 1
on observer 1 data: 2
on observer 2 data: 2
on observer 2 complete
*/ 
```
后加入的观察者，并不会获得加入之前Subject对象上通过next推送的数据


Subject对象也是一个Observable对象，但是因为它有自己的状态，所以不像Cold Observable对象一样每次被subscribe都是一个新的开始，正因为如此，Subject对象是不能重复使用的


```js
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

const subject = new Subject();

subject.subscribe(
  value => console.log('on observer 1 data: ' + value),
  err => console.log('on observer 1 error: ' + err.message),
  () => console.log('on observer 1 complete')
);

subject.next(1);
subject.next(2);
subject.complete();

subject.subscribe(
  value => console.log('on observer 2 data: ' + value),
  err => console.log('on observer 2 error: ' + err.message),
  () => console.log('on observer 2 complete')
);

subject.next(3);

/*
on observer 1 data: 1
on observer 1 data: 2
on observer 1 complete
on observer 2 complete
*/

```
2号Observer虽然没有机会从subject中获得任何数据，但是却可以获得subject的complete通知

虽然Subject具备这样汇聚多个数据流的功能，但是这种使用方式可能有意想不到的结果
```js
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mapTo';

const tick1$ = Observable.interval(1000).mapTo('a').take(2);
const tick2$ = Observable.interval(1000).mapTo('b').take(2);
const subject = new Subject();

tick1$.subscribe(subject);
tick2$.subscribe(subject);

subject.subscribe(value => console.log('observer 1: ' + value));
subject.subscribe(value => console.log('observer 2: ' + value));

/*
observer 1: a
observer 2: a
observer 1: b
observer 2: b
observer 1: a
observer 2: a
*/ 

```
因为tick1$是由take产生的，也就是说在吐出2个数据之后就会调用下游的complete函数，也就是调用subject的complete函数

### 支持多播的操作符

- multicast
- share
- publish 

cold observable ==> hot observable

```js
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/multicast';
import 'rxjs/add/operator/take';

const coldSource$ = Observable.interval(1000).take(3);
const tick$ = coldSource$.multicast(new Subject());

tick$.subscribe(value => console.log('observer 1: ' + value));
setTimeout(() => {
  tick$.subscribe(value => console.log('observer 2: ' + value));
}, 1500);

// 必须connect， 才能订阅 ，控制开始多播的时机
tick$.connect();

/*
observer 1: 0
observer 1: 1
observer 2: 1
observer 1: 2
observer 2: 2

*/
```

要求multicast的使用者主动去调用返回ConnectableObservable对象的connect，还要考虑退订，这显得很麻烦，所以，ConnectableObservable还提供了一个解决这个问题的refCount函数
使用refCount之后，相对于直接使用connect
当最后一个Observer退订的时候，代表上游数据源不再有人关心了，这时候就应该让中间人Subject退订上游Cold Observable。
上面这种行为，显然需要对Observer的个数进行跟踪，当Observer数量大于1时订阅上游，当Observer数量减少为0时退订上游，而这正是refCount函数的作用。
```js
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/multicast';
import 'rxjs/add/operator/take';

const coldSource$ = Observable.interval(1000).take(3);
const tick$ = coldSource$.multicast(new Subject()).refCount();

setTimeout(() => {
  tick$.subscribe(value => console.log('observer 1: ' + value));
}, 500);
setTimeout(() => {
  tick$.subscribe(value => console.log('observer 2: ' + value));
}, 2000);

/*
observer 1: 0
observer 1: 1
observer 2: 1
observer 1: 2
observer 2: 2

*/
```

Subject是不能重复使用的，一个Subject一旦被调用了complete函数，它的生命周期就终结了，不能再接受数据了。
```js
const coldSource$ = Observable.interval(1000).take(3);
const tick$ = coldSource$.multicast(new Subject()).refCount();

tick$.subscribe(value => console.log('observer 1: ' + value));
setTimeout(() => {
  tick$.subscribe(value => console.log('observer 2: ' + value));
}, 5000);

/*
observer 1: 0
observer 1: 1
observer 1: 2
*/
```

当publish不使用任何参数的时候，简单说publish就相当于下面这样一个简单调用

```js
multicast(new Subject())
```

```js
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/take';

const tick$ = Observable.interval(1000).take(3);
const sharedTick$ = tick$.publish().refCount();

sharedTick$.subscribe(value => console.log('observer 1: ' + value));
setTimeout(() => {
  sharedTick$.subscribe(value => console.log('observer 2: ' + value));
}, 5000);

/*
observer 1: 0
observer 1: 1
observer 1: 2
*/
```

```js
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/take';

const tick$ = Observable.interval(1000).take(3);
const sharedTick$ = tick$.share();

sharedTick$.subscribe(value => console.log('observer 1: ' + value));
setTimeout(() => {
  sharedTick$.subscribe(value => console.log('observer 2: ' + value));
}, 5000);

/*
observer 1: 0
observer 1: 1
observer 1: 2
observer 2: 0
observer 2: 1
observer 2: 2

*/
```

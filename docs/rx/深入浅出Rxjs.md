假设有这样的场景，一个 Observable 对象有两个 Observer 对象来订阅，而且这两个 Observer 对象并不是同时订阅，第一个 Observer 对象订阅 N 秒钟之后，第二个 Observer 对象才订阅同一个 Observable 对象，而且，在这 N 秒钟之内，Observable 对象已经吐出了一些数据。现在问题来了，后订阅上的 Observer，是不是应该接收到“错过”的那些数据呢？

选择 A：错过就错过了，只需要接受从订阅那一刻开始 Observable 产生的数据就行。

选择 B：不能错过，需要获取 Observable 之前产生的数据

hot observable : A

cold observable : B

每一个操作符都是创造一个新的 Observable 对象，不会对上游的 Observable 对象做任何修改，这完全符合我们在第 1 章提到的函数式编程的“数据不可变”要求。

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

每一个操作符都是创造一个新的 Observable 对象，不会对上游的 Observable 对象做任何修改，这完全符合我们在第 1 章提到的函数式编程的“数据不可变”要求。

range, of 推送最后的数据后，会自己调用 complete 方法

range(1,5, 3) 推送 3 个数据，是数量

generate

```js
const result = [];
for (let i = 2; i < 10; i += 2) {
  result.push(i * i);
}

const source$ = Observable.generate(
  2, // 初始值, 相当于for循环中的i=2
  (value) => value < 10, //继续的条件, 相当于for中的条件判断
  (value) => value + 2, //每次值的递增
  (value) => value * value // 产生的结果
);
```

repeat 操作符, 重复一个数据流多次推送，必须等上一个流结束，再重复一下个，切上一个流 complete 后再重复。

### 合并类操作符

- concat
  concat(source1$, source2$).subscribe source1$完结，才能轮到 source2

- merge 同步推送和 concat 一样，异步推送才有意义 ，最后一个参数为 merge 的 observable 的数量

- zip
  拉链，一一对应， 任何一个上游 observable 完结，就整体完结

- combineLatest
  任何一个上游 Observable 产生数据时，从所有输入 Observable 对象中拿最后一次产生的数据（最新数据），然后把这些数据组合起来传给下游

- withLatestFrom 前个 observable 主导数据产生时机，后者 observable 只能提供数据
  所有输入 Observable 的地位并不相同，调用 withLatestFrom 的那个 Observable 对象起到主导数据产生节奏的作用，作为参数的 Observable 对象只能贡献数据，不能控制产生数据的时机

如果要合并完全独立的 Observable 对象，使用 combineLatest。
如何要把一个 Observable 对象“映射”成新的数据流，同时要从其他 Observable 对象获取“最新数据”，就是用 withLatestFrom

- race
  使用首先发出值的 observable

- forkJoin

### 高阶 observable 操作符

- concatAll
  只有当第一个 Observable 对象完结的时候，才会去订阅第二个内部 Observable 对象
- mergeAll d
- combineAll

## 辅助类

- count
  统计数据流中产生的数据个数
- max
  获得数据流中最大的值
- min
- reduce

  这些操作符必定会遍历上游 Observable 对象中吐出的所有数据才给下游传递数据，也就是说，它们只有在上游完结的时候，才给下游传递唯一数据。

- every
- find
- findIndex

## 过滤类

- take
- takeWhile
- takeUntil
- filter
- skip 跳过
- skipWhile
- skipUntil

## 高阶 map

高阶 map 的函数参数 project 把一个数据映射为一个 Observable 对象

- concatMap

- mergeMap

- switchMap

- exhaustMap

## 多播

单播（一对一交流）

广播 （一对多交流）rx 不支持

多播 （一对指定的几个交流）（微信拉群交流）

一个 Subject 对象是不能被重复使用的，只要 complete 函数被调用，它的生命周期也就结束了

把一个 Cold Observable 对象转换成一个 Hot Observable 对象，并不是去改变这个 Cold Observable 对象本身，而是产生一个新的 Observable 对象，包装之前 Cold Observable 对象，这样在数据流管道中，新的 Observable 对象就成为了下游，想要 Hot 数据源的 Observer 要订阅的是这个作为下游的 Observable 对象。
要实现这个转化，很明显需要一个“中间人”做串接的事情，这个中间人有两个职责：
·中间人要提供 subscribe 方法，让其他人能够订阅自己的数据源。
·中间人要能够有办法接受推送的数据，包括 Cold Observable 推送的数据

上面所说的第一个职责，相当于一个 Observable，第二个工作，相当于一个 Observer。
在 RxJS 中，提供了名为 Subject 的类型，一个 Subject 既有 Observable 的接口，也具有 Observer 的接口，一个 Subject 就具备上述的两个职责。

```js
const subject = new Subject();

const subscription1 = subject.subscribe(
  (value) => console.log("on observer 1 data: " + value),
  (err) => console.log("on observer 1 error: " + err.message),
  () => console.log("on observer 1 complete")
);

subject.next(1);

subject.subscribe(
  (value) => console.log("on observer 2 data: " + value),
  (err) => console.log("on observer 2 error: " + err.message),
  () => console.log("on observer 2 complete")
);

subject.next(2);
subscription1.unsubscribe();
subject.complete();

const subject = new Subject();

const subscription1 = subject.subscribe(
  (value) => console.log("on observer 1 data: " + value),
  (err) => console.log("on observer 1 error: " + err.message),
  () => console.log("on observer 1 complete")
);

subject.next(1);

subject.subscribe(
  (value) => console.log("on observer 2 data: " + value),
  (err) => console.log("on observer 2 error: " + err.message),
  () => console.log("on observer 2 complete")
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

后加入的观察者，并不会获得加入之前 Subject 对象上通过 next 推送的数据

Subject 对象也是一个 Observable 对象，但是因为它有自己的状态，所以不像 Cold Observable 对象一样每次被 subscribe 都是一个新的开始，正因为如此，Subject 对象是不能重复使用的

```js
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

const subject = new Subject();

subject.subscribe(
  (value) => console.log("on observer 1 data: " + value),
  (err) => console.log("on observer 1 error: " + err.message),
  () => console.log("on observer 1 complete")
);

subject.next(1);
subject.next(2);
subject.complete();

subject.subscribe(
  (value) => console.log("on observer 2 data: " + value),
  (err) => console.log("on observer 2 error: " + err.message),
  () => console.log("on observer 2 complete")
);

subject.next(3);

/*
on observer 1 data: 1
on observer 1 data: 2
on observer 1 complete
on observer 2 complete
*/
```

2 号 Observer 虽然没有机会从 subject 中获得任何数据，但是却可以获得 subject 的 complete 通知

虽然 Subject 具备这样汇聚多个数据流的功能，但是这种使用方式可能有意想不到的结果

```js
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/take";
import "rxjs/add/operator/mapTo";

const tick1$ = Observable.interval(1000).mapTo("a").take(2);
const tick2$ = Observable.interval(1000).mapTo("b").take(2);
const subject = new Subject();

tick1$.subscribe(subject);
tick2$.subscribe(subject);

subject.subscribe((value) => console.log("observer 1: " + value));
subject.subscribe((value) => console.log("observer 2: " + value));

/*
observer 1: a
observer 2: a
observer 1: b
observer 2: b
observer 1: a
observer 2: a
*/
```

因为 tick1$是由 take 产生的，也就是说在吐出 2 个数据之后就会调用下游的 complete 函数，也就是调用 subject 的 complete 函数

### 支持多播的操作符

- multicast
- share
- publish

cold observable ==> hot observable

```js
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/multicast";
import "rxjs/add/operator/take";

const coldSource$ = Observable.interval(1000).take(3);
const tick$ = coldSource$.multicast(new Subject());

tick$.subscribe((value) => console.log("observer 1: " + value));
setTimeout(() => {
  tick$.subscribe((value) => console.log("observer 2: " + value));
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

要求 multicast 的使用者主动去调用返回 ConnectableObservable 对象的 connect，还要考虑退订，这显得很麻烦，所以，ConnectableObservable 还提供了一个解决这个问题的 refCount 函数
使用 refCount 之后，相对于直接使用 connect
当最后一个 Observer 退订的时候，代表上游数据源不再有人关心了，这时候就应该让中间人 Subject 退订上游 Cold Observable。
上面这种行为，显然需要对 Observer 的个数进行跟踪，当 Observer 数量大于 1 时订阅上游，当 Observer 数量减少为 0 时退订上游，而这正是 refCount 函数的作用。

```js
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/multicast";
import "rxjs/add/operator/take";

const coldSource$ = Observable.interval(1000).take(3);
const tick$ = coldSource$.multicast(new Subject()).refCount();

setTimeout(() => {
  tick$.subscribe((value) => console.log("observer 1: " + value));
}, 500);
setTimeout(() => {
  tick$.subscribe((value) => console.log("observer 2: " + value));
}, 2000);

/*
observer 1: 0
observer 1: 1
observer 2: 1
observer 1: 2
observer 2: 2

*/
```

Subject 是不能重复使用的，一个 Subject 一旦被调用了 complete 函数，它的生命周期就终结了，不能再接受数据了。

```js
const coldSource$ = Observable.interval(1000).take(3);
const tick$ = coldSource$.multicast(new Subject()).refCount();

tick$.subscribe((value) => console.log("observer 1: " + value));
setTimeout(() => {
  tick$.subscribe((value) => console.log("observer 2: " + value));
}, 5000);

/*
observer 1: 0
observer 1: 1
observer 1: 2
*/
```

当 publish 不使用任何参数的时候，简单说 publish 就相当于下面这样一个简单调用

```js
multicast(new Subject());
```

```js
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/publish";
import "rxjs/add/operator/take";

const tick$ = Observable.interval(1000).take(3);
const sharedTick$ = tick$.publish().refCount();

sharedTick$.subscribe((value) => console.log("observer 1: " + value));
setTimeout(() => {
  sharedTick$.subscribe((value) => console.log("observer 2: " + value));
}, 5000);

/*
observer 1: 0
observer 1: 1
observer 1: 2
*/
```

```js
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/share";
import "rxjs/add/operator/take";

const tick$ = Observable.interval(1000).take(3);
const sharedTick$ = tick$.share();

sharedTick$.subscribe((value) => console.log("observer 1: " + value));
setTimeout(() => {
  sharedTick$.subscribe((value) => console.log("observer 2: " + value));
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

```js
const pinyins = erodePinyin(keypoints.map((keypoint) => keypoint.text)).map(
  (erodeText, index) => {
    const keypoint = { ...keypoints[index], erodeText };
    this.keypointMap.set(keypoint.id, keypoint);
    return erodeText;
  }
);
this.form.controls["note"].setValue(pinyins.join("-"));
this.contentForm.controls["text"].setValue(pinyins.join(""));
this.array2FormArray(ids, this.noteKeypointIdsForm);
this.optionsForm.at(0).reset({ keypointId: null, imageUrl: null });
this.clearFormArray(this.targetsForm);
this.clearFormArray(this.keypointIdsForm);
```

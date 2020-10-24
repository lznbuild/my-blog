jasmine单元测试有两个核心的部分：describe函数块和it函数块。

Suites
Suites可以理解为一组测试用例，使用全局的Jasmin函数describe创建。describe函数接受两个参数，一个字符串和一个函数。字符串是这个Suites的名字或标题（通常描述下测试内容），函数是实现Suites的代码块。

Specs
Specs可以理解为一个测试用例，使用全局的Jasmin函数it创建。和describe一样接受两个参数，一个字符串和一个函数，函数就是要执行的测试代码，字符串就是测试用例的名字。一个Spec可以包含多个expectations来测试代码。

Expectations
Expectations由expect函数创建。接受一个参数。和Matcher一起联用，设置测试的预期值。


在分组(describe)中可以写多个测试用例(it)，也可以再进行分组(describe)，在测试用例(it)中定义期望表达式(expect)和匹配判断(toBe*)。




内置Matchers 




为了在复杂的测试用例中更加便于组装和拆卸，Jasmine提供了四个函数：
beforeEach(function)  //在每一个测试用例(it)执行之前都执行一遍beforeEach函数；  
afterEach(function)  //在每一个测试用例(it)执行完成之后都执行一遍afterEach函数；  
beforeAll(function)  //在所有测试用例执行之前执行一遍beforeAll函数；  
afterAll(function)  //在所有测试用例执行完成之后执行一遍afterAll函数；

toBe() 等同 ===
toEqual() 相当于 ==
toNotBe() 等同 !==
toBeDefined() 等同 !== undefined
toBeUndefined() 等同 === undefined
toBeNull() 等同 === null
toBeTruthy() 等同 !!obj
toBeFalsy() 等同 !obj
toBeLessThan() 等同 <
toBeGreaterThan() 等同 >
toEqual() 相当于 ==
toNotEqual() 相当于 !=
toContain() 相当于 indexOf
toBeCloseTo() 数值比较时定义精度，先四舍五入后再比较。
toHaveBeenCalled() 检查function是否被调用过
toHaveBeenCalledWith() 检查传入参数是否被作为参数调用过
toMatch() 等同 new RegExp().test()
toNotMatch() 等同 !new RegExp().test()
toThrow() 检查function是否会抛出一个错误
toBeCloseTo() 足够接近，第二个参数指定精度

## 关于output 

```js
export class DashboardHeroComponent {
  @Input() hero: Hero;
  @Output() selected = new EventEmitter<Hero>();
  click() { this.selected.emit(this.hero); }
}
```

```js
it('raises the selected event when clicked', () => {
  const comp = new DashboardHeroComponent();
  const hero: Hero = {id: 42, name: 'Test'};
  comp.hero = hero;

  comp.selected.subscribe((selectedHero: Hero) => expect(selectedHero).toBe(hero));
  comp.click();
});
```


https://jasmine.github.io/2.0/introduction.html#section-Spies


https://developer.ibm.com/zh/articles/wa-lo-use-karma-jasmine-build-test-environment/


## 辅助匹配函数

expect({}).toEqual(jasmine.any(Object))  数据类型的断言
expect(1).toEqual(jasmine.anything())  非undefined null就通过

expect({a:2,b:2}).toEqual(jasmine.objectContaining({a:2})) 是否包含键值对
expect([1,2,3]).toEqual(jasmine.arrayContaining([2])) 是否是数组一部分

expect({foo: 'bar'}).toEqual(jasmine.stringMatching(/^bar$/))
expect({foo: 'bar'}).toEqual(jasmine.stringMatching('bar'))



spyOn 跟踪函数调用
### spy相关匹配器
expect().toHaveBeenCalled() 是否调用
.toHaveBeenCalledTimes() 调用次数
.toHaveBeenCalledWith(attr) 验证调用参数  
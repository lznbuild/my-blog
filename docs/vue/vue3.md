对TypeScript支持不友好（所有属性都放在了this对象上，难以推倒组件的数据类型）
大量的API挂载在Vue对象的原型上，难以实现TreeShaking。
CompositionAPI。受ReactHook启发
更方便的支持了 jsx
Vue 3 的 Template 支持多个根标签，Vue 2 不支持
对虚拟DOM进行了重写、对模板的编译进行了优化操作.


setup 函数会在 beforeCreate 、created 之前执行, vue3也是取消了这两个钩子，统一用setup代替, 该函数相当于一个生命周期函数

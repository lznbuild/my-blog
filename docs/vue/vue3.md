对TypeScript支持不友好（所有属性都放在了this对象上，难以推倒组件的数据类型）
大量的API挂载在Vue对象的原型上，难以实现TreeShaking。
CompositionAPI。受ReactHook启发
更方便的支持了 jsx
Vue 3 的 Template 支持多个根标签，Vue 2 不支持
对虚拟DOM进行了重写、对模板的编译进行了优化操作.


setup 函数会在 beforeCreate 、created 之前执行, vue3也是取消了这两个钩子，统一用setup代替, 该函数相当于一个生命周期函数
setup 选项在组件创建之前执行，不要用this。 使用composition api的入口, 在 beforeCreate 之前执行

const counter = ref(0), ref创建响应式变量，可直接修改counter.value的值

onMounted(getUserRepositories)

watch(counter, (newValue, oldValue) => {
  console.log('The new counter value is: ' + counter.value)
})


// 使用 `toRefs` 创建对 `props` 中的 `user` property 的响应式引用
  const { user } = toRefs(props)


  const twiceTheCounter = computed(() => counter.value * 2)



  expose({
      increment
    })
通过模板 ref 暴露给父组件


watch() 和 watchEffect() 在 DOM 挂载或更新之前运行副作用


 watchEffect(() => {
        console.log(root.value) // => <div>This is a root element</div>
      },
      {
        flush: 'post'
      })
这将在 DOM 更新后运行副作用，确保模板引用与 DOM 保持同步，并引用正确的元素。


watchEffect 不需要手动传入依赖
watchEffect 会先执行一次用来自动收集依赖
watchEffect 无法获取到变化前的值， 只能获取变化后的值


watch(
  () => state.room,
  (newType, oldType) => {
    console.log("新值:", newType, "老值:", oldType);
  },
  { deep: true }
);
如果不使用第三个参数deep:true， 是无法监听到数据变化的。 前面我们提到，默认情况下，watch 是惰性的, 那什么情况下不是惰性的， 可以立即执行回调函数呢？其实使用也很简单， 给第三个参数中设置immediate: true即可


Suspense，它的插槽指定了default 和 fallback 两种状态

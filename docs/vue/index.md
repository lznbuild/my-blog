watch 第一次不会执行



## 指令
通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：

<span v-once>这个将不会改变: {{ msg }}</span>




### 动态参数
<a v-bind:[attributeName]="url"> ... </a>


不行
<table>
  <blog-post-row></blog-post-row>
</table>
解决方式
<table>
  <tr is="blog-post-row"></tr>
</table>


个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件，但是像单选框、复选框等类型的输入控件可能会将 value attribute 用于不同的目的。model 选项可以用来避免这样的冲突：

Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `




  <text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
></text-document>
为了方便起见，我们为这种模式提供一个缩写，即 .sync 修饰符：

<text-document v-bind:title.sync="doc.title"></text-document>



slot 后备内容
<button type="submit">
  <slot>Submit</slot>
</button>


具名slot
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>

注意 v-slot 只能添加在 <template> 上 (

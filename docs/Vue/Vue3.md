Vue3 现已经成为 Vue 的默认版本，相比于 Vue2，Vue3 具有更好的性能，更好的 TypeScript 支持，使用组合式 API 等优势。

## 组合式 API

Composition API 又叫作组合式 API，在学习组合式 API 之前，先回顾一下选项式 API：

```js
Vue.component("my-component", {
  data() {
    //用于定义组件的数据属性
    return {
      message: "Hello Vue!",
    };
  },
  computed: {
    //用于定义计算属性
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    //用于定义组件的方法
    greet() {
      alert(this.message);
    },
  },
  watch: {
    //用于监听数据属性的变化
    message(newValue, oldValue) {
      console.log("message changed from", oldValue, "to", newValue);
    },
  },
  props: {
    //用于定义组件的属性。可以从父组件传递数据给子组件
    title: String,
  },
  mounted() {
    //用于在组件挂载到DOM后执行的操作
    console.log("Component mounted");
  },
  created() {
    //用于在实例创建完成后执行的操作
    console.log("Component created");
  },
});
```

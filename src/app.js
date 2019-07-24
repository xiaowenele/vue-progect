import Vue from "vue";
import App from "./app.vue";
import router from "../src/router";
// 新增代码，测试观察模式。

// 引入示例模块
import print from "./print";
print();
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

// 增加对HMR的实现
if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("接收更新后的模块");
    print();
  });
}
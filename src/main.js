import Vue from "vue";
import { Button, Select, Table, TableColumn, Input } from 'element-ui';
import App from "./App.vue";

Vue.use(Button);
Vue.use(Select);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Input);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

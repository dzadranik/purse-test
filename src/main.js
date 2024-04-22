import "./style.css";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import * as components from "vuetify/components";
import App from "./App.vue";
import routes from "./routes";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { createWebHashHistory, createRouter } from "vue-router";

const vuetify = createVuetify({
  components,
});

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).use(vuetify).mount("#app");

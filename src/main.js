import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/index.js";
import "./style.css";

import piniaPluginPersistedState from "pinia-plugin-persistedstate";

// createApp(App).use(router).use(createPinia()).mount("#app");
createApp(App)
  .use(router)
  .use(createPinia().use(piniaPluginPersistedState))
  .mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueBus from 'vue-bus';

createApp(App).use(router).use(VueBus).mount("#app");

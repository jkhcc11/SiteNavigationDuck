import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupRouter } from "./router/index";
import { setupStore } from "./store/index";
import { setupNaiveDiscreteApi } from "./utils/naiveDiscreteApi";

const app = createApp(App);

setupNaiveDiscreteApi();
setupRouter(app);
setupStore(app);
app.mount("#app");

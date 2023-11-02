import { createPinia } from "pinia";
// 数据持久化插件
import piniaPersist from "pinia-plugin-persist";
import type { App } from "vue";

// 创建 pinia 实例
const store = createPinia();

// 使用插件
store.use(piniaPersist);

// 安装
export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };

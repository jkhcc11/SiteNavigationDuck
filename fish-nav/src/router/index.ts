import { App } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// routes 的路由路径,在后续的设计中，也可以作为外部引入的方法去做设计
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views//home/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: { hidden: true }, // 配置元素
    component: () => import("../views/About.vue"),
  },
];

// 创建一个 router 实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 导出安装
export async function setupRouter(app: App): Promise<void> {
  app.use(router);
}

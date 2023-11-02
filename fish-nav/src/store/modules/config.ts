import { defineStore } from "pinia";
import { store } from "..";
import { defaultEngineKey, defaultMenuKey } from "../consts";

export interface IConfigState {
  engineKey: string;
  menuKey: string;
}

export const useConfigStore = defineStore({
  id: "configStore",
  state: (): IConfigState => ({
    engineKey: defaultEngineKey,
    menuKey: defaultMenuKey,
  }),
  getters: {
    getEngine(): string {
      return this.engineKey;
    },
    getMenu(): string {
      return this.menuKey;
    },
  },
  // 数据持久化配置
  persist: {
    enabled: true, // 开启存储
    strategies: [{ storage: localStorage }],
  },
  actions: {
    setConfig(input: IConfigState) {
      this.engineKey = input.engineKey;
      this.menuKey = input.menuKey;
    },
    setEngine(engineKey: string) {
      this.engineKey = engineKey;
    },
    // 初始化state
    clear() {
      this.$reset();
    },
  },
});

// 在组件setup函数外使用
export function useuseConfigStoreWithOut() {
  return useConfigStore(store);
}

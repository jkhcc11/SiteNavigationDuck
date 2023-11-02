<template>
  <n-config-provider :theme="theme">
    <n-layout style="height: 100vh">
      <n-layout-header>
        <n-grid :x-gap="5" :y-gap="1" cols="3" responsive="screen">
          <n-grid-item>
            <div style="line-height: 10vh">
              <n-image
                class="logo"
                src="/imgs/logo.png"
                :preview-disabled="true"
              />
            </div>
          </n-grid-item>
          <n-grid-item>
            <div style="line-height: 10vh">
              <InputSearch />
            </div>
          </n-grid-item>
          <n-grid-item>
            <div style="line-height: 10vh">
              <n-button quaternary circle @click="onSetConfigClick">
                <template #icon>
                  <n-icon><SettingsOutline /></n-icon>
                </template>
              </n-button>
            </div>
          </n-grid-item>
        </n-grid>
      </n-layout-header>

      <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
        <n-layout-sider bordered width="22vh" show-trigger>
          <n-menu :options="menuOptions" :render-icon="renderMenuIcon" />
        </n-layout-sider>
        <n-layout content-style="padding: 24px;" :native-scrollbar="false">
          <NavItem />
        </n-layout>

        <SetConfig :isShow="isShow" @onClose="onClose" />
      </n-layout>

      <n-layout-footer
        position="absolute"
        style="height: 64px; padding: 24px; bottom: 0px"
        bordered
      >
        <span> Copyright © FishNav </span>
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<script setup lang="ts">
import NavItem from "./components/nav-item.vue";
import InputSearch from "./components/search.vue";
import SetConfig from "./components/set-config.vue";
import {
  darkTheme,
  NConfigProvider,
  NLayout,
  NLayoutHeader,
  NLayoutFooter,
  NImage,
  NButton,
  NIcon,
  NGrid,
  NGridItem,
  NLayoutSider,
  NMenu,
  MenuOption,
} from "naive-ui";
import { SettingsOutline, BookmarkOutline } from "@vicons/ionicons5";
import { ref, onMounted, onBeforeUnmount, h } from "vue";
import { categoryList } from "@/utils/defaultData";

const theme = ref<any>(null);
// 用来判断配置抽屉是否打开
const isShow = ref(false);

//设置按钮点击事件
const onSetConfigClick = () => {
  // todo: 需要设置子组件的选中值等
  // configFormValue.defaultSearchEngine = {
  //   lable: searchEngineStore.getSearchEngine().showLable,
  //   key: searchEngineStore.getSearchEngine().searchKey,
  // };
  // configFormValue.quickAccessJson = JSON.stringify(getQuickAccessList());
  isShow.value = true;
};

//默认主题
const detectColorScheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    theme.value = darkTheme;
  } else {
    theme.value = null;
  }
};

const menuOptions = categoryList;

const onClose = () => {
  isShow.value = false;
};

function renderMenuIcon(option: MenuOption) {
  return h(NIcon, null, { default: () => h(BookmarkOutline) });
}

onMounted(() => {
  detectColorScheme();
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addListener(detectColorScheme);
});

onBeforeUnmount(() => {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .removeListener(detectColorScheme);
});
</script>

<style>
.logo {
  height: 7vh;
  border-radius: 50%;
}
</style>

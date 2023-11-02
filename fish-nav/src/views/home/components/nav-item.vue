<template>
  <n-layout style="height: 80vh" has-sider>
    <n-layout-header>
      <n-grid :cols="1" responsive="screen">
        <n-grid-item>
          <!-- <n-menu mode="horizontal" :options="menuOptions" /> -->

          <n-tabs
            type="line"
            animated
            justify-content="center"
            @update:value="onTabChange"
            :value="tabVRef"
          >
            <n-tab-pane
              :name="menuItem.key"
              :tab="menuItem.label"
              v-for="menuItem in allCatetory"
            >
            </n-tab-pane>
          </n-tabs>
        </n-grid-item>
      </n-grid>
    </n-layout-header>

    <n-layout
      position="absolute"
      style="top: 5vh; bottom: 0px"
      :native-scrollbar="false"
    >
      <n-layout content-style="padding: 24px;">
        <n-grid
          :x-gap="12"
          :y-gap="8"
          cols="2 s:3 m:4 l:5 xl:6 2xl:7"
          responsive="screen"
        >
          <n-grid-item v-for="item in navItems" style="overflow: hidden">
            <a class="nav-box-son-url" :href="item.url" target="_blank">
              <n-popover
                :show-arrow="false"
                placement="bottom"
                width="trigger"
                v-if="item.description"
              >
                <template #trigger>
                  <n-card hoverable :title="item.name" style="height: 15vh">
                    <n-image :src="item.img" :preview-disabled="true" />
                    <n-gradient-text
                      :gradient="{
                        from: 'rgb(85, 85, 85)',
                        to: 'rgb(170, 170, 170)',
                      }"
                    >
                      {{ item.remark }}
                    </n-gradient-text>
                  </n-card>
                </template>
                {{ item.description }}
              </n-popover>

              <n-card
                hoverable
                :title="item.name"
                v-if="!item.description"
                style="height: 15vh"
              >
                <n-image :src="item.img" :preview-disabled="true" />
                <n-gradient-text
                  :gradient="{
                    from: 'rgb(85, 85, 85)',
                    to: 'rgb(170, 170, 170)',
                  }"
                >
                  {{ item.remark }}
                </n-gradient-text>
              </n-card>
            </a>
          </n-grid-item>
        </n-grid>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import {
  NImage,
  NCard,
  NGradientText,
  NGridItem,
  NGrid,
  NLayout,
  NLayoutHeader,
  NTabs,
  NTabPane,
  NPopover,
} from "naive-ui";
import { NavItem } from "@/utils/types";
import { categoryList, quickAccessList } from "@/utils/defaultData";
import { onMounted, ref } from "vue";
import { useConfigStore } from "@/store/modules/config";

// defineProps({
//   navItems: {
//     type: Array<NavItem>,
//     required: true,
//     default: false,
//   },
// });

const configStore = useConfigStore();
const tabVRef = ref<string>();
const allMenu = quickAccessList;
const allCatetory = categoryList;
const navItems = ref<Array<NavItem>>([]);

//tab切换
const onTabChange = (tabV: any) => {
  //console.log(tabV);
  navItems.value = allMenu.filter((it) => it.category == tabV);
  tabVRef.value = tabV;
};

onMounted(() => {
  tabVRef.value = configStore.getMenu;
  navItems.value = allMenu.filter((it) => it.category == tabVRef.value);
});
</script>

<style>
.n-card .n-image img {
  width: 35px;
}
</style>

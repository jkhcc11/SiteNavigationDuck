<template>
  <n-input
    round
    placeholder="输入关键字后 回车"
    v-model:value="inputValue"
    size="large"
    @keyup="searchHandleKeyUp"
  >
    <template #prefix>
      <n-dropdown
        trigger="hover"
        placement="bottom-start"
        :options="enginesOptions"
        @select="onSelect"
      >
        <n-image
          :src="selectValue.icon"
          :preview-disabled="true"
          style="height: 3vh"
        ></n-image>
      </n-dropdown>
    </template>
    <template #suffix>
      <n-icon :component="FlashOutline" />
    </template>
  </n-input>
</template>

<script setup lang="ts">
import { NImage, NInput, NIcon, NDropdown } from "naive-ui";
import { FlashOutline } from "@vicons/ionicons5";
import { ref, reactive, onMounted } from "vue";
import { searchEngines } from "@/utils/defaultData";
import { useConfigStore } from "@/store/modules/config";

const configStore = useConfigStore();
const inputValue = ref(null);
const selectValue = reactive({
  key: "",
  label: "",
  icon: "",
});

// 定义搜索引擎类型
const enginesOptions = reactive<any[]>(
  searchEngines.map((item) => {
    return {
      key: item.key,
      label: item.label,
    };
  })
);
// const options = enginesOptions);

const searchEngine = reactive(searchEngines);

//搜索框按键监听
const searchHandleKeyUp = (e: any) => {
  let inputText: string | null = inputValue.value;

  //如果是回车键跳转页面
  if (e.key === "Enter") {
    if (inputText) {
      //进行URL编码
      inputText = encodeURIComponent(inputText);
    }

    window.open(selectValue.key + inputText);
    inputValue.value = null;
  }
};

//下拉选择事件
const onSelect = (item: any) => {
  if (item) {
    const now = searchEngine.find((v) => v.key === item);
    if (now) {
      selectValue.label = now.label;
      selectValue.key = now.key;
      selectValue.icon = now.icon;

      configStore.setEngine(item);
    }
  }
};

onMounted(() => {
  const currentEngineKey = configStore.getEngine;
  const searchEngine = searchEngines.find((it) => it.key == currentEngineKey);
  selectValue.label = searchEngine?.label ?? "";
  selectValue.key = searchEngine?.key ?? "";
  selectValue.icon = searchEngine?.icon ?? "";
});
</script>

<style scoped></style>

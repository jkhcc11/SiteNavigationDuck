<template>
  <n-drawer
    v-model:show="drawerShow"
    :width="502"
    placement="right"
    :on-after-leave="onClose"
  >
    <n-drawer-content title="配置" closable>
      <n-form
        ref="formRef"
        label-width="30vh"
        :model="configFormValue"
        :rules="rules"
      >
        <n-form-item label="默认搜索" path="defaultSearchEngine">
          <n-select
            v-model:value="configFormValue.defaultSearchEngine"
            placeholder="请选择搜索引擎"
            :options="enginesOptions"
            value-field="key"
          />
        </n-form-item>

        <n-form-item label="默认菜单" path="defaultMenu">
          <n-select
            v-model:value="configFormValue.defaultMenu"
            placeholder="默认菜单"
            :options="menuOptions"
            value-field="key"
          />
        </n-form-item>

        <n-form-item label="选择文件" path="file">
          <n-upload
            ref="uploadRef"
            :default-upload="false"
            :on-change="onFileChange"
          >
            <n-button>选择文件</n-button>
          </n-upload>
        </n-form-item>

        <n-form-item>
          <n-button type="warning" @click="onReset">恢复默认配置</n-button>
        </n-form-item>
      </n-form>

      <template #footer>
        <n-button type="primary" @click="onConfigSave">保存</n-button>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, toRef, watch } from "vue";
import {
  NDrawer,
  NDrawerContent,
  NButton,
  NForm,
  NFormItem,
  FormInst,
  NSelect,
  NUpload,
  UploadInst,
  UploadFileInfo,
} from "naive-ui";
import { categoryList, searchEngines } from "@/utils/defaultData";
import { FavoriteItem } from "@/utils/types";
import { useConfigStore } from "@/store/modules/config";

//props
const props = defineProps({
  isShow: {
    type: Boolean,
    required: true,
    default: false,
  },
});
const emit = defineEmits(["onClose"]);

const uploadRef = ref<UploadInst | null>(null);
const isShowRef = toRef(props, "isShow");
const drawerShow = ref(isShowRef.value); // 创建一个新的 ref

//const searchEngineStore = useSearchEngineStore();
const configStore = useConfigStore();
const formRef = ref<FormInst | null>(null);

//设置表单
const configFormValue = reactive<any>({
  defaultSearchEngine: null as any | null,
  defaultMenu: null as any | null,
});
const rules = {};

//搜索下拉
const enginesOptions = reactive<any[]>(searchEngines);
const menuOptions = reactive<any[]>(categoryList);

//恢复默认配置方法
const onReset = () => {
  // configFormValue.defaultSearchEngine =    searchEngineStore.getDefault().searchKey;
  // configFormValue.quickAccessJson = JSON.stringify(quickAccessList);
  configStore.clear();
  location.reload();
};

//处理节点 如果元素是 <H3>，并且它有一个后续的兄弟元素，那么我们递归地调用 processElementNew 函数来解析这个兄弟元素
function processElementNew(
  dl: HTMLDListElement | null | Element
): Array<FavoriteItem> {
  const result = [] as Array<FavoriteItem>;
  if (!dl) {
    return [];
  }
  for (let i = 0; i < dl.children.length; i++) {
    const node = dl.children[i];
    const nodeTagName = node.tagName.toLowerCase();
    if (nodeTagName != "dt") {
      continue;
    }

    const h3Element = node.querySelector("h3");
    const aElement = node.querySelector("a");
    if (h3Element) {
      //直接获取标题并检测兄弟节点
      result.push({
        title: h3Element.textContent ?? "",
        href: "",
        children: h3Element.nextElementSibling
          ? processElementNew(h3Element.nextElementSibling)
          : [],
      });
    } else if (aElement) {
      //a直接获取
      result.push({
        title: aElement.textContent ?? "",
        href: aElement.getAttribute("href") ?? "",
        children: [],
      });
    }
  }
  return result;
}

//解析html
const parseHtml = (htmlStr: string): Array<FavoriteItem> => {
  const parser = new DOMParser();
  //解析html字符串
  const htmlDoc = parser.parseFromString(htmlStr, "text/html");
  //获取所有dl节点
  const queryElements = htmlDoc.querySelector("dl");
  const hierarchy = processElementNew(queryElements);
  return hierarchy;
};

//配置保存方法
const onConfigSave = () => {
  parseHtml("");
  //校验表单
  formRef.value?.validate((err) => {
    if (!err) {
      configStore.setConfig({
        menuKey: configFormValue.defaultMenu,
        engineKey: configFormValue.defaultSearchEngine,
      });

      //刷新页面
      location.reload();
    } else {
      console.log("表单验证错误");
    }
  });
};

//关闭回调
const onClose = () => {
  emit("onClose");
};

//选择文件变更
const onFileChange = (options: {
  file: UploadFileInfo;
  fileList: Array<UploadFileInfo>;
  event?: Event;
}) => {
  const nFile = options.file;
  if (nFile && nFile.status == "pending") {
    const currentFile = nFile.file as File;
    if (currentFile) {
      //使用FileReader读取
      const reader = new FileReader();
      //加载事件
      reader.onload = (e) => {
        //获取读取到的结果
        const htmlContent = e.target?.result as string;
        console.log(parseHtml(htmlContent));
      };

      // Read the file as text
      reader.readAsText(currentFile);
    }
  }
};

// 监听 showConfig
watch(isShowRef, (newVal) => {
  drawerShow.value = newVal;
});

onMounted(() => {
  configFormValue.defaultSearchEngine = configStore.getEngine;
  configFormValue.defaultMenu = configStore.getMenu;
});
</script>

<style scoped></style>

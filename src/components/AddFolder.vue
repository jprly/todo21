<template>
  <Dialog
    header="Add Folder"
    :closable="false"
    :visible="displayBasic"
    :style="{ margin: '20px' }"
  >
    <InputText
      id="folderinput"
      type="text"
      v-model="todoInput"
      placeholder="Folder name..."
      style="width: 100%"
    />

    <template #footer>
      <Button
        label="Cancel"
        icon="pi pi-times"
        @click="methods.toggleAddFolder"
        class="p-button-text"
      />
      <Button
        label="Create"
        icon="pi pi-check"
        @click="addNewFolder"
        autofocus
      />
    </template>
  </Dialog>
</template>

<script setup>
import { inject, ref, watchEffect, nextTick, onUpdated } from "vue";
import { v4 as uuidv4 } from "uuid";

const store = inject("store");
const state = inject("store").state.value;
const methods = inject("store").methods;
const todoInput = ref("");
const displayBasic = ref(state.addFolderVisible);
onUpdated(() => {
  nextTick(() => {
    document.querySelector("#folderinput").focus();

    console.log(
      "next tick from folder 👋",
      document.querySelector("#folderinput")
    );
  });
});
watchEffect(() => {
  console.log("from watcheffect", state.addFolderVisible);
  displayBasic.value = state.addFolderVisible;
});

const addNewFolder = () => {
  const payload = {
    folderName: todoInput.value,
    uid: uuidv4(),
    todos: [],
  };
  console.log("payload from component", payload);
  methods.addNewFolder(payload);
  methods.toggleAddFolder();
};
</script>

<style></style>

<template>
  <Dialog
    header="Add Todo"
    :closable="false"
    :visible="displayBasic"
    :style="{ margin: '20px' }"
  >
    <InputText
      type="text"
      v-model="todoInput"
      placeholder="Folder name..."
      style="width: 100%"
    />

    <template #footer>
      <Button
        label="Cancel"
        icon="pi pi-times"
        @click="methods.toggleAddTodo"
        class="p-button-text"
      />
      <Button label="Create" icon="pi pi-check" @click="addNewTodo" autofocus />
    </template>
  </Dialog>
</template>

<script setup>
import { inject, ref, watchEffect } from "vue";
import { v4 as uuidv4 } from "uuid";

const store = inject("store");
const state = inject("store").state.value;
const methods = inject("store").methods;
const todoInput = ref("");
const displayBasic = ref(state.addFolderVisible);

watchEffect(() => {
  console.log("from watcheffect", state.addTodoVisible);
  displayBasic.value = state.addTodoVisible;
});

const addNewTodo = () => {
  const payload = {
    active: false,
    date: new Date(),
    title: todoInput.value,
    description: "",
    uid: uuidv4(),
  };
  console.log("payload from component", payload);
  methods.addNewTodo(payload, state.activeFolder);
  methods.toggleAddTodo();
};
</script>

<style></style>

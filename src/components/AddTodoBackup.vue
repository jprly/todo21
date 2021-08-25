<template>
  <Dialog
    header="Add Todo"
    :closable="false"
    :visible="displayBasic"
    :style="{ margin: '20px' }"
  >
    <form @submit.prevent="addNewTodo">
      <InputText
        id="todoinput"
        ref="filter"
        type="text"
        v-model="todoInput"
        placeholder="Todo title..."
        style="width: 100%"
      />
    </form>
    <template #footer>
      <Button
        label="Cancel"
        icon="pi pi-times"
        @click="methods.toggleAddTodo"
        class="p-button-text"
      />
      <Button label="Create" icon="pi pi-check" @click="addNewTodo" />
    </template>
  </Dialog>
</template>

<script setup>
import { inject, ref, watchEffect, onUpdated, nextTick } from "vue";
import { v4 as uuidv4 } from "uuid";
const filter = ref(null);
onUpdated(() => {
  nextTick(() => {
    let getinput = document.querySelector("#todoinput");
    getinput.focus();
  });
});
const store = inject("store");
const state = inject("store").state.value;
const methods = inject("store").methods;
const todoInput = ref("");
const displayBasic = ref(state.addFolderVisible);

watchEffect(() => {
  console.log("from watcheffect", state.addTodoVisible);
  displayBasic.value = state.addTodoVisible;
  console.log("from filter watcheffect", filter.value);
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
  todoInput.value = "";
};
</script>

<style>
.p-inputtext:enabled:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: none !important;
  border-color: none !important;
}
</style>

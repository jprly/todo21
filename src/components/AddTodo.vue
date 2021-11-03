<template>
  <Dialog
    header="Add Todo"
    :closable="false"
    :visible="displayBasic"
    :style="{ margin: '20px' }"
  >
    <Form @submit="addNewTodo">
      <InputText
        class="InputText"
        name="email"
        type="email"
        v-model="todoInput"
        style="width: 100%"
        placeholder="Todo title..."
      />
    </Form>
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
import { Form, Field } from "vee-validate";

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

const addNewTodo = (values) => {
  console.log(JSON.stringify(values, null, 2));
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

const validateEmail = (value) => {
  // if the field is empty
  if (!value) {
    return "This field is required";
  }

  // if the field is not a valid email
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return "This field must be a valid email";
  }

  // All is good
  return true;
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

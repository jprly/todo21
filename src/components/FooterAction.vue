<template>
  <div class="navbar">
    <span
      v-if="true"
      class="material-icons-outlined"
      style="font-size: 30px; cursor: pointer"
      @click="methods.toggleAddFolder"
    >
      create_new_folder </span
    ><span v-else style="width: 30px"></span>
    <span style="color: grey">{{ state.folders.length }} folders</span>
    <span
      class="material-icons-outlined"
      style="font-size: 30px; cursor: pointer"
      @click="methods.toggleAddTodo"
    >
      add_task
    </span>
  </div>
  <AddTodo />
</template>
<script setup>
import AddTodo from "./AddTodo.vue";
import { inject } from "vue";
const state = inject("store").state.value;

const methods = inject("store").methods;
</script>
<style>
.navbar {
  border-top: #c3c3c3 1px solid;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px;
  color: #2196f3;
}
</style>

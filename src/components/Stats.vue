<template>
<div style="display: flex; justify-content: space-between; margin: 10px; margin-bottom: 15px;">
    <div style="text-align: center; flex-grow: 1; box-shadow: 0px 2px 5px 0 rgb(0 0 0 / 0%), 0 6px 20px 0 rgb(0 0 0 / 19%); padding: 20px; border-radius: 5px;
">
        <h1 style="margin: 0px; color: #2196f3">{{completed}}</h1>
        <div style="font-size: 11px; color: #545456; letter-spacing: 1px; font-weight: 600;">COMPLETED</div>
    </div>
    <div style="width: 10px;"></div>
    <div style="text-align: center; flex-grow: 1; box-shadow: 0px 2px 5px 0 rgb(0 0 0 / 0%), 0 6px 20px 0 rgb(0 0 0 / 19%); padding: 20px; border-radius: 5px;
">
        <h1 style="margin: 0px; color: #f3a32a">{{incomplete}}</h1>
        <div style="font-size: 11px; letter-spacing: 1px; font-weight: 600; color: #545456;">INCOMPLETE</div>
    </div>
</div>
</template>

<script setup>
import { inject, ref, watchEffect } from "vue";
const state = inject("store").state.value;
console.log("from stats", state);
const completed = ref(0);
const incomplete = ref(0);
const props = defineProps({
  todos: Array,
});

console.log('props.todos',props.todos)

watchEffect(() => {
   const sortStatus = () => {
  let completedTemp = 0;
  let incompleteTemp = 0;

  props.todos.forEach((item) => {
      if (item.active == true) {
        completedTemp += 1;
      } else {
        incompleteTemp += 1;
      }
    });

  completed.value = completedTemp;
  incomplete.value = incompleteTemp;
  console.log('completed.value',completed.value)
};
sortStatus(); 
})
console.log(
  "from stats finding todos of all",
  state.folders.find((item) => item.uid === "all").todos
);
</script>

<style></style>

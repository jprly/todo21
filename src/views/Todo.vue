<template>
  <h1>Todo</h1>
  <p>Folder id: {{route.params.folderId}}</p>
  <p>Todo id: {{route.params.todoId}}</p>
<input type="text" v-model="newName">
  <Button @click="nameUpdate">update</Button>
</template>

<script setup>
import { useRoute } from "vue-router";

import { inject, ref } from "vue";

const route = useRoute();

const store = inject("store");

const state = inject("store").state.value;

const methods = inject("store").methods;
const newName = ref('')
const nameUpdate = () => {
  console.log(state.folders[route.params.folderId])
  // show name update
  state.folders[route.params.folderId].todos.map((item) => {
    console.log(item.uid, '===', route.params.todoId)
    if(item.uid == route.params.todoId){
      item.title = newName.value;
      console.log('updated with', newName.value)
    }
  })
}

console.log(route.params.folderId)
</script>

<style>

</style>
<template>
  <h1>Todo</h1>
  <p>Folder id: {{route.params.folderId}}</p>
  <p>Todo id: {{route.params.todoId}}</p>
</template>

<script setup>
import { useRoute } from "vue-router";

import { inject, ref } from "vue";

const route = useRoute();

const store = inject("store");

const state = inject("store").state.value;

const methods = inject("store").methods;


console.log(route.params.folderId)
</script>

<style>

</style>
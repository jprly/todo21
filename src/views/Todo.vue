<template>
  <div
    style="margin: 10px; padding-top: 10px; padding-bottom: 10px; display: flex"
  >
    <Button
      :class="{ 'p-button-secondary p-button-outlined': !activeTodo.active }"
      style="flex-grow: 1; margin-left: ; margin-right: 5px"
      label="Completed"
      @click="activeTodo.active = true"
    />
    <Button
      :class="{ 'p-button-secondary p-button-outlined': activeTodo.active }"
      style="flex-grow: 1; margin-left: 5px"
      label="Incomplete"
      @click="activeTodo.active = false"
    />
  </div>
  <h2 style="margin: 10px; text-align: center">{{ activeTodo.title }}</h2>
  <div v-if="showEditField" style="margin: 10px; text-align: center">
    <Textarea
      v-model="newDescription"
      :autoResize="true"
      rows="5"
      style="width: 100%"
    />
    <Button @click="handleSaveDescription" label="Save" class=" p-m-1" />
    <Button
      @click="showEditField = false"
      label="Cancel"
      class="p-button-secondary p-m-1"
    />
  </div>
    <div v-if="activeTodo.description && !showEditField">
      <div>
        <p style="margin: 10px">{{ activeTodo.description }}</p>
      </div>
      <div style="text-align: center">
        <Button
          @click="showEditField = true"
          label="Edit Description"
          class="p-button-secondary p-button-text"
          icon="pi pi-pencil"
          iconPos="left"
        />
      </div>
    </div>


  <div
    v-if="!activeTodo.description && !showEditField"
    style="text-align: center; margin: 10px"
  >
    <Button
      @click="showEditField = true"
      label="Add Description"
      class="p-button-secondary p-button-text"
      icon="pi pi-pencil"
      iconPos="left"
    />
    <!-- <Textarea v-model="newDescription" :autoResize="true" rows="5" style="width: 100%;" />
    <Button @click="activeTodo.description = newDescription" label="Save" class="" /> -->
  </div>

  <!-- <Checkbox v-model="checked" :binary="true" style="width: 50px; height: 50px;"/> -->

  <!-- <p>Folder id: {{route.params.folderId}}</p>
  <p>Todo id: {{route.params.todoId}}</p>
<input type="text" v-model="newName">
  <Button @click="nameUpdate">update</Button> -->
</template>

<script setup>
import { useRoute } from "vue-router";
import { inject, ref, watchEffect } from "vue";

const route = useRoute();
const store = inject("store");
const state = inject("store").state.value;
const methods = inject("store").methods;

const showEditField = ref(false);
const newName = ref("");
const activeTodo = ref(
  state.folders[route.params.folderId].todos.find((item) => {
    if (item.uid == route.params.todoId) {
      return true;
    }
  })
);
const newDescription = ref(activeTodo.value.description);

// watchEffect(() => {
//   console.log('WE description: ',activeTodo.value.description)
//   newDescription.value = activeTodo.value.description;
// })

const handleSaveDescription = () => {
  activeTodo.value.description = newDescription;
  showEditField.value = false;
};

const checked = ref(true);
const nameUpdate = () => {
  // show name update
  state.folders[route.params.folderId].todos.map((item) => {
    if (item.uid == route.params.todoId) {
      item.title = newName.value;
    }
  });
};
</script>

<style>

</style>

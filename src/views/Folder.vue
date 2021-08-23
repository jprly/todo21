<template>
  
  <div style="display: flex;">
  <div style="margin: 10px; flex-grow: 2;"><span class="p-input-icon-left" style="    width: 100%;">
            <i class="pi pi-search" />
            <InputText type="text"  placeholder="Search" style=" width: 100%;  background-color: #cecece;"/>
        </span></div>
        </div>
        <h2 style="margin: 10px;">{{store.state.value.folders[activeFolderIndex].folderName}}</h2>

  <div style="margin-bottom: 100px;">
    <div
      v-for="todo in store.state.value.folders[activeFolderIndex].todos"
      :key="todo.uid"
    >
      <div
        class="todo-container p-shadow-2"
      >
        <div><Checkbox @click="showStore" v-model="todo.active" :binary="true" style="margin-right: 10px;" /></div>
        <router-link
        :to="'/todo/' + activeFolderIndex + '/' + todo.uid" style="flex-grow: 2; font-weight: 300; font-color: black">
          {{ todo.title }}
  </router-link>
          <div>
            <span class="material-icons-outlined" style="color: grey">
              chevron_right
            </span>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { inject, ref } from "vue";
const store = inject("store");
const cities = ref([]);

const route = useRoute();
const state = inject("store").state.value;
const methods = inject("store").methods;
const activeFolderIndex = ref(null);
const showStore = () => {
  console.log(state)
}
const todoInput = ref("");
state.folders.findIndex((element, index) => {
  if (element.uid == route.params.id) {
    activeFolderIndex.value = index;
    state.activeFolder = index;
    return index;
  }
});



</script>

<style>
a:link {
  color: rgb(41, 41, 41);
  text-decoration: none;

}
a:visited {
  color: rgb(41, 41, 41);
  text-decoration: none;

}
a:active {
  color: rgb(41, 41, 41);
  text-decoration: none;

}
a:hover {
  color: rgb(41, 41, 41);
  text-decoration: none;

}
.todo-container {
  display: flex;
  align-items: center;
  padding: 10px;
  text-decoration: none;

  margin: 10px;
  background-color: white;
  border-radius: 5px;
}
</style>

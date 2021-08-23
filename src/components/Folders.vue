<template>
  <h2 style="margin: 10px;">Folders</h2>
  <div>
    <div>
      <div>
        <router-link to="/folder/all" class="folder-container p-shadow-2"><div
            class="material-icons-outlined"
            style="margin-right: 10px; color: #2196f3"
          >
            folder
          </div>
          <div style="flex-grow: 2; font-weight: 300; font-color: black">
            All
          </div>
          <div>
            5
          </div>
          <div>
            <span class="material-icons-outlined" style="color: grey">
              chevron_right
            </span>
          </div></router-link>
      </div>
      <div v-for="folder in store.state.value.folders" :key="folder.uid">
        <router-link
          :to="'/folder/' + folder.uid"
          class="folder-container p-shadow-2"
        >
          <div
            class="material-icons-outlined"
            style="margin-right: 10px; color: #2196f3"
          >
            folder
          </div>
          <div style="flex-grow: 2; font-weight: 300; font-color: black">
            {{ folder.folderName }}
          </div>
          <div>
            {{ folder.todos.length }}
          </div>
          <div>
            <span class="material-icons-outlined" style="color: grey">
              chevron_right
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
const store = inject("store");
</script>

<style>
a:link {
  color: rgb(41, 41, 41);
}
a:visited {
  color: rgb(41, 41, 41);
}
a:active {
  color: rgb(41, 41, 41);
}
a:hover {
  color: rgb(41, 41, 41);
}
.folder-container {
  display: flex;
  align-items: center;
  padding: 10px;
  text-decoration: none;

  margin: 10px;
  background-color: white;
  border-radius: 5px;
}
</style>

<template>
  <h2 style="margin: 10px">Folders</h2>
  <div style="margin-bottom: 100px">
    <div>
      <transition-group name="list-complete" tag="p">
        <div
          v-for="folder in store.state.value.folders"
          :key="folder.uid"
          class="list-complete-item"
        >
          <router-link :to="'/folder/' + folder.uid" class="folder-container">
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
      </transition-group>
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

/* transitions */
.list-complete-item {
  transition: all 0.4s ease;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>

<template>
  <Stats :todos="filteredTodos" />

  <div style="display: flex">
    <div style="margin: 10px; flex-grow: 2">
      <span class="p-input-icon-left" style="width: 100%">
        <i class="pi pi-search" />
        <InputText
          v-model="searchValue"
          @keyup="handleSearch"
          type="text"
          placeholder="Search"
          style="width: 100%; background-color: #dfdfe5"
        />
      </span>
    </div>
  </div>

  <div style="display: flex">
    <div style="flex-grow: 1">
      <h2 style="margin: 10px">
        {{ store.state.value.folders[activeFolderIndex].folderName }}
      </h2>
    </div>
    <div style="margin-right: 10px">
      <Button
      class="p-button-rounded p-button-secondary p-button-text"
        type="button"
        icon="pi pi-sort"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_menu"
      />
      <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
    </div>
  </div>

  <div style="margin-bottom: 100px">
    <transition-group name="list-complete" tag="p">
      <div
        v-for="todo in filteredTodos"
        :key="todo.uid"
        class="list-complete-item"
      >
        <div class="todo-container">
          <div>
            <Checkbox
              @click="showStore"
              v-model="todo.active"
              :binary="true"
              style="margin-right: 10px"
            />
          </div>
          <router-link
            :to="'/todo/' + activeFolderIndex + '/' + todo.uid"
            style="flex-grow: 2; font-weight: 300; font-color: black"
          >
            {{ todo.title }}
            <div
              style="
                color: #a9a9a9;
                font-weight: 400;
                font-size: 11px;
                margin-top: 5px;
              "
            >
              {{ format(todo.date, "MM/dd/yyyy") }},
              {{
                formatDistance(todo.date, new Date(), {
                  addSuffix: true,
                })
              }}
            </div>
          </router-link>
          <div>
            <span class="material-icons-outlined" style="color: grey">
              chevron_right
            </span>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { formatDistance, subDays, format } from "date-fns";

import Stats from "../components/Stats.vue";

import { useRoute } from "vue-router";
import { inject, ref } from "vue";
const store = inject("store");
const cities = ref([]);
const searchValue = ref("");
const route = useRoute();
const state = inject("store").state.value;
const methods = inject("store").methods;
const activeFolderIndex = ref(null);
const showStore = () => {
  // console.log(state)
};
const todoInput = ref("");
state.folders.findIndex((element, index) => {
  if (element.uid == route.params.id) {
    activeFolderIndex.value = index;
    state.activeFolder = index;
    return index;
  }
});

const menu = ref();
const items = ref([
  {
    label: "Ascending",
    items: [
      {
        label: "Title",
        command: () => {
          ascending = -1;
          descending = 1;

          sortFilteredTodosTitle();
        },
      },
      {
        label: "Date",
        command: () => {
          ascending = -1;
          descending = 1;
          sortFilteredTodosDate();
        },
      },
      {
        label: "Status",
        command: () => {
          ascending = -1;
          descending = 1;
          sortFilteredTodosActive();
        },
      },
    ],
  },
  {
    label: "Descending",
    items: [
      {
        label: "Title",
        command: () => {
          ascending = 1;
          descending = -1;
          sortFilteredTodosTitle();
        },
      },
      {
        label: "Date",
        command: () => {
          ascending = 1;
          descending = -1;
          sortFilteredTodosDate();
        },
      },
      {
        label: "Status",
        command: () => {
          ascending = 1;
          descending = -1;
          sortFilteredTodosActive();
        },
      },
    ],
  },
]);

const toggle = (event) => {
  menu.value.toggle(event);
};

const handleSearch = () => {
  filteredTodos.value = state.folders[activeFolderIndex.value].todos.filter(
    (item) => {
      if (item.title.toLowerCase().includes(searchValue.value.toLowerCase())) {
        return true;
      }
    }
  );
};

const filteredTodos = ref([]);
filteredTodos.value = state.folders[activeFolderIndex.value].todos;

// console.log("filteredTodos", filteredTodos.value);
const sortFilteredTodosDate = () => {
  sortValue = "date";
  filteredTodos.value.sort(compare);
};
const sortFilteredTodosTitle = () => {
  sortValue = "title";

  filteredTodos.value.sort(compare);
};
const sortFilteredTodosActive = () => {
  sortValue = "active";

  filteredTodos.value.sort(compare);
};
let sortValue = "title";
let ascending = 1;
let descending = -1;
function compare(a, b) {
  if (a[`${sortValue}`] < b[`${sortValue}`]) {
    return ascending;
  }
  if (a[`${sortValue}`] > b[`${sortValue}`]) {
    return descending;
  }
  return 0;
}
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

/* transition */

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

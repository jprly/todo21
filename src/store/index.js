import { ref } from "vue";

//state
const state = ref({
  addFolderVisible: false,
  addTodoVisible: false,
  activeFolder: null,
  folders: [
    {
      uid: "zasdfhuljb348ijb",
      folderName: "Noah",
      todos: [
        {
          active: false,
          title: "Get Milk",
          description: "",
          uid: "ashfuoie9472nn2kn",
        },
        {
          active: true,
          title: "Get Bread",
          description: "",
          uid: "asdfasilknkle937n3",
        },
        {
          active: true,
          title: "Get Bacon",
          description: "Need several pounds",
          uid: "pojehhehjse873nm23",
        },
      ],
    },
    {
      folderName: "work",
      uid: "asdfhuasdfljb348ijb",
      todos: [
        {
          active: true,
          title: "Design Magazine",
          description: "",
          uid: "asdfklnsdf",
        },
        {
          active: true,
          title: "Fix Website",
          description: "Wordpress is broken, it is probably a plugin",
          uid: "hjewehjse873nm53",
        },
      ],
    },
  ],
});
//methods
const methods = {
  toggleAddFolder() {
    state.value.addFolderVisible = !state.value.addFolderVisible;
    console.log(state.value.addFolderVisible);
  },
  toggleAddTodo() {
    state.value.addTodoVisible = !state.value.addTodoVisible;
    console.log(state.value.addTodoVisible);
  },
  addNewFolder(folderPayload) {
    state.value.folders.push(folderPayload);
    console.log("payload:", folderPayload);
  },
  addNewTodo(todoPayload, index) {
    console.log(todoPayload, index)
    state.value.folders[index].todos.push(todoPayload);
  }
};

export default { state, methods };

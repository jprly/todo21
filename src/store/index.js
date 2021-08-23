import { ref } from "vue";

//state
const state = ref({
  addFolderVisible: false,
  addTodoVisible: false,
  activeFolder: null,
  folders: [
    {uid: "all",
    folderName: "All",
    todos: []
    },
    {
      uid: "zasdfhuljb348ijb",
      folderName: "Home",
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
      folderName: "Work",
      uid: "asdfhuasdfljb348ijb",
      todos: [
        {
          active: false,
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
  //compute all initial todos
state.value.folders.forEach((item) => {
  if(item.uid !== 'all'){
  item.todos.forEach((todo) => {
    console.log('creating all todos: ', todo)
    state.value.folders[0].todos.push(todo)}
      )
    }
  }
)
//methods
const methods = {
  toggleAddFolder() {
    state.value.addFolderVisible = !state.value.addFolderVisible;
    console.log(state.value.addFolderVisible);
  },
  toggleAddTodo() {
    state.value.addTodoVisible = !state.value.addTodoVisible;
    console.log(state.value.addTodoVisible);
    console.log(state.value.activeFolder);
  },
  addNewFolder(folderPayload) {
    state.value.folders.push(folderPayload);
    console.log("payload:", folderPayload);
  },
  addNewTodo(todoPayload, index) {
    if(state.value.activeFolder == null){
      state.value.folders[0].todos.push(todoPayload);

    } else if(state.value.folders[index].uid == 'all'){
      state.value.folders[0].todos.push(todoPayload);

    } else
    {
      console.log(todoPayload, index)
      state.value.folders[0].todos.push(todoPayload);
  
      state.value.folders[index].todos.push(todoPayload);}
    }
};

export default { state, methods };

import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Folder from '../views/Folder.vue'
import Todo from '../views/Todo.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/folder/:id',
      name: 'Folder',
      component: Folder
    },
    {
      path: '/todo/:folderId/:todoId',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }  ],
})

export default router;
import { defineStore } from "pinia"
import todoApi from "@/api/todo.api.js"

export const usetodoStore = defineStore("todoStore", {
  state: () => ({
    tasks: [],
    tasksLoading: false,
  }),
  actions: {
    async getTasks() {
      this.tasksLoading = true
      const response = await todoApi.getTasks()
      this.tasks = response.tasks
      this.tasksLoading = false
    },
    async addNewTask(tarefa) {
      const newTask = await todoApi.addNewTask(tarefa.title)
      return newTask
    },
  },
})

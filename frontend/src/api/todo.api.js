import api from "./config.js"
import apiHelpers from "./helpers.js"

export default {
  getTasks: async () => {
    const response = await api.get("/api/todo/tasks/list")
    return response.data
  },
  addNewTask: async (description) => {
    const response = await api.post(
      "/api/todo/tasks/add",
      apiHelpers.dataToForm({ description })
    )
    return response.data
  },
}

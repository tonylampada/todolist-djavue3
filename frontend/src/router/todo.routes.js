// Composables
import DefaultLayout from "@/layouts/default/DefaultLayout.vue"
import TaskListView from "@/views/todo/TaskListView.vue"

export default [
  {
    path: "/tasks",
    component: DefaultLayout,
    children: [
      {
        path: "list",
        name: "tasks-list",
        component: TaskListView,
      },
    ],
  },
]

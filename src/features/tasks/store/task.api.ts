import baseApi from "@/shared/store/api";

import { Task } from "./task.types";

export const taskApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ["Tasks"],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getTasks: build.query<Task[], void>({
        query: () => "/tasks",
        providesTags: ["Tasks"],
      }),
      createTask: build.mutation<Task, Task>({
        query: (task) => ({
          url: "/tasks",
          method: "POST",
          body: task,
        }),
      }),
      updateTask: build.mutation<Task, Task>({
        query: (task) => ({
          url: `/tasks/${task.id}`,
          method: "PUT",
          body: task,
        }),
      }),
      deleteTask: build.mutation<Task, string>({
        query: (id) => ({
          url: `/tasks/${id}`,
          method: "DELETE",
        }),
      }),
    }),
  });

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;

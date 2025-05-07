import { generateTaskId } from "@/shared/helpers/generate-task-id";
import baseApi from "@/shared/store/store.api";

import { TBoardTask, TCreateTask } from "./task.types";

export const taskApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ["Tasks"],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getTasks: build.query<TBoardTask[], void>({
        query: () => "/tasks",
        providesTags: ["Tasks"],
      }),
      createTask: build.mutation<
        TBoardTask & { columnId: string },
        TCreateTask
      >({
        query: (task) => {
          const userId = task.createdBy;
          const newTask = {
            ...task,
            id: generateTaskId(userId.toString()),
            createdAt: new Date().toISOString(),
          };

          return {
            url: "/tasks",
            method: "POST",
            body: newTask,
          };
        },
      }),
      updateTask: build.mutation<TBoardTask, TBoardTask>({
        query: (task) => ({
          url: `/tasks/${task.id}`,
          method: "PUT",
          body: task,
        }),
      }),
      deleteTask: build.mutation<string, string>({
        query: (id) => ({
          url: `/tasks/${id}`,
          method: "DELETE",
        }),
        transformResponse: (_, __, arg) => {
          console.log(_, __, arg);
          return arg;
        },
      }),
    }),
  });

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;

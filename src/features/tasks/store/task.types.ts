export type TBoardTask = {
  id: string;
  name: string;
  createdBy: string;
  description?: string;
  isFavorite: boolean;
  createdAt: string;
};

export type TBoardColumn = {
  id: string;
  title: string;
  tasks: string[];
};

export type TBoardState = {
  tasks: {
    [taskId: string]: TBoardTask;
  };
  columns: {
    [columnId: string]: TBoardColumn;
  };
  isLoading: boolean;
  error: string | null;
  editingTaskId: {
    [taskId: string]: boolean;
  };
};

export type TCreateTask = Omit<TBoardTask, "id" | "createdAt"> & {
  columnId: string;
};

// Payload types
export type MoveTaskProps = {
  over: {
    id: string;
    containerId: string;
    index: number;
  };
  active: {
    id: string;
    containerId: string;
    index: number;
  };
};

"use client";

import { Box } from "@/ui/components/box";

import { TaskBoard } from "@/features/tasks/components/task-board/task-board.component";

export default function Page() {
  return (
    <Box margin="2rem auto" maxWidth="desktop" width="100%">
      <TaskBoard />
    </Box>
  );
}

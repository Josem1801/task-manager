"use client";

import { Box } from "@/ui/components/box";

import { TaskBoard } from "@/features/tasks/components/task-board/task-board.component";

export default function Page() {
  return (
    <Box maxWidth="desktop" width="100%" margin="2rem auto">
      <TaskBoard />
    </Box>
  );
}

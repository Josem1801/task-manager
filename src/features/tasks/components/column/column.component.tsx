import React from "react";

import { ButtonIcon } from "@/ui/components/button-icon";
import { Heading } from "@/ui/components/heading";
import { Add } from "@/ui/icons/add";

import { TBoardColumn } from "@/features/tasks/store/task.types";

import {
  BoardSection,
  BoardSectionContent,
  BoardSectionHeader,
} from "./column.style";

interface Props {
  column: TBoardColumn;
  children: React.ReactNode;
  onAddTask?: () => void;
}

export const BoardColumn = ({ column, children, onAddTask }: Props) => {
  return (
    <BoardSection>
      <BoardSectionHeader>
        <Heading variant="header">{column.title}</Heading>
        <div>
          <ButtonIcon variant="primary" onClick={onAddTask}>
            <Add />
          </ButtonIcon>
        </div>
      </BoardSectionHeader>
      <BoardSectionContent>{children}</BoardSectionContent>
    </BoardSection>
  );
};

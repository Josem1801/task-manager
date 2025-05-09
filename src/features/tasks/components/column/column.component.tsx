import React, { useRef, useState } from "react";

import { Box } from "@/ui/components/box";
import { ButtonIcon } from "@/ui/components/button-icon";
import { Heading } from "@/ui/components/heading";
import { InputField } from "@/ui/components/input-filed/";
import { Add } from "@/ui/icons/add";
import { EditOutline } from "@/ui/icons/edit-outline";

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
  onUpdateColumnName?: ({ id, title }: { id: string; title: string }) => void;
}

export const BoardColumn = ({
  column,
  children,
  onAddTask,
  onUpdateColumnName,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleEditColumn = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleUpdateColumn = (title: string) => {
    onUpdateColumnName?.({ id: column.id, title });
    setIsEditing(false);
  };

  return (
    <BoardSection>
      <BoardSectionHeader>
        <Box>
          {isEditing ? (
            <InputField
              defaultValue={column.title}
              onBlur={() => {
                handleUpdateColumn(inputRef.current?.value as string);
                setIsEditing(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleUpdateColumn(inputRef.current?.value as string);
                  setIsEditing(false);
                }
                if (e.key === "Escape") setIsEditing(false);
              }}
              ref={inputRef}
              size="small"
              style={{
                transform: "translate(-6px, -4px)",
              }}
            />
          ) : (
            <Heading variant="header">{column.title}</Heading>
          )}
        </Box>
        <Box display="flex" gap={4}>
          {onAddTask ? (
            <ButtonIcon onClick={onAddTask} variant="primary">
              <Add />
            </ButtonIcon>
          ) : null}
          {onUpdateColumnName ? (
            <ButtonIcon
              disabled={isEditing || (isEditing && column.title === "")}
              onClick={handleEditColumn}
              variant="primary"
            >
              <EditOutline />
            </ButtonIcon>
          ) : null}
        </Box>
      </BoardSectionHeader>
      <BoardSectionContent>{children}</BoardSectionContent>
    </BoardSection>
  );
};

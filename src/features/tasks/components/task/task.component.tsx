import React from "react";

import { Box } from "@/ui/components/box";
import { Button } from "@/ui/components/button";
import { ButtonIcon } from "@/ui/components/button-icon";
import { Popover } from "@/ui/components/popover";
import { Typography } from "@/ui/components/typography";
import { DeleteOutline } from "@/ui/icons/delete-outline";
import { DotsHorizontal } from "@/ui/icons/dots-horizontal";
import { EditOutline } from "@/ui/icons/edit-outline";
import { HeartFill } from "@/ui/icons/heart-fill";
import { HeartOutline } from "@/ui/icons/heart-outline";

import type { TBoardTask } from "@/features/tasks/store/task.types";

import {
  FlexContainer,
  HeartFillAnimated,
  HeartOutlineAnimated,
  TaskContainer,
} from "./task.styles";

type TaskProps = {
  task: TBoardTask;
  onFavorite?: (task: TBoardTask) => void;
  onDelete?: (task: TBoardTask) => void;
  onEdit?: (task: TBoardTask) => void;
};

const btnStyles = {
  borderRadius: "0",
  textAlign: "left",
  fontWeight: "normal",
  display: "flex",
  alignItems: "center",
  gap: "0.6rem",
  padding: "0.25rem 1rem",
  fontSize: "0.85rem",
} satisfies React.CSSProperties;

export const Task = ({ task, onFavorite, onDelete, onEdit }: TaskProps) => {
  const handleDelete = () => onDelete?.(task);
  const handleEdit = () => onEdit?.(task);
  const handleFavorite = () => {
    onFavorite?.({
      ...task,
      isFavorite: !task.isFavorite,
    });
  };

  return (
    <TaskContainer>
      <FlexContainer>
        <Typography weight="bold">{task.name}</Typography>
        <Box display="flex" gap={6}>
          <ButtonIcon onClick={handleFavorite}>
            {task.isFavorite ? <HeartFillAnimated /> : <HeartOutlineAnimated />}
          </ButtonIcon>

          <Popover
            content={(close) => (
              <Box display="flex" flexDirection="column">
                <Button
                  variant="transparent"
                  style={btnStyles}
                  onClick={() => {
                    handleEdit();
                    close();
                  }}
                >
                  <EditOutline />
                  Editar
                </Button>
                <Button
                  variant="transparent"
                  style={btnStyles}
                  onClick={() => {
                    handleDelete();
                    close();
                  }}
                >
                  <DeleteOutline />
                  Eliminar
                </Button>
              </Box>
            )}
          >
            <ButtonIcon>
              <DotsHorizontal />
            </ButtonIcon>
          </Popover>
        </Box>
      </FlexContainer>
      <Typography>{task.description}</Typography>
    </TaskContainer>
  );
};

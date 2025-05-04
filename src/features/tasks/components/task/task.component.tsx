import React, { forwardRef, PropsWithChildren } from "react";

import { transform } from "next/dist/build/swc/generated-native";

import { ButtonIcon } from "@/ui/components/button-icon";
import { Typography } from "@/ui/components/typography";
import { DotsHorizontal } from "@/ui/icons/dots-horizontal";
import { OutlineHeart } from "@/ui/icons/outline-heart";
import { theme } from "@/ui/theme";

import type { TBoardTask } from "@/features/tasks/store/task.types";

import { FlexContainer, TaskContainer } from "./task.styles";

type FavoriteProps = { status: boolean; task: TBoardTask };
type DeleteProps = { task: TBoardTask };
type EditProps = { task: TBoardTask };

type TaskProps = {
  task: TBoardTask;
  onFavorite?: ({ status, task }: FavoriteProps) => void;
  onDelete?: ({ task }: DeleteProps) => void;
  onEdit?: ({ task }: EditProps) => void;
};

export const Task = ({ task, onFavorite, onDelete, onEdit }: TaskProps) => {
  return (
    <TaskContainer>
      <FlexContainer>
        <Typography weight="semibold">{task.name}</Typography>
        <ButtonIcon>
          <DotsHorizontal />
        </ButtonIcon>
      </FlexContainer>
      <Typography weight="semibold">{task.description}</Typography>
    </TaskContainer>
  );
};

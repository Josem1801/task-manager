import React from "react";

import { Box } from "@/ui/components/box";
import { Button } from "@/ui/components/button";
import { Modal, ModalProps } from "@/ui/components/modal";
import { Typography } from "@/ui/components/typography";

type Props = {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  modal: ModalProps;
  loading?: boolean;
};

export const ModalConfirmation = (props: Props) => {
  return (
    <Modal {...props.modal} size="small">
      <Box columns={1} display="grid" gap={24} padding={4}>
        <Box display="grid" gap={4}>
          <Typography variant="xlarge" weight="bold">
            {props.title}
          </Typography>
          <Typography variant="medium">{props.description}</Typography>
        </Box>
        <Box display="flex" gap={1} justifyContent="space-around">
          <Button
            disabled={props.loading}
            onClick={props.onCancel}
            variant="outline"
          >
            Cancel
          </Button>
          <Button loading={props.loading} onClick={props.onConfirm}>
            Confirm
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

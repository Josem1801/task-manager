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
      <Box padding={4} display="grid" columns={1} gap={24}>
        <Box display="grid" gap={4}>
          <Typography variant="xlarge" weight="bold">
            {props.title}
          </Typography>
          <Typography variant="medium">{props.description}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-around" gap={1}>
          <Button
            variant="outline"
            onClick={props.onCancel}
            disabled={props.loading}
          >
            Cancel
          </Button>
          <Button onClick={props.onConfirm} loading={props.loading}>
            Confirm
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

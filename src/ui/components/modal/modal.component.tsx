import { Close } from "@/ui/icons/close";

import { Box } from "../box";
import { ButtonIcon } from "../button-icon";
import { ModalContainer, ModalContent } from "./modal.styles";

export const sizes = {
  small: "300px",
  medium: "500px",
  large: "700px",
};

export type ModalProps = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  opened: boolean;
};

type Props = {
  size?: keyof typeof sizes;
  children: React.ReactNode;
} & ModalProps;

export const Modal = (props: Props) => {
  return (
    <ModalContainer isOpen={props.opened} onClick={props.close}>
      <ModalContent onClick={(e) => e.stopPropagation()} size={props.size}>
        <Box position="absolute" right={3} top={3}>
          <ButtonIcon onClick={props.close} size="large" variant="primary">
            <Close />
          </ButtonIcon>
        </Box>
        {props.children}
      </ModalContent>
    </ModalContainer>
  );
};

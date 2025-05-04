import { Close } from "@/ui/icons/close";

import { ButtonIcon } from "../button-icon";
import { ModalContainer, ModalContent } from "./modal.styles";

export const sizes = {
  small: "300px",
  medium: "500px",
  large: "700px",
};

type Props = {
  open: boolean;
  close: () => void;
  toggle: () => void;
  size?: keyof typeof sizes;
  children: React.ReactNode;
};

export const Modal = (props: Props) => {
  return (
    <ModalContainer isOpen={props.open} onClick={props.close}>
      <ModalContent size={props.size}>
        <ButtonIcon onClick={props.close}>
          <Close />
        </ButtonIcon>
        {props.children}
      </ModalContent>
    </ModalContainer>
  );
};

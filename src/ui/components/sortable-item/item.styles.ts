import type { Transform } from "@dnd-kit/utilities";
import styled, { css } from "styled-components";

type ItemContainerProps = {
  transform?: Transform | null;
  fadeIn?: boolean;
  dragOverlay?: boolean;
};

export const SItemContainer = styled.li<ItemContainerProps>`
  @keyframes pop {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05);
    }
    100% {
      transform: scale(${({ transform }) => transform?.scaleX});
      box-shadow: 0 0 0 calc(1px / ${({ transform }) => transform?.scaleX})
        rgba(63, 63, 68, 0.05);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  display: flex;
  box-sizing: border-box;
  transform: translate3d(
      ${({ transform }) => transform?.x},
      ${({ transform }) => transform?.y},
      0
    )
    scaleX(${({ transform }) => transform?.scaleX})
    scaleY(${({ transform }) => transform?.scaleY});
  transform-origin: 0 0;
  touch-action: manipulation;

  animation: ${({ fadeIn }) => (fadeIn ? "fadeIn 0.3s ease-in" : "none")};
`;

type ItemProps = {
  transform?: Transform | null;
  remove?: boolean;
  disabled?: boolean;
  dragging?: boolean;
  color?: string;
  handle?: boolean;
  dragOverlay?: boolean;
  fadeIn?: boolean;
};

export const SItem = styled.div<ItemProps>`
  position: relative;
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 18px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 0 calc(1px / ${({ transform }) => transform?.scaleX})
    rgba(63, 63, 68, 0.05);
  outline: none;
  border-radius: calc(4px / ${({ transform }) => transform?.scaleX});
  box-sizing: border-box;
  list-style: none;
  transform-origin: 50% 50%;

  -webkit-tap-highlight-color: transparent;

  font-weight: 400;
  font-size: 1rem;
  white-space: nowrap;

  transform: scale(${({ transform }) => transform?.scaleX});
  transition: box-shadow 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22);

  &:focus-visible {
    box-shadow:
      0 0px 4px 1px ${({ theme }) => theme.colors.primary},
      0 0 0 calc(1px / ${({ transform }) => transform?.scaleX})
        rgba(63, 63, 68, 0.05);
  }

  ${({ handle }) =>
    handle &&
    `
    touch-action: manipulation;
    cursor: grab;
  `}

  ${({ fadeIn }) =>
    fadeIn &&
    css`
      animation: fadeIn 0.3s ease-in;
    `}

  ${({ disabled, transform }) =>
    disabled &&
    css`
      color: #999;
      background-color: #f1f1f1;
      &:focus {
        box-shadow:
          0 0px 4px 1px rgba(0, 0, 0, 0.1),
          0 0 0 calc(1px / ${transform?.scaleX}) rgba(63, 63, 68, 0.05);
      }
      cursor: not-allowed;
    `}

  ${({ dragOverlay, transform }) =>
    dragOverlay &&
    css`
      cursor: inherit;
      animation: pop 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22);
      transform: scale(${transform?.scaleX});
      box-shadow: var(--box-shadow-picked-up);
      opacity: 1;
    `}

  ${({ color }) =>
    color &&
    css`
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        height: 100%;
        width: 3px;
        display: block;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        background-color: var(--color);
      }
    `}

  &:hover {
    ${(remove) =>
      remove &&
      css`
        visibility: visible;
      `}
  }
`;

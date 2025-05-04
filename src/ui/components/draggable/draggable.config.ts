import { DropAnimation } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export const dropAnimationConfig: DropAnimation = {
  keyframes({ transform }) {
    return [
      { transform: CSS.Transform.toString(transform.initial) },
      {
        transform: CSS.Transform.toString({
          ...transform.final,
          scaleX: 0.95,
          scaleY: 0.95,
        }),
      },
    ];
  },
  sideEffects({ active, dragOverlay }) {
    active.node.style.opacity = "0";

    const button = dragOverlay.node.querySelector("button");

    if (button) {
      button.animate(
        [
          {
            boxShadow:
              "-1px 0 15px 0 rgba(34, 33, 81, 0.02), 0px 15px 15px 0 rgba(34, 33, 81, 0.1)",
          },
          {
            boxShadow:
              "-1px 0 15px 0 rgba(34, 33, 81, 0), 0px 15px 15px 0 rgba(34, 33, 81, 0)",
          },
        ],
        {
          duration: 250,
          easing: "ease",
          fill: "forwards",
        },
      );
    }

    return () => {
      active.node.style.opacity = "";
    };
  },
};

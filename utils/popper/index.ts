export enum PopperPlacementVariant {
  topStart = "top-start",
  topEnd = "top-end",
  bottomStart = "bottom-start",
  bottomEnd = "bottom-end",
  rightStart = "right-start",
  rightEnd = "right-end",
  leftStart = "left-start",
  leftEnd = "left-end",
}

export const popperSettings = {
  placement: PopperPlacementVariant.bottomStart,
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 4],
      },
    },
  ],
};

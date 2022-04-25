export type Colors = keyof typeof colors;
const colors = {
  lightblue: "#90CAF9",
  orange: "#FF9B4E",
  black: "#000000",
  grey: "#22222C",
  white: "#FFFFFF",
};

export const theme = {
  colors,
};

export type Theme = typeof theme;

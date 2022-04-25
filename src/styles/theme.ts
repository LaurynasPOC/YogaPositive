export type Colors = keyof typeof colors;
const colors = {
  lightblue: "#90CAF9",
  black: "#000000",
  orange: "#FF9B4E",
  grey: "#22222C",
  white: "#FFFFFF",
};

export const theme = {
  colors,
};

export type Theme = typeof theme;

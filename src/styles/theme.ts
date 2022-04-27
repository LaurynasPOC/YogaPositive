export type Colors = keyof typeof colors;
const colors = {
  primary: "#FF9B4E", //orange
  secondary: "#90CAF9", //lightblue
  grey: "#22222C",
  white: "#FFFFFF",
  black: "#000000",
  borderColor: "rgba(0, 0, 0, 0.08)",
};
export type Theme = typeof theme;

export const theme = {
  colors,
};

export type Colors = keyof typeof colors;
const colors = {
  primary: "#FF9B4E", //orange
  secondary: "#90CAF9", //lightblue
  grey: "#22222C",
  white: "#FFFFFF",
  black: "#000000",
  borderColor: "rgba(0, 0, 0, 0.08)",
};

export const theme = {
  colors,
  fontFamily: { primary: `sans-serif` },
  fontSize: {
    fs16: "1rem",
  },
  fontWeight: {
    fw700: 700,
  },
  lineHeight: {
    lh: "1rem",
  },
  breakpoints: ["24rem", "47rem", "90rem"] as unknown as Breakpoints,
  space: {
    s16: 2,
  },
  typography: {
    h1: {
      fontSize: "1.75rem",
      lineHeight: "2.25rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontWeight: 400,
    },
  },
} as const;

export type Theme = typeof theme;

const Breakpoints = theme.breakpoints as any;
Breakpoints.lmobile = Breakpoints[0];
Breakpoints.ltablet = Breakpoints[1];
Breakpoints.desktop = Breakpoints[2];

type Breakpoints<T = string> = {
  _: T;
  lmobile: T;
  ltablet: T;
  desktop: T;
};

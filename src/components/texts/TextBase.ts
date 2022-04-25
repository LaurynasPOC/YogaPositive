import styled from "styled-components/macro";
import { theme } from "../../styles/theme";
import { Colors } from "../../styles/theme";

interface TextBaseStyles {
  margin?: string | number;
  fontSize?: string;
  fontWeight?: number;
  color?: Colors;
  textAlign?: string;
  textDecoration?: string;
  textTransform?: string;
  display?: string;
  justifyContent?: string;
  width?: string;
  lineHeight?: string;
  position?: string;
  zIndex?: number;
  transformMatrix?: string | number;
  backgroundColor?: string;
  height?: string;
  border?: string;
  letterSpacing?: string;
}

export const TextBase = styled.p<TextBaseStyles>`
  display: ${({ display }) => display || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  margin: ${({ margin }) => margin || "1rem"};
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || theme.colors.grey};
  text-align: ${({ textAlign }) => textAlign || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
  width: ${({ width }) => width || ""};
  line-height: ${({ lineHeight }) => lineHeight || ""};
  position: ${({ position }) => position || ""};
  z-index: ${({ zIndex }) => zIndex};
  transform: matrix(
    ${({ transformMatrix }) =>
      transformMatrix === "matrix" ? "-1, 0, 0, 1, 0, 0" : ""}
  ); // Do not understand how this works...
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
`;

import styled from "styled-components/macro";
import { Colors } from "styles/theme";

interface ButtonStyles {
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  color?: Colors;
  backgroundColor?: string;
  boxShadow?: string | number;
  borderRadius?: string;
  margin?: string | number;
  padding?: string | number;
  border?: string;
  fontSize?: string;
  fontWeight?: number;
  width?: string;
  height?: string;
}

export const Button = styled.button<ButtonStyles>`
  display: ${({ display }) => display || "flex"};
  width: ${({ width }) => width || "343px"};
  height: ${({ height }) => height || "56px"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  margin: ${({ margin }) => margin || "auto 0"};
  color: ${({ color }) => color || "#FFFFFF"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#FF9B4E"};
  box-shadow: ${({ boxShadow }) =>
    boxShadow || "0px 16px 32px rgba(255, 155, 78, 0.24)"};
  border-radius: ${({ borderRadius }) => borderRadius || "0.5rem"};
  padding: ${({ padding }) => padding || ""};
  border: ${({ border }) => border || "none"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "700"};
`;

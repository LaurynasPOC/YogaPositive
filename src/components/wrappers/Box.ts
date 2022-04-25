import styled from "styled-components/macro";
import { Colors, theme } from "../../styles/theme";

interface BoxStyles {
  margin?: string | number;
  textAlign?: string;
  border?: string;
  display?: string;
  backgroundColor?: string;
  color?: Colors;
  borderRadius?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  boxShadow?: string;
  width?: string;
  position?: string;
}

export const Box = styled.p<BoxStyles>`
  display: ${({ display }) => display || ""};
  margin: ${({ margin }) => margin || ""};
  text-align: ${({ textAlign }) => textAlign || ""};
  border: ${({ border }) => border || ""};
  background-color: ${({ backgroundColor }) => backgroundColor || ""};
  color: ${({ color }) => color || theme.colors.white};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  height: ${({ height }) => height || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  align-items: ${({ alignItems }) => alignItems || ""};
  box-shadow: ${({ boxShadow }) => boxShadow || ""};
  width: ${({ width }) => width || ""};
  position: ${({ position }) => position || ""};
`;

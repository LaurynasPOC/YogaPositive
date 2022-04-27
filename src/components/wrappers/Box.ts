import styled from "styled-components/macro";
import {
  alignSelf,
  AlignSelfProps,
  border,
  BorderProps,
  BoxShadowProps,
  color,
  ColorProps,
  compose,
  display,
  DisplayProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  zIndex,
  ZIndexProps,
} from "styled-system";
import { Colors, theme } from "../../styles/theme";

interface BoxStyles {
  margin?: string | number;
  textAlign?: string;
  border?: string;
  display?: string;
  backgroundColor?: Colors | string;
  color?: Colors;
  borderRadius?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  boxShadow?: string;
  width?: string;
  position?: string;
  fontWeight?: number;
  padding?: string;
}

export const Box = styled.div<BoxStyles>`
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
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  padding: ${({ padding }) => padding || ""};
`;

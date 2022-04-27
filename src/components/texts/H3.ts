import styled from "styled-components/macro";
import { Colors, theme } from "styles/theme";

interface H3Styles {
  margin?: string | number;
  fontSize?: string;
  fontWeight?: number;
  color?: Colors | string;
  lineHeight?: string;
  display?: string;
}

export const H3 = styled.h3<H3Styles>`
  display: ${({ display }) => display || ""};
  font-size: ${({ fontSize }) => fontSize || "1.25rem"};
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  margin: ${({ margin }) => margin || ""};
  color: ${({ color }) => color || theme.colors.black};
  line-height: ${({ lineHeight }) => lineHeight || "1.75rem"};
`;

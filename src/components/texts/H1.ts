import styled from "styled-components/macro";
import { Colors, theme } from "../../styles/theme";

interface H1Styles {
  margin?: string | number;
  fontSize?: string;
  fontWeight?: number;
  color?: Colors;
  lineHeight?: string;
}

export const H1 = styled.h1<H1Styles>`
  font-size: ${({ fontSize }) => fontSize || "1.75rem"};
  font-weight: ${({ fontWeight }) => fontWeight || 800};
  margin: ${({ margin }) => margin || ""};
  color: ${({ color }) => color || theme.colors.black};
  line-height: ${({ lineHeight }) => lineHeight || "2.25rem"};
`;

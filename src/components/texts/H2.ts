import styled from "styled-components/macro";
import { Colors, theme } from "../../styles/theme";

interface H2Styles {
  margin?: string | number;
  fontSize?: string;
  fontWeight?: number;
  color?: Colors;
  lineHeight?: string;
}

export const H2 = styled.h2<H2Styles>`
  font-size: ${({ fontSize }) => fontSize || "1.5rem"};
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  margin: ${({ margin }) => margin || ""};
  color: ${({ color }) => color || theme.colors.black};
  line-height: ${({ lineHeight }) => lineHeight || "2rem"};
`;

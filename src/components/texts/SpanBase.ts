import styled from "styled-components/macro";
import { Colors, theme } from "styles/theme";

interface SpanBaseStyles {
  margin?: string | number;
  fontSize?: string;
  fontWeight?: number;
  color?: Colors | string;
  textAlign?: string;
  textDecoration?: string;
  textTransform?: string;
  letterSpacing?: string;
  lineHeight?: string;
}

export const SpanBase = styled.span<SpanBaseStyles>`
  margin: ${({ margin }) => margin || ""};
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || theme.colors.grey};
  text-align: ${({ textAlign }) => textAlign || "left"};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || ""};
  line-height: ${({ lineHeight }) => lineHeight || ""};
`;

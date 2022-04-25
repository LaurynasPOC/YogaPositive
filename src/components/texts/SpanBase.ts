import styled from "styled-components/macro";
import { Colors, theme } from "../../styles/theme";

interface SpanBaseStyles {
  margin?: string | number;
  fontSize?: string;
  fontWeight?: number;
  color?: Colors;
  textAlign?: string;
  textDecoration?: string;
  textTransform?: string;
  letterSpacing?: string;
}

export const SpanBase = styled.span<SpanBaseStyles>`
  margin: ${({ margin }) => margin || ""};
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || theme.colors.grey};
  text-align: ${({ textAlign }) => textAlign || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || ""};
`;

import styled from "styled-components/macro";
import { Colors, theme } from "../../styles/theme";

interface H5Styles {
  margin?: string | number;
  fontSize?: string;
  fontWeight?: number;
  color?: Colors;
  lineHeight?: string;
  letterSpacing?: string;
}

export const H5 = styled.h5<H5Styles>`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  margin: ${({ margin }) => margin || ""};
  color: ${({ color }) => color || theme.colors.grey};
  line-height: ${({ lineHeight }) => lineHeight || "1.25rem"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || ""};
`;

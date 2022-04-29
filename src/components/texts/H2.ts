import styled from "styled-components/macro";
import { Colors, theme } from "styles/theme";

import {
  compose,
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
} from "styled-system";
import { Theme } from "styles/theme";

const h2Props = compose(space, color, typography);

// interface H2Styles {
//   margin?: string | number;
//   fontSize?: string;
//   fontWeight?: number;
//   color?: Colors;
//   lineHeight?: string;
// }

interface Styles<T> extends SpaceProps<T>, ColorProps<T>, TypographyProps<T> {}

export const H2 = styled.h2<Styles<Theme>>`
  && {
    ${h2Props}
  }
`;

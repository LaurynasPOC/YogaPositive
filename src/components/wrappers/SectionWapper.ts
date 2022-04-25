import styled from "styled-components/macro";
// import { Colors, theme } from "../../styles/theme";

interface SectionWrapperStyles {
  margin?: string;
  width?: string;
}

export const SectionWrapper = styled.section<SectionWrapperStyles>`
  margin: ${({ margin }) => margin || "1rem auto"};
  max-width: ${({ width }) => width || "343px"};
`;

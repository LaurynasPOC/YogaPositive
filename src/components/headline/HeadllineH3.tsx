import React from "react";
import { H3 } from "../../components/texts/H3";
import { SpanBase } from "../../components/texts/SpanBase";
import { theme } from "styles/theme";

interface Props {
  textBlack?: string;
  textOrange?: string;
}

const HeadllineH3: React.FC<Props> = ({ textBlack, textOrange }) => (
  <H3 margin="1rem 0 0 0" display="flex" color="black">
    <p>
      {textBlack}
      <SpanBase
        margin="0 0 0 6px"
        color={theme.colors.primary}
        fontWeight={700}
      >
        {textOrange}
      </SpanBase>
    </p>
  </H3>
);

export default HeadllineH3;

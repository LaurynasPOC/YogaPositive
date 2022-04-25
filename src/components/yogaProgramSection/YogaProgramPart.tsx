import React from "react";
import { Box } from "../wrappers/Box";
import { TextBase } from "../texts/TextBase";
import { H5 } from "../texts/H5";

interface Props {
  svg?: string;
  alt?: string;
  headline?: string;
  text?: string;
}

const YogaProgramPart: React.FC<Props> = ({ svg, alt, headline, text }) => {
  return (
    <Box margin="1rem auto" display="flex">
      <img src={svg} alt={alt} />
      <div>
        <H5 fontWeight={700} margin="0 0 0 1rem">
          {headline}
        </H5>
        <TextBase
          //   width="279px"
          fontSize="0.85rem"
          color="grey"
          margin="0 0 0 1rem"
        >
          {text}
        </TextBase>
      </div>
    </Box>
  );
};

export default YogaProgramPart;

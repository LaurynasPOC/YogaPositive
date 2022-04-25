import React, { useState } from "react";

import Up from "../../assets/images/ExpandLess.svg";
import Down from "../../assets/images/ExpandMore.svg";
import { TextBase } from "../texts/TextBase";
import { H5 } from "../texts/H5";
import { Box } from "../wrappers/Box";

interface Props {
  headline?: string;
  text?: string;
}

const QuestionPart: React.FC<Props> = ({ headline, text }) => {
  //questions part logic
  const [selected, setSelected] = useState(false);
  return (
    <Box
      border="1px solid rgba(0, 0, 0, 0.08)"
      borderRadius="1rem"
      margin="0 0 1rem 0"
      className="question-part-container"
      onClick={() => setSelected(!selected)}
    >
      <TextBase display="flex" justifyContent="space-between">
        <H5>{headline}</H5>
        {selected ? <img src={Up} alt="" /> : <img src={Down} alt="" />}
      </TextBase>
      {selected && <TextBase>{text}</TextBase>}
    </Box>
  );
};

export default QuestionPart;

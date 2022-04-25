import React from "react";
import { H2 } from "../texts/H2";

interface Props {
  text?: string;
}

const HeadlineH2: React.FC<Props> = ({ text }) => {
  return <H2 margin="0.5rem 0 0.5rem 0">{text}</H2>;
};

export default HeadlineH2;

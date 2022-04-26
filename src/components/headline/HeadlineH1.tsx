import React from "react";
import { H1 } from "../texts/H1";

interface Props {
  text?: string;
}

const HeadlineH1: React.FC<Props> = ({ text }) => (
  <H1 margin="0.5rem 0 0.5rem 0">{text}</H1>
);

export default HeadlineH1;

import React from "react";
import { theme } from "styles/theme";
import { H2 } from "../texts/H2";

interface Props {
  text?: string;
}

const HeadlineH2: React.FC<Props> = ({ text }) => <H2>{text}</H2>;
export default HeadlineH2;

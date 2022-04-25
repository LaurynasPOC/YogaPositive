import React from "react";
import { Button } from "./Button";

interface Props {
  text?: string;
}

const Btn: React.FC<Props> = ({ text }) => {
  return <Button>{text}</Button>;
};

export default Btn;

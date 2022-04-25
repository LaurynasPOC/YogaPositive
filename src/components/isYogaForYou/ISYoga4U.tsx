import React from "react";
import CheckCircle from "../../assets/images/CheckCirckle.svg";
import { TextBase } from "../texts/TextBase";

interface Props {
  text?: string;
}

const ISYoga4U: React.FC<Props> = ({ text }) => {
  return (
    <TextBase margin="0 0 0.5rem 0" display="flex">
      <img src={CheckCircle} alt="Yoga for U!" />
      <TextBase margin="0 0 0 1rem">{text}</TextBase>
    </TextBase>
  );
};

export default ISYoga4U;

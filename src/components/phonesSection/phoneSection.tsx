import React from "react";
import Phone1 from "assets/images/Phone1.jpg";
import Phone2 from "assets/images/Phone2.jpg";
import { TextBase } from "components/texts/TextBase";
import { Box } from "../wrappers/Box";

const PhoneSection = () => (
  <Box position="relative" margin="1rem 0" display="flex">
    <TextBase margin="2rem 0 0 0">
      <img src={Phone2} alt="yoga everythere" />
    </TextBase>
    <TextBase
      transformMatrix="matrix"
      backgroundColor="#EBEBEB"
      width="375px"
      height="433px"
      zIndex={-1}
      position="absolute"
      margin="0"
    ></TextBase>
    <TextBase margin="5rem 0 0 0.5rem">
      <img src={Phone1} alt="i need yoga" />
    </TextBase>
  </Box>
);

export default PhoneSection;

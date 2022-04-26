import React from "react";
import { YogaForMeData } from "../../data";
import ISYoga4U from "./ISYoga4U";
import { Box } from "../wrappers/Box";

const IsYoga4USection = () => (
  <Box margin="1rem 0 2rem 0">
    {YogaForMeData.map(({ text }, i) => (
      <ISYoga4U text={text} key={i} />
    ))}
  </Box>
);

export default IsYoga4USection;

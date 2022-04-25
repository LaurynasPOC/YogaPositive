import React from "react";
import { YogaForMeData } from "../../data";
import ISYoga4U from "./ISYoga4U";
import { Box } from "../wrappers/Box";

const IsYoga4USection = () => {
  return (
    <Box>
      {YogaForMeData.map((data, i) => {
        return <ISYoga4U text={data.text} key={i} />;
      })}
    </Box>
  );
};

export default IsYoga4USection;

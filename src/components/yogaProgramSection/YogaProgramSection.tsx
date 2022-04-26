import React from "react";
import { yogaProgramData } from "../../data";
import YogaProgramPart from "./YogaProgramPart";
import { Box } from "../wrappers/Box";

const YogaProgramSection = () => (
  <Box margin="2rem 0 3rem 0">
    {yogaProgramData.map(({ svg, alt, headline, text }, i) => (
      <YogaProgramPart
        key={i}
        svg={svg}
        alt={alt}
        headline={headline}
        text={text}
      />
    ))}
  </Box>
);

export default YogaProgramSection;

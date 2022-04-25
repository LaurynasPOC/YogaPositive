import React from "react";
import { yogaProgramData } from "../../data";
import YogaProgramPart from "./YogaProgramPart";

const YogaProgramSection = () => {
  return (
    <>
      {yogaProgramData.map((data, i) => (
        <YogaProgramPart
          key={i}
          svg={data.svg}
          alt={data.alt}
          headline={data.headline}
          text={data.text}
        />
      ))}
    </>
  );
};

export default YogaProgramSection;

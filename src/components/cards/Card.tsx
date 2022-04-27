import React from "react";
import Star from "../../assets/images/Star.svg";
import { Box } from "../wrappers/Box";
import { TextBase } from "../texts/TextBase";
import { H5 } from "../texts/H5";

interface Props {
  name?: string;
  adress?: string;
  picture?: string;
  review?: string;
}

const Card: React.FC<Props> = ({ name, adress, picture, review }) => {
  const starArr: Array<any> = [];

  for (let i = 0; i < 5; i++) {
    const imgStar = <img key={i} src={Star} alt="star" />;
    starArr.push(imgStar);
  }

  return (
    <Box
      margin="2rem 0 1rem 0"
      borderRadius="2rem"
      boxShadow="10px 10px 20px rgba(57, 53, 60, 0.08)"
      width="20rem"
      height="38rem"
      textAlign="left"
    >
      <Box margin="1rem">
        <H5 fontWeight={700} margin="0">
          {name}
        </H5>
        <TextBase color="grey" margin="0">
          {adress}
        </TextBase>
      </Box>
      <TextBase>{starArr}</TextBase>
      <Box margin="0 1rem">
        <img src={picture} alt="I love Yoga" />
        <TextBase lineHeight="1.5rem" margin="1rem 0 0 0">
          {review}
        </TextBase>
      </Box>
    </Box>
  );
};
export default Card;

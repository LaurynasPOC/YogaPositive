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

const Card: React.FC<Props> = ({ name, adress, picture, review }) => (
  <Box
    margin="2rem 0 1rem 0"
    borderRadius="2rem"
    boxShadow="10px 10px 20px rgba(57, 53, 60, 0.08)"
    width="319px"
    height="607px"
    textAlign="left"
  >
    <Box>
      <H5 fontWeight={700} margin="0">
        {name}
      </H5>
      <TextBase color="grey" margin="0">
        {adress}
      </TextBase>
    </Box>
    <TextBase>
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
    </TextBase>
    <Box>
      <img src={picture} alt="I love Yoga" />
      <TextBase lineHeight="1.5rem" margin="1rem 0 0 0">
        {review}
      </TextBase>
    </Box>
  </Box>
);

export default Card;

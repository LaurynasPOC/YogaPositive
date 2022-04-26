import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import Card from "./Card";
import { cardInfo } from "../../data";
import { Box } from "../wrappers/Box";

interface Props {
  width?: number;
  itemToShow?: number;
}

const CardMobile: React.FC<Props> = () => {
  const settings = [{ width: 1, itemToShow: 1 }];

  return (
    <Box margin="1rem 0 2rem 0">
      <ReactElasticCarousel
        breakPoints={settings}
        showArrows={false}
        enableMouseSwipe={true}
        isRTL={true}
      >
        {cardInfo.map((card, i) => {
          return (
            <Card
              key={i}
              name={card.name}
              adress={card.adress}
              picture={card.profilePic}
              review={card.review}
            />
          );
        })}
      </ReactElasticCarousel>
    </Box>
  );
};

export default CardMobile;

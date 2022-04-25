import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import Card from "./Card";
import { cardInfo } from "../../data";

interface Props {
  width?: number;
  itemToShow?: number;
}

const CardMobile: React.FC<Props> = () => {
  const settings = [{ width: 1, itemToShow: 1 }];

  return (
    <div>
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
    </div>
  );
};

export default CardMobile;

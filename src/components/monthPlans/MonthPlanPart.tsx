import React, { useState } from "react";
import EmptyTickBox from "../../assets/images/EmptyTickBox.svg";
import TickBox from "../../assets/images/TickBox.svg";
import { Box } from "../wrappers/Box";
import { TextBase } from "../texts/TextBase";
import { SpanBase } from "../texts/SpanBase";
import { Button } from "../button/Button";

interface Props {
  month?: number;
  price?: number;
  preDiscount?: number;
  afterDiscount?: number;
  discount?: number;
}

const MonthPlanPart: React.FC<Props> = ({
  month,
  price,
  preDiscount,
  afterDiscount,
  discount,
}) => {
  const [selected, setSelected] = useState(false);
  return (
    <Box
      margin="0 0 1rem 0"
      borderRadius="1rem"
      style={
        selected
          ? { border: "2px solid #ff9b4e" }
          : { border: "2px solid rgba(0, 0, 0, 0.08)" }
      }
      onClick={() => setSelected(!selected)}
    >
      <TextBase fontWeight={700} display="flex">
        {month} month plan
        <SpanBase>
          {discount && (
            <SpanBase>
              {selected ? (
                <Button
                  height="18px"
                  width="81px"
                  color="black"
                  backgroundColor="#FFE082"
                  margin="0 0 0 5px"
                  fontWeight={600}
                >
                  Save {discount}%
                </Button>
              ) : (
                ""
              )}
            </SpanBase>
          )}
        </SpanBase>
      </TextBase>
      <Box margin="0 1rem" display="flex" justifyContent="space-between">
        <TextBase margin="0">
          <SpanBase fontSize="1.5rem" fontWeight={700}>
            ${price}
          </SpanBase>
          /month{" "}
        </TextBase>
        {!selected ? (
          <img src={EmptyTickBox} alt="check this price" />
        ) : (
          <img src={TickBox} alt="buy it for sure" />
        )}
      </Box>
      <div>
        {preDiscount && (
          <Box display="flex">
            <TextBase
              margin="1rem 0.5rem 1rem 1rem"
              color="black"
              textDecoration="line-through"
            >
              ${preDiscount}
            </TextBase>
            <TextBase
              margin="1rem 0.5rem 1rem 0"
              fontWeight={700}
              color="orange"
            >
              ${afterDiscount}
            </TextBase>
            <TextBase margin="1rem 0.5rem 1rem 0">
              billed every {month}
            </TextBase>
          </Box>
        )}
        {!preDiscount && <TextBase>Billed monthly</TextBase>}
      </div>
    </Box>
  );
};

export default MonthPlanPart;

import React from "react";
import Countdown from "react-countdown";
import DiscountSticker from "../../assets/images/DiscountSticker.svg";
import PositiveYogaLogo from "../../assets/images/PositiveYogaLogo.svg";
import { Box } from "../wrappers/Box";
import { TextBase } from "../../components/texts/TextBase";

const Header: React.FC = () => {
  return (
    <div>
      <Box
        display="flex"
        backgroundColor="#90CAF9"
        height="56px"
        justifyContent="center"
        alignItems="center"
      >
        <img src={DiscountSticker} alt="Discount" />
        <TextBase
          fontWeight={400}
          fontSize="15px"
          margin="0 0 0 15px"
          color="white"
        >
          50% discount only valid for{" "}
          <Countdown daysInHours={true} date={Date.now() + 1051000} />
        </TextBase>
      </Box>
      <Box
        height="56px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="0px 1px 0px rgba(0, 0, 0, 0.08)"
      >
        <img src={PositiveYogaLogo} alt="Logo" />
      </Box>
    </div>
  );
};

export default Header;

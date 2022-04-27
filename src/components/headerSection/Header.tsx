import React from "react";
import Countdown from "react-countdown";
import DiscountSticker from "assets/images/DiscountSticker.svg";
import PositiveYogaLogo from "assets/images/PositiveYogaLogo.svg";
import { Box } from "../wrappers/Box";
import { TextBase } from "components/texts/TextBase";
import { theme } from "styles/theme";

interface Props {
  discount?: number;
}

const Header: React.FC<Props> = ({ discount }) => (
  <Box>
    <Box
      display="flex"
      backgroundColor={theme.colors.secondary}
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
        {discount}% discount only valid for
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
  </Box>
);

export default Header;

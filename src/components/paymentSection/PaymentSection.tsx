import React from "react";
import PaymentStaff from "assets/images/Payment.svg";
import { TextBase } from "components/texts/TextBase";
import { Box } from "components/wrappers/Box";
import { SpanBase } from "components/texts/SpanBase";

const PaymentSection: React.FC = () => (
  <Box margin="0 0 2rem 0">
    <TextBase fontSize="0.85rem" textAlign="center" margin="1rem 0 1rem 0">
      After 7 days free trial subscription payment is automatically charged from
      your account unless it is canceled at least 24 hours before the end of the
      trial period.
    </TextBase>
    <TextBase margin="0 0 1rem 0" fontSize="0.85rem" textAlign="center">
      By choosing a payment method you agree to the
      <SpanBase color="secondary">T&Cs</SpanBase> and
      <SpanBase color="secondary">Privacy Policy</SpanBase>
    </TextBase>
    <TextBase margin="0">
      <img src={PaymentStaff} alt="Payment" />
    </TextBase>
  </Box>
);

export default PaymentSection;

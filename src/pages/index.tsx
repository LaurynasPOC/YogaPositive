import * as React from "react";
import Header from "../components/headerSection/Header";
import "../styles/global.css";
import { importantData } from "../data";
import { SpanBase, TextBase, Box, SectionWrapper } from "../components";

import MonthPlansSection from "../components/monthPlans/MonthPlansSection";
import HeadlineH1 from "../components/headline/HeadlineH1";
import HeadllineH3 from "../components/headline/HeadllineH3";
import Btn from "../components/button/Btn";
import PaymentSection from "../components/paymentSection/PaymentSection";
import YogaProgramSection from "../components/yogaProgramSection/YogaProgramSection";
import CardMobile from "../components/cards/CardsMobile";

import IsYoga4USection from "../components/isYogaForYou/IsYoga4USection";
import PhoneSection from "../components/phonesSection/phoneSection";
import QuestionsSection from "../components/questionsSection/QuestionsSection";
import HeadlineH2 from "../components/headline/HeadlineH2";

const IndexPage: React.FC = () => {
  console.log(importantData);
  return (
    <div>
      <Header />
      <SectionWrapper>
        <TextBase margin="0" color="grey" display="flex">
          Over{" "}
          <SpanBase fontWeight={800} margin="0 6px 0 6px">
            {importantData.plans}
          </SpanBase>{" "}
          plans ordered.
        </TextBase>
        <HeadlineH1 text="Get access to your yoga program now!" />
        <HeadllineH3
          textBlack="Choose your plan and get"
          textOrange="7 days free trial"
        />
        <Box margin="1rem 0 0 0">
          <MonthPlansSection />
        </Box>

        <Btn text="Get your plan" />
        <PaymentSection />
        <HeadllineH3 textBlack="What's my program?" />
        <YogaProgramSection />
        <HeadllineH3 textBlack="Hear success stories from our clients" />
        <CardMobile />
        <Box margin="3rem 0 3rem 0">
          <Btn text="Get my plan" />
        </Box>
        <Box margin="0 0 1rem 0">
          <HeadllineH3 textBlack="Is Positive Yoga right for me?" />
        </Box>
        <IsYoga4USection />
        <Box>
          <HeadllineH3 textBlack="Start your Yoga journey now!" />
        </Box>
        <PhoneSection />
        <Box margin="0 0 2rem 0">
          <HeadllineH3 textBlack="Frequently Asked Questions" />
        </Box>
        <Box margin="0 0 3rem 0">
          <QuestionsSection />
        </Box>
        <Btn text="Get my plan" />
        <Box margin="2rem 0">
          <HeadlineH2 text="Start your yoga program today!" />
        </Box>
        <HeadllineH3
          textBlack="Choose your plan and get"
          textOrange="7 days free trial"
        />
        <Box margin="1.5rem 0">
          <MonthPlansSection />
        </Box>
        <Btn text="Get your plan" />
        <PaymentSection />
        <Box margin="2rem 0">
          <HeadllineH3 textBlack="What's' my program?" />
        </Box>

        <YogaProgramSection />
      </SectionWrapper>
    </div>
  );
};

export default IndexPage;

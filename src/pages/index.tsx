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
      <Header discount={50} />
      <SectionWrapper>
        <TextBase margin="0" color="grey" display="flex">
          Over
          <SpanBase fontWeight={800} margin="0 6px 0 6px">
            {importantData.plans}
          </SpanBase>
          plans ordered.
        </TextBase>
        <HeadlineH1 text="Get access to your yoga program now!" />
        <HeadllineH3
          textBlack="Choose your plan and get"
          textOrange="7 days free trial"
        />
        <MonthPlansSection />
        <Btn text="Get your plan" />
        <PaymentSection />
        <HeadllineH3 textBlack="What's my program?" />
        <YogaProgramSection />
        <HeadllineH3 textBlack="Hear success stories from our clients" />
        <CardMobile />
        <Btn text="Get my plan" />
        <HeadllineH3 textBlack="Is Positive Yoga right for me?" />
        <IsYoga4USection />
        <HeadllineH3 textBlack="Start your Yoga journey now!" />
        <PhoneSection />
        <HeadllineH3 textBlack="Frequently Asked Questions" />
        <QuestionsSection />
        <Btn text="Get my plan" />
        <HeadlineH2 text="Start your yoga program today!" />
        <HeadllineH3
          textBlack="Choose your plan and get"
          textOrange="7 days free trial"
        />
        <MonthPlansSection />
        <Btn text="Get your plan" />
        <PaymentSection />
        <HeadllineH3 textBlack="What's' my program?" />
        <YogaProgramSection />
      </SectionWrapper>
    </div>
  );
};

export default IndexPage;

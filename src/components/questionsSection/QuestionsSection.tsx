import React from "react";
import QuestionsPart from "./QuestionsPart";
import { questionsData } from "../../data";
import { Box } from "../../components/wrappers/Box";

const QuestionsSection: React.FC = () => (
  <Box margin="1rem 0 2rem 0">
    {questionsData.map(({ headline, text }, i) => (
      <QuestionsPart key={i} headline={headline} text={text} />
    ))}
  </Box>
);

export default QuestionsSection;

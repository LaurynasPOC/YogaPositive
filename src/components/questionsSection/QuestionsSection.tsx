import React from "react";
import QuestionsPart from "./QuestionsPart";
import { questionsData } from "../../data";
import { Box } from "../../components/wrappers/Box";

const QuestionsSection: React.FC = () => {
  return (
    <Box margin="0">
      {questionsData.map((ques, i) => {
        return (
          <QuestionsPart key={i} headline={ques.headline} text={ques.text} />
        );
      })}
    </Box>
  );
};

export default QuestionsSection;

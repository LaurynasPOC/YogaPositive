import React from "react";
import QuestionsPart from "./QuestionsPart";
import { questionsData } from "../../data";
import { TextBase } from "../../components/texts/TextBase";

const QuestionsSection: React.FC = () => {
  return (
    <TextBase margin="0">
      {questionsData.map((ques, i) => {
        return (
          <QuestionsPart key={i} headline={ques.headline} text={ques.text} />
        );
      })}
    </TextBase>
  );
};

export default QuestionsSection;

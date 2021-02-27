import React, {useState} from "react";
import {getRandomQuestionsTheme} from "../../pages/blitz/blitz-round/utilities";
import {Maybe, QuestionTag} from "../../types";

type Props = {
  currentRound: number;
  excludeCategory?: QuestionTag[];
}

export const useGetRandomCategory = (props: Props): Maybe<QuestionTag> => {
  const [theme, setTheme] = useState(null);

  React.useEffect(() => {
    const newTheme = getRandomQuestionsTheme(Object.keys(QuestionTag), props?.excludeCategory || []);
    setTheme(newTheme);
  }, [props.currentRound]);

  return theme;
}

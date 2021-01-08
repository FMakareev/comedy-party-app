import React, {useState} from "react";
import {getRandomQuestionsTheme} from "../pages/blitz/blitz-round/utilities";
import {QuestionTag} from "../types";

type Props = {
  excludeCategory?: QuestionTag[];
}

export const useGetRandomCategory = (props: Props) => {
  const [theme, setTheme] = useState(null);

  React.useEffect(() => {
    const newTheme = getRandomQuestionsTheme(Object.keys(QuestionTag), props?.excludeCategory || []);
    setTheme(newTheme);
  }, []);

  return theme;
}

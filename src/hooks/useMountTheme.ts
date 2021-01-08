import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {flow} from "lodash";
import {ApiStateEnum, Maybe, Question, QuestionTag} from "../types";
import {questionsStateSelectors} from "../store/questions/selectors";
import {GameConfig, GameStateActions} from "../store/game-state/reducer";
import {gameStateSelectors} from "../store/game-state/selectors";
import {fetchQuestionListAction} from "../store/questions/actions";
import {filterQuestionsByTheme, questionsSlice} from "../pages/blitz/blitz-round/utilities";
import {randomSort} from "../utilities";
import {isNil} from "ramda";

export const useMountTheme = (tag: Maybe<QuestionTag>) => {
  const dispatch = useDispatch();
  const apiState: ApiStateEnum = useSelector(questionsStateSelectors.getApiState);
  const gameConfig: GameConfig = useSelector(gameStateSelectors.getGameConfig);
  const questions: Maybe<Question[]> = useSelector(questionsStateSelectors.getQuestions);

  React.useEffect(() => {
    dispatch(fetchQuestionListAction());
  }, []);
  React.useEffect(() => {
    if (apiState === ApiStateEnum.FULFILLED && !isNil(tag)) {
      /** Установил новую тему раунда */
      dispatch(GameStateActions.changeTheme(tag));
      /** Установил вопросы согласно теме раунда */
      flow(
        filterQuestionsByTheme(tag),
        questionsSlice(0, gameConfig.questionCountInRound),
        (list) => dispatch(GameStateActions.addGameQuestions(list)),
      )([...questions].sort(randomSort))
    }
  }, [apiState, tag]);
}

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {flow, isNil} from "lodash";
import {ApiStateEnum, Maybe, Question, QuestionTag} from "../../types";
import {GameConfig, GameStateActions} from "../../store/game-state/reducer";
import {filterQuestionsByTheme, questionsSlice} from "../../pages/blitz/blitz-round/utilities";
import {randomSort} from "../../utilities";
import {fetchQuestionListAction} from "../../store/questions/actions";
import {questionsStateSelectors} from "../../store/questions/selectors";
import {gameStateSelectors} from "../../store/game-state/selectors";

type Props = {
  theme: Maybe<QuestionTag>;
}

export const useMountThemeAndQuestions = ({
                                theme,
                              }: Props) => {
  const dispatch = useDispatch();
  const currentRound = useSelector(gameStateSelectors.getCurrentRound);

  const apiState: ApiStateEnum = useSelector(questionsStateSelectors.getApiState);
  const gameConfig: GameConfig = useSelector(gameStateSelectors.getGameConfig);
  const questions: Maybe<Question[]> = useSelector(questionsStateSelectors.getQuestions);

  React.useEffect(() => {
    dispatch(fetchQuestionListAction());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(GameStateActions.resetCurrentQuestion());
  }, [currentRound]);

  React.useEffect(() => {
    if (apiState === ApiStateEnum.FULFILLED && !isNil(theme)) {
      /** Установил новую тему раунда */
      dispatch(GameStateActions.changeTheme(theme));
      /** Установил вопросы согласно теме раунда */
      flow(
        filterQuestionsByTheme(theme),
        questionsSlice(0, gameConfig.questionCountInRound),
        GameStateActions.addGameQuestions,
        dispatch,
      )([...(questions || [])].sort(randomSort))
    }
  }, [apiState, theme]);
}

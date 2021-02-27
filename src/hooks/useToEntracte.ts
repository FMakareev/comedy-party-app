import {useSelector} from "react-redux";
import {gameStateSelectors} from "../store/game-state/selectors";
import {useHistory} from "react-router";
import {Question} from "../types";
import {GameConfig} from "../store/game-state/reducer";
import {useCallback} from "react";

type Props = {
  endLink: string;
  entracteLink: string;
}

export const useToEntracte = ({endLink, entracteLink}: Props) => {
  const currentQuestionIndex: number = useSelector(gameStateSelectors.getCurrentQuestionIndex);
  const gameQuestions: Question[] = useSelector(gameStateSelectors.getGameQuestions);
  const currentRound: number = useSelector(gameStateSelectors.getCurrentRound);
  const gameConfig: GameConfig = useSelector(gameStateSelectors.getGameConfig);

  const {push} = useHistory();

  return useCallback(() => {
    if (currentQuestionIndex === gameQuestions.length - 1 && currentRound + 1 === gameConfig.roundsCount) {
      push(endLink)
      return;
    }
    if (currentQuestionIndex === gameQuestions.length - 1) {
      push(entracteLink);
    }
  }, [push, currentQuestionIndex, gameQuestions.length, currentRound, gameConfig.roundsCount, endLink, entracteLink]);
}

import React, {useEffect, useState} from 'react';
import {IonFooter, IonGrid, IonRow} from "@ionic/react";
import {useDispatch, useSelector} from "react-redux";
import {gameStateSelectors} from "../../../../../store/game-state/selectors";
import {GameStateActions} from "../../../../../store/game-state/reducer";
import {Player, Maybe} from "../../../../../types";
import {ScoreTableStateActions} from '../../../../../store/scoreTable/reducer';
import { useToEntracte } from '../../../../../hooks/useToEntracte';
import {NextQuestionButton} from "../../../../../components/NextQuestionButton/NextQuestionButton";
import { ScoreCounterButtons } from '../ScoreCounterButtons/ScoreCounterButtons';
import { CleverestButton } from '../../../../../components/CleverestButton/CleverestButton';

export const GameBoardFooter = () => {
  const [score, setScore] = useState<number>(0);

  const dispatch = useDispatch();

  const currentQuestionIndex: number = useSelector(gameStateSelectors.getCurrentQuestionIndex);
  const isShowAnswer: boolean = useSelector(gameStateSelectors.getIsShowAnswer);
  const playerAttempts: number = useSelector(gameStateSelectors.getPlayerAttempts);
  const gameId: Maybe<string> = useSelector(gameStateSelectors.getGameId);
  const currentPlayer: Maybe<Player> = useSelector(gameStateSelectors.getGameCurrentPlayer);

  useEffect(() => {
    setScore(0)
  }, [currentQuestionIndex])


  const showAnswer = (isShow: boolean) => (): any => dispatch(GameStateActions.changeShowAnswer(isShow));

  const toEntracte = useToEntracte({
    endLink: '/game/blitz/end',
    entracteLink: '/game/blitz/entracte'
  });

  const saveScore = (score: number) => currentPlayer && dispatch(ScoreTableStateActions.setGameScore({
    gameId,
    player: currentPlayer,
    score: score,
  }))

  const isNextPlayer = (): boolean => playerAttempts <= 1 || score <= 0;

  const next = (): any => {
    showAnswer(false)();
    saveScore(score)
    dispatch(GameStateActions.nextQuestion());
    if (isNextPlayer()) {
      dispatch(GameStateActions.resetAttempts());
      dispatch(GameStateActions.nextPlayer());
    } else {
      dispatch(GameStateActions.nextAttempts());
    }

    toEntracte();
  }

  const decScore = () => {
    setScore(score - 1);
  };
  const incScore = () => {
    setScore(score + 1);
  };

  return (<IonFooter mode={'ios'}>
    <IonGrid>
      <IonRow className={'ion-justify-content-between ion-align-items-center ion-padding'}>
        <CleverestButton/>

        <ScoreCounterButtons
          isShowAnswer={isShowAnswer}
          incScore={incScore}
          decScore={decScore}
          score={score}
        />

        <NextQuestionButton
          isShowAnswer={isShowAnswer}
          showAnswer={showAnswer}
          next={next}
        />
      </IonRow>
    </IonGrid>
  </IonFooter>)
};

import React, {useEffect, useState} from 'react';
import {IonFabButton, IonFooter, IonGrid, IonImg, IonRow} from "@ionic/react";
import icon from "../../../../../assets/icons/1F60B.svg";
import cn from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {gameStateSelectors} from "../../../../../store/game-state/selectors";
import {GameStateActions} from "../../../../../store/game-state/reducer";
import {Question, Player, Maybe} from "../../../../../types";
import {useHistory} from "react-router";
import {ScoreTableStateActions} from '../../../../../store/scoreTable/reducer';
import {CleverestPopover} from "../CleverestPopover";
import {isNil} from 'lodash';
import { useToEntracte } from '../../../../../hooks/useToEntracte';

export const GameBoardFooter = () => {
  const [popoverState, setShowPopover] = useState({showPopover: false, event: undefined});

  const [score, setScore] = useState<number>(0);

  const dispatch = useDispatch();

  const currentQuestion: Question = useSelector(gameStateSelectors.getCurrentQuestion);
  const currentQuestionIndex: number = useSelector(gameStateSelectors.getCurrentQuestionIndex);
  const isShowAnswer: boolean = useSelector(gameStateSelectors.getIsShowAnswer);
  const playerAttempts: number = useSelector(gameStateSelectors.getPlayerAttempts);
  const gameId: Maybe<string> = useSelector(gameStateSelectors.getGameId);
  const currentPlayer: Maybe<Player> = useSelector(gameStateSelectors.getGameCurrentPlayer);

  useEffect(() => {
    setScore(0)
  }, [currentQuestionIndex])


  const showAnswer = (isShow: boolean) => () => dispatch(GameStateActions.changeShowAnswer(isShow));

  const toEntracte = useToEntracte({
    endLink: '/game/blitz/end',
    entracteLink: '/game/blitz/entracte'
  });

  const saveScore = (score: number) => currentPlayer && dispatch(ScoreTableStateActions.setGameScore({
    gameId,
    player: currentPlayer,
    score: score,
  }))

  const isNextPlayer = (): boolean => {
    if (playerAttempts <= 1 || score <= 0) {
      return true;
    }
    return false;
  }

  const next = () => {
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
  const isShowCleverest = () => !isNil(currentQuestion?.cleverest)

  return (<IonFooter mode={'ios'}>
    <IonGrid>
      <IonRow className={'ion-justify-content-between ion-align-items-center ion-padding'}>
        <CleverestPopover
          event={popoverState.event}
          isOpen={popoverState.showPopover}
          onDidDismiss={() => setShowPopover({showPopover: false, event: undefined})}
          content={currentQuestion?.cleverest}
        />

        <IonFabButton
          className={'ion-no-margin'}
          disabled={!isShowCleverest()}
          size={'small'}
          onClick={
            (e: any) => {
              e.persist();
              setShowPopover({showPopover: true, event: e})
            }}
        >
          ум
        </IonFabButton>
        <IonFabButton
          disabled={!isShowAnswer}
          onClick={decScore}
          className={cn({
            'is-visibility-hidden': !isShowAnswer
          })}
        >
          -
        </IonFabButton>
        <IonFabButton
          disabled={!isShowAnswer}
          onClick={incScore}
          className={cn({
            'is-visibility-hidden': !isShowAnswer
          })}
        >
          +
        </IonFabButton>
        {
          !isShowAnswer &&
					<IonFabButton
						className={'ion-no-margin'}
            onClick={showAnswer(true)}
            size={'small'}
          >
						<IonImg style={{width: '32px'}} src={icon}/>
					</IonFabButton>
        }
        {
          isShowAnswer &&
					<IonFabButton
						className={'ion-no-margin'}
            onClick={next}
            size={'small'}
          >
						<IonImg style={{width: '32px'}} src={icon}/>
					</IonFabButton>
        }
      </IonRow>
    </IonGrid>
  </IonFooter>)
};

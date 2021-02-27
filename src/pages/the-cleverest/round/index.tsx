import React, {useEffect, useState} from 'react';
import {Header} from '../../../components/Header';
import {EndGameAlert} from "../../../components/EndGameAlert/EndGameAlert";
import {useHistory, useParams} from "react-router";
import {IonCol, IonContent, IonGrid, IonRow} from "@ionic/react";
import {Maybe, Player, Question} from "../../../types";
import {useDispatch, useSelector} from "react-redux";
import {gameStateSelectors} from "../../../store/game-state/selectors";
import {QuestionCard} from "../../../components/QuestionCard/QuestionCard";
import {PlayerListAddScore} from '../../../components/PlayerListAddScore/PlayerListAddScore';
import {useMountThemeAndQuestions} from '../../../hooks/useMountThemeAndQuestions/useMountThemeAndQuestions';
import {BigRoundCounter} from "../../../components/BigRoundCounter/BigRoundCounter";
import {CleverestFooter} from '../../../components/CleverestFooter';
import { useSelected } from '../../../hooks/useSelected';
import {ScoreTableStateActions} from "../../../store/scoreTable/reducer";


export const RoundPage = () => {
  const {push} = useHistory();
  const {tag} = useParams();
  const [IsOpenAlert, setIsOpenAlert] = useState(false);

  const currentQuestion: Maybe<Question> = useSelector(gameStateSelectors.getCurrentQuestion);
  const isShowAnswer: boolean = useSelector(gameStateSelectors.getIsShowAnswer);
  const getCurrentQuestionIndex: number = useSelector(gameStateSelectors.getCurrentQuestionIndex);
  const gameId: Maybe<string> = useSelector(gameStateSelectors.getGameId);
  const players = useSelector(gameStateSelectors.getGamePlayers);

  const dispatch = useDispatch();

  const { selected, onSelect, onReset } = useSelected<Player>({isMultipleSelect: true});

  useMountThemeAndQuestions({theme:tag});

  useEffect(() => {
    if (Array.isArray(selected)) {
      selected.forEach((player) => {
        dispatch(ScoreTableStateActions.setGameScore({
          gameId,
          player: player,
          score: 1,
        }))
      })
    }
    onReset();
  },[getCurrentQuestionIndex])

  return (
    <>
      <EndGameAlert
        isOpen={IsOpenAlert}
        onDidDismiss={() => setIsOpenAlert(false)}
        onOk={() => push('/')}
      />
      <Header
        onClickBack={() => setIsOpenAlert(true)}
        title={<BigRoundCounter count={getCurrentQuestionIndex + 1}/>}
      />
      <IonContent className="ion-content">
        <IonGrid>
          <IonRow>
            <IonCol className={'ion-padding'} size={'12'}>
              <QuestionCard isShowAnswer={isShowAnswer} {...currentQuestion}/>
            </IonCol>
          </IonRow>
        </IonGrid>

        <PlayerListAddScore
          gameId={gameId}
          players={players}

          selected={selected as Maybe<Player[]>}
          onSelect={onSelect}
        />

      </IonContent>
      <CleverestFooter/>
    </>
  );
};

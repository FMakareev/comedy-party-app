import React from 'react';
import {IonFooter, IonGrid, IonRow} from "@ionic/react";

import {useDispatch, useSelector} from "react-redux";
import {gameStateSelectors} from "../../store/game-state/selectors";
import {GameStateActions} from "../../store/game-state/reducer";
import {useToEntracte} from "../../hooks/useToEntracte";
import { CleverestButton } from '../CleverestButton/CleverestButton';
import {NextQuestionButton} from "../NextQuestionButton/NextQuestionButton";

export const CleverestFooter = () => {

  const dispatch = useDispatch();

  const isShowAnswer: boolean = useSelector(gameStateSelectors.getIsShowAnswer);
  const showAnswer = (isShow: boolean) => (): any => dispatch(GameStateActions.changeShowAnswer(isShow));

  const toEntracte = useToEntracte({
    endLink: '/game/cleverest/end',
    entracteLink: '/game/cleverest/entracte'
  });

  const next = (): any => {
    showAnswer(false)();
    dispatch(GameStateActions.nextQuestion());

    toEntracte();
  }

  return (
    <IonFooter mode={'ios'}>
      <IonGrid>
        <IonRow className={'ion-justify-content-between ion-align-items-center ion-padding'}>

          <CleverestButton/>

          <NextQuestionButton
            isShowAnswer={isShowAnswer}
            showAnswer={showAnswer}
            next={next}
          />
        </IonRow>
      </IonGrid>
    </IonFooter>
  );
};
